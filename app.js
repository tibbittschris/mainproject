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

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

app.use(session({
  cookieName: 'session',
  secret: 'jijf849hfinvufenv7834bbs283s',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes)
app.use('/user', userRoutes)

app.listen(3000)
