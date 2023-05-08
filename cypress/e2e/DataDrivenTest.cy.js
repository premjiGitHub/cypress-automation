describe('Data Driven', () =>{

    it('Login', () =>{
        
        cy.visit("https://www.waitrosecellar.com")
        cy.get("#allow-all").click()    //id

        cy.fixture("DatatDrivenTestData").then((data)=>{

            data.forEach((userdata) => {
                cy.visit("https://www.waitrosecellar.com/webapp/wcs/stores/servlet/LogonForm?catalogId=10551&myAcctMain=1&langId=-1&storeId=10701")
                cy.get("#email").type(userdata.email)
                cy.get("#logonPassword").type(userdata.password)
                cy.get(".linkToBtn").click()   
            })
            

        })
               

    })

}) 