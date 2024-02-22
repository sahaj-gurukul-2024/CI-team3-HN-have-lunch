const chrome = require('selenium-webdriver/chrome');
const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

describe("Get Index", () => {
  let driver;
  before(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
  });

  after(async () => {
    await driver.quit();
  })

  it("should have correct title", async () => {
    await driver.get('http://127.0.0.1:5500/src/index.html');
    let title = await driver.getTitle();
    assert.equal("Office Lunch Tracker", title);
  });

  it("should have correct body", async () => {
    const title = await driver.findElement(By.id('title'));
    const titleText = await title.getText();
    assert.equal("Hello world", titleText);
  });
});