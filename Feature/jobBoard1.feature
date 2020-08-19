@jobBoardActivity
Feature: Job Board Activity

  @scen1
  Scenario: Create a new user from backend
    Given User is on the Login page
    When User enter "root" and "pa$$w0rd"
    Then User click the menu item that says 'Users' on DashBoard
    And Click on 'Add New' button
    And Fill all the necessary details and click the 'Add New User' button   
    And Verify that the user was created
    And Close the Browser

  @scen2
	Scenario: Searching for a Job
		Given User is on the Jobs page
		When User Find the Keywords search input field and serach for 'D_testing'
		Then Find the Job Details from the List
		And Read the Title of the JoB Details page and print it
		And apply for Job
		And Close the Job Browser
	
	@scen3
	Scenario: Posting Job with Parameterization
		Given User is on the page
		When User click on 'Post a Job'
		Then Enter email as "E_testing4@gmail.com", position as "E_testing" and Location as "Bangalore" and description as "testing"
		And application email as "din_t@gmail.com", Company name as "DIN1" and Website as "din.com"
		And Click on Submit
		And Find the Job on Jobs page
		And Close the Job Post Browser
	
	@scen4
	Scenario Outline: Posting Job with Example table
		Given User is on the page
		When User click on 'Post a Job'
		Then Enter email as "<Email>", position as "<Position>" and Location as "<Location>" and description as "<Description>"
		And application email as "<AppEmail>", Company name as "<Company>" and Website as "<Website>"
		And Click on Submit
		And Find the Job on Jobs page
		And Close the Job Post Browser
		
		
		Examples: 
		
      | Email		               | Position  | Location | Description | AppEmail       | Company | Website |
      | E_testing3@gmail.com   | E_testing | Bangalore| testing     | din_t@gmail.com| DIN2    | din.com |
      
      
		