export class ProductsDetails {
    get productName (){
        return cy.get('.product-information h2')
    }
    get productCategory(){
        return cy.get('.product-information p').contains('Category')
    }
    get productPrice(){
        return cy.get('.product-information span span')
    }
    get productAvailability(){
        return cy.get('.product-information p b').contains('Availability')
    }
}