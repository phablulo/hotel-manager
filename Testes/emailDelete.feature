Feature: As a receptionist
         I want delete the register of a sended emails

Scenario: Deleting email and list of recipients
Given I am at the Email list page
And I can see in the list a email with "test subject" as subject 
when I try to delete the email with "test subject" as subject 
then I can't see in the list a email with "test subject" as subject