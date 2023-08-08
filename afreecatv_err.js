const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 사이트 URL 
    url: 'https://www.afreecatv.com/policy/policy1.html',
    method: 'GET',
})
    // 성공
    .then(response => {
        const $ = cheerio.load(response.data);
        const terms_of_use = $('body').text();
        console.log(terms_of_use)
    })
    // 실패
    .catch(err => {
        console.error(err);
    }); //body