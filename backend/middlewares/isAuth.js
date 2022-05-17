const user = require("../modules/user");
const jwt = require("jsonwebtoken");
exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    if (!token) {
      res.status(400).send("you are not authorized");
    }
    const decoded = jwt.verify(token, process.env.secretOrKey);
    const userr = await user.findById(decoded.id);
    req.user = userr;
    next();
  } catch (error) {
    console.log("server error");
  }
};
