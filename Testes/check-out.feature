Feature: As a receptionist
         I want to have a graphical interface that helps me to do the check-out
         So that I can do the check-out for the hotel guest

Scenario: trying to make the check-out for a Guest
    Given I am at the "check-out" page
    When I search for the for the guest's room
    And I select it
    And I confirm the check-out
    Then a message shows up "check-out done"
