var express = require('express');
var router = express.Router();

/* POST  result */
router.post('/', function (req, res, next) {
    console.log(req.body);
    res.status(200).send();
});

module.exports = router;
