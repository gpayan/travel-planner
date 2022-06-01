const https = require('https');
const dotenv = require('dotenv');
dotenv.config();

module.exports = async function getImage(destination, page = 1) {

    console.log('In getImage - value of page is:', page);

    const keywords = encodeURIComponent(destination);
    const path_url = `/api/?key=${process.env.PIXABAY_APIKEY}&q=${keywords}&page=${page}&image_type=photo`;

    const options = {
        method: 'GET',
        hostname: 'pixabay.com',
        path: path_url,
        headers: {
            'Content-Type': 'json/application'
        }
    };

    console.log(options.hostname + path_url);

    return new Promise((resolve, reject) => {
        const apiRequest = https.request(options, (res) => {
            let data_collected = '';

            res.on('data', (chunk) => {
                data_collected += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data_collected));
            });
        }).on('error', err => {
            reject(err);
        });
        apiRequest.end();
    });

};