describe('XPathLocators', () =>{

    it('find no of products', () =>{
    
    cy.visit("https://automationexercise.com/")
    cy.xpath("[src='/get_product_picture/1']")
    })
    

})