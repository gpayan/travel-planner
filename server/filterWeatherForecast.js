module.exports = function filterWeatherForecast(weatherForecast, start, end) {
    console.log('We are in filterWeatherForecast');
    console.log(weatherForecast.length);

    const today = new Date();
    const startDate = new Date(start);
    const endDate = new Date(end);

    const dateOffset = Math.ceil((startDate - today) / (24 * 60 * 60 * 1000));
    //console.log('dateOffset is:', dateOffset);

    const lengthStay = Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000));
    //console.log('length of stay is:', lengthStay);

    const startIndex = dateOffset;
    const endIndex = dateOffset + lengthStay;

    const bulkWeatherData = weatherForecast.slice(startIndex,endIndex + 1);

    const filteredData = [];
    for (i=0; i< bulkWeatherData.length; i++) {

        filteredData.push({
            date: bulkWeatherData[i].valid_date,
            weather: bulkWeatherData[i].weather
        });

    };

    return filteredData;
};
