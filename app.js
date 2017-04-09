var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
    validator = require('express-validator');

var app = express();

// path to the router
var routes = require('./routes/index');

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// validation
app.use(validator());

// static resources
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', routes);

// set port
app.set('port', (process.env.PORT || 2225));

app.listen(app.get('port'), function(){
	console.log('Server started on port ' + app.get('port'));
});