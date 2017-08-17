var express = require('express');
var router = express.Router();

//mongodb
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var conn = mongoose.connect('mongodb://127.0.0.1:27017/express');
var User = new mongoose.Schema({
	name: String,
	email: String,
	age: String
});

var myModel = conn.model('user',User);

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  myModel.findOne({name:"wlfsmile"},function(err,user){
  	console.log(user);
  	res.render('index',{title:'Express',user:user});
  });
});

module.exports = router;
