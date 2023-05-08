

describe('Capture Screenshot and Videos', ()=>{

    // Need to intentionally take screenshots
        it('Need to intentionally take screenshots', ()=>{
            cy.visit("https://amazon.in/")

           //  cy.screenshot("Homepage Amazon")


            cy.get("#nav-logo-sprites").should('be.visible').click()
            cy.get(".nav-a[href='/deals?ref_=nav_cs_gb']").should('be.visible').click()
            cy.get("span[aria-label='Deal type filter'] h4[class='GridFilterLabel-module__gridFilterHeader_2OVJdXqcMlKTHBkWC_qXE7']").should('be.visible')


            // cy.get("span[aria-label='Deal type filter'] h4[class='GridFilterLabel-module__gridFilterHeader_2OVJdXqcMlKTHBkWC_qXE7']").screenshot('Todays deals tab')
            .should('have.text',"Deal type")
    
        })

        // Cypress will Automatically take screenshots on failures (It will do only when run thru Cmd prompt headless / Headed)
        // Through Cypress App need to take intentional screenshots
      
    } )