export class ContactUsPage{
    get contactUsForm(){
        return cy.get('#contact-us-form')
    }
    get getInTouchTitle(){
        return cy.get('.title.text-center').contains('Get In Touch')
    }
    get nameField(){
        return cy.get('[data-qa="name"]')
    }
    get emailField(){
        return cy.get('[data-qa="email"]')
    }
    get subjectField(){
        return cy.get('[data-qa="subject"]')
    }
    get messageField(){
        return cy.get('[data-qa="message"]')
    }
    get uploadButton(){
        return cy.get('[name="upload_file"]')
    }
    get submitButton(){
        return cy.get('[data-qa="submit-button"]')
    }
    get successNotification(){
        return cy.get('.status.alert.alert-success')
    }

    //
    contactUsForm(name, email, subject, message){
        this.nameField.clear().type(name)
        this.emailField.clear().type(email)
        this.subjectField.clear().type(subject)
        this.messageField.clear().type(message)
        this.submitButton.click()
    }
}