function formValidation(city, startDate, endDate){

    let formValidated = true;
    let messageSentBack = '';

    console.log('In formValidation');
    console.log(city, startDate, endDate);

    //Validating that city is defined
    if (!city) {
        formValidated = false;
        messageSentBack += 'Please enter destination.\n';
    }

    //Validating that city is written with letters
    if (city) {
        const res = city.match(/^[a-zA-Z]*$/);
        if (res === null) {
            formValidated = false;
            messageSentBack += "Destination can only contain letters.\n";
        } 
    }

    //Validating that startDate is defined
    if (startDate === "") {
        formValidated = false;
        messageSentBack += "Please enter the start date for your trip.\n";
    }

    //Validating that endDate is defined
    if (endDate === "") {
        formValidated = false;
        messageSentBack += "Please enter the end date for your trip.\n";
    } 

    //making sure startDate comes before endDate
    if ((startDate) && (endDate)) {
        const newStart = new Date(startDate);
        const newEnd = new Date(endDate);

        if ((newEnd - newStart) < 0){
            formValidated = false;
            messageSentBack += "End date before start date. Please re-enter the dates of your trip.\n";
        }
    };

    return {
        validation: formValidated,
        message: messageSentBack
    };

}

export { formValidation }