describe('Basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4'); // this route contains a playground for the interaction commands (has double-clicking, checking and unchecking boxes, selecting from dropdown and triggering a mouse-over event)
    });

    // Test for double-click interaction
    it('sets the header text to the item\'s name when double clicked', () => {
        // in the web app code, find and use the data-cy attribute of the <span> element to find the text
        // the list of items also have the data-cy attribute with the unique ID (value) assigned to it

        // use surrounding list element of the data-cy attribute (eg. ul) and get the nth child to get a certain item in the list
        cy.get('[data-cy=box-1-items-list] > :nth-child(2)') // > is a CSS selector and select 2nd item of the "ul" element
            .dblclick(); // automate double-click action using .dblclick() command of Cypress

        // Check the expected text with actual text gotten after double-clicking on the 2nd list item
        cy.get('[data-cy=box-1-selected-name]')
            .invoke('text') // get the actual text appeared on web page
            .should('equal', 'Option Two'); // check that the text says "Option Two" if 2nd list item is clicked
    });
})