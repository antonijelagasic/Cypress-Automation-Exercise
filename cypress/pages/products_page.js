export class Products {
    get productSection(){
        return cy.get('.features_items')
    }
    get viewProductButton(){
        return cy.get('.choose')
    }
    get searchField(){
        return cy.get('#search_product')
    }
    get submitSearch(){
        return cy.get('#submit_search')
    }
    get searchedProductsTitle(){
        return cy.get('h2.title.text-center')
    }
    get productsTitle(){
        return cy.get('.productinfo p')
    }
}