define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var Tweets = Backbone.Collection.extend({
  	initialize: function(caller){
  		this.caller = caller;
  		this.getData();
  	},
    url: function () {
      return 'http://twitter.com/statuses/user_timeline/ITS_A_NERD.json?callback=?'
    },
    getData: function(){
    	var that = this;
      $.ajax({
<<<<<<< HEAD
      	url: that.url(),
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(data) {	
    	console.log(data);
       	that.twitterStream = data;
        that.caller.buildTweets(that.twitterStream);},
    error: function() { alert('Failed!'); }
    });
         
=======
          url: that.url(),
          dataType: "jsonp",
          jsonpCallback: that.sendData()
       });
    },
    sendData: function(data){
        that.twitterStream = data;
    		that.caller.buildTweets(that.twitterStream);
>>>>>>> c153c884ca1d0607d910e97a84ab34a3678a829d
    },
 
    // Because twitter doesn't return an array of models by default we need
    // to point Backbone.js at the correct property
    parse: function(resp, xhr) {
      return resp.results;
    }
  });

  return Tweets;
});