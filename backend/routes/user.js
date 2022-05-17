const express = require("express");
const {
  Getuser,
  Deleteuser,
  Updateuser,
  Oneuser,
  Register,
  Login,
} = require("../controlles/usercontrolles");
const { isAuth } = require("../middlewares/isAuth");
const { register, login, Validation } = require("../middlewares/validation");
const userRoute = express.Router();
userRoute.post("/register", register, Validation, Register);
userRoute.post("/login", login, Validation, Login);
userRoute.get("/currently", isAuth, (req, res) => {
  res.send({ userr: req.user });
});
userRoute.get("/users", Getuser);
userRoute.delete("/deletinguser/:id", Deleteuser);
userRoute.put("/updateuser/:id", Updateuser);

module.exports = userRoute;
