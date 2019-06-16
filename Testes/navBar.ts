import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));


let pAND = ((p,q) => p.then(a => q.then(b => a && b)))

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "Home" page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
    })


    When(/^I click on the "e-Mail" button on the navigation bar$/, async (page) => {
        
        await browser.get("http://localhost:4200/email");
    });

    Then(/^A message shows up "([^\"]*)"$/, async (name) => {
        let x = browser.switchTo().alert();
        await expect(x.getText()).to.eventually.equal(name);
    });

})