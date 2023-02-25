import { expect } from "chai";
import axios from 'axios';

describe('DRS API, item ecbb0b5131051c41f1c302287c13495c', () => {
    const apiBaseURL = 'localhost:5000';
    const drsObjectID = 'ecbb0b5131051c41f1c302287c13495c';

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
            size: 21308003,
            created_time: '2023-02-07T16:42:17Z',
            checksums: [{
                "checksum": "5cacafb5ac82c347e261543a6dd02e914b94e038",
                "type": "sha1"
            },
            {
                "checksum": "adc82f24f03c7943561e614c17d5bffdc92af53ceec2484823faabff565c1522",
                "type": "sha256"
            },
            {
                "checksum": "ecbb0b5131051c41f1c302287c13495c",
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