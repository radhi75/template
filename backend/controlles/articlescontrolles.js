const articles = require("../modules/articles");

exports.ADDarticles = async (req, res) => {
  try {
    const newarticles = new articles({ ...req.body, userID: req.user.id });
    await newarticles.save();
    res.status(200).send({ msg: "articles added", newarticles });
  } catch (error) {
    res.status(500).send({ msg: "could not add articles" });
  }
};
exports.Getarticles = async (req, res) => {
  try {
    const article = await articles.find().populate("userID");
    res.status(200).send({ msg: "our articles", article });
  } catch (error) {
    res.status(500).send({ msg: "could not get articles" });
  }
};
exports.Deletearticles = async (req, res) => {
  try {
    const deleted = await articles.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "articles deleted" });
  } catch (error) {
    res.status(500).send({ msg: "cannot delete articles" });
  }
};
exports.Updatearticles = async (req, res) => {
  try {
    const Updatearticles = await articles.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({ msg: "articles updated", Updatearticles });
  } catch (error) {
    res.status(500).send({ msg: "could not update articles" });
  }
};
exports.Getonearticles = async (req, res) => {
  try {
    const Onearticles = await articles.findById(req.params.id);
    res.status(200).send({ msg: "your commande", Onearticles });
  } catch (error) {
    res.status(500).send({ msg: "couldn't get your articles" });
  }
};
exports.Myarticles = async (req, res) => {
  try {
    const myarticles = await articles.find({ userID: req.user.id });
    res.status(200).send({ msg: "your commande", myarticles });
  } catch (error) {
    res.status(500).send({ msg: "couldn't get your articles" });
  }
};
