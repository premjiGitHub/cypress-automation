// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />

/// <reference types="cypress-iframe" />

/// <reference types="cypress-file-upload" />

Cypress.Commands.add("bypassCors", () => {
    cy.visit("about:blank", {
      onBeforeLoad(win) {
        // Modify the headers to allow CORS
        win.eval(`
          const xhr = new win.XMLHttpRequest();
          xhr.open('GET', 'your_target_url', true);
          xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
          xhr.send();
        `);
      }
    });
  });
  Cypress.Commands.add("getIframe", (iframe) => {
        cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
  })