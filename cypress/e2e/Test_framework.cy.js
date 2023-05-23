/// <reference types="Cypress"/>

import HomePage from '../e2e/pageObjects/HomePage'

import ProductPage from '../e2e/pageObjects/ProductPage'


describe('Hooks', () => { 

  // let data;

  before(function() {
    // Runs once before all tests in the block 
    cy.fixture('example').then(function (data)
    {
      this.data = data
      cy.log('THIS: ', this.data)
    })
  })

 
  it('Learn about Test hooks', function() {


    // Cypress.config('defaultCommandTimeout', 7000)
    const homePage = new HomePage()
    const productPage = new ProductPage()


    // Visit URL 
    cy.visit(`${Cypress.env('url')}/angularpractice/`)
  
    // Get Name field and input data using fixtures file 
    homePage.getEditbox().type(this.data.name)
    
    // Select Gender from dropdown
    homePage.getGender().select(this.data.gender)
    
    // Confirm the value of name field that has been entered by two way binding example field
    homePage.getTwoWayDataBinding().should('have.value', this.data.name) 

    // Verify if input field has a minimum length of 2 
    cy.get(':nth-child(1) > .form-control').should('have.attr','minlength', '2')


    // Verify if Entrepreneur checkbox is disabled 
    homePage.getEntrepreneur().should('be.disabled')

    // Click on Shop button in nav
    homePage.getShopTab().click()


    // Using Custom Commands, Iterate through an array like structure (arrays or objects with a length property). -> refer command.js file
    this.data.productName.forEach(function(element) {
      cy.selectProduct(element) 
    });
    
    

    // Click on Checkout button 
    productPage.clickOnCheckoutButton().click() 

    var sum = 0
    
    // Sum of two values using Javascript 
    cy.get('tr td:nth-child(4) > strong').each(($el, index, $list) => {

      // storing text of the column in a variable  
      const amount = $el.text()

      // Splitting the text into two parts to seperate currency symbol and amount and store it in a variable
      var res = amount.split(" ")

      // Using trim method, deleting any whitespace before and after the amount  
      res = res[1].trim()

      // Convert string value into number and then add it with sum variable value 
      sum = Number(sum) + Number(res)

    }).then(function()
    {
      //  Log sum value 
      cy.log(sum)

    })

    cy.get('h3 > strong').then(function(total){

      // storing text of the column in a variable
      const amountText = total.text()
      
      // Splitting the text into two parts to seperate currency symbol and amount and store it in a variable
      var totalText = amountText.split((" "))

      // Using trim method, deleting any whitespace before and after the amount
      totalText = totalText[1].trim()

      // Verify if sum(Variable) equal to totalText(Variable) (Converting totalText variable value into number)
      expect(Number(totalText)).to.equal(115000)
    })


    
    // Click on final checkout button 
    productPage.finalCheckoutButton().click()

    // Using each iterate through all list elements and select India
    cy.get('#country[type=text]').type('In').wait(7000)
    
    cy.get('.suggestions > ul > li > a').each(($el, index, $list) => {

      if($el.text()==="India") 
      {
        cy.wrap($el).click()
      }

    })

    // Click on I agree with Terms and Condition checkbox 
    cy.get('input#checkbox2[type=checkbox]').click({force:true})

    // Click on Purchase button 
    cy.get('.btn.btn-success.btn-lg').click()

    // Verify alert message 
    cy.get('.alert').then(function(alert) 
    {
      const alertText = alert.text()
      expect(alertText.includes("Success")).to.be.true

    })


   


  })
})  