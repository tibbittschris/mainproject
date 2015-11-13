var router = express.Router();

router.get('/dashboard', function(req, res){
  if (cfg.access_token === ''){
    res.redirect('/')
  }

  else{
    var options = {
      url: 'https://api.instagram.com/v1/users/self/feed?access_token=' + cfg.access_token
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

router.get('/profile', function(req, res){
  //console.log(body)
  res.render('profile', {
     layout: 'auth_base',
     title: 'User Profile!',
     pageintro: 'This is the Profile page!'
  })
})

router.get('/search', function(req, res){
  if (cfg.access_token === ''){
    res.redirect('/')
  }

  else{
    var options = {
      url: 'https://api.instagram.com/v1/tags/search?q=' + searchinput.value + '&access_token=' + cfg.access_token
    }

    request.get(options, function(error, response, body){
      var feed = JSON.parse(body)
      // var profile = {
      //   url: 'https://api.instagram.com/v1/users/' + feed. + '/?access_token=ACCESS-TOKEN' + cfg.access_token
      // }
      //console.log(body)
      res.render('search', {
         feed: feed.data,
         layout: 'auth_base',
         title: 'Search Page!',
         pageintro: 'This is the search page!'
       })
    })
  }
})

module.exports = router
