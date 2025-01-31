// Test heading appears with correct text on web page
describe('Heading text', () => {
    // Define all individual tests
    it('contains the correct title', () => {
        // Start Cypress commands
        cy.visit('http://localhost:3000/example-1'); // URL of the web page for Cypress to visit

        // make an assertion about the page visited
        cy.get('h1') // find and get the 'h1' element on the page
            .invoke('text') // the actual text present on the web page in the 'h1' element
            .should('equal', 'My Awesome Web Application'); // the expected text that the heading should contain and be equal to above actual text found by .invoke()
    });
});