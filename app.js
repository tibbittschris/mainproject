express     = require('express')
exphbs      = require('express-handlebars')
request     = require('request')
bodyParser  = require('body-parser')
path	      = require('path')
indexRoutes	= require('./routes/index.js')
userRoutes	= require('./routes/user.js')
session = require('express-session')
querystring = require('querystring')

cfg = require('./config.js')

var db = require('./db')
var Users = require('./models/users')

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');
app.use(bodyParser());

app.use(session({
  cookieName: 'session',
  secret: 'jijf849hfinvufenv7834bbs283s',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires : Date.now() + 60000
  }
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes)
app.use('/user', userRoutes)

db.connect('mongodb://dbuser:1234567890@ds055584.mongolab.com:55584/webdevinstagram', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
  }
})
