const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend'))); // Serve static files from frontend directory

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html')); // Serve index.html on root path
});

// Endpoint to handle sending SOS
app.post('/sendSOS', (req, res) => {
    const accountSid = ''; // Replace with the twilio accountSid
    const authToken = ''; // Replace with the twilio authToken
    const client = require('twilio')(accountSid, authToken);

    const message = req.body.message;

    const emergencyNumber = '+91'; // Replace with the pre-saved number

    client.messages
        .create({
            body: message,
            from: '', // Replace with your Twilio phone number
            to: emergencyNumber
        })
        .then(message => {
            console.log('SMS sent successfully:', message.sid);
            res.sendStatus(200);
        })
        .catch(error => {
            console.error('Error sending SOS message:', error);
            res.status(500).send('Failed to send SOS message.');
        });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
