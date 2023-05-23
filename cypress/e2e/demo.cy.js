/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('My Second Test Suite', () => {
  
  it('The fifth suite', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  
    // Get iframe using frame id
    cy.frameLoaded('#courses-iframe')

    // Get elements inside iframe 
    cy.iframe().find("a[href*='mentorship']").eq(0).click()

    cy.wait(2000)

    cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
  })
})  