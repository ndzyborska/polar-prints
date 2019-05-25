module.exports = (sequelize, DataTypes) => {

  const Food = sequelize.define('Food', {
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    carbon: DataTypes.STRING,
    water: DataTypes.STRING,
    ethics: DataTypes.STRING,
  })
 return Food
}

