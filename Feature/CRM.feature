@CRMActivity
Feature: CRM Activities
  

  @crmscen1
  Scenario: Counting Dashlets
    Given User is on the CRM page
    When user enter "admin" and "pa$$w0rd"
    Then Count the number of Dashlets on the homepage and print the Count and each Dashlettitle
    And Close the CRM Browser

  @crmscen2
  Scenario: Create Leads using parameterization
  	Given User is on the CRM page and enter "admin" and "pa$$w0rd"
  	When Create Lead from sales Menu
  	Then Enter firstName as "Naveen", LastName as "Raj" and acccountName as "CRM" and save it
  	And Verify the Leads "Naveen Raj" from viewLead page
  	And Close the leads Browser
  	
  @crmscen3
  Scenario Outline: Schedule a meeting and invite members
  	Given User is on the CRM login page and enter "admin" and "pa$$w0rd"
  	When Open 'Activities' then 'meeting' and click on schedule meeting
  	Then Enter all the details with sub "Sample meeting Demo3"
  	And Search for the memeber "<FirstName1>"and "<LastName1>" and "<FirstName2>" and "<LastName2>" and "<FirstName3>" and "<LastName3>" add them to meeting and save it
  	And Open the View meeting page and confirm "Sample meeting Demo3" meeting creation
  	And Close the meeting browser
  	
  Examples:
  	
  	| FirstName1  | LastName1 | FirstName2 | LastName2 | FirstName3 | LastName3 |
  	| Krishna    | k          | Dinesha    | Gs        | Ramesh     | Bs        |
  	
  
  @crmscen4
  Scenario Outline: Creating a Product
  	Given User is on the CRM login Page and enter "admin" and "pa$$w0rd"
   	When Open 'All' then 'Products' and click on 'Create Product'
   	Then Enter "<ProductName>" and "<Category>" and "<Price>" and save it
   	And Verify the "<ProductName>" is created
   	And Close the product Browser
   
  Examples:
     
    | ProductName | Category    | Price |
    | Samplep1    | Automobiles | 100   |
  	