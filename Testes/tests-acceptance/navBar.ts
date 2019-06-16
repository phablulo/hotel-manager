import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "Home" page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('Hotel Manager');
    })


    When(/^I select the "e-Mail" option$/, async () => {
        await $("a[id='linkemail']").click()
    });

    Then(/^A message shows up "([^\"]*)"$/, async (name) => {
        await expect(browser.getTitle()).to.eventually.equal('Email - Hotel Manager');
    });

})