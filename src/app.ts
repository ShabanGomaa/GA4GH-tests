import axios from "axios";

async function testApi() {
    const apiBaseURL = 'http://localhost:5000';

    const invalidDrsObjectID = '999';

    let url = `${apiBaseURL}/ga4gh/drs/v1/objects/${invalidDrsObjectID}`;
    url = "http://localhost:5000/ga4gh/drs/v1/objects/8e18bfb64168994489bc9e7fda0acd4f";
    let result = await axios.get(url);
    console.log("result.data=========");
    console.log(result.data);
}

testApi();