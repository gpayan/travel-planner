import { cleanupDate } from '../client/js/cleanupDate';

describe('Testing the cleanupDate function', () => {

    //testing that the function exists
    test('Testing the function is defined', () => {
        expect(cleanupDate).toBeDefined();
    });

    test('Testing the return value of cleanupdate', () => {
        const today = new Date();
        expect(cleanupDate(today)).toEqual({
            date_long: 'Saturday, June 4',
            date_short: 'Sat, Jun 4'
        });
    });

});