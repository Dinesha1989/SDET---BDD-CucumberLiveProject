$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRM.feature");
formatter.feature({
  "line": 2,
  "name": "CRM Activities",
  "description": "",
  "id": "crm-activities",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRMActivity"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Counting Dashlets",
  "description": "",
  "id": "crm-activities;counting-dashlets",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@crmscen1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the CRM page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter \"admin\" and \"pa$$w0rd\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Count the number of Dashlets on the homepage and print the Count and each Dashlettitle",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the CRM Browser",
  "keyword": "And "
});
formatter.match({
  "location": "CRMCountDashlet.openCRM()"
});
formatter.result({
  "duration": 19798625100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "pa$$w0rd",
      "offset": 24
    }
  ],
  "location": "CRMCountDashlet.login(String,String)"
});
formatter.result({
  "duration": 12874143800,
  "status": "passed"
});
formatter.match({
  "location": "CRMCountDashlet.countDashlet()"
});
formatter.result({
  "duration": 1315106700,
  "status": "passed"
});
formatter.match({
  "location": "CRMCountDashlet.crmBrowserClose()"
});
formatter.result({
  "duration": 2456194300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Leads using parameterization",
  "description": "",
  "id": "crm-activities;create-leads-using-parameterization",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@crmscen2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on the CRM page and enter \"admin\" and \"pa$$w0rd\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Create Lead from sales Menu",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Enter firstName as \"Naveen\", LastName as \"Raj\" and acccountName as \"CRM\" and save it",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Verify the Leads \"Naveen Raj\" from viewLead page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Close the leads Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 35
    },
    {
      "val": "pa$$w0rd",
      "offset": 47
    }
  ],
  "location": "createLead.openCRMAndlogin(String,String)"
});
formatter.result({
  "duration": 43375680500,
  "status": "passed"
});
formatter.match({
  "location": "createLead.LeadCreate()"
});
formatter.result({
  "duration": 30463145600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Naveen",
      "offset": 20
    },
    {
      "val": "Raj",
      "offset": 42
    },
    {
      "val": "CRM",
      "offset": 68
    }
  ],
  "location": "createLead.leadDetails(String,String,String)"
});
formatter.result({
  "duration": 6841419500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Naveen Raj",
      "offset": 18
    }
  ],
  "location": "createLead.verifyLead(String)"
});
formatter.result({
  "duration": 5347234300,
  "status": "passed"
});
formatter.match({
  "location": "createLead.browserclose()"
});
formatter.result({
  "duration": 2043648000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Schedule a meeting and invite members",
  "description": "",
  "id": "crm-activities;schedule-a-meeting-and-invite-members",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@crmscen3"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on the CRM login page and enter \"admin\" and \"pa$$w0rd\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Open \u0027Activities\u0027 then \u0027meeting\u0027 and click on schedule meeting",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter all the details with sub \"Sample meeting Demo3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Search for the memeber \"\u003cFirstName1\u003e\"and \"\u003cLastName1\u003e\" and \"\u003cFirstName2\u003e\" and \"\u003cLastName2\u003e\" and \"\u003cFirstName3\u003e\" and \"\u003cLastName3\u003e\" add them to meeting and save it",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Open the View meeting page and confirm \"Sample meeting Demo3\" meeting creation",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Close the meeting browser",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "crm-activities;schedule-a-meeting-and-invite-members;",
  "rows": [
    {
      "cells": [
        "FirstName1",
        "LastName1",
        "FirstName2",
        "LastName2",
        "FirstName3",
        "LastName3"
      ],
      "line": 31,
      "id": "crm-activities;schedule-a-meeting-and-invite-members;;1"
    },
    {
      "cells": [
        "Krishna",
        "k",
        "Dinesha",
        "Gs",
        "Ramesh",
        "Bs"
      ],
      "line": 32,
      "id": "crm-activities;schedule-a-meeting-and-invite-members;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Schedule a meeting and invite members",
  "description": "",
  "id": "crm-activities;schedule-a-meeting-and-invite-members;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@crmscen3"
    },
    {
      "line": 1,
      "name": "@CRMActivity"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on the CRM login page and enter \"admin\" and \"pa$$w0rd\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Open \u0027Activities\u0027 then \u0027meeting\u0027 and click on schedule meeting",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Enter all the details with sub \"Sample meeting Demo3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Search for the memeber \"Krishna\"and \"k\" and \"Dinesha\" and \"Gs\" and \"Ramesh\" and \"Bs\" add them to meeting and save it",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Open the View meeting page and confirm \"Sample meeting Demo3\" meeting creation",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Close the meeting browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 41
    },
    {
      "val": "pa$$w0rd",
      "offset": 53
    }
  ],
  "location": "CRMScheduleMeeting.openCRMAndlogin(String,String)"
});
formatter.result({
  "duration": 28521511300,
  "status": "passed"
});
formatter.match({
  "location": "CRMScheduleMeeting.openMeeting()"
});
formatter.result({
  "duration": 25063314800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample meeting Demo3",
      "offset": 32
    }
  ],
  "location": "CRMScheduleMeeting.meetingDetails(String)"
});
formatter.result({
  "duration": 3750240900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Krishna",
      "offset": 24
    },
    {
      "val": "k",
      "offset": 37
    },
    {
      "val": "Dinesha",
      "offset": 45
    },
    {
      "val": "Gs",
      "offset": 59
    },
    {
      "val": "Ramesh",
      "offset": 68
    },
    {
      "val": "Bs",
      "offset": 81
    }
  ],
  "location": "CRMScheduleMeeting.memberAdd(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 14091638200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample meeting Demo3",
      "offset": 40
    }
  ],
  "location": "CRMScheduleMeeting.meetingConfirmation(String)"
});
formatter.result({
  "duration": 6722318500,
  "status": "passed"
});
formatter.match({
  "location": "CRMScheduleMeeting.closeMeetingBrowser()"
});
formatter.result({
  "duration": 1058771600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Creating a Product",
  "description": "",
  "id": "crm-activities;creating-a-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@crmscen4"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on the CRM login Page and enter \"admin\" and \"pa$$w0rd\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Open \u0027All\u0027 then \u0027Products\u0027 and click on \u0027Create Product\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Enter \"\u003cProductName\u003e\" and \"\u003cCategory\u003e\" and \"\u003cPrice\u003e\" and save it",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify the \"\u003cProductName\u003e\" is created",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Close the product Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "crm-activities;creating-a-product;",
  "rows": [
    {
      "cells": [
        "ProductName",
        "Category",
        "Price"
      ],
      "line": 45,
      "id": "crm-activities;creating-a-product;;1"
    },
    {
      "cells": [
        "Samplep1",
        "Automobiles",
        "100"
      ],
      "line": 46,
      "id": "crm-activities;creating-a-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Creating a Product",
  "description": "",
  "id": "crm-activities;creating-a-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@crmscen4"
    },
    {
      "line": 1,
      "name": "@CRMActivity"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on the CRM login Page and enter \"admin\" and \"pa$$w0rd\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Open \u0027All\u0027 then \u0027Products\u0027 and click on \u0027Create Product\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Enter \"Samplep1\" and \"Automobiles\" and \"100\" and save it",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Verify the \"Samplep1\" is created",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Close the product Browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 41
    },
    {
      "val": "pa$$w0rd",
      "offset": 53
    }
  ],
  "location": "CRMCreateProduct.openCRMAndlogin(String,String)"
});
formatter.result({
  "duration": 27869344300,
  "status": "passed"
});
formatter.match({
  "location": "CRMCreateProduct.productCreate()"
});
formatter.result({
  "duration": 12279085000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samplep1",
      "offset": 7
    },
    {
      "val": "Automobiles",
      "offset": 22
    },
    {
      "val": "100",
      "offset": 40
    }
  ],
  "location": "CRMCreateProduct.productDetails(String,String,String)"
});
formatter.result({
  "duration": 7822252400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samplep1",
      "offset": 12
    }
  ],
  "location": "CRMCreateProduct.verifyProduct(String)"
});
formatter.result({
  "duration": 11318862600,
  "status": "passed"
});
formatter.match({
  "location": "CRMCreateProduct.browserclose()"
});
formatter.result({
  "duration": 1064010000,
  "status": "passed"
});
});