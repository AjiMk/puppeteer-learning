import puppeteer from "puppeteer";

/**
 * TODO: Test the contructor option of puppeteer.launch and browser.createBrowserContext
 * TODO: Configuring permissions for the browser context
 * TODO: Connecting to running browser
 * TODO: Check all API methods: https://pptr.dev/api/puppeteer.browser
 * 
 */
(async () => {
    const browser = await puppeteer.launch({
        headless: false
    })

    const context = await browser.createBrowserContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await (new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    }))

    await browser.close();
    await context.close();

})();