const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const expressSession = require('express-session');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors({
    origin: "http://localhost:3000", //Conectarse a la pagina de React
    credentials: true
}));
app.use(express.json());

//Manejo de sesiones de usuarios
app.use(
    expressSession({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
    })
  );
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);


//Conexion a la base de datos
const URI = 'mongodb://localhost/kevin-style-peluqueria';

mongoose.connect(URI)
    .then(db => console.log('DATABASE IS CONNECTED'))
    .catch(err => console.error(err));

const serviciosRouter = require('./routes/servicios');
const usersRouter = require('./routes/usuarios');

app.use('/servicios', serviciosRouter);
app.use('/users', usersRouter);

//Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});