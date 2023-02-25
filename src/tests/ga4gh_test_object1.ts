import { expect } from "chai";
import axios from 'axios';

describe('DRS API, item 8e18bfb64168994489bc9e7fda0acd4f', () => {
    const apiBaseURL = 'localhost:5000';
    const drsObjectID = '8e18bfb64168994489bc9e7fda0acd4f';

    it('should return a 200 success', async () => {
        const response = await axios.get(`http://${apiBaseURL}/ga4gh/drs/v1/objects/${drsObjectID}`);
        expect(response.status).to.equal(200);
    });

    it('should return a DRS object and an array of items', async () => {
        const response = await axios.get(`http://${apiBaseURL}/ga4gh/drs/v1/objects/${drsObjectID}`);
        expect(response.data).to.be.an('object');
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('name');
        expect(response.data).to.have.property('description');
    });

    it('should return a DRS object for a valid DRS id, size, self_uri, checksums', async () => {
        const drsUri = `drs://${apiBaseURL}/${drsObjectID}`;
        const expectedDrsObject = {
            id: drsObjectID,
            self_uri: drsUri,
            size: 18977144,
            created_time: '2023-02-07T16:42:17Z',
            checksums: [{
                "checksum": "232a8379bf238fe0c2b646c03a4b8bd2d83917f3",
                "type": "sha1"
            },
            {
                "checksum": "44ee4289015c892c442b504ed681532f032de5c09e846be021624815859f82e8",
                "type": "sha256"
            },
            {
                "checksum": "8e18bfb64168994489bc9e7fda0acd4f",
                "type": "md5"
            }],
        };
        const response = await axios.get(`http://${apiBaseURL}/ga4gh/drs/v1/objects/${drsObjectID}`);
        const drsObject = response.data;
        expect(drsObject.id).equal(expectedDrsObject.id);
        expect(drsObject.size).equal(expectedDrsObject.size);
        expect(drsObject.self_uri).equal(expectedDrsObject.self_uri);
        expect(drsObject.checksums).to.deep.equal(expectedDrsObject.checksums);

    });

});
