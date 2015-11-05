express     = require('express')
exphbs      = require('express-handlebars')
request     = require('request')
bodyParser  = require('body-parser')
path	      = require('path')
indexRoutes	= require('./routes/index.js')
userRoutes	= require('./routes/user.js')
querystring = require('querystring')

var app = express();

ACCESS_TOKEN = ''
CLIENT_ID = 'afdc0b4978f149cab3801f5501116ebd'
CLIENT_SECRET = '341145521ab545beb9ac1eef625cbd7c'
REDIRECT_URI = 'http://127.0.0.1:3000/auth/finalize'

app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes)
app.use('/user', userRoutes)

app.listen(3000)
