express = require('express');

const messages = require('../Backend/Messages/network');


const routes = function(server) {
    server.use('/message', messages);
}