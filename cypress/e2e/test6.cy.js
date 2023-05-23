/// <reference types="cypress"/>

describe('My Second Test Suite', () => {
  
  it('The fifth suite', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  
    // Get mouse hover menu content using invoke method
    cy.get('.mouse-hover-content').invoke('show')
    
    // Click on menu item with Top text 
    cy.contains('Top').click()
    
    // Validate URL   
    cy.url().should('include', 'top')
    

  })
})  