/// <reference types="cypress"/>

describe('DayR01', function()
{

it('Verify if User can serach and add an item to their cart and proceeds to checkout', function()
{


// Visit the page    
cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')

// Grab searchbox and type
cy.get('input.search-keyword').type('s')

// wait 3 seconds
cy.wait(3000)

// storing an element in a variable using Alias 
cy.get('.products').as('productLocator')

// Get element using Alias
// Using each, Iterate through an array like structure (arrays or objects with a length property).

cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const productName = $el.find('h4.product-name').text()
if(productName.includes('Mushroom'))

{

cy.wrap($el).find('button').click()

}


})


// Click on Cart icon
cy.get('a.cart-icon').click()

// Click on Proceed to Checkout
cy.contains('PROCEED TO CHECKOUT').click()

// Click to Place Order
cy.contains('Place Order').click()



})


})
