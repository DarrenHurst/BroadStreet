define(['jquery','backbone','views/view', 'views/kitchensink/twitter/twitterApp'], function($, Backbone, MainView, TwitterView){

    var Router = Backbone.Router.extend({

        initialize: function(){
        
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
            
          

        },
        config: function(){
        	  //configuration
         
        },

        // All of your Backbone Routes (add more)
        routes: {

            // When there is no hash bang on the url, the home method is called
            '': 'home',
            'twitter':'twitter' //twitter kitchen sink

        },

        'home': function(){

            // Instantiating mainView and anotherView instances
            var mainView = new MainView();
              
            // Renders the mainView template
            mainView.render();
            

          
        },
        'twitter': function(){
        	var twitter = new TwitterView();
        	
        	twitter.render();
        }
    });

    // Returns the Router class
    return Router;
});