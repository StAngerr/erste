const mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', (next) => {
  const saltRounds = 10;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(saltRounds,  (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(this.password, salt, null, (err, hash) => {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = (password, cb) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
