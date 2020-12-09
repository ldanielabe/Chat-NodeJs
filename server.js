const express = require('express');
const bodyParser = require('body-parser');

const router = require('./Network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);


app.use('/app', express.static('Frontend'));

app.listen(3000);
console.log("OK");