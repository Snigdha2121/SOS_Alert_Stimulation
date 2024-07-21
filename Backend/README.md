# Suraksha Chakra Backend Server

This directory contains the backend server for the Suraksha Chakra safety band project. The server is built with Node.js and uses the Twilio API to send SOS alerts with live location to pre-saved emergency contacts.

## Features

- Serves the frontend application from the `frontend` directory.
- Handles SOS alert requests and sends SMS messages using the Twilio API.

## Prerequisites

- Node.js installed on your machine.
- A Twilio account with an active phone number.

## Usage
 Replace the placeholders in the code with your actual Twilio account details:

    - `accountSid`: Your Twilio Account SID.
    - `authToken`: Your Twilio Auth Token.
    - `from`: Your Twilio phone number.
    - `emergencyNumber`: The pre-saved emergency contact number.
