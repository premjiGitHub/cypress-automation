

describe('Page Navigation', ()=>{

// go()
    it('Go and Back', ()=>{
        cy.visit("https://amazon.in/")
        cy.get("#nav-logo-sprites").should('be.visible').click()
        cy.get(".nav-a[href='/deals?ref_=nav_cs_gb']").should('be.visible').click()
        cy.get("span[aria-label='Deal type filter'] h4[class='GridFilterLabel-module__gridFilterHeader_2OVJdXqcMlKTHBkWC_qXE7']").should('be.visible')
        .should('have.text',"Deal type")
        cy.go('back')    // back home page
        cy.go('forward')    // forward to Todays deals page
        cy.get("span[aria-label='Deal type filter'] h4[class='GridFilterLabel-module__gridFilterHeader_2OVJdXqcMlKTHBkWC_qXE7']").should('be.visible')
        .click().should('have.text',"Deal type")

        //Alternatively -1 or 1 can also be used for navigation
        cy.go(-1)    // back home page
        cy.go(1)    // forward to Todays deals page
        cy.get("span[aria-label='Deal type filter'] h4[class='GridFilterLabel-module__gridFilterHeader_2OVJdXqcMlKTHBkWC_qXE7']").should('be.visible')
        .click().should('have.text',"Deal type")

        //  Page Reload
        cy.reload()
        

    })

} )