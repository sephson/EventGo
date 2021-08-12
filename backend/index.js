const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./Config/db");
const morgan = require("morgan");
const helmet = require("helmet");
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
app.use(errorHandler);

const server = app.listen(process.env.PORT, () =>
  console.log(`server running at ${process.env.PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
