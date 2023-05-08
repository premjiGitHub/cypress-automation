
import Login from "../PageObjects/LoginPage"
import LoginCommonElements from "../PageObjects/LoginPage"

describe('Working with POM Code Reusability', ()=>{

    // Passing the creds directly in code for each test case
        it('General coding style', ()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
            
        })

    // Passing the creds directly in code but use POM for reuability
        it('Using POM but passing user creds in code', ()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            const ln=new Login();
            ln.setUsername("Admin");
            ln.setPassword('admin123');
            ln.clickSubmit();
            ln.verifyLogin();
            
        })
    // Passing the creds from fixture file and use POM for reuability
        it('Using POM but passing user creds from Fixture file', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('UserDataOrangeHRM').then((data) =>{
            const ln=new LoginCommonElements()
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()

        })
                   
    })
})