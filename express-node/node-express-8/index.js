var express = require('express');

var app = express();

//设置handlebars试图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(require('body-parser')());

app.get('/newsletter',function(req,res){
	res.render('newsletter',{csrf:'CSRF token goes here'});
});

app.post('/process',function(req,res){
	// console.log('From (from querystring):' + req.query.from);
	// console.log('CSRF token (from hidden from filed):' + req.body._csrf);
	// console.log('Name (from visible from field):' + req.body.name);
	// console.log('Email (from visible from field):' + req.body.email);
	// res.redirect(303,'/thank-you');
	if(req.xhr || req.accepts('json,html') === 'json'){
		res.send({success:ture});
	}else{
		res.redirect(303,'/thank-you');
	}
});

app.listen(app.get('port'),function(){
	console.log('Express start on http://localhost:'+
		app.get('port')+';press Ctrl-C to terminate.');
});