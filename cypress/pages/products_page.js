export class Products {
    getProductSection(){
        return cy.get('.features_items')
    }
    getViewProductButton(){
        return cy.get('.choose')
    }
    getSearchField(){
        return cy.get('#search_product')
    }
    getSubmitSearch(){
        return cy.get('#submit_search')
    }
    getSearchedProductsTitle(){
        return cy.get('h2.title.text-center')
    }
    getProductsTitle(){
        return cy.get('.productinfo p')
    }
}