document.getElementById('sosButton').addEventListener('click', sendSOS);

function sendSOS() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(sendLocation, handleError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function sendLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const message = `SOS! I need help. My current location is: https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    // AJAX request to server endpoint
    fetch('/sendSOS', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => {
        if (response.ok) {
            console.log('SOS message sent successfully.');
            alert('SOS message sent successfully.');
        } else {
            console.error('Failed to send SOS message.');
            alert('Failed to send SOS message.');
        }
    })
    .catch(error => {
        console.error('Error sending SOS message:', error);
        alert('Error sending SOS message.');
    });
}

function handleError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}
