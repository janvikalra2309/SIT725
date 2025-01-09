// public/env.js
let socket = io();

// Listen for 'temperature' events from the server
socket.on('temperature', (data) => {
    console.log(`Temperature: ${data.temperature}°C at ${data.timestamp}`);
    const display = document.getElementById('temperatureDisplay');
    if (display) {
        display.innerHTML = `Latest Temperature: ${data.temperature}°C<br>Timestamp: ${data.timestamp}`;
    }
});
