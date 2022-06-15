const filterWeatherForecast = require('../server/filterWeatherForecast');

describe('Testing function filterWeatherForecast', () => {

    //testing that the function exists
    test('Testing if the function is defined', () => {
        expect(filterWeatherForecast).toBeDefined();
    });

});