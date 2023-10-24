import userData from "../fixtures/users/userData.json"
import login from "../pages/loginPage"
import dashboard from '../pages/dashboardPage'

const loginPage = new login()
const dashboardPage = new dashboard()

describe('Login Orange HRM Tests', () => {

    it('Login - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()
    })

    it('Login - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
    })

})