const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 크롤링을 원하는 페이지 URL
    url: 'https://www.ppomppu.co.kr/zboard/view.php?id=regulation&no=4',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        const $ = cheerio.load(response.data);
        const data = $('body > div.wrapper > div.contents > div.container > div > table:nth-child(15) > tbody > tr:nth-child(1) > td > table > tbody > tr > td');
        const terms_of_use = data.text();
        console.log(terms_of_use)
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
})