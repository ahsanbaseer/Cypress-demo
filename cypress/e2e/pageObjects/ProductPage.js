class ProductPage 
{

clickOnCheckoutButton() {
    return cy.get('.nav-link.btn.btn-primary')
}
    
finalCheckoutButton() {
    return cy.get('.btn.btn-success')
}

}

export default ProductPage;
