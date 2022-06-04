function validateReturnedData(dataReturned) {
    if (dataReturned.weather === undefined){
        alert('Destination entered is invalid');
        return false;
    }

    return true;
}

export { validateReturnedData };