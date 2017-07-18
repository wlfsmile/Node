var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

//设置handlebars试图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.get('/',function(req,res){
	res.render('home');
});
app.get('/about',function(){
	res.render('about');
})

app.get('/error',function(req,res){
	res.status(500).render('error');
})

//定制404页面
/*app.use(function(req,res,next){
	res.status(404);
	res.render(404);
});

//定制500页面
app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render(500);
});
*/
app.listen(app.get('port'),function(){
	console.log('Express start on http://localhost:'+
		app.get('port')+';press Ctrl-C to terminate.');
});