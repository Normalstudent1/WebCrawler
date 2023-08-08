const axios = require('axios');
const cheerio = require('cheerio');

axios({
    // 크롤링을 원하는 페이지 URL
    url: 'https://www.coupang.com/resources/20230808171659/np/js/lib/pacifik/messages.ko-KR.js',
    method: 'GET',
    headers:{
        Cookie: "ak_bmsc=90329FED98558A0D0846274C27669B67~000000000000000000000000000000~YAAQg3pGaARR4MCJAQAAXWdZ1RRA5czaFcPOPQz+2XykCkuSlXC5/aUUieG+2IKccQCUHMSSBur4xk6J+dmcjjMQRJIjZJv02rbNBGZxLDadbyT5nicIRaIDcf92VBpsS2iVLQrVhu8sjYmAeKmopsLmV00owB34gtxoWK8II8a5dh2w/1tSUYBxW+EVAaPt/puUE47uj1WctFiM2fwoooLJfhBVE59G4vWLToOTH7cbUa7gOcgQFFTlfYDY4lqHAkklDxtmqLPVuotfRiJGZiWRRb9E3qSr6ULwvzvv9/GBdwY0OTt1R2hApjboTiK230GYsmRWnhu4trlZ1RGjkwS+7DIXRDnHdq/XVyRRDIwWpxK1atHcA8EtoDui1V+YD+Gsi/7HOU2rICtpbA=="
    } 
})
    // 성공했을 경우
    .then(response => {
        const $ = cheerio.load(response.data);
        console.log(response.data);
    })
    // 실패했을 경우
    .catch(err => {
        console.error(err);
    });