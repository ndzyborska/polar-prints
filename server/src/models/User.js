const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


function hashPassword (user, options) {
    const SALT_FACTOR = 8
    console.log('hashpass')
    if(!user.changed('password')) { //check if changed
        return;
    }

    return bcrypt
     .genSaltAsync(SALT_FACTOR) // if changed: call bcrypt and generate using salt fcator
     .then(salt => bcrypt.hashAsync(user.password, salt, null)) // bcypt using salt, using users password output: hash
     .then(hash => {
         user.setDataValue('password', hash) //update user password value with hash
     })
}
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
  }, { // b4 storing user, hash password
   hooks: {
    beforeCreate: hashPassword,
    beforeUpdate: hashPassword // hooks run before user creation/update etc, calls the hash password method
   }
  })

  User.prototype.comparePassword = function (password) { // any  user model we can compare password.
    return bcrypt.compareAsync(password, this.password)
  }
 return User
}

