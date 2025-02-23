export class Homepage {
    get pageTitle(){
        return cy.get('h1')
    }
    get navigation(){
        return cy.get('.navbar-nav')
    }
    get carousel(){
        return cy.get('#slider-carousel .carousel-inner')
    }
    get logo(){
        return cy.get('.logo.pull-left')
    }
    get featureItemsSection(){
        return cy.get('.features_items')
    }
    get subscribeEmailField(){
        return cy.get('#susbscribe_email')
    }
    get subscribeButton(){
        return cy.get('#subscribe')
    }
    get subrscibeSuccessAlert(){
        return cy.get('.alert-success.alert')
    }
    get productsOption(){
        return cy.get('[href="/products"]')
    }
    get cartOption(){
        return cy.get('[href="/view_cart"] .fa-shopping-cart')
    }
    get signUpLoginOption(){
        return cy.get('[href="/login"]')
    }
    get testCasesOption(){
        return cy.get('[href="/test_cases"] .fa-list')
    }
    get apiTestingOption(){
        return cy.get('[href="/api_list"] .fa-list')
    }
    get contacUsOption(){
        return cy.get('[href="/contact_us"]')
    }
}
