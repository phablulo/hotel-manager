import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
let sended = ((subject) => elem.element(by.name('subjectlist')).getText().then(text => text === subject));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the Email list page$/, async () => {
        await browser.get("http://localhost:4200/emaillist");
        await expect(browser.getTitle()).to.eventually.equal('Email - Hotel Manager');
    })

    Given(/^I can see in the list a email with "([^\"]*)" as subject$/, async (subject) => {
      var allsended : ElementArrayFinder = element.all(by.name('sendedlist'));
        allsended.filter(elem => sended(subject)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When(/^I try to delete the email with "([^\"]*)" as subject$/, async (subject) => {
        await element(by.buttonText('Deletar '+subject)).click();
    });

    Then(/^I can't see in the list a email with "([^\"]*)" as subject$/, async (subject) => {
      var allsended : ElementArrayFinder = element.all(by.name('sendedlist'));
        allsended.filter(elem => sended(subject)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });
    
})
