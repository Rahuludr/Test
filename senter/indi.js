var request = require('request');

var consumerKey = "6e295741f770fb45c87df3c37954f355",
    consumerSecret = "75aea811fb1369960a75c49ebab033da",
	  token= "7243328f90c1294e96dccbcb4892cf98",
	  token_secret="e99909598644fcd52df9fdc2423e3ffa",
	  verifier="f0abe00ebb9f16d403906b3ea4ffa97c",
    siteUrl = "http://indizart.com/stag/index.php";
	
// step 3
var qs = require('querystring'),
    oauth = {
		callback: 'http://indizart.com/stag/index.php'
		, consumer_key: consumerKey
		, consumer_secret: consumerSecret
		, token: token
		, token_secret: token_secret
		, verifier: verifier
    }
  , url = siteUrl + '/oauth/token';
  
request.post({url:url, oauth:oauth}, function (err, req, body) {
  console.log(body);
});


