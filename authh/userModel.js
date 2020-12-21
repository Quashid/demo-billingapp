var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var UserSchema = mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

    
});

// a middleware function of high priority removes the need of async await as it holds on the control till the encrypted password comes
UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) {
        return next(err); }
      user.password = hash;
      next();
    })
  });

  UserSchema.statics.authenticate = function (username, password, callback) {
    User.findOne({ userid: username })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found!');
          err.status = 401;
          return callback(err);
        } else {
        bcrypt.compare(password , user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback('Wrong password!');
          }
        })
      }
      });
  }
var User = mongoose.model('userCreds', UserSchema);





module.exports = User;