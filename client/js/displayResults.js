import { cleanupDate } from './cleanupDate';

function displayResults(results) {

    //console.log('we are in display results');
    //console.log(results);

    //getting a handle on main element
    const element = document.querySelector('main');

    //creating a new fragment
    const fragment = document.createDocumentFragment();
    
    const newDiv = document.createElement('div');
    newDiv.classList.add("results");
    //fragment.appendChild(newDiv);
    
    const destinationElement = document.createElement('div');
    destinationElement.innerText = results.destination;
    destinationElement.classList.add("destination-title");

    const imageElement = document.createElement('img');
    //console.log(results.image);
    imageElement.setAttribute("src", results.image);
    imageElement.classList.add("picture-box");

    //const weatherBox = document.createElement('div').classList.add('weather-box');
    //const weatherDisplay = docuent.createElement('div').classList.add('weather-display');

    const weatherElement = document.createElement('div');
    weatherElement.classList.add('weather-box');

    const weatherData = results.weather;
    
    //console.log(weatherData);
    //console.log('Length of WeatherData', weatherData.length);

    for (let i = 0; i< weatherData.length; i++){
        
        const weatherDisplay = document.createElement('div')
        weatherDisplay.classList.add('weather-display');

        const dateDiv = document.createElement('div');
        dateDiv.classList.add("date-box");

        const formatted_dates = cleanupDate(weatherData[i].date);
        //console.log('Long date:', formatted_dates.date_long);
        //console.log('Short date:', formatted_dates.date_short);

        dateDiv.innerText = formatted_dates.date_short;

        const weatherTextDiv = document.createElement('div');
        weatherTextDiv.classList.add("text-box");
        weatherTextDiv.innerText = weatherData[i].weather.description;

        const weatherIconDiv = document.createElement('img');
        const imageURL = 'https://www.weatherbit.io/static/img/icons/' + weatherData[i].weather.icon + '.png';
        weatherIconDiv.setAttribute("src", imageURL);
        weatherIconDiv.classList.add('icon-box');
        //weatherIconDiv.classList.add('icon-settings');
        
        //const tempDiv = document.createElement('div');
        //tempDiv.classList.add('icon-box');
        
        //tempDiv.appendChild(weatherIconDiv);



        weatherDisplay.appendChild(dateDiv);
        weatherDisplay.appendChild(weatherTextDiv);
        weatherDisplay.appendChild(weatherIconDiv);
        //weatherDisplay.appendChild(tempDiv);
        
        weatherElement.appendChild(weatherDisplay);
    };
    
    //weatherElement.innerText = JSON.stringify(results.weather);

    //newDiv.appendChild(destinationElement);
    newDiv.appendChild(imageElement);
    newDiv.appendChild(weatherElement);

    const mainDiv = document.createElement('div');
    mainDiv.classList.add("main-div");
    mainDiv.appendChild(destinationElement);
    mainDiv.appendChild(newDiv);

    fragment.appendChild(mainDiv);
    element.appendChild(fragment);

    return({message: 'success'});
};

export { displayResults }