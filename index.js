const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const helmet = require("helmet");
const xss = require("xss-clean");

const mainRouter = require("./src/routes/index");
const { resp } = require("./src/middleware/common");

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
);
app.use(xss());

app.use(bodyParser.json());
app.use("/", mainRouter);
app.use("/img", express.static("./upload"));

app.all("*", (req, res) => {
  resp(res, 404, false, "404 Not Found");
});
app.get("/", (req, res) => {
  res.status(200).json({ status: "success", statusCode: 200 });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
