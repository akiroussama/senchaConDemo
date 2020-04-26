module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // in Chromium, preferences can exist in Local State, Preferences, or Secure Preferences
      // via launchOptions.preferences, these can be acccssed as `localState`, `default`, and `secureDefault`

      // for example, to set `somePreference: true` in Preferences:
      launchOptions.preferences.default['preference'] = true

      return launchOptions
    }

    if (browser.family === 'firefox') {
      // launchOptions.preferences is a map of preference names to values
      launchOptions.preferences['some.preference'] = true

      return launchOptions
    }

    if (browser.name === 'electron') {
      // launchOptions.preferences is a `BrowserWindow` `options` object
      launchOptions.preferences.darkTheme = true

      return launchOptions
    }
  })
}