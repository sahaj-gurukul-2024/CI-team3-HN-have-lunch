require("dotenv").config();

const chrome = require("selenium-webdriver/chrome");
const { By, Builder } = require("selenium-webdriver");
const assert = require("assert");

const baseUrl = `http://${process.env.VITE_HOST_URL}:${process.env.VITE_HOST_PORT}`;

describe("Home page", () => {
  let driver;
  before(async () => {
    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options().addArguments("--headless"))
      .build();
    await driver.get(`${baseUrl}/login`);
    const idInputBox = await driver.findElement(By.id("id"));
    const nameInputBox = await driver.findElement(By.id("name"));
    await idInputBox.sendKeys("123");
    await nameInputBox.sendKeys("abc");

    const login = await driver.findElement(By.tagName("button"));

    await login.submit();
    await driver.sleep(100);
  });

  after(async () => {
    await driver.quit();
  });

  it("should have user name in welcome heading", async () => {
    const userName = await driver
      .findElement(By.className("userName"))
      .getText();
    assert.equal("abc", userName);
  });

  it("should have date picker input", async () => {
    const datePicker = await driver
      .findElement(By.className("datePicker"))
      .getAttribute("type");
    assert.equal("date", datePicker);
  });

  it("should have 'yes' radio button for preferance status", async () => {
    const radioBtn = await driver.findElement(By.id("yes"));

    const radioName = await radioBtn.getAttribute("name");

    assert.equal("choice", radioName);
  });

  it("should have 'no' radio button for preferance status", async () => {
    const radioBtn = await driver.findElement(By.id("no"));

    const radioName = await radioBtn.getAttribute("name");

    assert.equal("choice", radioName);
  });

  it("should have submit button", async () => {
    const buttonText = await driver
      .findElement(By.className("submitPreferance"))
      .getText();
    assert.equal("Submit", buttonText);
  });
});

describe("User in home page", () => {
  let driver;
  before(async () => {
    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options().addArguments("--headless"))
      .build();
    await driver.get(`${baseUrl}/`);
  });

  const login = async () => {
    const idInputBox = await driver.findElement(By.id("id"));
    const nameInputBox = await driver.findElement(By.id("name"));
    await idInputBox.sendKeys("123");
    await nameInputBox.sendKeys("abc");

    const login = await driver.findElement(By.tagName("button"));

    await login.submit();
    await driver.sleep(100);
  };

  after(async () => {
    await driver.quit();
  });

  it("should redirect to login if not logged in", async () => {
    const browserUrl = await driver.getCurrentUrl();
    assert.equal(browserUrl.split("/").pop(), "login");
  });

  it("should be able to logout", async () => {
    await login();

    const logout = await driver.findElement(By.id("logout"));

    await logout.click();
    await driver.sleep(100);

    const browserUrl = await driver.getCurrentUrl();
    assert.equal(browserUrl.split("/").pop(), "login");
  });

  //   it("should be able to pick date", async () => {
  //     await login()
  //     const dateInput = await driver.findElement(By.className("datePicker"))
  //     const date = new Date().toISOString().slice(0, 10).split("/").reverse().join("-")
  //     await dateInput.sendKeys(date)
  //     const selectedDate = await dateInput.getAttribute("value")

  //     assert.equal(selectedDate, date)
  //   })

  it("should be able to select 'yes' radio", async () => {
    await login();
    const yesRadio = await driver.findElement(By.id("yes"));
    await yesRadio.click();
    const isSelected = await yesRadio.isSelected();

    assert.equal(true, isSelected);
  });

  it("should be able to select 'no' radio", async () => {
    const noRadio = await driver.findElement(By.id("no"));
    await noRadio.click();
    const isSelected = await noRadio.isSelected();

    assert.equal(true, isSelected);
  });

  it("should be able to select only one of 'yes' or 'no' radio at a time", async () => {
    const noRadio = await driver.findElement(By.id("no"));
    const yesRadio = await driver.findElement(By.id("yes"));

    await noRadio.click();
    await yesRadio.click();
    const isNoSelected = await noRadio.isSelected();
    const isYesSelected = await yesRadio.isSelected();

    assert.equal(false, isNoSelected);
    assert.equal(true, isYesSelected);
  });
});
