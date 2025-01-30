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

- <b>Cypress.io</b> - very easy-to-use open-source and free library that allows us to conduct the automated testing (sometimes easier to use than other end-to-end frameworks like Selenium).
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

# Limitations of Cypress.io

1. Cypress.io is not suitable to be used for automation on things like data mining, web-crawling.
2. Cypress.io runs inside a real browser, therefore the only language that Cypress supports for writing tests in is Javascript - this doesn’t mean that we can’t test a site written in some other language than JS, it just means that the tests we write will have to be written in Javascript.
3. We can’t test multiple tabs or multiple browser windows at the same time - main reason why Cypress doesn’t allow us to do that is because they believe that that’s really no good reason to test multiple tabs or browsers in the same test (eg. if we want to test that clicking a link opens a new tab, we only need to check that the link has the `target=”\_blank”` set on it). Moreover, if we need to test the functionality of a chat application which requires 2 browsers to chat with each other - we can use other methods such as stubbing.
4. Cypress doesn’t allow multiple superdomains in 1 test (A superdomain is a domain name such as google.com or linkedin.com).

- Note: we can visit 2 different superdomains in 2 different tests but not in the same test.
- Anyways, the only time we would need to visit more than 1 superdomain in 1 test is when working with things like OAuth providers.

→ Besides the above permanent trade-offs, the Cypress team decides to fix issues and develop features based on the following list: https://www.github.com/cypress-io/cypress/issues

# Installing and opening Cypress

1. Setup an npm package and install `$ npm init -y` (initialise our directory/repo as an npm package and create the <b>package.json</b> file for us)
2. Install Cypress into the project by `$ npm install --save-dev cypress`
3. After Cypress installed, open up the Cypress interface by `$ npx cypress open`

- It will open up a window which will have a lot of example test files that Cypress includes as a reference.
- During the above setup steps, Cypress will add the cypress.json file to specify how Cypress runs.
- During the above setup steps, Cypress will also add a “cypress” folder which will have its own subfolders - the subfolder we’re interested in is “integration” which contains all the example tests which are automatically generated in Cypress interface/window.
