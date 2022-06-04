const url = 'http://localhost:8081/';
import { displayResults } from './js/displayResults';
import { validateReturnedData } from './js/validateReturnedData';
import { configureDatesInput, updateDatesInput } from './js/configureDatesInput';
import { formValidation } from './js/formValidation';

import './styles/form.scss';
import './styles/results.scss';
import './styles/header.scss';
import './styles/footer.scss';

const startDateElement = document.querySelector('#start');
const endDateElement = document.querySelector('#end');
document.addEventListener('DOMContentLoaded', () => {
    configureDatesInput(startDateElement, endDateElement);
});

startDateElement.addEventListener('change', (event) => {
    console.log('Value of event.target.dispatchEvent');
    console.log(event.target.id);
    updateDatesInput(event.target.value, event.target.id, startDateElement, endDateElement);
});


const button = document.querySelector('#tripButton');
button.addEventListener('click', async (event) => {
    event.preventDefault();

    const city_entered = document.getElementById('city').value;
    console.log('Value of city is:', city_entered);

    const startDate = document.getElementById('start').value;
    const endDate = document.getElementById('end').value;

    const formValidated = formValidation(city_entered, startDate, endDate);

    if (formValidated.validation === false){
        alert(formValidated.message);
        return false;
    }

    console.log('Dates of the trip', startDate, endDate);
    
    const trip = {
        city: city_entered,
        startDate: startDate,
        endDate: endDate
    };

    const options = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trip)
    }

    const data = await fetch(url, options);
    const dataObject = await data.json();

    console.log('Type de data', typeof(dataObject));
    console.log('value of data', dataObject);

    if (validateReturnedData(dataObject) === true){
        const displayAction = displayResults(dataObject);
        console.log(displayAction);    
    }

    document.getElementById('city').value = '';
    
    console.log('C est la fin du script');
});