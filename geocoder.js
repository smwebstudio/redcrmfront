var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/search?key=pk.2192e998596792b7ac8842b2fd6aceac&q=Empire%20State%20Building&format=json",
    "method": "GET"
};

const axios = require("axios");



const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'agol',

    // Optional depending on the providers
    // fetch: customFetchImplementation,
    apiKey: 'AAPK0852708fad124ee186f528f3d9ee3830lSai_lgP5-m6kWiEYO29j9sFFjy3IzWX8Wctl_cpdymANP3N29EZ54ZBMxRGXIYF', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

// Using callback
async function start() {

    // const res = await geocoder.geocode({
    //     address: 'Երևան, Փոքր Կենտրոն, Սայաթ-Նովա պող. 33',
    //     country: 'Armenia',
    //     limit: 1
    // });

    const res = await geocoder.geocode('Երևան, Փոքր Կենտրոն, Սայաթ-Նովա պող. 33');
    console.error(res);
}

start();


