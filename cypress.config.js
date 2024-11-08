const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  search: 'zeno yu',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
