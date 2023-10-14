class menu{
    
    selectorsList(){
        const selectors = {
            adminBotton: "[href='/web/index.php/admin/viewAdminModule']",
            pimBotton: "[href='/web/index.php/pim/viewPimModule']",
            leaveBotton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeBotton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentBotton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoBotton: "[href='/web/index.php/pim/viewMyDetails']",
            perfomanceBotton: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardBotton: "[href='/web/index.php/dashboard/index']",
            directoryBotton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceBotton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimBotton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzBotton: "[href='/web/index.php/buzz/viewBuzz']",
        }

        return selectors
    }


    accessAdm() {
        cy.get(this.selectorsList().adminBotton).click()
    }

    accessPim() {
        cy.get(this.selectorsList().pimBotton).click()
    }

    accessLeave() {
        cy.get(this.selectorsList().leaveBotton).click()
    }

    accessTime() {
        cy.get(this.selectorsList().timeBotton).click()
    }

    accessRecruitment() {
        cy.get(this.selectorsList().recruitmentBotton).click()
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoBotton).click()
    }

    accessPerformance() {
        cy.get(this.selectorsList().perfomanceBotton).click()
    }

    accessDashboard() {
        cy.get(this.selectorsList().dashboardBotton).click()
    }

    accessDirectory() {
        cy.get(this.selectorsList().directoryBotton).click()
    }
    
    accessMaintenance() {
        cy.get(this.selectorsList().maintenanceBotton).click()
    }

    accessClaim() {
        cy.get(this.selectorsList().claimBotton).click()
    }

    accessBuzz() {
        cy.get(this.selectorsList().buzzBotton).click()
    }

}

export default menu