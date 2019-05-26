module.exports = (sequelize, DataTypes) => {

  const Log = sequelize.define('Log', {
    userId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  })
 return Log
}
