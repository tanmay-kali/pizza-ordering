const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const homeController = require("../app/http/controllers/homeController");
const guest = require("../app/http/middlewares/guest");
function initRoutes(app) {
  app.get("/", homeController().index);
  app.get("/cart", cartController().index);
  app.get("/login", guest, authController().login);
  app.post("/login", authController().postLogin);
  app.get("/register", authController().register);
  app.post("/update-cart", guest, cartController().update);
  app.post("/register", authController().postregister);
  app.post("/logout", authController().logout);
}

module.exports = initRoutes;
