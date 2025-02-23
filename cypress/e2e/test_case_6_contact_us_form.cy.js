import { Homepage } from "../pages/homepage"
const homepage = new Homepage()
import { ContactUsPage } from "../pages/contact_us_page"
const contact_us = new ContactUsPage()

it('contact us form', function(){
    cy.visit('')
    cy.url().should('eq', 'https://automationexercise.com/')
    homepage.pageTitle.should('be.visible').and('contain.text', 'AutomationExercise')
    cy.title().should('eq', 'Automation Exercise')
    homepage.contacUsOption.click()
    cy.url().should('eq', 'https://automationexercise.com/contact_us')
    contact_us.getInTouchTitle.should('be.visible')
    contact_us.nameField.clear().type('Ana')
    contact_us.emailField.clear().type('ana.qa.tester@outlook.com')
    contact_us.subjectField.clear().type('Some Subject')
    contact_us.messageField.clear().type('Text for a message field')
    contact_us.uploadButton.attachFile('test_image.jpg')
    contact_us.submitButton.click()
    cy.on('window:confirm', () => true)
    contact_us.successNotification.should('have.text', 'Success! Your details have been submitted successfully.')
})

