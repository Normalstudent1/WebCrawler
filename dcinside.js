//디씨인사이드 이용약관 크롤링
//Crawling Terms of Use of dcinside

const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // URL
    url: 'http://nstatic.dcinside.com/company/rules/service_policy.html',
    method: 'GET',
})
    // success
    .then(response => {
        const $ = cheerio.load(response.data);
        const terms_of_use = $('div.cnt').text();
        console.log(terms_of_use)

        axios({
            // URL
            url: 'http://nstatic.dcinside.com/company/rules/info_policy.html',
            method: 'GET',
        })
            // success
            .then(response => {
                const $ = cheerio.load(response.data);
                const info_policy = $('div.cnt02').text();
                console.log(info_policy);

                axios({
                    //URL
                    url: 'http://nstatic.dcinside.com/company/rules/youth_policy.html',
                    method: 'GET',
                })
                    // success
                    .then(response => {
                        const $ = cheerio.load(response.data);
                        const data = $('#bodyWrap2 > div.cnt03 > dl:nth-child(1)');
                        const youth_policy = data.text();
                        console.log(youth_policy);
                    })
                    // fail
                    .catch(err => {
                        console.error(err);
                    });
            })
            // fail
            .catch(err => {
                console.error(err);
            });
    })
    // fail
    .catch(err => {
        console.error(err);
    });