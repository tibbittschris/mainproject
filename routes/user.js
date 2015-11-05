var router = express.Router();

router.get('/dashboard', function(req, res){
  if (ACCESS_TOKEN === ''){
    res.redirect('/')
  }

  else{
    var options = {
      url: 'https://api.instagram.com/v1/users/self/feed?access_token=' + ACCESS_TOKEN
    }

    request.get(options, function(error, response, body){
      var feed = JSON.parse(body)
      //console.log(body)
      res.render('dashboard', {
         feed: feed.data,
         layout: 'auth_base',
         title: 'User Dashboard!',
         pageintro: 'Welcome to your dashboard!'
       })
    })
  }
})

module.exports = router
