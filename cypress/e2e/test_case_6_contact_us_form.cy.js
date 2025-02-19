import { Homepage } from "../pages/homepage"
const homepage = new Homepage()
import { ContactUsPage } from "../pages/contact_us_page"
const contact_us = new ContactUsPage()

it('contact us form', function(){
    cy.visit('')
    cy.url().should('eq', 'https://automationexercise.com/')
    homepage.getPageTitle().should('be.visible').and('contain.text', 'AutomationExercise')
    cy.title().should('eq', 'Automation Exercise')
    homepage.getContacUsOption().click()
    cy.url().should('eq', 'https://automationexercise.com/contact_us')
    contact_us.getGetInTouchTitle().should('be.visible')
    contact_us.getNameField().clear().type('Ana')
    contact_us.getEmailField().clear().type('ana.qa.tester@outlook.com')
    contact_us.getSubjectField().clear().type('Some Subject')
    contact_us.getMessageField().clear().type('Text for a message field')
    contact_us.getUploadButton().attachFile('test_image.jpg')
    contact_us.getSubmitButton().click()
    cy.on('window:confirm', () => true)
    contact_us.getSuccessNotification().should('have.text', 'Success! Your details have been submitted successfully.')
})

