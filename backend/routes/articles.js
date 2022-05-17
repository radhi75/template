const express = require("express");
const {
  ADDarticles,
  Myarticles,
  Getarticles,
  Deletearticles,
  Updatearticles,
  Getonearticles,
} = require("../controlles/controlles");
const { isAuth } = require("../middlewares/isAuth");

const articlesRoutes = express.Router();
articlesRoutes.post("/", isAuth, ADDarticles);
articlesRoutes.get("/myarticles", isAuth, Myarticles);
articlesRoutes.get("/articles", Getarticles);
articlesRoutes.delete("/deleting/:id", Deletearticles);
articlesRoutes.put("/updating/:id", Updatearticles);
articlesRoutes.get("/yourarticles/:id", Getonearticles);
module.exports = articlesRoutes;
