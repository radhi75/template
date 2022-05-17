const express = require("express");
const connectDb = require("./config/config");
const articlesRoutes = require("./routes/articles");
const userRoute = require("./routes/user");

const app = express();
require("dotenv").config();
connectDb();
app.use(express.json());
app.use("/api/articles", articlesRoutes);
app.use("/api/user", userRoute);

const port = process.env.port;
app.listen(port, () => console.log(`port is running on port ${port} `));
