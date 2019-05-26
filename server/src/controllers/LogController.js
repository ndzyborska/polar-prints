const {Log} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports = {

  async addLog (req, res) {
    try {
 const log = await Log.create(req.body)
 res.send(log)
    } catch (err) {
       console.log(err)
       res.status(500).send({
        error: 'failed to log data'
       })
      }
  }
}
