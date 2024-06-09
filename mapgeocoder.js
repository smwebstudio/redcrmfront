const axios = require('axios');
const mysql = require('mysql');

// create connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DC123456',
    database: 'realdb'
});



const getAddressCoordinates = async (address) => {

    // connect to the database
    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to database:', error);
            return;
        }

        console.log('Connected to database.');

        // retrieve data from the users table
        connection.query('SELECT * FROM estate WHERE id > 57500', (error, results, fields) => {
            if (error) {
                console.error('Error retrieving data:', error);
                return;
            }

            console.log('Retrieved data from users table:');
            console.log(results);
        });

        // insert data into the users table
        const newUser = {
            name: 'John Doe',
            email: 'johndoe@example.com'
        };

        // close the connection
        connection.end((error) => {
            if (error) {
                console.error('Error closing connection:', error);
                return;
            }

            console.log('Connection closed.');
        });
    });

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: 'AIzaSyDVoflhJGPTKy4xIZjPnP8W-fNLaXNLLW0' // replace with your own API key
            }
        });

        console.log(response.data);

        const result = response.data.results[0];
        const { lat, lng } = result.geometry.location;
        console.log(`Latitude: ${lat}\nLongitude: ${lng}`);
    } catch (error) {
        console.error(error);
    }
}

getAddressCoordinates('Armenia, Yerevan, Tumanyan st'); // replace with your own address
