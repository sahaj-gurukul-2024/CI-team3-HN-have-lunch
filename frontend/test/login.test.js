require('dotenv').config()

const chrome = require('selenium-webdriver/chrome');
const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

describe("Get Index", () => {
  let driver;
  before(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
    await driver.get(`http://${process.env.VITE_SERVER_URL}:${process.env.VITE_PORT}/`);
  });

  after(async () => {
    await driver.quit();
  })

  it("should have correct title", async () => {
    let title = await driver.getTitle();
    assert.equal("Office Lunch Tracker", title);
  });

  it("should have correct body", async () => {
    const title = await driver.findElement(By.tagName('h1'));
    const titleText = await title.getText();
    assert.equal("Welcome", titleText);
  });
});
