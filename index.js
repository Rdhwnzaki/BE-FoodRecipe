const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const helmet = require("helmet");
const xss = require("xss-clean");
const upload = require("./src/middleware/upload");
const path = require("path");
const cookieParser = require("cookie-parser");

const mainRouter = require("./src/routes/index");
const { resp } = require("./src/middleware/common");

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
);
app.use(xss());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/", mainRouter);

app.use("/img", express.static("./upload"));
// app.use(upload.array());

// app.use(upload.array());

app.all("*", (req, res) => {
  resp(res, 404, false, "404 Not Found");
});
app.get("/", (req, res) => {
  res.status(200).json({ status: "success", statusCode: 200 });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
