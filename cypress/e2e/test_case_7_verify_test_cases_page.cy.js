import { Homepage } from "../pages/homepage"
const homepage = new Homepage()

import { TestCases } from "../pages/test_cases_page"
const test_cases = new TestCases()

it('test cases', function (){
    cy.visit('')
    homepage.getTestCasesOption().click()
    cy.url().should('eq', 'https://automationexercise.com/test_cases')
    test_cases.getTitle().should('have.text', 'Test Cases')
    test_cases.getTestCasesList().should('be.visible')
})