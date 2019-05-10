module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eaten: DataTypes.STRING,
  });
  return Burger;
};