const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: true
  },

  webServer: {
    command: 'npx serve .',
    port: 3000,
    reuseExistingServer: true
  }
});