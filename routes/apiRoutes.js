// import our burger model
const db = require("../models");

module.exports = app => {

  // GET all burger
  app.get("/api/burger", function (req, res) {
    db.burgers.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  app.post("/api/burger", function (req, res) {
    // pass req.body into create method 
    db.burgers.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  app.put("/api/burger/:id", function (req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.burgers.update({
        eaten: true,
      }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbBurgerData) {
        res.json(dbBurgerData);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}