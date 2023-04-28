const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/Routes');

const server = express();
const PORT   = 8000;
const baseURL = '/api/v0';

server.use( bodyParser.json() ); // This solves getting the body of the request
server.use( cors() ); // Solves communication by other software
server.use( baseURL , routes );



server.listen( PORT, () => { console.log(`Server is running on port ${PORT}`); })