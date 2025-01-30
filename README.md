# Cypress.io_End-to-End_JStests

An End-to-End Javascript web application testing project using Cypress.io to enable UI Test automation.

# Prerequisites to understand this project

- Good foundation in Javascript syntax: the modern ES6 syntax
- Passion for software quality

# Software/Tool Installation

1. Install Node.js (https://www.nodejs.org) and check installation by `$ node --version`
2. Make sure most recent version of NPM is installed (install most recent version of NPM by `$ npm install -g npm`) and then check installation using `$ npm --version`

- If the above steps face issues regarding permission denial, then run all same commands with <b>sudo</b> in front.

# Introduction to Cypress.io

- <b>Cypress.io<b> - very easy-to-use open-source and free library that allows us to conduct the automated testing (sometimes easier to use than other end-to-end frameworks like Selenium).
- Hence, Cypress.io is a tool that allows us to automate and scale end-to-end testing and ensure our application works correctly under almost all the circumstances a user will encounter.
- Manually testing all elements of a web and then shipping it into production doesn’t scale well. As the application becomes bigger and bigger, it becomes extremely impractical for the developers to test the entire web app on their own. Developers become limited to testing only the new functionality they added and hoping they didn’t break another part of the web app - this is the point where companies hire <b>QA Engineers</b>.
- Therefore, manual testing is neither a scalable nor an efficient way to ensure software quality from the end user’s point of view.
- Automate testing is the best option in this case - we want tests that represent the user’s point of view of application.
- Automated tests can be doing actions like clicking buttons and typing into text boxes and checking if certain elements are visible on the web page - instead of calling the code directly.
- This branch of testing is called <b>End-to-End testing</b> or <b>UI Testing</b> - extremely important in ensuring that the users of the app have a good experience and that visible bugs are caught before they make it into production.

# Advantages of Cypress.io

1. Tests run inside a real browser (other end-to-end testing frameworks such as Selenium use headless browsers to run tests which is a program that simulates a browser, but doesn’t actually display any user interface). Playwright however can run tests inside a real browser just like Cypress.io.

- A problem with headless browsers is that they come with their own set of bugs and real browsers that users are going to be accessing with (like Chrome) have a different set of bugs and quirks. This means that the tests that we run in a headless browser might not always give us the same results that our users will get when they use the application. However, Cypress gives us results identical to what users are going to experience.
- Cypress also has access to the network layer of our application which allows us to control all the network requests that go in and out of our application.
- This can be extremely useful for doing things like simulating what happens when our server has an error.

2. Visibility is taken into account by Cypress when running tests

- For example, if we’re testing to see the behaviour of a button when someone clicks it, but the button isn’t visible or is hidden behind another element or is off the screen - Cypress will take this into account and the test will fail (other frameworks don’t necessarily take this aspect into account) - useful case as users can’t click on elements which aren’t visible once app is deployed to production.

3. Cypress has access to all the browser’s resources that other frameworks don’t use, which means it can do things like take screenshots and videos of our site while Cypress is running our tests - extremely useful when tests fail since we can simply watch what happens when a certain series of steps is followed.
4. Cypress is very intuitive and readable - eg. Cypress commands: `cy.get(‘@text-input’).type(‘Hello!’);` (automated test to enter a text into a text box) and `cy,get(‘@enter-button’).click()` (automated test to click a button).
