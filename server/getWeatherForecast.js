const https = require('https');
const dotenv = require('dotenv');
dotenv.config();

module.exports = async function getWeatherForecast(latitude, longitude){

    console.log("I'm in getWeatherForecast");
    
    const lat = latitude;
    const lon = longitude;
    const path_url = `/v2.0/forecast/daily/?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_APIKEY}`;

    const options = {
        method: 'GET',
        hostname: 'api.weatherbit.io',
        path: path_url,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    console.log('hostname is: ', options.hostname);

    const full_url = options.hostname + path_url;
    console.log('full_url is: ', full_url);

    let sentenceEncoded = encodeURI(full_url);
    console.log('encoded URL is: ', sentenceEncoded);

    return new Promise((resolve, reject) => {
        const apiRequest = https.request(options, (res) => {
            let data_collected = '';
            
            res.on('data', (chunk) => {
                console.log('Adding chunks of data in getWeatherForecast');
                data_collected += chunk;
            });
            
            res.on('end', () => {
                //console.log('we got the data: ', data_collected);
                resolve(JSON.parse(data_collected));
            });

        }).on('error', (err) => {
            reject(err);
        });

        apiRequest.end();

    });
}
