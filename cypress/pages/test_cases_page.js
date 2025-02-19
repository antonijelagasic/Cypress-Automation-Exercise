export class TestCases {
    getTitle(){
        return cy.get('h2.title')
    }
    getTestCasesList(){
        return cy.get('.panel-title').contains('Test Case')
    }

}