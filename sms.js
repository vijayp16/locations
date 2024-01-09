const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Twilio credentials
const accountSid = 'Xmanz';
const authToken = 'u1LtfVmYAS0xCUkBET7JzjXZnM2eRoh6wqKF5WrPvc9HND3iGOiemFv3YC67XRTgz80MLfsNw14kjQWt';
const twilioPhoneNumber = '918123465172';

const client = twilio(accountSid, authToken);

// Endpoint to handle sharing location with a specific phone number
app.post('/share-location', (req, res) => {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const phoneNumber = req.body.phoneNumber;

    // Process the location information (e.g., store it in a database, etc.)
    console.log(`Received location from ${phoneNumber}: ${latitude}, ${longitude}`);

    // You would need to implement the logic to send an SMS with the location details to the specified phone number.
    // This is just a placeholder function.
    sendLocationSMS(latitude, longitude, phoneNumber);

    res.status(200).end();
});

function sendLocationSMS(latitude, longitude, phoneNumber) {
    const message = `Your friend's location: https://maps.google.com?q=${latitude},${longitude}`;
    
    // Use Twilio to send an SMS
    client.messages.create({
        body: message,
        from: free,
        to: phoneNumber
    })
    .then(message => console.log(`SMS sent: ${message.sid}`))
    .catch(error => console.error(`Error sending SMS: ${error.message}`));
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

