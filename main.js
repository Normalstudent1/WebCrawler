// 네이버 크롤링. 
const axios = require('axios');
const cheerio = require('cheerio');

axios({
    //페이지 URL
    url: 'https://policy.naver.com/rules/service_pre_20140317.html',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        // console.log(response.data);
        const $ = cheerio.load(response.data); //페이지 데이터 로드
        const terms_of_use = $('div.section').text();   //운영정책 저장
        console.log(terms_of_use) //출력
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    });
