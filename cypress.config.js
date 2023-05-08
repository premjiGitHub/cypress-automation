const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',  // for HTML reports (Added by prem)

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      chromeWebSecurity=false;                                       // for chrome  (Added by prem for Access Denied issue)not working
      experimentalModifyObstructiveThirdPartyCode: true; 
      screenshotOnRunFailure=true;                                   // for screenshot on Failure  (Added by prem)
      require('cypress-mochawesome-reporter/plugin')(on);           // for HTML reports (Added by prem)
    },
  },
  
});
