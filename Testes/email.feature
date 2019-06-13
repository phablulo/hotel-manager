Feature: As a receptionist
         I want to send a custom email to clients  
         So that I inform about promotions to a determinated perfil

Scenario: Send e-mail without body
Given I am at the "E-mail" page
And I do write a subject to e-mail
And I don't write a body to e-mail
Then I try to send the email
And I can see the mensage "Você não pode enviar um e-mail sem corpo."

Scenario: Send e-mail without subject
Given I am at the "E-mail" page
And I don't write a subject to e-mail
And I do write a body to e-mail
Then I try to send the email
And I can see the mensage "Você não pode enviar um e-mail sem assunto."

Scenario: Send a complete e-mail
Given I am at the "E-mail" page
And I do write a subject to e-mail
And I do write a body to e-mail
Then I try to send the email
And I can see the mensage "E-mail enviado com sucesso."

Scenario: Search for client results
Given I am at the "E-mail" page
And I write something on at least one of the parameters
And I have suitable clients
When I click the "Buscar" button
Then I can see a list of results of clients that follow the 
required parameters and their respective E-mails

Scenario: Search for client results without specifying any search parameter
Given I am at the "E-mail" page
And I don't write any search parameter
When I click the "Buscar" button
Then I can see the message "Por favor, especifique pelo menos um parâmetro de busca"

Scenario: Search for client results using parameters that can't be found on any client
Given I am at the "E-mail" page
And I write something on at least one of the parameters
And I don't have suitable clients
When I click the "Buscar" button
Then I can see the message "Não há clientes que satisfaçam os critérios de busca"