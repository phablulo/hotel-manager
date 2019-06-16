import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the check-in page$/, async () => {
        await browser.get("http://localhost:4200/checkin");
        await expect(browser.getTitle()).to.eventually.equal('checkin');
    })

    Given(/^I have already registered a guest named "([^\"]*)" with cpf "(\d*)"$/, async (name, cpf) => {
        await $("input[name='namebox']").sendKeys(<string> name);
        await $("input[name='cpfbox']").sendKeys(<string> cpf);
        await element(by.buttonText('Próximo')).click();
        await $("input[name='quartobox']").sendKeys(<string> "201");
        await $("input[name='emailbox']").sendKeys(<string> "guest@");
        await $("input[name='telefonebox']").sendKeys(<string> "123");
        await $("input[name='Entradabox']").sendKeys(<string> "10/10/2018");
        await $("input[name='Saidabox']").sendKeys(<string> "11/10/2018");
        await element(by.buttonText('Confirmar')).click(); 

        await browser.get("http://localhost:4200/checkin");
        await expect(browser.getTitle()).to.eventually.equal('checkin');
    });

    Given(/^I have already registered his company$/, async () => {
        await $("input[name='EmpresaCheck']").click();
        await $("input[name='EmpNomeFantasiabox']").sendKeys(<string> "Xcompany"); 
        await $("input[name='EmpTelefonebox']").sendKeys(<string> "1234");
    })

    When(/^I put the guest's name "([^\"]*)"$/, async (name) => {
        await $("input[name='namebox']").sendKeys(<string> name);
    });

    When(/^I put his CPF "(\d*)"$/, async (cpf) => {
        await $("input[name='cpfbox']").sendKeys(<string> cpf);
        await element(by.buttonText('Próximo')).click();
    });

    When(/^I can see the "([^\"]*)" field$/, async (Field) => {
        let x = "input[name='" + Field + "']";
        await $(x).isDisplayed();
    });

    When(/^I select the room number "(\d*)"$/, async (room) => {
        await $("input[name='quartobox']").sendKeys(<string> room);
    });

    When(/^I can see the rest of the form$/, async () => {
        await $("input[name='Entradabox']").isDisplayed();
        await $("input[name='Saidabox']").isDisplayed();
    });

    When(/^I fill the formulary with the guest information$/, async () => {
        await $("input[name='emailbox']").sendKeys(<string> "guest@"); //Não irei preencher todos os campos,
        await $("input[name='telefonebox']").sendKeys(<string> "123"); //pois a finalidade disso é ser um teste
    });
    
    When(/^I choose the date "([^\"]*)" to the "([^\"]*)" field$/, async (date, Field) => {
        let x = "input[name='" + Field + "box']";
        await $(x).sendKeys(<string> date);
    });

    When(/^I confirm$/, async () => {
        await element(by.buttonText('Confirmar')).click();
    });

    When(/^I change the information about the Guest$/, async () => {
        await $("input[name='emailbox']").sendKeys(<string> "guest1@"); //Não irei preencher todos os campos,
        await $("input[name='telefonebox']").sendKeys(<string> "1234"); //pois a finalidade disso é ser um teste
    });

    When(/^I select the "Empresa" field$/, async () => {
        await $("input[name='EmpresaCheck']").click();
    });

    When(/^I fill the formulary with the guest's company information$/, async () => {
        await $("input[name='EmpNomeFantasiabox']").sendKeys(<string> "Xcompany"); 
        await $("input[name='EmpTelefonebox']").sendKeys(<string> "1234"); 
    });

    When(/^I change the information about the Guest's company$/, async () => {
        await $("input[name='EmpNomeFantasiabox']").sendKeys(<string> "Ycompany"); 
        await $("input[name='EmpTelefonebox']").sendKeys(<string> "12345"); 
    });

    Then(/^A message shows up "([^\"]*)"$/, async (name) => {
        let x = browser.switchTo().alert();
        await expect(x.getText()).to.eventually.equal(name);
    });

})