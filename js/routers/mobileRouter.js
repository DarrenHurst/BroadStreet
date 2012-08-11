define(['jquery','backbone','views/view'], function($, Backbone, MainView, AnotherView){

    var Router = Backbone.Router.extend({

        initialize: function(){
        
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        // All of your Backbone Routes (add more)
        routes: {

            // When there is no hash bang on the url, the home method is called
            '': 'home'

        },

        'home': function(){

            // Instantiating mainView and anotherView instances
            var mainView = new MainView();
              
            // Renders the mainView template
            mainView.render();

          
        }
    });

    // Returns the Router class
    return Router;
});