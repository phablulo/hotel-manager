import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
let sended = ((subject) => elem.element(by.name('subjectlist')).getText().then(text => text === subject));

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the Email page$/, async () => {
        await browser.get("http://localhost:4200/email");
        await expect(browser.getTitle()).to.eventually.equal('Email - Hotel Manager');
    })


    When(/^I try to send the email with "([^\"]*)" as subject and "([^\"]*)" as body$/, async (subject, body) => {
        await $("input[name='subjectbox']").sendKeys(<string> subject);
        await $("textarea[name='bodybox']").sendKeys(<string> body);
        await element(by.buttonText('Enviar')).click();
    });


    Then(/^I can't see the "([^\"]*)" in the sended list$/, async (subject) => {
      var allsended : ElementArrayFinder = element.all(by.name('sendedlist'));
        allsended.filter(elem => sended(subject)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
    });
})