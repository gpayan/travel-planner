const url = 'http://localhost:8081/';
import { displayResults } from './js/displayResults';
import './styles/form.scss';
import './styles/results.scss';
import './styles/header.scss';
import './styles/footer.scss';

/*
async function sendData(url, options) {
    const data = await fetch(url, options)
    .then(res => {
        console.log('We are in sendData/then');
        return res.json();
    })
    .then(response_data => {
        console.log('We in sendData/then/then');
        console.log(response_data);
        console.log('Type de response_data', typeof(response_data));
        return response_data;
    });
}
*/

const button = document.querySelector('#tripButton');
button.addEventListener('click', async (event) => {
    event.preventDefault();

    const city_entered = document.getElementById('city').value;
    console.log('Value of city is:', city_entered);

    const startDate = document.getElementById('start').value;
    const endDate = document.getElementById('end').value;

    console.log('Dates of the trip', startDate, endDate);
    console.log(typeof(startDate));
    console.log(typeof(endDate));
    
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
    const data2 = await data.json();
    /*
    .then(res => {
        console.log('In the fetch');
        return res.json();
    })
    .then(response_data => {
        console.log('we are in the second then!');
        console.log(response_data);
        console.log('done with fetch');
    });
    */

    console.log('Type de data', typeof(data2));
    console.log('value of data', data2);

    const displayAction = displayResults(data2);
    console.log(displayAction);

/*
    const data = await sendData(url, options)
    //console.log('Type de data', typeof(data));
    //console.log('Valeur de data', data);   
*/    
    console.log('C est la fin du script');
});