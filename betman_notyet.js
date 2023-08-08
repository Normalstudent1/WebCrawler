//#agreementCtt > div > div.polCtn
const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 크롤링을 원하는 페이지 URL
    url: 'https://www.betman.co.kr/main/mainPage/customercenter/agreement.do',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        const $ = cheerio.load(response.data);
        const terms_of_use = $('#agreementCtt > div > div.polCtn');  
        const data = terms_of_use.text();
        console.log(data)
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    });