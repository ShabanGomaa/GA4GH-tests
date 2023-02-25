import { expect } from "chai";
import axios from 'axios';

describe('DRS API, item xx18bfb64168994489bc9e7fda0acd4f', () => {
    const apiBaseURL = 'localhost:5000';
    const drsObjectID = 'xx18bfb64168994489bc9e7fda0acd4f';

    it('should return a 404 error for ', async () => {
        try {
            const response = await axios.get(`http://${apiBaseURL}/ga4gh/drs/v1/objects/${drsObjectID}`);
            throw new Error('Expected request to fail with 404 status');
        }
        catch (error: any) {
            expect(error.response.status).to.equal(404);
        }
    });

    it('should return an invalid DRS object ID', async () => {
        try {
            const response = await axios.get(`http://${apiBaseURL}/ga4gh/drs/v1/objects/${drsObjectID}`);
            throw new Error('Expected request to fail with 404 status');
        }
        catch (error: any) {
            expect(error.response.data).to.have.property('error');
            expect(error.response.data.error).equal('Not Found');
            expect(error.response.data.msg).equal(`No DrsObject found by id: ${drsObjectID}`);

        }

    });


});