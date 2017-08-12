var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();

app.use(express.static(__dirname + '/public'));

//设置handlebars试图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

//test=1 加载包含测试的首页
app.use(function(req,res,next){
	res.locals.showTests = app.get('env') !== 'production' && 
		req.query.test === '1';
	next();
});

app.get('/',function(req,res){
	res.render('home');
});

app.get('/about',function(req,res){
	/*res.render('about');*/
	//var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about',{
		fortune: fortune.getFortune(),
		pageTestScript : '/qa/tests-about.js'
	});
});

app.get('/tours/hood-river',function(req,res){
	res.render('tours/hood-river');
});

app.get('/tours/oregon-coast',function(req.res){
	res.render('tours/oregon-coast');
})

app.get('/tours/request-group-rate',function(req,res){
	res.render('tours/request-group-rate');
});

//定制404页面
app.use(function(req,res,next){
	res.status(404);
	res.render('404');
});

//定制500页面
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('Express start on http://localhost:'+
		app.get('port')+';press Ctrl-C to terminate.');
});