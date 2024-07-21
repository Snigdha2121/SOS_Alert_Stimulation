# Suraksha Chakra

Welcome to the Suraksha Chakra project repository. This is a software simulation of my project to develop a smart safety band designed to empower women with advanced safety features, including an SOS alert system with geolocation tracking. 
## Overview

The Suraksha Chakra consists of two main components:

1. **Backend Server**: Handles SOS alert requests and sends SMS messages using the Twilio API.
2. **Frontend Application**: Provides a user interface for sending SOS alerts with geolocation.

## Hardware Features

- **Smart Safety Band**: An IoT-based wearable device with safety features including an electric shock function and SOS alert system.
- **SOS Alerts**: Sends SMS alerts with live location to pre-saved emergency contacts using Twilio.
- **Geolocation Support**: Allows users to send their current location in case of an emergency.

## Project Structure

- **`/frontend`**: Contains the frontend application.
  - `index.html`: Main HTML file.
  - `styles.css`: CSS file for styling.
  - `client.js`: JavaScript file handling the SOS button functionality.

- **`/backend`**: Contains the backend server.
  - `server.js`: Node.js server file that handles SOS alerts and interacts with the Twilio API.

## Prerequisites

- Node.js installed on your machine.
- A Twilio account with an active phone number.

