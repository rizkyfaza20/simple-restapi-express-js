import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send ("Belajar menggunakan nodemon dan babel-preset-env");
});

export default router;
