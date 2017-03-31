/**
 * Created by tianqi on 2017/3/27.
 */

var express = require('express');
var router = express.Router();

router.get('/dept',function (req,res) {
    res.send("hello dept");

})

module.exports = router;
