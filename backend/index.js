const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./Config/db");
const app = express();
connectDB();

app.listen(process.env.PORT, () =>
  console.log(`server running at ${process.env.PORT}`)
);
