const {Food} = require('../models') 
const Sequelize = require('sequelize')
const Op = Sequelize.Op


module.exports = {
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
                  where: {
                  name: {
                      [Op.is]: req.params.name
                    }
                  }
                })
          res.send(foods)     
          } catch (err) {
              console.log(req.params.name)
              console.log(err)
              res.status(500).send({
                  error: 'Error retriving foods'
                 })
      }
     },
  
  
      async show (req, res) {
          try {
            const food = await Food.findByPk(req.params.foodId)
            res.send(food)
          } catch (err) {
              console.log(err)
            res.status(500).send({
              error: 'Couldnt get Food'
            })
          }
        },
      
      async post (req, res) {   
          try {
    const food = await Food.create(req.body)
    res.send(food)
          } catch (err) {
            console.log(err)
             res.status(500).send({
              error: 'Error creating foods'
             })
            }
        }
      }
     