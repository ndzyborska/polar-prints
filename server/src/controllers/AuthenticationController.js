const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const weekExpiration = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: weekExpiration
  })
}

module.exports = {
   async register (req, res) {   
        try {
          const user = await User.create(req.body)
          const userJson = user.toJSON()
          res.send({
            user: userJson,
            token: jwtSignUser(userJson)
          })
        }    catch (err) {
          res.status(400).send({
            error: 'There is already an account registered with this email'
          })
        }
    },
    async login (req, res) {   
      try {
        const {email, password} = req.body
        const user = await User.findOne({
          where: {
            email: email
          }
        })
        if (!user) {
          res.status(403).send({
            error: 'Incorrect login information'
          })
        }

        const isPasswordValid = await user.comparePassword(password)
        

        if (!isPasswordValid) {
          return res.status(403).send({
            error: 'Incorrect login information'
          })
        }
      
       const userJson = user.toJSON()
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        })
      } catch (err) {
         res.status(500).send({
          error: 'There is an error with login'
         })
        }
    }
}
