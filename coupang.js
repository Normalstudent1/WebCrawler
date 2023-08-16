const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: 'new'}); // 브라우저 실행 (여기서 headless:false 속성을 주면 브라우저가 열리고 닫히는 과정을 시각적으로 볼 수 있다.
    const page = await browser.newPage(); // 새로운 페이지 열기
    await page.setViewport({
      width: 1920,
      height: 1080
    });
    // 지정된 URL 접속
    await page.goto('https://www.coupang.com/np/policies/terms');

    await page.waitForSelector('#policies-contents');
    const data = {};
    const temp = await page.$('#policies-contents');
    data.hits = await page.evaluate((data) => {
      return data.textContent;
    }, temp);
    console.log(data.hits);

    await browser.close();
  })(); 
