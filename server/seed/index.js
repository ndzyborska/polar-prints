
const {
    sequelize,
    Food,
    User,
  } = require('../src/models')

const Promise = require('bluebird')
const  foods = require ('./food.json')
const  users = require ('./users.json')
sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )

    await Promise.all(
      foods.map(food => {
        Food.create(food)
      })
    )
  })
