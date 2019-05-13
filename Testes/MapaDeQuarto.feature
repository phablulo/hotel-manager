Feature: As a receptionist
         I want a graphical representation of the rooms
         So that I can manage the rooms better

Scenario: Generate Daily Map
Given I am at the "Index" page
When I try to go to the "Mapa de Quarto" page
Then I can see room "200" in the "vacant" state
And I can see room "201" in the "occupied" state
And I can see room "203" in the "cleaning" state
And I can see the date is "12/05/2019"

Scenario: Generate Room Map By Date
Given I am at the "Mapa de Quarto" page
Then I can see room "200" in the "vacant" state
And I can see room "201" in the "occupied" state
And I can see room "203" in the "cleaning" state
And I can see the date is "12/05/2019"

Scenario: Export Daily Room Map
Given I am at the "Mapa de Quarto" page
And no date is selected
When I select the "Export" option
Then I can see a file "DailyRoomMap" downloading
