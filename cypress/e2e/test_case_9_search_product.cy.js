import { Homepage } from "../pages/homepage"
const homepage = new Homepage()

import { Products } from "../pages/products_page"
const products_page = new Products()

it('search product', function(){
    cy.visit('')
    cy.url().should('eq', 'https://automationexercise.com/')
    homepage.pageTitle.should('be.visible').and('contain.text', 'AutomationExercise')
    cy.title().should('eq', 'Automation Exercise')
    homepage.productsOption.click()
    cy.url().should('eq', 'https://automationexercise.com/products')
    products_page.productSection.should('be.visible')
    products_page.searchField.clear().type('Winter')
    products_page.submitSearch.click()
    products_page.searchedProductsTitle.should('be.visible')
    products_page.productsTitle.each((title)=>{
        cy.wrap(title).should('contain', 'Winter')
    })
})