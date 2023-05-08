describe('WaitroseCellar', () =>{

    it('Login', () =>{
        
        cy.visit("https://www.waitrosecellar.com/")
        cy.get("#allow-all").click()    //id
        cy.get("#headerSignInLink").click()
        cy.fixture('TestData').then((data)=>{
            cy.get("#email").type(data.email)
            cy.get("#logonPassword").type(data.password)

        })
               cy.get(".linkToBtn").click()
       
        //Not WOrking Getting Access Denied
        //cy.get(".header__account__link").click()
        //cy.get("div[class='rowGrid details'] ul:nth-child(2) li:nth-child(1)").contains("premece29@gmail.com")

    })
    // it('PLP', () =>{

    //     cy.visit("https://www.waitroseflorist.com/")
    //     cy.get("#allow-all").click()    //id
    //     cy.get(".megamenu__link[href='/shop-florist/shop-by-occasion']").click()
        
    // })
}) 