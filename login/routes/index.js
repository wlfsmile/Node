var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('./user').user;
mongoose.connect('mongodb://localhost:27017/node');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/login',function(req,res,next){
// 	res.render('login', { title: 'login' });
// });

// /* GET register p age. */  
// router.route("/register").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用  
//     res.render("register",{title:'User register'});  
// })
//  GET home page.   
// // router.get("/home",function(req,res){  
// //     res.render("home",{title:'Home'});         //已登录则渲染home页面  
// // });  

// router.post('/home',function(req,res){
// 	var query_doc = {name: req.body.name,password: req.body.password};
// 	(function(){
// 		user.count(query_doc,function(err,doc){
// 			if(doc == 1){
// 				console.log(query_doc.name + ": login success in " + new Date());
// 				res.render('home', { title: 'homepage' });
// 			}else{
// 				console.log(query_doc.name + ": login failed in " + new Date());
// 				 res.redirect('/');
// 			}
// 		})
// 	})(query_doc);
// });

// module.exports = router;


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/user').user;
mongoose.connect('mongodb://localhost:27017/node');
 
/* GET home page. */
router.get('/', function(req, res) {
      res.render('index', { title: 'index' });
});
 
/*login*/
router.get('/login', function(req, res) {
    res.render('login', { title: 'login' });
});
 
/*hompage*/
router.post('/home', function(req, res) {
    var query_doc = {name: req.body.name, password: req.body.password};
    (function(){
        user.count(query_doc, function(err, doc){
        	console.log(doc);
            if(doc == 1){
                console.log(query_doc.name + ": login success in " + new Date());
                res.render('home', { title: 'homepage' });
            }else{
                console.log(query_doc.name + ": login failed in " + new Date());
                res.redirect('/');
            }
        });
    })(query_doc);
});
 
module.exports = router;