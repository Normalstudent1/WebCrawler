const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 사이트 URL 
    url: 'https://www.11st.co.kr/annc/AnncMainPreview.tmall?method=getProvision&anncCd=32',
    method: 'GET',
})
    // 성공
    .then(response => {
        const $ = cheerio.load(response.data);
        const data = $('#layBody > div > table');
        const terms_of_use = data.text();
        console.log(terms_of_use)
    })
    // 실패
    .catch(err => {
        console.error(err);
    }); //#layBody > div > table