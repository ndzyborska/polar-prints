module.exports = (sequelize, DataTypes) => {

  const Food = sequelize.define('Food', {
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    carbon: DataTypes.INTEGER,
    water: DataTypes.INTEGER,
    season: DataTypes.STRING,
    carbonMessage: DataTypes.TEXT,
    waterMessage: DataTypes.TEXT,
    seasonMessage: DataTypes.TEXT
  })
 return Food
}
