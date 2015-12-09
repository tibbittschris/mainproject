var router = express.Router();

router.get('/dashboard', function(req, res){
  if (cfg.access_token === ''){
    res.redirect('/')
  }

  else{
    if(Date.parse(req.session.cookie.expires) < Date.now()){
      access_token = ''
      res.redirect('/')
    } else {

    var options = {
      url: 'https://api.instagram.com/v1/users/self/feed?access_token=' + cfg.access_token
    }
    var userInfo = {
      url : 'https://api.instagram.com/v1/users/self/?access_token=' + cfg.access_token
    }
    request.get(options, function(error, response, body){
      var feed = JSON.parse(body)
      request.get(userInfo, function(error, response, body){
        try {
          var user = JSON.parse(body).data
        } catch(err) {
          var user = ''
        }

        res.render('dashboard', {
           user : user,
           feed: feed.data,
           layout: 'auth_base',
           title: 'User Dashboard!',
           pageintro: 'Welcome to your dashboard!'
         })
        })
      })
      //console.log(body)

    }
  }
})

  router.get('/profile', function(req, res){
    if (cfg.access_token === ''){
      res.redirect('/')
    } else if(Date.parse(req.session.cookie.expires) < Date.now()){
      access_token = ''
      res.redirect('/')
    } else {

      var options = {
        url : 'https://api.instagram.com/v1/users/self/?access_token=' + cfg.access_token
      }
      request.get(options, function(error, response, body){
        var userInfo = JSON.parse(body)
        res.render('profile', {
          user : userInfo.data,
          layout : 'auth_base'
        })
      })
    }
  })

  router.get('/search', function(req, res){
    if (cfg.access_token === ''){
      res.redirect('/')
    }

    else{
      console.log(req.query)            //log the query string to the console
      //Put the entire search URL together.
      try {
        searchInput = req.query.search //construct part of the query string, using the user input
        console.log('Search data is ' + searchInput)
        var searchURL = 'https://api.instagram.com/v1/tags/' + searchInput + '/media/recent?access_token=' + cfg.access_token
      } catch(err) {
        var searchURL = 'https://api.instagram.com/v1/tags/instagram' + cfg.access_token
      }
      //console.log(searchURL)    //log the complete GET request URL to the console
      var searchOptions = {     //create an options object to be sent to the request.get() function
        url: searchURL          //Defining the URL here, instead of within the 'searchURL' variable,
      }                         //results in the search placing 'undefined' into the searchInput variable
      //console.log(options)
      var userInfo = {
        url : 'https://api.instagram.com/v1/users/self/?access_token=' + cfg.access_token
      }

      request.get(searchOptions, function(error, response, body){
        try {
          var searchFeed = JSON.parse(body)     //This object contains the Intagram search results
        } catch(err) {
          console.log(searchOptions)
        }
        request.get(userInfo, function(error, response, body){
          var user = JSON.parse(body)
          try {
            var feed = searchFeed.data;
            res.render('search', {
             feed: searchFeed.data,
             user: user.data,
             layout: 'auth_base',
             title: 'Search Page!',
             pageintro: 'Search Instagram for #' + searchInput  //Shows the user the current search query
           })
          } catch (err) {
            res.redirect('/user/dashboard')
          }
      })
    })
    }
  })

module.exports = router
