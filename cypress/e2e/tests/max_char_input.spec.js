describe('Text box with max characters', () => {
    it('displays the appropriate remaining characters count', () => {
        // Automate to have Cypress write in letters and check the value of our characters left text at various points to ensure it says as expected
        // In the React web app project directory (src/pages/Example2Page.js), the number of characters left text is surrounded by a <span> tag
        cy.visit('http://localhost:3000/example-2');

        cy.get('span')
            .invoke('text') // get the actual text value of the span element
            .should('equal', '15'); // assert that the initial value of span text is expected to be 15 (all 15 chars left)
    });
});