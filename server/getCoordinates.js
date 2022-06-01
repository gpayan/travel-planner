const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function getCoordinates(city){

    const destination = encodeURIComponent(city);
    const country = 'FR';
    const path_url = `/searchJSON?name=${destination}&country=${country}&username=${process.env.GEONAMES_USERNAME}`;

    //console.log('Value of path_url', path_url);

    const options = {
        method: 'GET',
        hostname: 'api.geonames.org',
        path: path_url,
        headers : {
            'Content-Type': 'application/json'
        }
    //    rejectUnauthorized: false
    };

    const full_url = options.hostname + path_url;
    //console.log('full_url is: ', full_url);

    return new Promise((resolve, reject) => {
        console.log('We are in getCoordinates');
        const apiRequest = http.request(options, (res) => {
            let data_collected = '';
            //console.log('Inside http.request');

            res.on('data', (chunk) => {
            //    console.log('we are getting chunks of data');
                data_collected += chunk;
            });

            res.on('end', () => {
            //    console.log('we finised receiving the data');
                //console.log(data_collected);
                resolve(JSON.parse(data_collected));
            });
        }).on('error', (err) => {
            reject(err);
        });
        apiRequest.end();
    });
};