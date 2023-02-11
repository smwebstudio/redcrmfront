var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/search?key=pk.2192e998596792b7ac8842b2fd6aceac&q=Empire%20State%20Building&format=json",
    "method": "GET"
};

const axios = require("axios");

// axios.get("https://us1.locationiq.com/v1/search?key=pk.2192e998596792b7ac8842b2fd6aceac&q=Armenia%20Yerevan%20Tumanyan 24&format=json").then(res => {
//     const headerDate = res.headers && res.headers.date ? res.headers.date : "no response date";
//     console.log("Status Code:", res.status);
//     console.log("Date in Response header:", res.data);
//
// }).catch(err => {
//     console.log("Error: ", err.message);
// });


// axios.get('http://redoc/api/estates/19166').then(res => {
//     console.log("Status Code:", res.status);
//     console.log("Date in Response header:", res.data.data.full_address);
//
//     let address = res.data.data.full_address;
//     let query = encodeURIComponent(address);
//
//     console.log('address - '+res.data.data.full_address);
//     console.log('query - '+query);
//     let geocoderURL = "https://eu1.locationiq.com/v1/search?key=pk.2192e998596792b7ac8842b2fd6aceac&q="+query+"&format=json";
//
//     axios.get(geocoderURL).then(res => {
//         console.log("Status Code:", res.status);
//         console.log("Geocoder data:", res.data);
//         console.log("Status data:", res.status);
//
//     }).catch(err => {
//         console.log("Error: ", err.message);
//     });
//
// }).catch(err => {
//     console.log("Error: ", err.message);
// });


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


