var express = require('express');
var router = express.Router();
var app = require('../server.js');
// var piblaster = require('pi-blaster.js');

var overallTimeout = null;
var overallInterval = null;
var foodNowTimeout = null;
var servoInterval = null;
var servoPin = null;


router.get('/', function(req, res, next) {
  // res.render('home');
  res.render('home', { title: 'Express Handlebars Starter Kit' });
});


router.post('/route1', function(req, res, next) {
	var pass = req.body.password;
	
	route1();

	res.render('home', { title: 'Express Handlebars Starter Kit - Route 1' });
});

router.post('/route2', function(req, res, next) {
	var pass = req.body.password;
	var vacation_days = req.body.days;
	var msVacations = 86400000 * vacation_days;

	route2();

	res.render('home', { title: 'Express Handlebars Starter Kit - Route 2' });
});

router.post('/route3', function(req, res, next) {
	
	route3();

	res.render('home', { title: 'Express Handlebars Starter Kit - Route 3' });
});

router.post('/route4', function(req, res, next) {
	var pass = req.body.password;
	
	route4();

	if (pass == "paok1994") {
		// exitAll();
		res.render('home', { title: 'Express Handlebars Starter Kit - Route 4 - Success)' });
	} else {
		res.render('home', { title: 'Express Handlebars Starter Kit - Route 4 - Wrong Password)' });
	}
});

router.get('/*', function(req, res, next) {
  res.render('home', { title: 'Express Handlebars Starter Kit (wrong url, redirected to home)' });
});


function route1() {
	console.log("Calling function route1");
}

function route2() {
	console.log("Calling function route2");	
}

function route3() {
	console.log("Calling function route3");
}

function route4() {
	console.log("Calling function route4");
}

//////////////////// *** FUNCTIONS *** ////////////////////


module.exports = router;
