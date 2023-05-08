
// ****Hooks*****

//before
//after
//beforeEach
//afterEach

// ****Tags*****

// it.skip   - Skip the blocks run
// it.only   - Runs only one it block

describe('Hooks and Tags', ()=>{

    before(() =>{
            cy.log("***** Launch app *****")
    })

    after(() =>{
        cy.log("***** Close app *****")
    })

    beforeEach(() =>{
        cy.log("***** Login app *****")
    })

    afterEach(() =>{
    cy.log("***** Log out app *****")
    })



    it('Search', ()=>{


    })

    it('Advanced Search', ()=>{

        
    })

    it('Listing products', ()=>{

        
    })

} )