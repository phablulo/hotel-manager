Feature: As a receptionist
         I want to send a custom email to clients  
         So that I inform about promotions to a determinated perfil

Scenario: Sending a complete email
Given I am at the Email page
When I try to send the email with "test subject" as subject and “teste body” as body
Then I can see "test subject" in the sended list

Scenario: Sending email with empty field
Given I am at the Email page
When I try to send the email with "test subject" as subject and “” as body
Then I can’t see "test subject" in the sended list

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