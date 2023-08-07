
const axios = require('axios');
const cheerio = require('cheerio');

// axios는 Promise를 반환하기 때문에 then, catch를 통해 chaining 할 수 있다.
axios({
    // 크롤링을 원하는 페이지 URL
    url: 'https://policy.naver.com/rules/service_pre_20140317.html',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        // console.log(response.data);
        const $ = cheerio.load(response.data);
        // const $ = cheerio.load('#content > div.section');
        const terms_of_use = $('div.section').text();  
        console.log(terms_of_use)
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    });