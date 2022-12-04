const multer = require("multer");
const { response } = require("./common");
const { resp } = require("./common");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniq = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniq + ".png");
  },
});

const upload = multer({
  limits: { fileSize: 10 * 1024 ** 2 },
  storage: storage,
  fileFilter: (res, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Input file with png or jpg format"));
    }
  },
});

// const videoUpload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10000000, // 10000000 Bytes = 10 MB
//   },
//   fileFilter(req, file, cb) {
//     // upload only mp4 and mkv format
//     if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
//       return cb(new Error("Please upload a video"));
//     }
//     cb(undefined, true);
//   },
// });
module.exports = upload;
