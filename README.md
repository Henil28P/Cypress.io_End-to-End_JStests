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

# Web Application under test

- Locally hosted website containing many examples of form elements and other DOMs to be tested in general applications.

# Writing Cypress test

- One of the main uses of Cypress is to test the functionalityu of existing applications.
- The syntax for organizing our Cypress tests is familiar to Mocha test framework as it is a backed-in version of Mocha that ships by default with Cypress.

1. Use `describe()` block to define a group of tests in Cypress which allows us to group some tests which share a common theme such as checking the functionality of a button on our web site.
2. Use `it()` block to define the actual test and separate individual tests in Mocha - there can be many `it()` blocks (many tests) in 1 `describe()` block.
3. All Cypress commands start with `cy.`

- `cy.visit('URL of web page')` to make Cypress visit the web page
- `cy.get('element name')` - to allow Cypress to find and get the element (such as h1)
- `.invoke('text')` - element value type (such as text) that was found
- `.should('expected text')` - to assert on the actual text (compare expected text with above actual text gotten from Cypress).

- Note: a good feature of Cypress is that it can automatically consider changes to tests and reloads
- Cypress also doesn't fail our tests right away if it gets a value it doesn't expect which is a good feature of Cypress - since most of the time we'll be running full sites where nothing is instantaneous, need to wait for page to load, wait for network calls or maybe for animations, etc. --> Cypress automatically waits for about 4 seconds before concluding that something's wrong with the website.

# Testing text input

- Test the text functionality of web app: testing character limit, test user unable to type any keys after max character limit is reached.

1. `cy.get('input').type('text to be typed via automation')` - to automate typing the text in the 'input' element.
2. `.should('have.attr', 'value', 'expected value')` - to check the value of an element's attribute (such as "value" attribute in this case) where 'expected value' is the value of that attribute.

# Selecting elements

- For simplicity, HTML tags (span, h1, input, etc.) can be used on `cy.get()` to select an element - however, this is a wrong way to do as the problem is that using the HTML tag is extremely dependent on the current state of the app.
- In case where there are multiple input boxes and spans (eg. with text value 15) of same type in a form, the test will complain that we're expecting 1515 to equal 15 (actual). Another reason would be also because we're calling the selector type on 2 elements - the basic HTML selectors.
- Hence, it's clear that using the HTML tags isn't the right way to select elements for testing.
- Other ways than HTML tags -

1. can use indexes and for example, specify that we want a select a 2nd span element on a page.

- `cy.get('HTML element').eq(n)` - where 'n' is the nth index of the element. NOTE to not do something like `cy.get('HTML element:nth-of-type(1)')`.
- However, the problem to do it in this way is the same as using HTML tags - it's just way too susceptible to change.
- The moment developers decide to add another element to the web page or change the order of the text inputs which will enable the tests to break.
- Therefore, HTML tags OR getting elements by index doesn't work well either.

2. Selecting elements by their CSS class

- In some situations, this method is still too vulnerable to non-functional changes in the web app.
- For example, a big green button on a web page, we can select it by `cy.get('button.big-green')` - the problem with this couples tests to the appearance of the button, so if the design team decides to change colour of the button to red, then the tests will break.
- The ID attribute, or name attribute - these are slightly better as they change less often, but they could change at times when developers decide to do a big CSS refactor or change the behaviour of the elements in some way that involves changing their other attributes.

3. Selecting elements by text they contain

- For example, a button on a web page with text "submit", this would allow us to get the button by `cy.contains('Submit')` - this is fairly safe in some cases but still possible to be changes and break the tests.
- For certain parts of the web app where the text is set dynamically such as characters left text, it becomes very cumbersome to select elements by the text they contain since we have to guess at what their value might be.

4. Selecting elements using special data attributes on the elements to be tested

- Recommended way by Cypress to do selectors in the vast majority of cases.
- The `data-cy` attribute is usually included by the developers (eg. React web developers in this project) in each HTML tag (eg. `<input>` tag in the React code)
- The `data-cy` attribute is the preferred attribute to use for Cypress tests
- The beauty of `data-cy` attribute is that developers can assign any unique value to it in the development code without worrying about it being linked to any styling or functionality aspects of the web app.
- The tests are much more insulated from change than other methods.

# Aliasing elements

- Currently, the selectors look unnecessarily verbose and there are many places where exact same command are used over and over again (such as `cy.get()` in the test).
- Cypress provides a way of reducing the amount of code to perform simple repetitive selecting (such as with `cy.get()`)
- Aliasing - in Cypress, it allows us to take a rather lengthy command (such as `cy.get('[data-cy="last-name-chars-left-count"]')`) and give it a shorter name for us to refer to it later

1. `<Cypress command>.as("alias_name")` - where `<Cypress command>` can be any long command that is repeated in the test file such as `cy.get('[data-cy="some long value of data-cy attribute"]')` and where "alias_name" is the name for replacing the long command to short name in future uses.
2. `@alias_name` - this string can be used instead of the long command everytime.

- Main question: why bother with all the aliasing stuff? Why not just do: `const charsLeftSpan = cy.get('[data-cy="last-name-chars-left-count"]')` - this just won't work because of the reason that Cypress commands are asynchronous. We can't also use `await` in front of the `cy.get()` in this because Cypress commands aren't technically promises.

- For working with more than 1 test (ie. more than 1 `it()` block), we can redefine the alias of a specific attribute.

# Working with command results

- Note: something like `const charsLeftSpan = await cy.get(...)` wouldn't work in Cypress as promises don't work in Cypress and it is asynchronous.
- Another way to aliase elements: there is a way to get and work with the results of Cypress commands.
- For example, to get the result of the `cy.get('[data-cy="..."]').as('charsLeftSpan')` command and have a reference to that element, use the `cy.get('@charsLeftSpan').then($charsLeftSpan =? {...});` command. `$charsLeftSpan` is the DOM element that the Cypress command returned.
- `expect()` syntax from Chai assertion library comes standard with Cypress just like describe() and it() blocks from Mocha.

# The `beforeEach` hook

- Apart from all previous actions to make Cypress tests less verbose, there's still a bit of repetition going on in the code (eg. navigating to exact same web page and defining the same aliases) - would be nice if we can do that once for all the tests in 1 block (beforeEach block allows us to do this).
- `beforeEach()` block - allow us to write code that will get executed before each of the tests run in the file.

# Setting a base URL

- So far, `cy.visit('URL of web page')` has been used,
- Most of the Cypress tests in many projects will be pointing to the same base URL and due to large number tests, it's better to avoid having the base URL over and over again in all the tests.
- Cypress allows us to specify a base URL for our project, so that instead of typing out the full URL (`http://localhost:3000`), we can just type out the path we want to visit like: `/example-3` in the test file.
- We need to modify the `cypress.config.js` or `cypress.json` file by adding the `baseUrl: "http://localhost:3000"` in the file.

# Interacting with elements

- So far from above, the only interaction mentioned is `.type()` command to interact with input field.
- Note: the <b>/example-4</b> route of this project contains a playground for the interaction commands (has double-clicking, checking and unchecking boxes, selecting from dropdown and triggering a mouse-over event).
- `cy.get("...").dblclick();` to automate interaction with a form element which can be double clicked.
- `cy.get("...").click();` to automate interaction with an element which can be clicked on the page.
- `.check()` and `.uncheck()` Cypress commands - to automate checking the checkbox.
- `.select()` Cypress command - to automate selection of a dropdown element.

# Triggering other actions

- More fine-tuned control over the actions we trigger on our application.
- Example: find out what happened specifically on a mouse-down event or if we need an event to happen at a specific X and Y coordinate - we can use Cypress's `.trigger()` command.
- Find an element on the web page and call `.trigger()` on it
- Main difference is that with `.trigger()`, we can pass in the name of an event such as `mousedown` or `mouseleave` or `mouseover` or `touchstart`
- `.trigger()` does allow us to pass extra arguments to it - in particular, if there's a reason we need to click on a specific part of an element, we can pass an X and Y-coordinates to trigger as extra arguments and these specify how far from the left and top edges respectively, the event will take place.
- Trigger allows us to do cool things like dragging and dropping, adding custom sliders and other things that Cypress doesn't have built-in commands for.

# Common Cypress Assertions

- So far, only `.should('equal', 'some value...')` assertion is used.
- Other assertions to test the behaviour of web application:

1. Check the number of items/elements on a web page (checking length):

- `.should('have.length',4)`
- Useful if we have a dynamic list we want to check (eg. if our app has a to-do list that we can add items to) - in this situation, if we want to check the functionality of adding items to our list, we can simply tell Cypress to type in several items and click "Add" button and check how many items are actually on the page to see if that matches our expectations - such as `cy.get('.list-item').should('have.length', 3)`

2. Check existence of an element on a web page

- `.should('exist')` - checks if element exists on the web page
- `.should('not.exist')` - checks if element does not exist on the web page
- For example, we might want to have some element on a page that should only show up under certain circumstances (eg. if user is logged in)

3. Check if an element is visible

- `.should('be.visible')`
- `.should('not.be.visible')`

4. Check if certain element on a web page has a CSS class

- For example, if we use CSS classes to display certain data on the screen (such as if an item in the list is selected or not with `.selected`)
- To check the class of an element: `.should('have.class','list-item-selected')` where `list-item-selected` is the class name for this example

5. Checking for specific styles of an element on a web page

- Check if an element has a particular style or not such as checking if some text on a page has a strike-through: `.should('have.css','background-color','blue')` where CSS property is 'background-color' and value of that property is 'blue'.
- Be careful of changing specific CSS styling since it can change quite frequently as design tweaks are made to the web apps.

6. Checking text content of an element

- `.invoke('text')`
- `.should('contain')`
- `.should('not.contain')`

# Automatic Retrying

- One of the biggest difficulties with End-to-End tests are <b>flaky tests</b>
- Flaky tests - tests that pass most of the times but occasionally or in certain environments, they fail unexpectedly - the flakiness of these tests is something just like a timing issue (eg. a web app might be making some kind of network call that's taking longer than usual)
- Cypress automatically retries tests (commands and assertions) until they pass.
- Example scenario: a web app displays a list of people that it populates from our server. For first few fractions of a second, the list will be empty and display a spinner while the front-end loads the data. - In this case, if we add an end-to-end test that made some sort of assertion about our list (eg. a test that checks if thge list displays the people alphabetically, when the test first tries to run, it won't find any list elements at all and would fail, the naive way of fixing this would be to add a timeout to our test and make them wait a second or 2 before actually checking the list, however, not only would this slow down the tests significantly since we'd be sitting there waiting for a non-trivial amount of time for every test, but it wouldn't even necessarily solve our problem 100% of the time - there will be occassional time when the app takes just a little longer to load and still isn't ready by the time the assertion executes), Cypress will keep rerunning the failing attempt and command to find the 1st time until it finds it or until 4 seconds had gone by at which point it'd fail the test.
- Cypress will keep retrying a failing command or assertion until either it passes or it reaches the default timeout of 4 seconds (it is also possible to change this default timeout).
- Note: Cypress won't retry interactive commands such as `.click()` or `.type()` as those commands have the potential to change the app and cause inconsistent results if they're executed more than once.
- Cypress will retry commands that will query the DOM such as `.get()`.
- Cypress only retries the last failing command.
- For example: from `cy.get('@list').find('.list-item').should('exist')`, the `.find('.list-item')` command fails, Cypress won't go back and retry `cy.get('@list')` command, it'll only retry `.find('.list-item')` command.
- This feature of Cypress helps us to troubleshoot if we ever find that our tests aren't working as expected.

# Debugging in Cypress

- If something goes wrong in a web app, many times we need to actually look at the internal state of our web app to figure out the root cause - Cypress provides several nice tools for this:

1. `Simply debugger` - allows us to pause the execution of our tests at a certain point in our code.

- Note: In order for the debugger to work, the Dev tools need to be open.
- Cypress also integrates well with the browser console - for example: go to "Console" tab in the Dev tools, we see that when the tests run into the `.debug()` command, it prints some debugging info to the console - it tells stuff like the command we're debugging as well as the arguments it was called with.
- `Current Subject` in "Console" - with Cypress, when we call `.debug()`, it sets a command line variable called <b>Subject</b> which is whatever the currently selected element is that we got from calling our last Cypress command and we can inspect the element in any way we want to (eg. get the inner text from the element by typing `subject.text()` in the Console of dev tools).

# Environment variables

- Environment variables are places in tests that will change depending on where the tests are running.
- This allows us to change the URLs that the tests visit, depending on whether or not the tests are running on the development server, staging server, or production server.
- If done the right way, it gives us a place to specify things like secret keys, since we definitely don't want to have our secret keys committed and pushed up to our git repo.
- Cypress provides various ways to define environment variables for end-to-end tests:

1. Adding the environment variables directly to our machine - to do this, open up a terminal and type `$ export CYPRESS_<name_of_env_var>="<value_of_env_var>"` (eg. `$ export CYPRESS_MY_ENV_VARIABLE="hello"`)

- To access this environment variable inside our tests: on top of test file: type `Cypress.env('name of env variable defined earlier without CYPRESS_ in front'` (eg. `alert(Cypress.env('MY_ENV_VARIABLE'));` to display it in alert box).
- However, the main problem of doing it this way is that it's not really obvious where our environment variables are coming from as there's no file that we can look at and see what the value of the `MY_ENV_VARIABLE` is. And it's also not very easy to share environment variables between machines (eg. if a new developer joins the team).

2. Define environment variables by passing a flag when running Cypress from the command line.

- Unset the environment variable set earlier by `$ unset MY_ENV_VARIABLE`
- Then we can define the same environment variable on command line when running test by: `$ npx cypress open --env <name_of_env_var_to_define_without_CYPRESS_in_front>` (eg. `$ npx cypress open --env MY_ENV_VARIABLE="hello"`)

3. Define environment variables by adding them to the `cypress.config.js` file (or `cypress.json` file if using older Cypress version of 2019).

- This works really well for values that should be the same on all different machines.
- Example: Add `env: {"MY_ENV_VARIABLE": "hello"}`

4. Define environment variables by creating another file in the root directory of project

- Create a new file in the root directory of the project and name it <b>cypress.env.json</b>

- In the file, define objects for configuration of environment variables.
- Then, once `$ npx cypress open` is run, Cypress will automatically detect this file and load the environment variables from it.
- Note: If we have any secret keys as environment variables in the <b>cypress.env.json</b> file, make sure to add that file to the `.gitignore` file of the project so that it doesn't get committed to the project's git repo and compromise the secret keys of the project.

# Test Doubles

- Generally, in end-to-end testing, we want the app being tested to mimic the production environment as closely as possible - this means to be careful about using techniques that are popular in unit and integration testing (such as mocking, or stubbing or other test doubles).
- These are meant to make it easier to test individual pieces of the web app in isolation, but what we want to often do in end-to-end testing is make sure that our web app works correctly when all the pieces are put together, so using test doubles where they shouldn't be used will ruin the point.
- Test doubles can sometimes be best to be used in certain times - for example: if we need to see how apps works when it encounters a server error, it's far easier to simply create a server stub that simulates an error than actually make our server fail.
- Test doubles can also be useful when we want to make our app think that we're logged in without having to actually go through the login flow.
- How to create and use test doubles in Cypress? Sinon Library
- Sinon Library - popular library for test doubles. Cypress simply wraps Sinon's stub in spy APIs for us to use them in our Cypress tests.
- Cypress provides 2 methods in Sinon Library to use stubs and spys in our Cypress tests:

1. `cy.stub()`
2. `cy.spy()`

- If we know the app is going to call a certain method on some object (eg. if our app has a data access layer called "API") and we know that this object has a method called `getUser()` that will normally make a request to the server, then we can import this API object into our Cypress tests and say `cy.stub(api, 'getUser').returns({ name: 'Bill' });` - this replaces `api.getUser()` with a fake version and make `api.getUse()` return whatever we want it to.
- This means that while the tests are running, whenever the app calls api.getUser(), instead of actually making an API request, it'll just get this object back that we defined.
- Instead of `.returns({ name: 'Bill' });`, we can also do `.resolves({ name: 'Bill' });` which means `api.getUser()` resolves the object since our API calls would be asynchronous promises.
- Instead of `.returns({ name: 'Bill' });` or `.resolves({ name: 'Bill' });`, we can use `.rejects()` to simulate a network error of some kind.
- Using Spy is almost the same mechanism as using stub. The only difference is that it doesn't replace the methods, it only watches them and provides us with information that allows us to make some assertions about number of times the function was called, the arguments it was called with.
- Example: `const mySpy = cy.spy(api, 'getUser'); expect(mySpy).to.be.called;`
- Note: the methods listed earlier are a lot easier if our Cypress tests are in the same package alongside our code.

# The `wrap` command

- After a Cypress command (eg. `.get()`), we can add a `.then()` and an anonymous function that has access to the element (eg. `$element`) that just got selected.
- If we want to make assertions about that element, we can't use Cypress assertions like `$element.should('equal',...);` but we instead need to use Chai assertion library's `expect($element)` syntax
- However, we want more consistency in our tests, we want to make Cypress style assertions instead of Chai `.expect()` assertions.
- Question: Once we have the result of one of our Cypress commands in jQuery form (ie. `$element`), how do we switch it over to something that we can call more Cypress commands on (eg. `.should()`)
- Cypress provides a special command for this case which is `cy.wrap()`
- `cy.wrap()` - lets us take a jQuery element that we have as the result of a Cypress command and convert it back to a form that we can use Cypress commands on again (eg. `cy.wrap($element).should(...);`)
- This allows <b>Consistency</b> - Since we've spent all the time learning Cypress commands, it'd be nice to have a way to use those commands under any circumstances.

# The `and()` command

- Some commands in Cypress provides us specific piece of functionality that we can't really access in any other way which is true for majority of the Cypress commands.
- There are also some Cypress commands that exist almost exclusively for the sake of readability - one of these commands is the `.and()` command
- <b>Example:</b> In Cypress, we want to make more than 1 assertion about an element (eg. check that the element has the right text, and that it has the right class)
- So hence, to make multiple assertions like the above, we can use multiple `.should()` commands OR we can simply use `.and()` for the 2nd, 3rd, etc. assertions.

# The `.filter()` and `.not()` commands

- With jQuery, there is a wide range of possible situations and arrangements on a web page - to select elements in a reliable manner, there's a wide range of different commands for selecting elements in different places.
- Cypress provides us with a lot of the standard jQuery commands, all wrapped up and available for us to call the same way that we normally call most other Cypress commands.
- Examples:

1. `cy.get(...).filter()`
2. `cy.get(...).not()`

- Example:
  `<div id="content-container">`
  `<!-- some child elements of the div -->`
  `<h1>...</h1>`
  `<p>...</p>`
  `<h3>...</h3>`
  `<p>...</p>`
  `<p>...</p>`
  `</div>`
- To select only the subset of the children of the <b>content-container</b> div, the `.filter()` command can be used (eg. `cy.get('#content-container').filter(<selector_of_children_to_select_inside_the_container>)`). Examples:

1. `cy.get('#content-container').filter('h3')` - to select the 'h3' child element of div with id="content-container"
2. `cy.get('#content-container').not('p')` - to select all the children of a certain DOM element that don't match a certain selector (eg. to select inside the content container except the paragraphs).

# Typing special characters

- Previously mentioned, the `.type()` command can be used to automate typing text into a field in a web app (eg. `cy.get(...).type('Hello')`)
- Special characters refer to things such as simulating the user pressing the <b>Enter</b> key, <b>Tab</b> key, <b>Esc</b> key, and more.
- These are important to test as we want to make sure that the user of our app has a great experience.
- It can be important to make sure that little short-cuts like these using the tab or enter keys instead of clicking, behave as the user would expect them to.
- To simulate these keys in Cypress, use the `.type('{<name_of_special_key>}');` command.
- Example: in a to-do app, we want the user to use the <b>Enter</b> key to add new items into their to-do list, we can simulate this in Cypress by `cy.get('input').type('This is a test {enter}');`
- Check out https://docs.cypress.io/api/commands/type.html#Arguments to see a list of special characters.

# Activating code completion

- There are a LOT of Cypress commands to keep up with and challenging to remember what they all do.
- A helpful solution to this is to activate the in-editor intelligent code completion for Cypress so that when we write Cypress tests, we have some helpful in-editor docs that we can use to jog our memory or to see different command possibilities.
- To set up intelligent code completion in the VS code editor, add /// directives on top of the test file.
- Example usage: `/// <reference types="Cypress" />`
- Once this is added, then when we write `cy.`, it will give us an ongoing list of Cypress commands possibilities.
- It gives a clear description of what a given command does in the list and a link to more detailed docs if needed.
- /// directives only activate docs on a per file basis. However, to activate docs for the entire project in VS code: add a new file to the project and name it "jsconfig.json" and add an object with a property "include" and put `./node_modules/cypress` and `cypress/**/*.js` as its 2 values - the in-editor docs will still work as expected and activate code completion.
