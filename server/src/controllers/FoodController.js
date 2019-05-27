const {Food} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports = {

    async getFoods(req, res) {
      try {
        const food = await Food.findAll({
          limit: 10
        })
        res.send(food)
      } catch (err) {
        res.status(500).send({
          error: 'Error finding foods'
      })
    }
  },

  async createNewFood (req, res) {
    try {
      const food = await Food.create(req.body)
      res.send({status: true})
    } catch (err) {
       res.status(500).send({
        error: 'Food of this name already exists'
       })
      }
  },



    async food (req, res) {
      try {
              const food = await Food.findAll({
                  where: {
                    name: {
                    [Op.like]: `%${req.body.name}%`
                      }
                  }
              })
        res.send(food)
      } catch (err) {
          console.log(err)
         res.status(500).send({
          error: 'Error retriving foods'
         })
        }
    },

      async search (req, res) {
          try {
              let foods = null;
              foods = await Food.findAll({
                  limit: 1,
                  where: {
                  name: {
                      [Op.is]: req.body.name
                    }
                  }
                })
          res.send(foods)
          } catch (err) {
              console.log(req.body.name)
              console.log(err)
              res.status(500).send({
                  error: 'Error retriving foods'
                 })
      }
     },

      async getFoodDetails (req, res) {
          try {
            const food = await Food.findByPk(req.params.foodId)
            res.send(food)
          } catch (err) {
              console.log(err)
            res.status(500).send({
              error: 'Couldnt get Food'
            })
          }
        }
      }
