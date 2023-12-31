class login {

    selectorsList() {
        const selectors  = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            worngCredentialAlert: '.oxd-alert',
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    checkAccessInvalid(username, password) {
        cy.get(this.selectorsList().usernameField)//.type(username)
        cy.get(this.selectorsList().passwordField)//.type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().worngCredentialAlert)
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default login