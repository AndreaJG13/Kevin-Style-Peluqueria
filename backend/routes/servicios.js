const router = require('express').Router();
let servicio = require('../models/servicio');

router.route('/').get((req, res) => {
  servicio.find()
    .then(servicios => res.json(servicios))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const cliente = req.body.cliente;
  const profesional = req.body.profesional;
  const actividad = req.body.actividad;

  const newServicio = new servicio({
    cliente,
    profesional,
    actividad
  });

  newServicio.save()
  .then(() => res.json('Servicio added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  servicio.findById(req.params.id)
    .then(servicio => res.json(servicio))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  servicio.findByIdAndDelete(req.params.id)
    .then(() => res.json('servicio deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  servicio.findById(req.params.id)
    .then(servicio => {
      servicio.cliente = req.body.cliente;
      servicio.profesional = req.body.profesional;
      servicio.actividad = req.body.actividad;

      servicio.save()
        .then(() => res.json('servicio updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;