class myInfo {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middieNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input--active',
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseBotton: ".--close",
            typeSubmiteBotton: "[type='submit']",
            successSave: '.oxd-toast-close',
            nationalityField: ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
            nationality: ':nth-child(27)',
            maritalStatusField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
            maritalSatus: '.oxd-select-dropdown > :nth-child(2)',
            bloodTypeField: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
            bloodType: '.oxd-select-dropdown > :nth-child(8)',

        }

        return selectors

    }

    fillPersonalDetails(firstName, middieName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middieNameField).clear().type(middieName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expireyDate, ssnNumber, sinNumber) {

        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expireyDate)
        cy.get(this.selectorsList().dateCloseBotton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
    }

    seveForm() {
        cy.get(this.selectorsList().typeSubmiteBotton).eq(0).click({ force: true })
        cy.get('body').should('contain', "Successfully Updated")
        cy.get(this.selectorsList().successSave)

    }

    fillStatus() {
        cy.get(this.selectorsList().nationalityField).click()
        cy.get(this.selectorsList().nationality).click()
        cy.get(this.selectorsList().maritalStatusField).click()
        cy.get(this.selectorsList().maritalSatus).click()
        cy.get(this.selectorsList().bloodTypeField).click()
        cy.get(this.selectorsList().bloodType).click()
    }

    saveCustomFields() {
        cy.get(this.selectorsList().typeSubmiteBotton).eq(1).click()
        cy.get('body').should('contain', "Successfully Saved")
    }

}

export default myInfo