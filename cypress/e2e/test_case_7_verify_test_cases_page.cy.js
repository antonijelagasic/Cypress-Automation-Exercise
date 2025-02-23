import { Homepage } from "../pages/homepage"
const homepage = new Homepage()

import { TestCases } from "../pages/test_cases_page"
const test_cases_page = new TestCases()
import steps from "../fixtures/steps.json"

it('test cases', function (){
    cy.visit('')
    homepage.testCasesOption.click()
    cy.url().should('eq', 'https://automationexercise.com/test_cases')
    test_cases_page.title.should('have.text', 'Test Cases')
    test_cases_page.testCasesList.should('be.visible')
    test_cases_page.firstTestCase.click()
    for (let i = 1; i <= Object.keys(steps).length; i++){
        cy.contains(steps[`step${i}`]).should('be.visible')
    }
})