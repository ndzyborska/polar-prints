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
  },
  async retrieveLog (req, res) {
      try {
          let ids = null;
          logData = await Log.findAll({
              where: {
              userId: {
                  [Op.is]: req.body.userId
                }
              },
              order: [
            ['foodId', 'DESC']
        ]
            })
      res.send(logData)
      } catch (err) {
          console.log(req.body.userId)
          console.log(err)
          res.status(500).send({
              error: 'Error retriving foods'
             })
  }
 },
 async clearData (req, res) {
   try {
     const log = await Log.findAll({
       where: {
         userId: {
             [Op.is]: req.params.userId
         }
       }
     })
     if (!log) {
       return res.status(403).send({
         error: 'you do not have access to this bookmark'
       })
     }
     await Log.destroy({
       where: {
         userId: {
             [Op.is]: req.params.userId
         }
       }
     })
     res.send(true)
   } catch (err) {
     console.log('here' + err)
     res.status(500).send({
       error: 'an error has occured trying to delete the bookmark'
     })
   }
 }
}
