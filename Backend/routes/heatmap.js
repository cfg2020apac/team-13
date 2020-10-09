const express = require("express");
const axios = require("axios");
const openGeocoder = require("node-open-geocoder");

const router = express.Router();
//const API_KEY = "AIzaSyCYgbMcIGRgx1cMkSiwzRNZM5vQeWS1SlM";
const API_KEY = "pk.60f178e2b672df06a5165be444f0f35d";

router.get('/getLocations', async (req, res) => {
    let addresses = ["Causeway Bay", "Central"];

    res.json(
        await Promise.all(addresses.map(async (address) => {
            try {
                const REQUEST_API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${address}&format=json`
                const resp = await axios.get(REQUEST_API);
                //TODO: handle empty array
                return {"lat": resp.data[0].lat, "lon": resp.data[0].lon};
            } catch (e) {
                console.log(e);
            }
        }))
    )
});

module.exports = router;