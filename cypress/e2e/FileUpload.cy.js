describe('File Uploads',()=>{

    it('Single File Upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('engineer.jpg')
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    
    })



    it('File Upload - Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'engineer.jpg',fileName:'Cartoon.jpg'})
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        
    })


    it('File Upload - Drag and Drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('engineer.jpg',{subjectType:'drag-n-drop'})
        cy.wait(2000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains('engineer.jpg')
        cy.get('#file-submit').click()

    })



    it('Multiple Files Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['engineer.jpg','ITemployee.jpg'])
        cy.wait(2000)
        cy.get(':nth-child(6) > Strong').should('contain.text','Files You Selected:')
    })



    it.only('Files Upload - Shadow Dom',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("ITemployee.jpg")    
        cy.wait(2000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('ITemployee.jpg')
    })

})