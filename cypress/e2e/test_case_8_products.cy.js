import { Homepage } from "../pages/homepage"
const homepage = new Homepage()

import { Products } from "../pages/products_page"
const products_page = new Products()

import { ProductsDetails } from "../pages/products_details_page"
const product_details = new ProductsDetails()

it('verify products', function(){
    cy.visit('')
    cy.url().should('eq', 'https://automationexercise.com/')
    homepage.pageTitle.should('be.visible').and('contain.text', 'AutomationExercise')
    cy.title().should('eq', 'Automation Exercise')
    homepage.productsOption.click()
    cy.url().should('eq', 'https://automationexercise.com/products')
    products_page.productSection.should('be.visible')
    products_page.viewProductButton.first().click()
    cy.url().should('contain', 'automationexercise.com/product_details')
    product_details.productName.should('be.visible')
    product_details.productCategory.should('be.visible')
    product_details.productPrice.should('be.visible')
    product_details.productAvailability.should('be.visible')
})