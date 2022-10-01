// initiate express
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initiate routes
const routes = require('./routes');
app.use('/', routes);

// initiate server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

