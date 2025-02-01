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

    // Test for checkbox interaction
    it('displays the correct count for the number of selected checkboxes', () => {
        // in the React web app dev code, there is a div that holds the checkboxes
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input') // label is the n-th child (1st) in that div so get the <input> inside the <label> element
            .check(); // to automate to tick the 1st checkbox

        // check that the text inside the span element is displaying the correct count
        cy.get('[data-cy=box-2-selected-count]')
            .invoke('text')
            .should('equal', '1'); // check that the actual text is 1 to expected
    });

    // Test for dropdown interaction - text on top to change after selecting any drop-down elements
    it('displays the name of the currently selected item of dropdown list', () => {

        cy.get('[data-cy=box-3-dropdown')
            .select('Option Three'); // specify the option to be selected from the dropdown list through automation

        // assert on the text from the span element to display the expected Option Three text as that element is selected
        cy.get('[data-cy=box-3-selected-name]')
            .invoke('text')
            .should('equal', 'Option Three');
    });

    // Test for hovering/mouseover interaction
    it('should display the name of the most recently hovered item', () => {
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)') // hover mouse over 2nd item in list
            .trigger('mouseover') // simulate hover event of "mouseover"
            // Hence, to make sure the debugger fires at the right time:
            .then(() => {
                debugger;
            });

        // debugger; // when Cypress reaches this keyword, it will pause all the tests so we can inspect our app all we want
        // However, the above won't work due to how Cypress cues commands. Since Cypress runs asynchronously, the web app will actually pause before any other Cypress commands have taken place.
        // Hence, to make sure the debugger fires at the right time: use .then()

        // check the text inside the span element based on the above recently hovered item
        cy.get('[data-cy=box-4-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');
    });
});