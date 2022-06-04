function formatDate(date){    
    const year = date.getFullYear();
    
    const day = date.getDate();
    let day_display = '';
    if (day < 10) {
        day_display = '0' + day;
    } else {
        day_display = day;
    }

    const month = date.getMonth() + 1;
    let month_display = '';
    if (month < 10) {
        month_display = '0' + month;
    } else {
        month_display = month;
    }
    
    const dateFormatted = year + '-' + month_display + '-' + day_display;
    return dateFormatted;
}

function configureDatesInput(startDateElement, endDateElement){
    const today = new Date();
    const maxDateStart = new Date();
    const minDateStart = new Date();
    const maxDateEnd = new Date();

    //maxDateStart is 15 days from today, so + 14
    maxDateStart.setDate(maxDateStart.getDate() + 14);
    console.log('maxDateStart is:', maxDateStart);

    const todayFormatted = formatDate(today);
    console.log('Value of today is:', todayFormatted);

    const maxDateStartFormatted = formatDate(maxDateStart);
    console.log('Value of maxDateStart:', maxDateStartFormatted);

    startDateElement.setAttribute('min', todayFormatted);
    startDateElement.setAttribute('max', maxDateStartFormatted);

    minDateStart.setDate(minDateStart.getDate() + 1);
    maxDateEnd.setDate(maxDateEnd.getDate() + 15);

    const minDateStartFormatted = formatDate(minDateStart);
    console.log('Value of minDateStart:', minDateStartFormatted);

    const maxDateEndFormatted = formatDate(maxDateEnd);
    console.log('Value of maxDateEnd:', maxDateEndFormatted);

    endDateElement.setAttribute('min', minDateStartFormatted);
    endDateElement.setAttribute('max', maxDateEndFormatted);
}

function updateDatesInput(newValue, elementID, startDateElement, endDateElement){
    if (elementID === "start"){
        const newDate = new Date(newValue);
        newDate.setDate(newDate.getDate() + 1);
        const newDateFormatted = formatDate(newDate);
        endDateElement.setAttribute('min', newDateFormatted);
    };
}

export { configureDatesInput, updateDatesInput }