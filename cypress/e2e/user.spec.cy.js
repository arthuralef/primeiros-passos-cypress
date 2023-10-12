import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: '.orangehrm-dashboard-grid',
    worngCredentialAlert: '.oxd-alert',
    myInfoBotton: "[href='/web/index.php/pim/viewMyDetails']",
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
    successSave: '.oxd-toast-close'
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
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
    cy.get(selectorsList.typeSubmiteBotton).eq(0).click()
    cy.get('body').should('contain', "Successfully Updated")
    cy.get(selectorsList.successSave)
    
  })
  it.skip('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.worngCredentialAlert)
  })
})