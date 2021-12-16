const User = require('./models/usuario');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport){

    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({correo: username}, (err, user) => {
                if(err){
                    throw err;
                }
                if (!user){
                    return done(null, false);
                }else{
                    return done(null, user);
                }
            });
        })
    );

    passport.serializeUser((user, done) =>{
        done (null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        await User.findOne({_id: id}, (err, user) =>{
            done(err, user);
        });
    });

};