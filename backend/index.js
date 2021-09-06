const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./Config/db");
const morgan = require("morgan");
const helmet = require("helmet");
// const paystack = require("paystack")(process.env.PAYSTACK_SECRET_KEY);
const path = require("path");
const userRoute = require("./Routes/UserRoute");
const eventRoute = require("./Routes/EventRoute");
const uploadRoute = require("./Routes/UploadRoutes");
const errorHandler = require("./Middleware/errorMiddleware");
const app = express();
connectDB();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/users", userRoute);
app.use("/event", eventRoute);
app.use("/upload", uploadRoute);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}
//https://eventgo-app.herokuapp.com/
app.use(errorHandler);

const server = app.listen(process.env.PORT || 5000, () =>
  console.log(`server running `)
);

process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
