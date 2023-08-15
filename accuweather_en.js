const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 크롤링을 원하는 페이지 URL
    url: 'https://www.accuweather.com/ko/legal',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        const $ = cheerio.load(response.data);
        const data = $('body > div > div.single-column-page-content > div');
        const terms_of_use = data.text();  
        console.log(terms_of_use)
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    }); 