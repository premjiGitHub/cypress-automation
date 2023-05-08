describe('Check UI Elements', () =>{

    it.skip('Radio Buttons', () =>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //Visibility of Radio buttons
        cy.get("input#female").should('be.visible')
        cy.get("input#male").should('be.visible')

        //selecting Radio buttons
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')


    })

    it.skip('CheckBoxes', () =>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //Visibility of Check box
        cy.get("input#monday").should('be.visible')

        //Selecting single Check box - Monday
        cy.get("input#monday").check().should('be.checked')

        //Unselecting Check box - Monday
        cy.get("input#monday").uncheck().should('not.be.checked')

        //Selecting all the check box / Uncheck all
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //Selecting first checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


    })


    it.skip('Dropdowns with select', () =>{

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        //By Default India is there select Italy from dropdown
        cy.get("#zcf_address_country")
        .select("Italy")
        .should('have.value','Italy')
   
    })
    it.skip('Dropdowns without select', () =>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        //By Default India is there search in the Input box Italy from dropdown
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Italy')
    })
    it.skip('Auto Suggestion Dropdown', () =>{

        cy.visit('https://www.wikipedia.org/')

        cy.get("#searchInput").type("Delhi")
        cy.get('.suggestion-title').contains('Delhi University').click()
    })

    it('Dynamic Dropdown', () =>{

        cy.visit('https://www.google.com/')
        
        //cy.get("[aria-label='No thanks']").click()
        cy.get("textarea[name='q']").type('Prem kumar')
        cy.wait(1000)
        cy.get('div.wM6W7d>span').each( ($el, index, $list) => {
            if($el.text()=='Prem Kumar Dhumal')
            {
                cy.wrap($el).click()
            }
         } )
         cy.get("textarea[name='q']").should('have.value','prem kumar dhumal')

    } )

})
