export class ProductsDetails {
    getProductName (){
        return cy.get('.product-information h2')
    }
    getProductCategory(){
        return cy.get('.product-information p')
    }
    getProductPrice(){
        return cy.get('.product-information span span')
    }
    getProductAvailability(){
        return cy.get('.product-information p b').contains('Availability')
    }
}