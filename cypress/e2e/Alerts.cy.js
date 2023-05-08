describe('Alerts', () =>{

 // 1) Javescripr Alert: It will have some text and OK button
    it('JS Alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        //Alert window will be automatically closed by cypres. So we just verify Message looks after closed

        cy.get("#result").should('have.text','You successfully clicked an alert')

    })


// 2) Javescriprt Confirmation Alert: It will have some text with OK button  and Cancel buttons
    it('JS Confirm Alert - OK',()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm',(t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        //Alert window will be automatically closed by cypres by clicking OK button. So we just verify Message looks after closed.

        cy.get("#result").should('have.text','You clicked: Ok')

    })
    it('JS Confirm Alert - Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
            cy.on('window:confirm',(t) => {
                expect(t).to.contains('I am a JS Confirm')
            })
            
            cy.on('window:confirm',(t) => false)    // Cypress will close alert window using cancel button

            cy.get("#result").should('have.text','You clicked: Cancel')
    
        })




// 3) Javescriprt Prompt Alert: It will have some text with a text box for user input along with OK
    it('JS prompt Alert Click-OK',()=>{

    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    //Taking control on the alert before it appears
    
    cy.window().then( (win) => {
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click()  
        //Cypresss will automatically close prompted alert - it will user OK button  - by default
        cy.get("#result").should('have.text','You entered: welcome')
    })


    it('JS prompt Alert - Click Cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
            cy.get("button[onclick='jsPrompt()']").click() 
         
            cy.on('window:prompt',(t) => false)   // Cypress will close alert window using cancel button (**************NOT WORKING************)
            
            cy.get("#result").should('have.text','You entered: null')
        })

// 4) Authenticated Alert 


        it.only('Authenticated Alert',()=> {
        //Approach 1: 
            cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
                                                                    {
                                                                        username: "admin",
                                                                        password: "admin"
                                                                    }
                })
                    cy.get("div[class='example'] p").should('have.contain',"Congratulations")
         

        // Approach 2:
        
                    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
                    cy.get("div[class='example'] p").should('have.contain',"Congratulations")

              })

})