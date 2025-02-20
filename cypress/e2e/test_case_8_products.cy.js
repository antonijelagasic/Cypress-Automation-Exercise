import { Homepage } from "../pages/homepage"
const homepage = new Homepage()

import { Products } from "../pages/products_page"
const products_page = new Products()

import { ProductsDetails } from "../pages/products_details_page"
const product_details = new ProductsDetails()

it('verify products', function(){
    cy.visit('')
    cy.url().should('eq', 'https://automationexercise.com/')
    homepage.getPageTitle().should('be.visible').and('contain.text', 'AutomationExercise')
    cy.title().should('eq', 'Automation Exercise')
    homepage.getProductsOption().click()
    cy.url().should('eq', 'https://automationexercise.com/products')
    products_page.getProductSection().should('be.visible')
    products_page.getViewProductButton().first().click()
    cy.url().should('contain', 'automationexercise.com/product_details')
    product_details.getProductName().should('be.visible')
    product_details.getProductCategory().should('be.visible')
    product_details.getProductPrice().should('be.visible')
    product_details.getProductAvailability().should('be.visible')
})