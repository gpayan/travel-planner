import { cleanupDate } from '../client/js/cleanupDate';

describe('Testing the cleanupDate function', () => {

    //testing that the function exists
    test('Testing the function is defined', () => {
        expect(cleanupDate).toBeDefined();
    });

    test('Testing the return value of cleanupdate', () => {
        const today = new Date();
        expect(cleanupDate(today)).toEqual({
            date_long: 'Friday, June 10',
            date_short: 'Fri, Jun 10'
        });
    });

});