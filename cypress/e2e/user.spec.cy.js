import userData from '../fixtures/users/userData.json'
import menu from '../pages/menuPage'
import login from '../pages/loginPage'
import myInfo from '../pages/myInfoPage'
import dashboard from '../pages/dashboardPage'

const menuPage = new menu()
const loginPage = new login()
const myInfoPage = new myInfo()
const dashboardPage = new dashboard()



describe('Orange HRM Tests', () => {

  

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()

    loginPage.checkAccessInvalid(userData.userFail.username, userData.userFail.password)

    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('Arthur', 'Alef', 'Nascimento', 'LumeStack')

    myInfoPage.fillEmployeeDetails('001', '000', '999999', '2010-06-01', '6969', '6969', 'Capitan')

    myInfoPage.seveForm()

    myInfoPage.fillStatus()

    myInfoPage.saveCustomFields()

    myInfoPage.recordFoundEnter('Commit')

    myInfoPage.saveRecord()

    myInfoPage.recordFoundDel()

    
    /* 

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

})