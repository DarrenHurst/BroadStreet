define(['jquery', 
		'backbone',
		'models/model', 
		'text!templates/page2.html',
		'controls/labelBox',
		'controls/selectionList',
		'controls/toggle',
		'controls/textInput',
		'controls/alert',
		'controls/scrollView',
		'controls/picture',
		'controls/button',
		'controls/viewController/mainView'
], function($, Backbone, Model, template,Label,Selection,Toggle,Input,Alert,ScrollView,Picture,Button,MainView){

    var View = Backbone.View.extend({

        el:'#page2',
        // bind valueChange for the id of the control.
        // this is a custom events method. you can bind other events normally.
        controlEvents:function(){
        return {
        	"valueChange #textInput1":"alertText",//your event.. 
        }
		},
        // View constructor
        initialize: function(page) {

            // Setting the view's model property to the passed in model
            this.model = new Model();

            // Setting the view's template property
            this.template = _.template( template, { model: this.model.toJSON() } );
            this.parentView = page;
          
            //alert(this.template);
            return this.template;
            

        },
        alertText:function(e){
        	var AlertControl = new Alert;
        	AlertControl.setAlert(" your name is "+e.getVal());
        },
        createControls: function(){
        	
        	var Btn1 =  new Button().render("controls_right2");
        	Btn1.setText("go back to page 1");
        	Btn1.setEvent(this,"alertButton");
        	
        	
        },
        alertButton: function(e){
        	console.log(e);
        	e.parentView.page2.flipOut();
        	e.parentView.page1.slideDown();
        },

        events: {

          
	    },

        render: function() {

              this.createControls();
            
              return this;
       
        },

      

    });
	
    // Returns the View class
    return View;
});