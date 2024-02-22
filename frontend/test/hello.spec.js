const chrome = require('selenium-webdriver/chrome');
const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
    await driver.get('http://127.0.0.1:5500/src/index.html');
  
    let title = await driver.getTitle();
    assert.equal("Office Lunch Tracker", title);
  
  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
}())