require('dotenv').config()

const chrome = require('selenium-webdriver/chrome');
const {By, Builder, until} = require('selenium-webdriver');
const assert = require("assert");

const baseUrl = `http://${process.env.VITE_HOST_URL}:${process.env.VITE_HOST_PORT}`

describe("Should have correct elements", () => {
  let driver;
  before(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
    await driver.get(baseUrl);
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



describe("Should work properly with user journey from login to home", () => {
  let driver;
  before(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
    await driver.get(baseUrl);
  });

  after(async () => {
    await driver.quit();
  })

  it("should enter correct id", async () => {
    const idInputBox = await driver.findElement(By.id("id"));
    await idInputBox.sendKeys("123")
    const id = await idInputBox.getAttribute("value");
    assert.equal("123", id);
  });

  it("should enter correct employee name", async () => {
    const nameInputBox = await driver.findElement(By.id("name"));
    await nameInputBox.sendKeys("abc")
    const name = await nameInputBox.getAttribute("value");
    assert.equal("abc", name);
  });

  it("should login properly with proper details", async () => {
    const idInputBox = await driver.findElement(By.id("id"));
    const nameInputBox = await driver.findElement(By.id("name"));
    await idInputBox.sendKeys("123")
    await nameInputBox.sendKeys("abc")
    
    const login = await driver.findElement(By.tagName("button"));

    await login.submit()

    await driver.sleep(100)

    const browserUrl = await driver.getCurrentUrl()
    assert.equal(browserUrl.split("/").pop(), "home")
  });
});
