const Joi = require('joi')

module.exports = {
    createNewFood(req, res, next) {
        const schema = {
            name: Joi.string().required(),
            carbon: Joi.number().min(0).max(10),
            water: Joi.number().min(0).max(10),
            season: Joi.string().required(),
            carbonMessage: Joi.string().required(),
            waterMessage: Joi.string().required(),
            seasonMessage: Joi.string().required(),
        }
        const {error} = Joi.validate(req.body, schema)
        if (error) {
            console.log(error);
            switch (error.details[0].context.key) {
                case 'name':
                res.status(400).send({
                    error: 'name: is required'
                })
                break
                case 'carbon':
                res.status(400).send({
                    error: 'carbon: must be a number between 0 and 10'
                })
                break
                case 'water':
                res.status(400).send({
                    error: 'water: must be a number between 0 and 10'
                })
                break
                case 'season':
                res.status(400).send({
                    error: 'season: is required'
                })
                break
                case 'carbonMessage':
                res.status(400).send({
                    error: 'carbon Information: is required'
                })
                break
                case 'waterMessage':
                res.status(400).send({
                    error: 'water Information: is required'
                })
                break
                case 'seasonMessage':
                res.status(400).send({
                    error: 'season Information: is required'
                })
                break
                default:
                res.status(400).send({
                    error: 'Something is wrong with the food information provided'
                })
            }
        } else {
            next()
        }
    }
}
