const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email({ minDomainAtoms: 2 }),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{6,24}$')
            )
        }
        const {error} = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                res.status(400).send({
                    error: 'invalid email address'
                })
                break
                case 'password':
                  res.status(400).send({
                      error: `Password entered does not follow the rules:
                      <br>
                      1. The password must be a combination of letters and numbers
                      <br>
                      2.The length of the password must be between 6 -24 characters
                      `
                  })
                break
                default:
                res.status(400).send({
                    error: 'Something is wrong with the registration information provided'
                })
            }
        } else {
            next()
        }
    }
}