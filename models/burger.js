module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eaten: {
      type: DataTypes.STRING,
      defaultValue: 0
    }
  });
  return Burger;
};