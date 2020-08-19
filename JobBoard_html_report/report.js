$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobBoard1.feature");
formatter.feature({
  "line": 2,
  "name": "Job Board Activity",
  "description": "",
  "id": "job-board-activity",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@jobBoardActivity"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Create a new user from backend",
  "description": "",
  "id": "job-board-activity;create-a-new-user-from-backend",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@scen1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter \"root\" and \"pa$$w0rd\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click the menu item that says \u0027Users\u0027 on DashBoard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on \u0027Add New\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Fill all the necessary details and click the \u0027Add New User\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify that the user was created",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "createNewUser.loginPage()"
});
formatter.result({
  "duration": 17951225100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "root",
      "offset": 12
    },
    {
      "val": "pa$$w0rd",
      "offset": 23
    }
  ],
  "location": "createNewUser.login(String,String)"
});
formatter.result({
  "duration": 12433340900,
  "status": "passed"
});
formatter.match({
  "location": "createNewUser.userMenuItem()"
});
formatter.result({
  "duration": 3790588000,
  "status": "passed"
});
formatter.match({
  "location": "createNewUser.addNewUser()"
});
formatter.result({
  "duration": 2964148600,
  "status": "passed"
});
formatter.match({
  "location": "createNewUser.fillTheDetails()"
});
formatter.result({
  "duration": 6750961700,
  "status": "passed"
});
formatter.match({
  "location": "createNewUser.userCreated()"
});
formatter.result({
  "duration": 5117819600,
  "status": "passed"
});
formatter.match({
  "location": "createNewUser.browserClose()"
});
formatter.result({
  "duration": 3741768300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Searching for a Job",
  "description": "",
  "id": "job-board-activity;searching-for-a-job",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@scen2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on the Jobs page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Find the Keywords search input field and serach for \u0027D_testing\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Find the Job Details from the List",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Read the Title of the JoB Details page and print it",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "apply for Job",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Close the Job Browser",
  "keyword": "And "
});
formatter.match({
  "location": "applyJob.jobsPage()"
});
formatter.result({
  "duration": 19298987500,
  "status": "passed"
});
formatter.match({
  "location": "applyJob.searchJob()"
});
formatter.result({
  "duration": 495145900,
  "status": "passed"
});
formatter.match({
  "location": "applyJob.findJobDetails()"
});
formatter.result({
  "duration": 4360742800,
  "status": "passed"
});
formatter.match({
  "location": "applyJob.pageTitle()"
});
formatter.result({
  "duration": 236859000,
  "status": "passed"
});
formatter.match({
  "location": "applyJob.applyforJob()"
});
formatter.result({
  "duration": 455030800,
  "status": "passed"
});
formatter.match({
  "location": "applyJob.browserClose1()"
});
formatter.result({
  "duration": 1973948000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Posting Job with Parameterization",
  "description": "",
  "id": "job-board-activity;posting-job-with-parameterization",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@scen3"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User click on \u0027Post a Job\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Enter email as \"E_testing4@gmail.com\", position as \"E_testing\" and Location as \"Bangalore\" and description as \"testing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "application email as \"din_t@gmail.com\", Company name as \"DIN1\" and Website as \"din.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Find the Job on Jobs page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Close the Job Post Browser",
  "keyword": "And "
});
formatter.match({
  "location": "postTheJob.jobsPage()"
});
formatter.result({
  "duration": 14101064800,
  "status": "passed"
});
formatter.match({
  "location": "postTheJob.enterPostJobPage()"
});
formatter.result({
  "duration": 11897368400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E_testing4@gmail.com",
      "offset": 16
    },
    {
      "val": "E_testing",
      "offset": 52
    },
    {
      "val": "Bangalore",
      "offset": 80
    },
    {
      "val": "testing",
      "offset": 111
    }
  ],
  "location": "postTheJob.jobDetails(String,String,String,String)"
});
formatter.result({
  "duration": 620542700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "din_t@gmail.com",
      "offset": 22
    },
    {
      "val": "DIN1",
      "offset": 57
    },
    {
      "val": "din.com",
      "offset": 79
    }
  ],
  "location": "postTheJob.companyDetails(String,String,String)"
});
formatter.result({
  "duration": 528287000,
  "status": "passed"
});
formatter.match({
  "location": "postTheJob.submit()"
});
formatter.result({
  "duration": 11883469800,
  "status": "passed"
});
formatter.match({
  "location": "postTheJob.FindJob()"
});
formatter.result({
  "duration": 5276417900,
  "status": "passed"
});
formatter.match({
  "location": "postTheJob.browserPostClose()"
});
formatter.result({
  "duration": 5047301500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Posting Job with Example table",
  "description": "",
  "id": "job-board-activity;posting-job-with-example-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@scen4"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User click on \u0027Post a Job\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Enter email as \"\u003cEmail\u003e\", position as \"\u003cPosition\u003e\" and Location as \"\u003cLocation\u003e\" and description as \"\u003cDescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "application email as \"\u003cAppEmail\u003e\", Company name as \"\u003cCompany\u003e\" and Website as \"\u003cWebsite\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Find the Job on Jobs page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Close the Job Post Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "job-board-activity;posting-job-with-example-table;",
  "rows": [
    {
      "cells": [
        "Email",
        "Position",
        "Location",
        "Description",
        "AppEmail",
        "Company",
        "Website"
      ],
      "line": 46,
      "id": "job-board-activity;posting-job-with-example-table;;1"
    },
    {
      "cells": [
        "E_testing3@gmail.com",
        "E_testing",
        "Bangalore",
        "testing",
        "din_t@gmail.com",
        "DIN2",
        "din.com"
      ],
      "line": 47,
      "id": "job-board-activity;posting-job-with-example-table;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Posting Job with Example table",
  "description": "",
  "id": "job-board-activity;posting-job-with-example-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@scen4"
    },
    {
      "line": 1,
      "name": "@jobBoardActivity"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User click on \u0027Post a Job\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Enter email as \"E_testing3@gmail.com\", position as \"E_testing\" and Location as \"Bangalore\" and description as \"testing\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "application email as \"din_t@gmail.com\", Company name as \"DIN2\" and Website as \"din.com\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on Submit",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Find the Job on Jobs page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Close the Job Post Browser",
  "keyword": "And "
});
formatter.match({
  "location": "postTheJob.jobsPage()"
});
formatter.result({
  "duration": 14985504100,
  "status": "passed"
});
formatter.match({
  "location": "postTheJob.enterPostJobPage()"
});
formatter.result({
  "duration": 14553201300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E_testing3@gmail.com",
      "offset": 16
    },
    {
      "val": "E_testing",
      "offset": 52
    },
    {
      "val": "Bangalore",
      "offset": 80
    },
    {
      "val": "testing",
      "offset": 111
    }
  ],
  "location": "postTheJob.jobDetails(String,String,String,String)"
});
formatter.result({
  "duration": 606309000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "din_t@gmail.com",
      "offset": 22
    },
    {
      "val": "DIN2",
      "offset": 57
    },
    {
      "val": "din.com",
      "offset": 79
    }
  ],
  "location": "postTheJob.companyDetails(String,String,String)"
});
formatter.result({
  "duration": 418510300,
  "status": "passed"
});
formatter.match({
  "location": "postTheJob.submit()"
});
formatter.result({
  "duration": 7451740700,
  "status": "passed"
});
formatter.match({
  "location": "postTheJob.FindJob()"
});
formatter.result({
  "duration": 4615044100,
  "status": "passed"
});
formatter.match({
  "location": "postTheJob.browserPostClose()"
});
formatter.result({
  "duration": 2105745400,
  "status": "passed"
});
});