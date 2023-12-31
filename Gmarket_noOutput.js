const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 크롤링을 원하는 페이지 URL
    url: 'http://member2.gmarket.co.kr/TermsPolicy/BuyerTermsPolicy',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        const $ = cheerio.load(response.data);
        // const data = $('body > div > div.service_term');
        const terms_of_use = $('div.service_term').text();  
        console.log(terms_of_use);
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    }); //body > div > div.service_term