const express = require("express");
const axios = require("axios");
const openGeocoder = require("node-open-geocoder");

const handsOn = require("../model/handsOn");

const router = express.Router();
//const API_KEY = "AIzaSyCYgbMcIGRgx1cMkSiwzRNZM5vQeWS1SlM";
const API_KEY = "pk.60f178e2b672df06a5165be444f0f35d";

function scheduleRequests(axiosInstance, intervalMs) {
    let lastInvocationTime = undefined;

    const scheduler = (config) => {
        const now = Date.now();
        if (lastInvocationTime) {
            lastInvocationTime += intervalMs;
            const waitPeriodForThisRequest = lastInvocationTime - now;
            if (waitPeriodForThisRequest > 0) {
                return new Promise((resolve) => {
                    setTimeout(
                        () => resolve(config),
                        waitPeriodForThisRequest);
                });
            }
        }

        lastInvocationTime = now;
        return config;
    }

    axiosInstance.interceptors.request.use(scheduler);
}

router.get('/getLocations', async (req, res) => {
    let events = await handsOn.find();

    locations = []
    for (var ev of events) {
        if (ev.Location != null && ev.Location != "") {
            locations.push(ev.Location)
        }
    }

    function counting(arr) {
        var a = [],
            b = [],
            prev;

        arr.sort();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== prev) {
                a.push(arr[i]);
                b.push(1);
            } else {
                b[b.length - 1]++;
            }
            prev = arr[i];
        }

        return [a, b];
    }

    var result = counting(locations);
    //console.log(result)

    let addressesFrequency = [];
    for (var i = 0; i < result[0].length; i++) {
        addressesFrequency.push([result[0][i], result[1][i]]);
    }
    //console.log(addressesFrequency.length);

    res.json(
        await Promise.all(addressesFrequency.map(async (addressFreq) => {
            try {
                let address = encodeURI(addressFreq[0]);
                let freq = addressFreq[1];
                const REQUEST_API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${address}&format=json`
                const geocoderService = axios.create({ baseURL : REQUEST_API})
                scheduleRequests(geocoderService, 100);
                const resp = await geocoderService.get(REQUEST_API).catch(error => console.log(error.response.status));
                //console.log(resp.status)
                if (resp.data.length == 0) {
                    return {"name": address, "freq": freq};
                }
                //TODO: handle empty array
                return { "name": address, "lat": resp.data[0].lat, "lon": resp.data[0].lon, "freq": freq };
            } catch (e) {
                //console.log(e);
            }
        }))
    )
});

module.exports = router;