import { Homepage } from "../pages/homepage"
const homepage = new Homepage()

import { Products } from "../pages/products_page"
const products_page = new Products()

it('search product', function(){
    cy.visit('')
    cy.url().should('eq', 'https://automationexercise.com/')
    homepage.getPageTitle().should('be.visible').and('contain.text', 'AutomationExercise')
    cy.title().should('eq', 'Automation Exercise')
    homepage.getProductsOption().click()
    cy.url().should('eq', 'https://automationexercise.com/products')
    products_page.getProductSection().should('be.visible')
    products_page.getSearchField().clear().type('Winter')
    products_page.getSubmitSearch().click()
    products_page.getSearchedProductsTitle().should('be.visible')
    products_page.getProductsTitle().each((title)=>{
        cy.wrap(title).should('contain', 'Winter')
    })
})