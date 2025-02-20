export class Products {
    getProductSection(){
        return cy.get('.features_items')
    }
    getViewProductButton(){
        return cy.get('.choose')
    }
}