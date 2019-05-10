// import our burger model
const db = require("../models");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function (req, res) {
    db.burgers.findAll({}).then(function (dbBurgerData) {
      // results are available to us inside the .then
      res.render("index", {
        burgerData: dbBurgerData
      })
    });
  });
}