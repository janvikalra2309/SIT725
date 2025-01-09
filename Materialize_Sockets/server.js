const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = 8080;

// Serve static files from the "public" directory
app.use(express.static('public'));

// WebSocket connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Emit simulated temperature data every second
    const interval = setInterval(() => {
        const temperature = (Math.random() * 30 + 10).toFixed(2); // Random temperature between 10°C and 40°C
        const timestamp = new Date().toISOString();
        socket.emit('temperature', { temperature, timestamp });
    }, 1000);

    // Handle user disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
        clearInterval(interval);
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
