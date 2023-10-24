import userData from '../fixtures/users/userData.json'
import menu from '../pages/menuPage'
import login from '../pages/loginPage'
import myInfo from '../pages/myInfoPage'
import dashboard from '../pages/dashboardPage'

const Chance = require('chance')

const chance = new Chance()
const menuPage = new menu()
const loginPage = new login()
const myInfoPage = new myInfo()
const dashboardPage = new dashboard()



describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()

    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last(), chance.animal())

    myInfoPage.fillEmployeeDetails(chance.year(), chance.year(), chance.age(), '2025-07-01', chance.year(), chance.year(), chance.animal())

    myInfoPage.seveForm()

    myInfoPage.fillStatus()

    myInfoPage.saveCustomFields()

    myInfoPage.recordFoundEnter(chance.company())

    myInfoPage.saveRecord()

    myInfoPage.recordFoundDel()

  })

})