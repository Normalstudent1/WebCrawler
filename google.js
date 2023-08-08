//구글 이용약관 크롤링 (반복문X)
const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 크롤링을 원하는 페이지 URL
    url: 'https://policies.google.com/privacy?hl=ko',
    method: 'GET',
})
    // 성공했을 경우
    .then(response => {
        // console.log(response.data);
        // const $ = cheerio.load(response.data);
        const $ = cheerio.load(response.data);
        var data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(4) > div');
        const dataText_intro = data.text();
        console.log(dataText_intro);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(5) > div');
        const dataText_infoWeCollect = data.text();
        console.log(dataText_infoWeCollect);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(6) > div');
        const dataText_whyCollect = data.text();
        console.log(dataText_whyCollect);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(7) > div');
        const dataText_protSettings = data.text();
        console.log(dataText_protSettings);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(8) > div');
        const dataText_infoShare = data.text();
        console.log(dataText_infoShare);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(9) > div');
        const dataText_infoSecure = data.text();
        console.log(dataText_infoSecure);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(10) > div');
        const dataText_exportNdel = data.text();
        console.log(dataText_exportNdel);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(11) > div');
        const dataText_infoMaintain = data.text();
        console.log(dataText_infoMaintain);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(12) > div');
        const dataText_cooperation = data.text();
        console.log(dataText_cooperation);

        data = $('#yDmH0d > c-wiz > div > div.BWB3mf > div.tk9x4e.V4Yzye > div.vwhFIf > c-wiz > div:nth-child(13) > div');
        const dataText_Termsinfo = data.text();
        console.log(dataText_Termsinfo);
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    });
