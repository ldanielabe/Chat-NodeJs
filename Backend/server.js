//import expres from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const response = require('../Network/response')
const router = express.Router();

var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

/*app.use('/', function(req, res) {
    res.send('Hello world');
});*/


router.get('/message', function(req, res) {
    //console.log(req.headers); // info de servidor donde se abre la app, cache
    res.header({
        "custom-header": "Nuevo valor personalizado",
    })

    //res.send('Lista de mensajes');
    response.success(req, res, 'Listado correctamente');
});



router.post('/message', function(req, res) {

    res.send('Mensaje añadido: ' + req.body.text);
});



router.delete('/message_delete', function(req, res) {
    //console.log('Query: ' + req.query + ' body: ' + req.body);

    res.status(201).send({ 'ERROR': 'Ninguno', 'BODY': 'Eliminado correctamente' }); // rta petición
});


app.use('/app', express.static('Frontend'));

app.listen(3000);
console.log("OK");