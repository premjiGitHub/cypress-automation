describe('Handle Tabs', () =>{

    //Cypress will NOT support validating the data in new tab

    it('Approach 1', () =>{
        //Remove the target="_blank" which open the link in new tab, So that the same url can be opened in current tab.
        cy.visit("https://the-internet.herokuapp.com/windows")     //Parent tab
        cy.get('.example >a').invoke('removeAttr','target').click()    //Clicking on Link
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(2000)
        //operations
        cy.go('back')   //back to parent tab
        cy.url().should('include','https://the-internet.herokuapp.com/windows')
    })

    it('Approach 2', () =>{
        //From parent tab get the href property to open target url in same tab.
        cy.visit("https://the-internet.herokuapp.com/windows")     //Parent tab
        cy.get('.example >a').then((e)=>{

            let url=e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        
        cy.wait(2000)

        //operations
        cy.go('back')   //back to parent tab
        cy.url().should('include','https://the-internet.herokuapp.com/windows')
    })
})