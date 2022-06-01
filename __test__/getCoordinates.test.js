import { getCoordinates } from "../server/getCoordinates";

describe("Testing the getCoordinates functionality", () => {
  
    test('Testing that getCoordinates exits', () => {
        expect(getCoordinates).toBeDefined();
    });

/*
    test('Testing that getCoordinates function returns a value', async () => {
        const data = await getCoordinates('Paris');
        console.log('After the await');
        console.log(data);
        expect(data).toBeDefined();
        //expect(getCoordinates('Paris')).not.toBeUndefined();
    });

    test('Testing that getCoordinates return a JSON object containing long and lat of the destination'), () => {
        expect(getCoordinates('Paris')).toEqual()
    }
*/

});