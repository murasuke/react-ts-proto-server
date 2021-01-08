var express = require('express');
const db = require("../models/index.js");

var router = express.Router();

/* POST  result */
router.post('/', async (req, res, next) => {
    console.log(req.body);

    const data = {
        select_id1: parseInt(req.body.select_id1),
        select_id2: parseInt(req.body.select_id2),
        select_id3: parseInt(req.body.select_id3),
        select_id4: parseInt(req.body.select_id4),
        text_id3: req.body.text_id3,
        text_id4: req.body.text_id4,
    };
    // データのInsert
    const insRecord = db.Page1Data.create(data);

    res.status(200).send();
});

module.exports = router;
