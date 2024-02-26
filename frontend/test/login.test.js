require("dotenv").config();

const chrome = require("selenium-webdriver/chrome");
const { By, Builder } = require("selenium-webdriver");
const assert = require("assert");

const baseUrl = process.env.PROD
  ? `http://${process.env.VITE_HOST_URL}`
  : `http://${process.env.VITE_HOST_URL}:${process.env.VITE_HOST_PORT}`;

describe("Login page", () => {
  let driver;
  before(async () => {
    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options().addArguments("--headless"))
      .build();
    await driver.get(`${baseUrl}/login`);
  });

  after(async () => {
    await driver.quit();
  });

  it("should have correct title", async () => {
    let title = await driver.getTitle();
    assert.equal("Office Lunch Tracker", title);
  });

  it("should have correct heading", async () => {
    const title = await driver.findElement(By.tagName("h1"));
    const titleText = await title.getText();
    assert.equal("Welcome to Office Lunch Tracker", titleText);
  });

  it("should have input for employee Id", async () => {
    const idInput = await driver.findElement(By.id("id")).getAttribute("type");
    assert.equal("text", idInput);
  });

  it("should have input for employee Name", async () => {
    const nameInput = await driver
      .findElement(By.id("name"))
      .getAttribute("type");
    assert.equal("text", nameInput);
  });

  it("should have login button", async () => {
    const buttonText = await driver.findElement(By.tagName("button")).getText();
    assert.equal("Login", buttonText);
  });
});

describe("User in login page", () => {
  let driver;
  before(async () => {
    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options().addArguments("--headless"))
      .build();
    await driver.get(`${baseUrl}/login`);
  });

  after(async () => {
    await driver.quit();
  });

  it("should be able to enter employee id", async () => {
    const idInputBox = await driver.findElement(By.id("id"));
    await idInputBox.sendKeys("123");
    const id = await idInputBox.getAttribute("value");
    assert.equal("123", id);
  });

  it("should be able enter employee name", async () => {
    const nameInputBox = await driver.findElement(By.id("name"));
    await nameInputBox.sendKeys("abc");
    const name = await nameInputBox.getAttribute("value");
    assert.equal("abc", name);
  });

//  it("should login properly with proper details", async () => {
//    const idInputBox = await driver.findElement(By.id("id"));
//    const nameInputBox = await driver.findElement(By.id("name"));
//    await idInputBox.sendKeys("123");
//    await nameInputBox.sendKeys("abc");
//
//    const login = await driver.findElement(By.tagName("button"));
//
//    await login.submit();
//
//    await driver.sleep(100);
//
//    const browserUrl = await driver.getCurrentUrl();
//    assert.equal(browserUrl.split("/").pop(), "");
//  });
});
