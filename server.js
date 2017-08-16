var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var session = require('express-session');

app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, "github-battle", 'dist')));
var sessionConfig = {
	secret:'SecretKey', // Secret name for decoding secret and such
	resave:false, // Don't resave session if no changes were made
	saveUninitialized: true, // Don't save session if there was nothing initialized
	// name:'myCookie', // Sets a custom cookie name
	cookie: {
		secure: false, // This need to be true, but only on HTTPS
		httpOnly: false, // Forces cookies to only be used over http
		maxAge: 3600000
	}
}

app.use(session(sessionConfig));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, ()=>{
	console.log('listening on 8000');
})