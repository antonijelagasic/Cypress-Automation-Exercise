export class ContactUsPage{
    getContactUsForm(){
        return cy.get('#contact-us-form')
    }
    getGetInTouchTitle(){
        return cy.get('.title.text-center').contains('Get In Touch')
    }
    getNameField(){
        return cy.get('[data-qa="name"]')
    }
    getEmailField(){
        return cy.get('[data-qa="email"]')
    }
    getSubjectField(){
        return cy.get('[data-qa="subject"]')
    }
    getMessageField(){
        return cy.get('[data-qa="message"]')
    }
    getUploadButton(){
        return cy.get('[name="upload_file"]')
    }
    getSubmitButton(){
        return cy.get('[data-qa="submit-button"]')
    }
    getSuccessNotification(){
        return cy.get('.alert-success').eq(0)
    }

    //
    contactUsForm(name, email, subject, message){
        this.getNameField().clear().type(name)
        this.getEmailField().clear().type(email)
        this.getSubjectField().clear().type(subject)
        this.getMessageField().clear().type(message)
        this.getSubmitButton().click()
    }
}