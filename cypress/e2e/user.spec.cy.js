import userData from '../fixtures/users/userData.json'
import menu from '../pages/menuPage'
import login from '../pages/loginPage'
import dashboard from '../pages/dashboardPage'

const menuPage = new menu()
const loginPage = new login()
const dashboardPage = new dashboard()

describe('Orange HRM Tests', () => {

  const selectorsList = {

   
    

    
    firstNameField: "[name='firstName']",
    middieNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    firstName: "Arthur",
    middieName: "Alef",
    lastName: "Nascimento",
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


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()



    
    /* 
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
   
    cy.get(selectorsList.myInfoBotton).click()
    cy.get(selectorsList.firstNameField).clear().type(selectorsList.firstName)
    cy.get(selectorsList.middieNameField).clear().type(selectorsList.middieName)
    cy.get(selectorsList.lastNameField).clear().type(selectorsList.lastName)
    cy.get(selectorsList.genericField).eq(3).clear().type('LumeStack')
    cy.get(selectorsList.genericField).eq(4).clear().type('007')
    cy.get(selectorsList.genericField).eq(5).clear().type('000000000')
    cy.get(selectorsList.genericField).eq(6).clear().type('1234567890')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-07-01')
    cy.get(selectorsList.dateCloseBotton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('1111')
    cy.get(selectorsList.genericField).eq(9).clear().type('9999')
    cy.get(selectorsList.typeSubmiteBotton).eq(0).click({ force: true })
    cy.get('body').should('contain', "Successfully Updated")
    cy.get(selectorsList.successSave)
    cy.get(selectorsList.nationalityField).click ()
    cy.get(selectorsList.nationality).click()
    cy.get(selectorsList.maritalStatusField).click()
    cy.get(selectorsList.maritalSatus).click()
    cy.get(selectorsList.bloodTypeField).click()
    cy.get(selectorsList.bloodType).click()
    cy.get(selectorsList.typeSubmiteBotton).eq(1).click()
    cy.get('body').should('contain', "Successfully Saved") */

  })
  it.skip('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.worngCredentialAlert)
  })
})