var router = express.Router();

router.get('/', function(req, res) {

  res.render('welcome', {
    title: 'Welcome',
    layout: 'base'
  })
})

router.get('/authorize', function(req, res) {
  var qs = {
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code'
  }

  var qs = querystring.stringify(qs)

  var url = 'https://api.instagram.com/oauth/authorize/?' + qs

  res.redirect(url)
})

router.get('/auth/finalize', function(req, res) {
  var post_data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
    code: req.query.code
  }

  var options = {
    url: 'https://api.instagram.com/oauth/access_token',
    form: post_data
  }

  request.post(options, function(error, response, body) {
    var data = JSON.parse(body)
    ACCESS_TOKEN = data.access_token
    res.redirect('/user/dashboard')
  })
})


module.exports = router
