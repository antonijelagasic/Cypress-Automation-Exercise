export class TestCases {
    get title(){
        return cy.get('h2.title')
    }
    get testCasesList(){
        return cy.get('.panel-title').contains('Test Case')
    }
    get firstTestCase(){
        return cy.get('[href="#collapse1"]')
    }

}