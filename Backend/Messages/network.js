const express = require('express');
const router = express.Router();
const response = require('../../Network/response')

router.get('/message', function(req, res) {
    response.success(req, res, 'Listado correctamente');
});


router.post('/message', function(req, res) {
    res.send('Mensaje añadido: ' + req.body.text);
});


router.delete('/message_delete', function(req, res) {
    res.status(201).send({ 'ERROR': 'Ninguno', 'BODY': 'Eliminado correctamente' }); // rta petición
});


module.exports = router;