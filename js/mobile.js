// Sets the require.js configuration for your application.
require.config({
  
  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
  paths: {

      // Core Libraries
      modernizr: "libs/modernizr-2.5.3",
      jquery: "libs/jquery-1.8",
      underscore: "libs/lodash-0.3.1",
      backbone: "libs/backbone-0.9.2",

      // Require.js Plugins
      text: "plugins/text-2.0.0"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      "backbone": {
          deps: ["underscore", "jquery"],
          exports: "Backbone"  //attaches "Backbone" to the window object
      }

  } // end Shim Configuration
  
});

// Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require(['modernizr','jquery','backbone','routers/mobileRouter'], function(Modernizr, $, Backbone, Mobile) {

    // Instantiates a new Router
    this.router = new Mobile();
});