

/// WEB tables      https://youtu.be/uDpJsk4ReuY

/// Mouse Operations   https://youtu.be/qqH2QSXmVJg

it('Mouse hover operations WORKING', () => {
    cy.viewport(1280, 720)
    cy.visit("https://www.spicejet.com/")
    cy.contains("Add-ons").invoke('show').trigger('mouseover')
    cy.contains("MyFlexiPlan").trigger('mouseover').click()
    });




          //Mouse Hover operations   - NOT working
          cy.viewport(1280, 720)
          cy.visit("https://www.waitroseflorist.com/")
          cy.get("#allow-all").click()
          cy.find(".megamenu__link[href='/shop-florist/shop-by-type']").find(".megamenu__link--inner[href='/shop-florist/shop-by-type/flowers']").click()
          