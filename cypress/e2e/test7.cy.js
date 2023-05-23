/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('My Second Test Suite', () => {
  
  it('The fifth suite', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  
    // Click on open window 
    cy.get('#openwindow').then(function(el)
    {

      const URL = el.prop('href')

      cy.log(URL)

     // cy.visit(URL)

    })

  })
})  