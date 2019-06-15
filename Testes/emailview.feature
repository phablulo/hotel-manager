Feature: As a receptionist
         I want see the last sended emails

Scenario: Visualizing email and list of recipients
Given I am at the Email list page
And I have sended a email with "test subject" as subject 
Then I can see in the list a email with "test subject" as subject 