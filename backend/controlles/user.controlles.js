const user = require("../modules/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  const { email, motpasse } = req.body;
  try {
    const newuser = new user(req.body);

    const found = await user.findOne({ email });
    if (found) {
      return res
        .status(400)
        .send({ errors: [{ msg: "email already existe" }] });
    }
    const salt = 10;
    const hashpass = bcrypt.hashSync(motpasse, salt);
    newuser.motpasse = hashpass;
    const payload = { id: newuser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    await newuser.save();
    res.status(200).send({ msg: "user added ", newuser, token });
  } catch (error) {
    res.status(500).send({ msg: "could not add user" });
  }
};
exports.Login = async (req, res) => {
  const { email, motpasse } = req.body;
  try {
    const founduser = await user.findOne({ email });
    if (!founduser) {
      return res.status(400).send({ errors: [{ msg: "user not found" }] });
    }
    const match = await bcrypt.compare(motpasse, founduser.motpasse);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "user not found" }] });
    }
    const payload = { id: founduser._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    res.status(200).send({ msg: "login", founduser, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not login" }] });
  }
};
exports.Getuser = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).send({ msg: "list of users", users });
  } catch (error) {
    res.status(500).send({ msg: "couldn't get users" });
  }
};
exports.Deleteuser = async (req, res) => {
  try {
    const deleteduser = await user.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "user deleted" });
  } catch (error) {
    res.status(500).send({ msg: "couldn't delete user" });
  }
};
exports.Updateuser = async (req, res) => {
  try {
    const updateuser = await user.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({ msg: "updated" });
  } catch (error) {
    res.status(500).send({ msg: "couldn't update" });
  }
};
