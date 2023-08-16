const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'}); 
    const page = await browser.newPage(); // 새로운 페이지 열기
    await page.setViewport({
      width: 1920,
      height: 1080
    });
    // 지정된 URL 접속
    await page.goto('https://bbs.joongang.co.kr/policy');
    await page.waitForSelector('#accordion2');
    const data = {};
    const temp = await page.$('#accordion2');
    data.hits = await page.evaluate((data) => {
      return data.textContent;
    }, temp);
    console.log(data.hits);
    await browser.close();
  })();
