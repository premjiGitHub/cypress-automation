describe('Handle Frames', () =>{

    it('Approach 1', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        let iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type('Hello Mr.Premkumar. Welcome to Cypress {ctrl+a}')
        cy.get("[aria-label='Bold']").click()
        
    })

    it('Approach 2  --By using custom command', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe("#mce_0_ifr").clear().type('Hello Mr.Premkumar. Welcome to Cypress {ctrl+a}')    //Custom command from support/Command.js
        cy.get("[aria-label='Bold']").click()
        
    })

    it('Approach 3  --By using cypress-iframe plugin', () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr")                                        //Load the iframe
        cy.iframe("#mce_0_ifr").clear().type('Hello Mr.Premkumar. Welcome to Cypress {ctrl+a}')    //Custom command from support/Command.js
        cy.get("[aria-label='Bold']").click()
        
    })
})