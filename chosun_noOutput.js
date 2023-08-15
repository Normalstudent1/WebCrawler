const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 사이트 URL 
    url: 'https://www.chosun.com/subscribe/term/',
    method: 'GET',
})
    // 성공
    .then(response => {
        const $ = cheerio.load(response.data);
        const data = $('#fusion-app > div:nth-child(2) > div > div > div.mypage--profile.\\|.box--position-relative > div > div');
        const terms_of_use = data.text();
        console.log(terms_of_use)
    })
    // 실패
    .catch(err => {
        console.error(err);
    }); //#layBody > div > table
