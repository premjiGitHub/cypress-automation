describe('Assertions Demo', () =>{

    it('Implicit Assertions', () =>{
        
        // should & and      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','opensource-demo.orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','opensource-demo.orangehrmlive')

        //Capture url once and add multiple assertions by
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','opensource-demo.orangehrmlive')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','opensource-demo.orangehrmlive')

        //Use And instead of multiple should
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','opensource-demo.orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','opensource-demo.orangehrmlive')

        //Negative Assertions test
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('not.include','opensource-demo.orangehrmlive    ABCDEGGHIJKLMNOPQRSTUVWXYZ')
        .and('not.eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login    ABCDEGGHIJKLMNOPQRSTUVWXYZ')
        .and('not.contain','opensource-demo.orangehrmlive ABCDEGGHIJKLMNOPQRSTUVWXYZ')

        //Assertion on Title
        cy.title().should('include','Orange').and('eq','OrangeHRM').and('not.contain','Orange Premkumar')

        //Verify logo is present or not
        cy.get('.orangehrm-login-branding > img').should('be.visible')   // logo visible or not
        cy.get('.orangehrm-login-branding > img').should('exist')    // logo exists or not

        cy.xpath("//a").should('have.length',"5")  // No of links
    
        cy.get("input[placeholder='Username']").type('Admin Prem')       //provide a value into field
        cy.get("input[placeholder='Username']").should('have.value','Admin Prem')    //Verify the same is entered
        cy.get("input[placeholder='Username']").should('have.length','1')     //Verify the length
        cy.get("input[placeholder='Username']").should('not.have.value','admin')   //Verify the not have value

    })

    it('Explicit Assertions', () =>{
        
        // expect -- BDD       assert -- TDD
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let ExpName="prem123";
        cy.get(".oxd-userdropdown-name").then( (UserName) => {    //Once login Username is randomly generated in OrangeHRM site

            let ActualName=UserName.text();

            //BDD style
            expect(ActualName).to.equal(ExpName);
            expect(ActualName).to.not.equal(ExpName);

            //TDD style
            assert.equal(ActualName,ExpName);
            assert.notEqual(ActualName,ExpName);

        })
    })
    


})