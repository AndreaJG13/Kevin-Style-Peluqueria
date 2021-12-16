const passport = require('passport');

const router = require('express').Router();
let User = require('../models/usuario');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.correo;
  const password = req.body.password;

  const newUser = new User({nombre, correo, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res, next) => {

  console.log(req.body);

  passport.authenticate("local", (err, user, info) => {
    if(err){
      throw err;
    }
    if(!user){
      console.log(user);
      console.log(info);
      res.send("EL USUARIO NO EXISTE");
    }else{
      req.login(user, err => {
        if(err){
          throw err;
        }
        res.send("USUARIO LOGEADO EXITOSAMENTE");
        console.log(req.user);
      })
    }
  })(req, res, next);

  // const correo = req.body.correo;
  // const password = req.body.password;

  // User.findOne({correo: correo, password: password}, (err, res2) => {
  //     if(err){
  //       throw err;
  //     }else{
  //       req.session.User = result;
  //       res2.send(result);
  //     }
  // });
});

router.route('/authenticate').get((req, res) => {
  res.send(req.User);
});


module.exports = router;