const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage(); // 새로운 페이지 열기
    await page.setViewport({
      width: 1920,
      height: 1080
    });
    // 지정된 URL 접속
    await page.goto('http://web.humoruniv.com/docu/document.html?doc=article');
  
    await page.waitForSelector('#cr_recent_div');
    const data = {};
    const temp = await page.$('#cr_recent_div');
    data.hits = await page.evaluate((data) => {
      return data.textContent;
    }, temp);
    console.log(data.hits);
    await browser.close();
  })();
