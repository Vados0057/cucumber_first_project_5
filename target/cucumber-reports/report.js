$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TechGlobal.feature");
formatter.feature({
  "name": "TechGlobal Pagination Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TechGlobal"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TechGlobalSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to Practices header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "TechGlobalSteps.user_moves_to_Practices_header_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Frontend Testing header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_clicks_on_Frontend_Testing_header_dropdown_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_clicks_on_card(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Pagination Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TechGlobal"
    },
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "user should see \"Pagination\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_see_heading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"World City Populations 2022\" heading",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_see_heading(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:\" paragraph",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_see_paragraph(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TechGlobalSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to Practices header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "TechGlobalSteps.user_moves_to_Practices_header_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Frontend Testing header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_clicks_on_Frontend_Testing_header_dropdown_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_clicks_on_card(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Pagination Page Next/Previous buttons",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TechGlobal"
    },
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "user should see \"Previous\" button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_see_button_is_disabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Next\" button is enabled",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_see_button_is_enabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Next button",
  "keyword": "When "
});
formatter.match({
  "location": "TechGlobalSteps.user_clicks_on_Next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Previous\" button is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_see_button_is_enabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Next button till it becomes disabled",
  "keyword": "When "
});
formatter.match({
  "location": "TechGlobalSteps.user_clicks_on_Next_button_till_it_becomes_disabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Previous\" button is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_see_button_is_enabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Next\" button is disabled",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_see_button_is_disabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"https://techglobal-training.netlify.app/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "TechGlobalSteps.user_is_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to Practices header dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "TechGlobalSteps.user_moves_to_Practices_header_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Frontend Testing header dropdown option",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_clicks_on_Frontend_Testing_header_dropdown_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Pagination\" card",
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.user_clicks_on_card(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be navigated to \"https://techglobal-training.netlify.app/frontend/pagination\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TechGlobalSteps.user_should_be_navigated_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Pagination Page cities content",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TechGlobal"
    },
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "user should see \"Tokyo\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Tokyo",
        "Country: Japan",
        "Population: 37,435,191"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".\\.city_image\"}\n  (Session info: chrome\u003d110.0.5481.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air-Vladislav.local\u0027, ip: \u002710.0.0.143\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.0.1\u0027, java.version: \u00271.8.0_341\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 110.0.5481.100, chrome: {chromedriverVersion: 110.0.5481.77 (65ed616c6e8e..., userDataDir: /var/folders/sm/r2d83q_s73q...}, goog:chromeOptions: {debuggerAddress: localhost:50975}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e5fc592e419de64e516fc1837dbf709a\n*** Element info: {Using\u003dclass name, value\u003d.city_image}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat steps.TechGlobalSteps.userShouldSeeCityWithInfoBelowAndAnImage(TechGlobalSteps.java:135)\n\tat ✽.user should see \"Tokyo\" city with info below and an image(src/test/resources/features/TechGlobal.feature:31)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should see \"Delhi\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Delhi",
        "Country: India",
        "Population: 29,399,141"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Shangai\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Shangai",
        "Country: China",
        "Population: 26,317,104"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Sao Paulo\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Sao Paulo",
        "Country: Brasil",
        "Population: 21,846,507"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see \"Mexico City\" city with info below and an image",
  "rows": [
    {
      "cells": [
        "City: Mexico City",
        "Country: Mexico",
        "Population: 21,671,908"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TechGlobalSteps.userShouldSeeCityWithInfoBelowAndAnImage(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});