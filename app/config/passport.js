const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
  User = require('../models/user');
  config = require('./database');

module.exports = function(passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload.id }, (err, user) => {
      if (err) return done(err, false);
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
