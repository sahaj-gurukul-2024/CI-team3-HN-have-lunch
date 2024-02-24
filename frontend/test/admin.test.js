require('dotenv').config()

const chrome = require('selenium-webdriver/chrome');
const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

const baseUrl = `http://${process.env.VITE_HOST_URL}:${process.env.VITE_HOST_PORT}`


describe("Admin page", () => {
    let driver;
    before(async () => {
      driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
      await driver.get(`${baseUrl}/admin`);
    });
  
    after(async () => {
      await driver.quit();
    })

    it("should have loader till data is fetched", async () => {
        const loader = await driver.findElement(By.className('loader'));

        assert.notEqual(loader, null);
    });
  
    it("should have welcome message", async () => {
      const welcomeMessage = await driver.findElement(By.className('welcomeMessage')).getText();
      assert.equal("Welcome Admin", welcomeMessage);
    });

    it("should have current locale date", async () => {
        const currentDate = await driver.findElement(By.className('currentDate')).getText();
        assert.equal(new Date().toLocaleString().slice(0, 10), currentDate);
    });

    it("should load employee count for today", async () => {
        const empCount = await driver.findElement(By.className('employeeCount'));

        assert.notEqual(empCount, null);
    });
});

describe("User in admin page", () => {
    let driver;
  before(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().addArguments('--headless')).build();
    await driver.get(`${baseUrl}/`);
  });

  after(async () => {
    await driver.quit();
  })

//   it("should redirect to login if not logged in", async () => {
//     const browserUrl = await driver.getCurrentUrl()
//     assert.equal(browserUrl.split("/").pop(), "login")
//   })

})
