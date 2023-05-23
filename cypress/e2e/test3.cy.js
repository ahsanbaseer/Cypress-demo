describe('empty spec', () => {

  it('passes', () => {
    
    // Visit URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // Get alert button and click
    cy.get('#alertbtn').click()

    // Get confirm button and click 
    cy.get('[value="Confirm"]').click()

    // Validate alert windows text 
    cy.on('window:alert', (str) => 
    {
      //Compare strings 
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    // Validate confirm window text
    cy.on('window:confirm', (str) => 
    {
      //Compare strings 
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    // Remove target attribute from DOM and open page in the same window
    cy.get('#opentab').invoke('removeAttr', 'target').click()

    // Validate URL of the new page 
    cy.url().should('include','rahulshettya\cademy')

    // Go back to previous page
    cy.go('back')






  })

})

