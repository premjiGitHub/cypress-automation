describe('Florist LiveSmokePack', () =>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it.only('1.Login Florist Site', () =>{
        
        cy.visit("https://www.waitroseflorist.com/")
        cy.get("#allow-all").click()    //id
        cy.get("#headerSignInLink").click()
        cy.fixture('FloristLiveTestData').then((data)=>{
            cy.get("#email").type(data.FloristUserName)
            cy.get("#logonPassword").type(data.FloristPassword)

        })
            cy.get(".linkToBtn").click()
       
        //Not WOrking Getting Access Denied
        //cy.get(".header__account__link").click()
        //cy.get("div[class='rowGrid details'] ul:nth-child(2) li:nth-child(1)").contains("premece29@gmail.com")

    })

    it('2.Verify all Homepage Megamenu links to PLP', () =>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });

        cy.visit("https://www.waitroseflorist.com/")
        cy.get("#allow-all").click()
        //SHOP ALL tab
        cy.get('wrapper').should('not.exist')
        cy.get(".megamenu__link[href='/shop-florist/shop-by-type']").click()
        cy.url().should('eq','https://www.waitroseflorist.com/shop-florist/shop-by-type')
        cy.get("h1[class='resp-tile__heading text--uppercase']").should('have.text','Shop all')
        cy.go('back')
        //SUMMER tab
        cy.get(".megamenu__link[href='/summer-flowers-plants ']").click()
        cy.url().should('eq','https://www.waitroseflorist.com/summer-flowers-plants')
        cy.get(".resp-tile__heading.text--uppercase").should('have.text','SUMMER FLOWERS & PLANTS')
        cy.go('back')
        //OCCASSIONS tab
        //cy.get('wrapper').should('not.exist')
        cy.get(".megamenu__link[href='/shop-florist/shop-by-occasion']").click()
        cy.url().should('eq','https://www.waitroseflorist.com/shop-florist/shop-by-occasion')
        cy.get(".resp-tile__heading.text--uppercase").should('have.text','Shop all occasions')
        //GIFTS & CHOCS tab
        //cy.get('wrapper').should('not.exist')
        cy.get(".megamenu__link[href='/inspiration-and-advice/welcome-to-florist/add-something-special/flowers-and-chocolate']").click()
        cy.url().should('eq','https://www.waitroseflorist.com/inspiration-and-advice/welcome-to-florist/add-something-special/flowers-and-chocolate')
        cy.get(".resp-tile__heading.text--uppercase").should('have.text','Gifts & chocolates')
        //UNDER £30 tab
        cy.get(".megamenu__link[href='/flowers-under-30']").click()
        cy.url().should('eq','https://www.waitroseflorist.com/flowers-under-30')
        cy.get(".resp-tile__heading.text--uppercase.text--center").should('have.text','UNDER £30')
        //OFFERS tab
        cy.get(".megamenu__link.text--red").click()
        cy.url().should('eq','https://www.waitroseflorist.com/shop-florist/shop-by-type/offers')
        cy.screenshot("Offers")
        cy.get(".resp-tile__heading.text--uppercase.text--white.text--center").should('have.text','OFFERS')
                       
    })

    it('3.Verify the Search with words', () =>{      
        cy.visit("https://www.waitroseflorist.com/")
        cy.get("#allow-all").click()
        cy.get('#SimpleSearchForm_SearchTerm').type("Roses")
        cy.get('#search_submit').click()
        cy.get('wrapper').should('not.exist')
        
        //Assettion + Log the value in console
        cy.get(".resp-tile__heading.text--uppercase").should('have.text','roses').invoke('text').then((text) => {cy.log(text) })

        cy.get("h2.resultsSectionHeading").invoke('text').then((text) => {
                                                                        const totalNoOfProducts = text.trim();
                                                                        cy.log('Results:   ' + totalNoOfProducts) 
                                                                        })
        cy.get('.productImage').its('length').then((count1) => {
        cy.get('.productName').its('length').then((count2) => {           
                                                                expect(count1).to.equal(count2);
                                                                cy.log('Total No of Images: ' + count1)
                                                                cy.log('Total No of Product: ' + count2)
                                                              })
                                                                })           
     })

     it('4.Verify the Search with Product number and Validate PDP page', () =>{      
        cy.visit("https://www.waitroseflorist.com/")
        cy.get("#allow-all").click()
        cy.get('#SimpleSearchForm_SearchTerm').type("869502")
        cy.get('#search_submit').click()
        cy.get('wrapper').should('not.exist')
        cy.get('.s7staticimage').trigger('mouseover')
        cy.wait(2000)
        cy.get('.s7highlight').should('be.visible')
        cy.wait(2000)

        //cy.get('.productName').should('have.text','Ready to arrange Mixed Sweetheart Roses')

        cy.get('.disabled').should('be.visible')    //Add button not enabled before selecting date
        cy.get('wrapper').should('not.exist')
        cy.get('.calendarIcon.no-date').click()
        cy.get("td.undefined[data-month='4']").first().click()  
        cy.get('.calendarIcon').click()
        cy.get("td.undefined[data-month='4']").last().click()

        cy.get('.disabled').should('not.exist')     //Add button not enabled before selecting date

        cy.get("a[id='addButton'] span[class='btnBodyBg']").click()
        
        
             
     })

     it('5.LHS Validation PLP page', () =>{

        

            cy.visit('https://www.waitroseflorist.com/');  
            cy.get("#allow-all").click()
            cy.get('#SimpleSearchForm_SearchTerm').type("Roses")
            cy.get('#search_submit').click()
            cy.get('#wrapper').should('not.exist')
            cy.get("#facet_checkbox-700000000000000000377105120101100").should('be.visible')
            cy.wait(1000)
            cy.get("#facet_checkbox-700000000000000000377105120101100").check().should('be.checked')
            //cy.get(".edr_go").click()
            cy.window().then((win) => {
                // Override the open method of the window object to prevent pop-ups
                win.open = () => null;
              });
            //cy.get("[aria-label='Close']").click()
            
            //cy.get("div[class='filter_option'] div[class='filter_sprite']").click()
            //cy.get("#facet_checkbox-700000000000000000377105120101100").uncheck().should('not.be.checked')
            //cy.get("div.div[id='section_list_ads_f5_ntk_cs'] div[class='facet-list-wrap facet-list-wrap--active']").last().check().should('be.checked')
         
    })
    
 
     
    it('6.Verify the HomePage Links', () =>{
        
       // LHS Validation Checkboxes
       
       
    })
}) 