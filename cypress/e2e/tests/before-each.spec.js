describe('Text box with max characters', () => {
    // Use beforeEach() block to allow us to write code that will get executed before each of the tests run in the file
    beforeEach(() => {
        // move all the cy.visit() and aliasing cy.get() commands in this beforeEach() block
        // this allows us to delete the repeated statements from the 2nd test (other it() blocks)
        cy.visit('/example-3'); // this uses the baseUrl set in the cypress.config.js file

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan'); // this whole command tells Cypress to look at the above data-cy value selection and we want to refer to it as 'charsLeftSpan' for all future uses

        // Create an alias for input field
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');
    });

    it('displays the appropriate remaining characters count', () => {
        // Automate to have Cypress write in letters and check the value of our characters left text at various points to ensure it says as expected
        // In the React web app project directory (src/pages/Example2Page.js), the number of characters left text is surrounded by a <span> tag

        // So we can replace all instances and uses of the above cy.get() command as @charsLeftSpan

        cy.get('@charsLeftSpan') // copy and paste the data-cy attribute's value of the span element which has characters left amount
            .invoke('text') // get the actual text value of the span element
            .should('equal', '15'); // assert that the initial value of span text is expected to be 15 (all 15 chars left)

        // Have Cypress something in the text input box
        cy.get('@charInput').type('hello'); // 'hello' = 5 letters out of 15 used

        // Now, expect the characters left text to tell us that we have 10 characters left (15-5)
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10'); // assert that actual text gotten from Cypress above is equal to expected text of 10 after 5 chars is reduced by 'hello'

        cy.get('@charInput').type(' my friend'); // use the rest of the 10 characters left

        // Finally, check that no characters are left after above text inputted
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0'); // assert that no chars are left to be typed as max limit is reached
    });

    // Make sure that text box doesn't allow more than 15 characters into the text box
    // Define a new test
    it('prevents the user from typing more characters once max is exceeded', () => {
        cy.visit('/example-3');

        // Redefine the alias for input field
        cy.get('[data-cy="input-last-name"]')
            .as('charInput');

        // Test the input element and type a long string over 15 characters
        cy.get('@charInput').type('abcdefghijklmnopqrstuvwxyz');

        // Assertion
        cy.get('@charInput') // find and get the input element
            .should('have.attr', 'value', 'abcdefghijklmno'); // assert on the 'value' attribute of the <input> element found that it should contain exactly 15 chars from the actual string typed above
    });
});