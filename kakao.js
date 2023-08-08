//#mArticle > div.wrap_terms.wrap_policy
const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 크롤링을 원하는 페이지 URL
    url: 'https://www.kakao.com/policy/terms?type=a&lang=ko',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        const $ = cheerio.load(response.data);
        const terms_of_use = $('div.wrap_terms.wrap_policy').text();  
        console.log(terms_of_use)
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    });