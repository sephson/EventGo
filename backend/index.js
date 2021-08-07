const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./Config/db");
const userRoute = require("./Routes/UserRoute");
const app = express();
connectDB();

app.use(express.json());

app.use("/api/user", userRoute);
const server = app.listen(process.env.PORT, () =>
  console.log(`server running at ${process.env.PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
