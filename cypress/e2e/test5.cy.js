/// <reference types="cypress"/>

describe('My Second Test Suite', () => {
  
  it('The fifth suite', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  
    // Verify text in a row of a table 
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

      const rowText = $el.text()

      if(rowText.includes('Python'))
      {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {

          const priceText = price.text()
          expect(priceText).to.equal('25')

        })
      }

    })
  
  })
})  