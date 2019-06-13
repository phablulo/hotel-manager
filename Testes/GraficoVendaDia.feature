Feature: As a receptionist
         I want a graphical representation of sales per day
         So that I can manage the sales better

Scenario: Generate sales per day graphic
Given I am at the "Index" page
When I try to go to the "graficos" page
Then I can see sales per day graphic

Scenario: Add a new value to sales per day
Given I am at the "graficos" page
And I can't see value of sales "10" with day "01/01/2019"
When I add a value of sales "10" w ith day "01/01/2019"
Then I can see value of sales "10" with day "01/01/2019"

Scenario: remove a value to sales per day
Given I am at the "graficos" page
And I can see value of sales "10" with day "01/01/2019"
When I remove a value of sales "10" with day "01/01/2019"
Then I can't see value of sales "10" with day "01/01/2019"

