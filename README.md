Test a simple AngularJS application using unit tests and end-to-end (E2E) tests.
To accomplish this we will be using Karma v0.12.31 (test runner) and Chai v2.2.0 (assertions) for the unit tests (along with Karma-Mocha) and Protractor v2.0.0 for the E2E tests. 

Start by cloning the repo
$ npm install && bower install

Run the app:
$ gulp

Navigate to http://localhost:8888 to view the live app.

Run the unit tests:
$ gulp unit
They should pass:

angular-testing surbhi$ gulp unit
[11:44:27] Using gulpfile ~/.Trash/angular-testing/Gulpfile.js
[11:44:27] Starting 'unit'...
INFO [karma]: Karma v0.12.31 server started at http://localhost:9876/
INFO [launcher]: Starting browser Chrome
INFO [Chrome 48.0.2564 (Mac OS X 10.9.5)]: Connected on socket SgfGeq9h4Npf3_tPqVCY with id 75352801
Chrome 48.0.2564 (Mac OS X 10.9.5): Executed 4 of 7 SUCCESS (0 secs / 0.001 secsChrome 48.0.2564 (Mac OS X 10.9.5): Executed 5 of 7 SUCCESS (0 secs / 0.002 secsChrome 48.0.2564 (Mac OS X 10.9.5): Executed 6 of 7 SUCCESS (0 secs / 0.003 secsChrome 48.0.2564 (Mac OS X 10.9.5): Executed 7 of 7 SUCCESS (0 secs / 0.003 secsChrome 48.0.2564 (Mac OS X 10.9.5): Executed 7 of 7 SUCCESS (3.752 secs / 0.003 secs)
[11:44:33] Finished 'unit' after 6.06 s


Now for the e2e tests:

1st terminal window: webdriver-manager start
2nd terminal window (within the project directory): gulp
3rd terminal window (within the project directory): gulp e2e
They should pass as well:

[11:45:38] Starting 'e2e'...
Using the selenium server at http://localhost:4444/wd/hub
[launcher] Running 1 instances of WebDriver
.......

Finished in 3.644 seconds
7 tests, 12 assertions, 0 failures

[launcher] 0 instance(s) of WebDriver still running
[launcher] chrome #1 passed
