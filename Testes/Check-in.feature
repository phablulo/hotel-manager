Feature: As a receptionist
         I want to have a graphical interface that helps me to do the check-in
         So that I can do the check-in for the hotel guest

Scenario: Trying to make the check-in for a guest that has no register
    Given I am at the check-in page
    When I put the guest's name "Paulo"
    When I put his CPF "684"
    When I can see the "Escolha um quarto" field
    When I select the room number "200"
    When I can see the rest of the form
    When I fill the formulary with the guest information
    When I choose the date "10/02/2018" to the "Entrada" field
    When I choose the date "12/02/2018" to the "Saida" field
    When I confirm
    Then A message shows up "Hospede registrado"
    Then A message shows up "Check-in feito"

Scenario: Trying to make the check-in for a registered guest without updating his information
    Given I am at the check-in page
    Given I have already registered a guest named "Paulo" with cpf "674"
    When I put the guest's name "Paulo"
    When I put his CPF "674"
    When I can see the "Escolha um quarto" field
    When I select the room number "206"
    When I can see the rest of the form
    When I choose the date "10/02/2018" to the "Entrada" field
    When I choose the date "12/02/2018" to the "Saida" field
    When I confirm
    Then A message shows up "Check-in feito"

Scenario: Trying to make the check-in for a registered guest while updating his information
    Given I am at the check-in page
    Given I have already registered a guest named "Paulo" with cpf "675"
    When I put the guest's name "Paulo"
    When I put his CPF "675"
    When I can see the "Escolha um quarto" field
    When I select the room number "218"
    When I can see the rest of the form
    When I change the information about the Guest
    When I choose the date "10/02/2018" to the "Entrada" field
    When I choose the date "12/02/2018" to the "Saida" field
    When I confirm
    Then A message shows up "Atualização feita"
    Then A message shows up "Check-in feito"


Scenario: Trying to make the check-in for a guest that has no register using the "Empresa" field
    Given I am at the check-in page
    When I put the guest's name "José"
    When I put his CPF "685"
    When I can see the "Escolha um quarto" field
    When I select the room number "300"
    When I can see the rest of the form
    When I fill the formulary with the guest information
    When I select the "Empresa" field
    When I fill the formulary with the guest's company information
    When I choose the date "10/02/2018" to the "Entrada" field
    When I choose the date "12/02/2018" to the "Saida" field
    When I confirm
    Then A message shows up "Hospede registrado"
    Then A message shows up "Check-in feito"


Scenario: Trying to make the check-in for a registered guest using the "Empresa" field
    Given I am at the check-in page
    Given I have already registered a guest named "Lucas" with cpf "686"
    Given I have already registered his company
    When I put the guest's name "Lucas"
    When I put his CPF "686"
    When I can see the "Escolha um quarto" field
    When I select the room number "302"
    When I can see the rest of the form
    When I select the "Empresa" field
    When I change the information about the Guest's company
    When I choose the date "10/02/2018" to the "Entrada" field
    When I choose the date "12/02/2018" to the "Saida" field
    When I confirm
    Then A message shows up "Atualização feita"
    Then A message shows up "Check-in feito"