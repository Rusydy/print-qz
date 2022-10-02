// initiate express
const express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    websocket = require('ws'),
    wss = new websocket.Server({ server }),
    port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initiate routes
const routes = require('./routes');
app.use('/', routes);

// initiate server
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// initiate websocket
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);
    });
    ws.send('Hello! Message From Server!!');
});