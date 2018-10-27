var express = require('express');
var router = express.Router();
var async = require('async');


// Return index page
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/share', function ( req, res, next ) {
    res.render('pages/share_recipe');
});



module.exports = router;
