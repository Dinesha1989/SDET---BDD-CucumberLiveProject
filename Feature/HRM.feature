@HRMActivity
Feature: OrangeHRM Activities
  
	@hrmscen1
  Scenario: Creating a job vacancy
    Given User is on the HRM page
    When User Navigate to the 'Recruitment' page
    Then Click on the 'Vacancies' menu item and click on Add button
    And Enter all the required details and save it
    And Verify JoB vacancy is created
    And Close the HRM Browser

	@hrmscen2
	Scenario: Adding a candidate for recruitment
		Given User is on the HRM jobs page
		When User Navigate to the Recruitment page and click on the Add button
		Then Enter all required information
		And Upload Resume to the form and save it
		And Verify Candidate is added
		And Close the HRM Job Browser
  
  @hrmscen3
  Scenario Outline: Add Multiple Employees
  	Given User is on the HRM Login page
  	When User Click on PIM option in Menu
  	Then Click on Add Employee Button
  	And Fill all the necessary Details like "<FirstName>" and "<LastName>"
  	And Check CreateLoginDetails checkbox and Enter "<UserName>" and "<Password>" and save it
  	And Verify Employee is created by using "<FirstName>" and "<LastName>"
  	And Close the Employee Broswer
  	   	
  Examples: 
		
      | FirstName		| LastName  | UserName | Password     | 
      | Sangam       | Kumar     | Ramkk8   | Ramkk1126    | 
      | Vipin			   | Kumar			 | Mohana8	 | Mohana126    |

    @hrmscen4
    Scenario Outline: Adding Multiple vacancies
      Given User is on the HRM page
   		When User Navigate to the 'Recruitment' page
    	Then Click on the 'Vacancies' menu item and click on Add button
    	And Enter Vacancy as "<VacancyName>" and manager as "<HiringManager>"
    	And Verify JoB vacancy "<VacancyName>" is created
    	And Close the HRM Browser
    	
    Examples: 
		
     | VacancyName		| HiringManager  | 
     | D_Auto_Test31  | Deb Kumar      |  
     | D_Auto_Test32	| Deb Kumar 	   |			
    	