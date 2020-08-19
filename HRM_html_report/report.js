$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HRM.feature");
formatter.feature({
  "line": 2,
  "name": "OrangeHRM Activities",
  "description": "",
  "id": "orangehrm-activities",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Creating a job vacancy",
  "description": "",
  "id": "orangehrm-activities;creating-a-job-vacancy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@hrmscen1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the HRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Navigate to the \u0027Recruitment\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on the \u0027Vacancies\u0027 menu item and click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter all the required details and save it",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify JoB vacancy is created",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close the HRM Browser",
  "keyword": "And "
});
formatter.match({
  "location": "HRMJJobVacancyCreate.HRMLogin()"
});
formatter.result({
  "duration": 14097572600,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.recruitmentPage()"
});
formatter.result({
  "duration": 18095672600,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.vacanciesMenu()"
});
formatter.result({
  "duration": 10331463700,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.jobVacancyDetails()"
});
formatter.result({
  "duration": 1562633500,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.jobCreationVerification()"
});
formatter.result({
  "duration": 13780375600,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.CloseHRMBrowser()"
});
formatter.result({
  "duration": 934211800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Adding a candidate for recruitment",
  "description": "",
  "id": "orangehrm-activities;adding-a-candidate-for-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@hrmscen2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on the HRM jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User Navigate to the Recruitment page and click on the Add button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Enter all required information",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Upload Resume to the form and save it",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify Candidate is added",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Close the HRM Job Browser",
  "keyword": "And "
});
formatter.match({
  "location": "HRMAddCandidateforRecruitement.HRMLogin()"
});
formatter.result({
  "duration": 13172245200,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddCandidateforRecruitement.navigateToRecruitement()"
});
formatter.result({
  "duration": 13447270000,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddCandidateforRecruitement.CandidateInfo()"
});
formatter.result({
  "duration": 636881900,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddCandidateforRecruitement.resumeUpload()"
});
formatter.result({
  "duration": 4383286600,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddCandidateforRecruitement.candidateVerification()"
});
formatter.result({
  "duration": 3908353200,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddCandidateforRecruitement.CloseHRMBrowser()"
});
formatter.result({
  "duration": 955899200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Add Multiple Employees",
  "description": "",
  "id": "orangehrm-activities;add-multiple-employees",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@hrmscen3"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on the HRM Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Click on PIM option in Menu",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click on Add Employee Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Fill all the necessary Details like \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Check CreateLoginDetails checkbox and Enter \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\" and save it",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify Employee is created by using \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Close the Employee Broswer",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "orangehrm-activities;add-multiple-employees;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "UserName",
        "Password"
      ],
      "line": 34,
      "id": "orangehrm-activities;add-multiple-employees;;1"
    },
    {
      "cells": [
        "Sangam",
        "Kumar",
        "Ramkk8",
        "Ramkk1126"
      ],
      "line": 35,
      "id": "orangehrm-activities;add-multiple-employees;;2"
    },
    {
      "cells": [
        "Vipin",
        "Kumar",
        "Mohana8",
        "Mohana126"
      ],
      "line": 36,
      "id": "orangehrm-activities;add-multiple-employees;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Add Multiple Employees",
  "description": "",
  "id": "orangehrm-activities;add-multiple-employees;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@hrmscen3"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on the HRM Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Click on PIM option in Menu",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click on Add Employee Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Fill all the necessary Details like \"Sangam\" and \"Kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Check CreateLoginDetails checkbox and Enter \"Ramkk8\" and \"Ramkk1126\" and save it",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify Employee is created by using \"Sangam\" and \"Kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Close the Employee Broswer",
  "keyword": "And "
});
formatter.match({
  "location": "HRMAddMultipleEmployees.HRMLogin()"
});
formatter.result({
  "duration": 16095584500,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddMultipleEmployees.clickPIM()"
});
formatter.result({
  "duration": 9793664600,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddMultipleEmployees.clickAddEmployee()"
});
formatter.result({
  "duration": 2232632500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sangam",
      "offset": 37
    },
    {
      "val": "Kumar",
      "offset": 50
    }
  ],
  "location": "HRMAddMultipleEmployees.employeeeDetails(String,String)"
});
formatter.result({
  "duration": 139141800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramkk8",
      "offset": 45
    },
    {
      "val": "Ramkk1126",
      "offset": 58
    }
  ],
  "location": "HRMAddMultipleEmployees.loginDetails(String,String)"
});
formatter.result({
  "duration": 666660400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sangam",
      "offset": 37
    },
    {
      "val": "Kumar",
      "offset": 50
    }
  ],
  "location": "HRMAddMultipleEmployees.verifyEmployee(String,String)"
});
formatter.result({
  "duration": 22015528600,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddMultipleEmployees.browserClose()"
});
formatter.result({
  "duration": 988913700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Add Multiple Employees",
  "description": "",
  "id": "orangehrm-activities;add-multiple-employees;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@hrmscen3"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on the HRM Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User Click on PIM option in Menu",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click on Add Employee Button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Fill all the necessary Details like \"Vipin\" and \"Kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Check CreateLoginDetails checkbox and Enter \"Mohana8\" and \"Mohana126\" and save it",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify Employee is created by using \"Vipin\" and \"Kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Close the Employee Broswer",
  "keyword": "And "
});
formatter.match({
  "location": "HRMAddMultipleEmployees.HRMLogin()"
});
formatter.result({
  "duration": 21601924200,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddMultipleEmployees.clickPIM()"
});
formatter.result({
  "duration": 8329313900,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddMultipleEmployees.clickAddEmployee()"
});
formatter.result({
  "duration": 2219172700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vipin",
      "offset": 37
    },
    {
      "val": "Kumar",
      "offset": 49
    }
  ],
  "location": "HRMAddMultipleEmployees.employeeeDetails(String,String)"
});
formatter.result({
  "duration": 131490400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohana8",
      "offset": 45
    },
    {
      "val": "Mohana126",
      "offset": 59
    }
  ],
  "location": "HRMAddMultipleEmployees.loginDetails(String,String)"
});
formatter.result({
  "duration": 652784900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vipin",
      "offset": 37
    },
    {
      "val": "Kumar",
      "offset": 49
    }
  ],
  "location": "HRMAddMultipleEmployees.verifyEmployee(String,String)"
});
formatter.result({
  "duration": 24064981000,
  "status": "passed"
});
formatter.match({
  "location": "HRMAddMultipleEmployees.browserClose()"
});
formatter.result({
  "duration": 983648900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Adding Multiple vacancies",
  "description": "",
  "id": "orangehrm-activities;adding-multiple-vacancies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@hrmscen4"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User is on the HRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User Navigate to the \u0027Recruitment\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Click on the \u0027Vacancies\u0027 menu item and click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Enter Vacancy as \"\u003cVacancyName\u003e\" and manager as \"\u003cHiringManager\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify JoB vacancy \"\u003cVacancyName\u003e\" is created",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Close the HRM Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "orangehrm-activities;adding-multiple-vacancies;",
  "rows": [
    {
      "cells": [
        "VacancyName",
        "HiringManager"
      ],
      "line": 49,
      "id": "orangehrm-activities;adding-multiple-vacancies;;1"
    },
    {
      "cells": [
        "D_Auto_Test31",
        "Deb Kumar"
      ],
      "line": 50,
      "id": "orangehrm-activities;adding-multiple-vacancies;;2"
    },
    {
      "cells": [
        "D_Auto_Test32",
        "Deb Kumar"
      ],
      "line": 51,
      "id": "orangehrm-activities;adding-multiple-vacancies;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 50,
  "name": "Adding Multiple vacancies",
  "description": "",
  "id": "orangehrm-activities;adding-multiple-vacancies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@hrmscen4"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User is on the HRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User Navigate to the \u0027Recruitment\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Click on the \u0027Vacancies\u0027 menu item and click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Enter Vacancy as \"D_Auto_Test31\" and manager as \"Deb Kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify JoB vacancy \"D_Auto_Test31\" is created",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Close the HRM Browser",
  "keyword": "And "
});
formatter.match({
  "location": "HRMJJobVacancyCreate.HRMLogin()"
});
formatter.result({
  "duration": 25995506700,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.recruitmentPage()"
});
formatter.result({
  "duration": 12953588000,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.vacanciesMenu()"
});
formatter.result({
  "duration": 12971849500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D_Auto_Test31",
      "offset": 18
    },
    {
      "val": "Deb Kumar",
      "offset": 49
    }
  ],
  "location": "HRMJJobVacancyCreate.vacancyDetails(String,String)"
});
formatter.result({
  "duration": 5044468300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D_Auto_Test31",
      "offset": 20
    }
  ],
  "location": "HRMJJobVacancyCreate.mulitijobCreationVerification(String)"
});
formatter.result({
  "duration": 12004133300,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.CloseHRMBrowser()"
});
formatter.result({
  "duration": 1135276400,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Adding Multiple vacancies",
  "description": "",
  "id": "orangehrm-activities;adding-multiple-vacancies;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@hrmscen4"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User is on the HRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User Navigate to the \u0027Recruitment\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "Click on the \u0027Vacancies\u0027 menu item and click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Enter Vacancy as \"D_Auto_Test32\" and manager as \"Deb Kumar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify JoB vacancy \"D_Auto_Test32\" is created",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Close the HRM Browser",
  "keyword": "And "
});
formatter.match({
  "location": "HRMJJobVacancyCreate.HRMLogin()"
});
formatter.result({
  "duration": 21037265000,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.recruitmentPage()"
});
formatter.result({
  "duration": 3351939100,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.vacanciesMenu()"
});
formatter.result({
  "duration": 9061772200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D_Auto_Test32",
      "offset": 18
    },
    {
      "val": "Deb Kumar",
      "offset": 49
    }
  ],
  "location": "HRMJJobVacancyCreate.vacancyDetails(String,String)"
});
formatter.result({
  "duration": 2300484400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D_Auto_Test32",
      "offset": 20
    }
  ],
  "location": "HRMJJobVacancyCreate.mulitijobCreationVerification(String)"
});
formatter.result({
  "duration": 13506839000,
  "status": "passed"
});
formatter.match({
  "location": "HRMJJobVacancyCreate.CloseHRMBrowser()"
});
formatter.result({
  "duration": 1308881700,
  "status": "passed"
});
});