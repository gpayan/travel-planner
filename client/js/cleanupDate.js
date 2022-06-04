function cleanupDate(date) {
    const rawDate = new Date(date);

    const raw_day = rawDate.getDay();
    const day_number = rawDate.getDate();
    const raw_month = rawDate.getMonth();
    
    let day_long = '';
    let day_short = '';
    switch (raw_day) {
        case 0:
            day_long = 'Sunday';
            day_short = 'Sun';
            break;
        case 1:
            day_long = 'Monday';
            day_short = 'Mon';
            break;
        case 2:
            day_long = 'Tuesday';
            day_short = 'Tue';
            break;
        case 3:
            day_short = 'Wed';
            day_long = 'Wednesday';
            break;
        case 4:
            day_short = 'Thu';
            day_long = 'Thursday';
            break;
        case 5:
            day_short = 'Fri';
            day_long = 'Friday';
            break;
        case 6:
            day_short = 'Sat';
            day_long = 'Saturday';
            break;
    }

    let month_long = '';
    let month_short = '';
    switch (raw_month) {
        case 0:
            month_long ='January';
            month_short = 'Jan';
            break;
        case 1:
            month_long ='February';
            month_short = 'Feb';
            break;
        case 2:
            month_long ='March';
            month_short = 'Mar';   
            break;     
        case 3:
            month_long ='April';
            month_short = 'Apr';
            break;
        case 4:
            month_long ='May';
            month_short = 'May';
            break;
        case 5:
            month_long ='June';
            month_short = 'Jun';
            break;
        case 6:
            month_long ='July';
            month_short = 'Jul';
            break;
        case 7:
            month_long ='August';
            month_short = 'Aug';
            break;
        case 8:
            month_long ='September';
            month_short = 'Sep';
            break;
        case 9:
            month_long ='October';
            month_short = 'Oct';
            break;
        case 10:
            month_long ='November';
            month_short = 'Nov';
            break;
        case 11:
            month_long ='December';
            month_short = 'Dec';
            break;
    }


    const date_long = day_long + ', ' + month_long + ' ' + day_number;
    const date_short = day_short + ', ' + month_short + ' ' + day_number;

    return {
        date_long : date_long,
        date_short : date_short
    }
}

export { cleanupDate };