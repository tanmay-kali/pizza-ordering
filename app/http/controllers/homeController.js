const Menu = require("../../models/menu");

function homeController(res) {
  return {
    async index(req, res) {
      const pizzasList = await Menu.find();
      return res.render("home", {pizzas: pizzasList});

      // Menu.find().then(function (pizzasList) {
      // console.log(pizzasList);
      //   return res.render("home", {pizzas: pizzasList});
      // });
    },
  };
}

module.exports = homeController;
