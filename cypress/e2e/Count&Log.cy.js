
//Print the data from Web
cy.get("h2.resultsSectionHeading").invoke('text').then((text) => {
    const totalNoOfProducts = text.trim();
cy.log('Tulips Search Results:   ' + totalNoOfProducts) 
})

//Another approach to Log the data in console
cy.get(".resp-tile__heading.text--uppercase").invoke('text').then((text) => {cy.log(text) })

//Assettion + Log the value in console
cy.get(".resp-tile__heading.text--uppercase").should('have.text','roses').invoke('text').then((text) => {cy.log(text) })


// Count with Product images in search results
cy.get(".productImage").its('length').then((count)=>{

cy.log('Total number of Images: ' + count)
}) 
// Count with Product Names in search results
cy.get(".productName").its('length').then((count)=>{

cy.log('Total number of Product Names: ' + count)
})


//Count two elements and Assert it
cy.get('.productImage').its('length').then((count1) => {
cy.get('.productName').its('length').then((count2) => {
})
expect(count1).to.equal(count2);
cy.log('Total number of Images: ' + count1)
cy.log('Total number of Product Names: ' + count2)
})