var express = require('express');
var router = express.Router();

/* GET search result */
router.get('/', function (req, res, next) {
    const data = [];
    for (let i = 1; i <= 20; i++) {
        data.push({ id: i, data: `data${i}` });
    }

    if (req.query.key) {
        const filteredData = [];        
        for (const item of data) {
            if (item.data.includes(req.query.key)) {
                filteredData.push(item);
            }
        }
        res.json(filteredData);
    } else {
        res.json(data);
    }
});

module.exports = router;
