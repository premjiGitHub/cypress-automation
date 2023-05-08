
class Login
{
    setUsername(username)
    {
        cy.get("input[placeholder='Username']").type(username)
    }
    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)
    }
    clickSubmit()
    {
        cy.get("button[type='submit']").click()
    }
    verifyLogin()
    {
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text','Dashboard')
    }

}

class LoginCommonElements
    {
    
        txtUserName="input[placeholder='Username']"
        txtPassword="input[placeholder='Password']"
        btnSubmit="button[type='submit']"
        lblmsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    
        setUsername(username)
        {
            cy.get(txtUserName).type(username)
        }
        setPassword(password)
        {
            cy.get(txtPassword).type(password)
        }
    
        clickSubmit()
        {
            cy.get(btnSubmit).click()
        }
        verifyLogin()
        {
            cy.get(lblmsg).should('have.text','Dashboard')
        }
    
    }

export  default Login
LoginCommonElements 
