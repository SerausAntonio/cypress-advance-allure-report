const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todo.qacart.com',
    video: true,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
      // implement node event listeners here
    },
    env:{
      allure: true,
      allureAttachRequests: true,
      allureAddVideoOnPass: true,
    }
  },
});
