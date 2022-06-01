const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const getCoordinates = require('./getCoordinates');
const getWeatherForecast = require('./getWeatherForecast');
const getImage = require('./getImage');
const filterWeatherForecast = require('./filterWeatherForecast');

const app = express();

console.log(__dirname);

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const server = app.listen(8081, () => {
    console.log('Server up and running on port 8081');
});

app.get('/', function (req, res) {
    res.sendFile(path.resolve('client/views/index.html'));
});

app.post('/', async (req, res) => {
    const city = req.body.city;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    console.log('startDate is:', startDate);
    console.log('endDate is:', endDate);

    let destinationWeather = undefined;
    try {
        const coordinates = await getCoordinates(city);

        if(coordinates) {
            const latitude = coordinates.geonames[0].lat;
            const longitude = coordinates.geonames[0].lng;

            console.log('We have latitude:', latitude);
            console.log('We have longitude:', longitude);
        
            try {
                const weatherForecastBulkData = await getWeatherForecast(latitude, longitude);
                //destinationWeather = weatherForecastBulkData.data[0].weather;
                //console.log('We are displaying weatherForecastBulkData');
                //console.log(weatherForecastBulkData);
                destinationWeather = filterWeatherForecast(weatherForecastBulkData.data, startDate, endDate);
            } catch (error) {
                console.log("Can't retrieve weather data", error);
            }
        } else {
            destinationWeather = undefined;
        };

    } catch (error) {
        console.log("Can't retrieve coordinates data", error);
        alert('Destination is not a city in France. Please enter new destination.');
    };

    console.log('We collected destinationWeather:', destinationWeather);

    let destinationPic = undefined;
    try {
        
        let destinationPicBulk = await getImage(city);
        //console.log(destinationPicBulk);
        const totalHits = destinationPicBulk.totalHits;
        const total = destinationPicBulk.total;

        const random_index = Math.floor(Math.random() * totalHits);
        console.log('value of random_index is:', random_index);

        const hits = destinationPicBulk.hits;
        //console.log('Value of hits:', hits);
        console.log('Type of hits:', typeof(hits));
        console.log('Length of hits:', hits.length);
        //console.log(destinationPicBulk.hits);

        const pageNumber = Math.floor(random_index / 20);
        const itemNumber = random_index % 20;

        console.log('Page number:', pageNumber);
        console.log('Item number:', itemNumber);

        if (pageNumber > 1){
            try {
                destinationPicBulk = await getImage(city, pageNumber);
            } catch (error) {
                console.log("Error getting to specific page in getImage", error);
            }
        }

        //console.log(destinationPicBulk);
        if(destinationPicBulk) {
            destinationPic = destinationPicBulk.hits[itemNumber].webformatURL;
        } else {

        }

    } catch (error) {
        console.log("Can't retrieve image data", error);
    };  

    console.log('We have destination pic', destinationPic);

    const tripDetails = {
        destination: city,
        weather: destinationWeather,
        image: destinationPic
    };

    res.send(JSON.stringify(tripDetails));
});

app.get('/test', async (req,res) => {
    console.log('J ai recu un GET sur TEST');

    const data = await getImage();
    console.log('We just ran getImage');
    console.log(data);
    console.log(typeof(data));

    console.log(data.hits[0].webformatURL);

    res.send(JSON.stringify({message: 'it works well'}));
});