describe('My Third Suite', () => {
  it('Learn use of checkboxes', () => {
    
    // Visit URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    // Get checkbox box using ID and CHECK the checkbox and verify the checkbox is checked using SHOULD method.
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

    // Uncheck the previously selected checkbox 
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    // Get all checkboxes on the page using common element, check two checkboxes at once. 
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    // Select a static drop down using SELECT method 
    cy.get('select').select('option2').should('have.value','option2')
    
    // Get dymanic dropdown and type USA 
    cy.get('input#autocomplete').type('United')

    // Using each iterate through all list elements and find United States (USA)
    cy.get('.ui-menu-item div').each(($el, index, $list) => {

      if($el.text()==="United States (USA)") 
      {
        cy.wrap($el).click()
      }

    })
    
    // Validate if United States (USA) was selected in the previous step
    cy.get('input#autocomplete').should('have.value', 'United States (USA)')

    //Validate if an element is visible 
    cy.get('#displayed-text').should('be.visible')

    // Hide the input 
    cy.get('#hide-textbox').click()

    // Validate if the input is hidden 
    cy.get('#displayed-text').should('not.be.visible')

    // Click on Radio button 
    cy.get('input[value="radio1"]').click().should('be.checked')
    




  })
})