describe('CssLocators', () =>{

    it('ID selectors', () =>{

        cy.visit("https://www.amazon.in/")
        cy.get("#twotabsearchtextbox").type('AARADHNAS bottle')   //id
        cy.get("[type='submit']").click()                         //Attribute
        cy.get("#nav-link-accountList").click()
        cy.get("[type='email']").type('+919655594466')
        cy.get("#continue").click()
        cy.get("#ap_password").type('Password123')
        cy.get("[type='submit']").click()
        cy.get(".a-list-item").contains("Your password is incorrect")  //Class  //Assertion
    })
})