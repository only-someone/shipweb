var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ship', function(req, res, next) {
    res.sendfile(__dirname  + "/public/ship.png");
});

module.exports = router;