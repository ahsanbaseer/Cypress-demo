/// <reference types="cypress"/>

describe('DayR', function()
{

it('Verify if User can serach and add an item to their cart', function()
{


// Visit the page    
cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')

// Grab searchbox and type
cy.get('input.search-keyword').type('s')

// wait 3 seconds
cy.wait(3000)

//get product by length 
cy.get('.product').should('have.length', 14)

// get product by length which are visible 

cy.get('.product:visible').should('have.length', 13)

// Using Parent child chaining; get length of products

cy.get('.products').find('.product').should('have.length', 13)

// Find a product with index 1 - Click on Add to Card

cy.get('.products').find('.product').eq(1)

// Using each, Iterate through an array like structure (arrays or objects with a length property).

cy.get('.products').find('.product').each(($el, index, $list) => {

const productName = $el.find('h4.product-name').text()
if(productName.includes('Mushroom'))

{

cy.wrap($el).find('button').click()

}


})
    


})


})