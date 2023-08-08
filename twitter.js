const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 크롤링을 원하는 페이지 URL
    url: 'https://twitter.com/ko/tos',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        const $ = cheerio.load(response.data);
        const terms_of_use = $('#twtr-main > div.root.responsivegrid > div > div.ct07-chapters.aem-GridColumn.aem-GridColumn--default--12 > div > div > div > div.ct07__content.twtr-col-md-9');
        const data = terms_of_use.text();
        console.log(data)
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    }); 