const puppeteer = require("puppeteer");
const select = require('puppeteer-select');

async function llamar() {
try {
    const browser = await puppeteer.launch({
        headless: true
    });

    text = "https://prnt.sc/" + Math.random().toString(36).substr(2, 6);
console.log(text)

    const page = await browser.newPage();
    path = Math.random()
    await page.goto(text)
    const element = await select(page).getElement('button:contains(AGREE)');
    await element.click()
    await page.screenshot({
        path: "D:/images/" + path + '.jpg'
    })

    await browser.close();

} catch (err) {
    console.log(err)
}

}




setInterval(llamar, 3000);