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
		'controls/viewController/mainView',
		'controls/spinner',
		'icons/icons'
], function($, Backbone, Model, template,Label,Selection,Toggle,Input,Alert,ScrollView,Picture,Button,MainView,Spinner,Icons){

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
        createControls: function(){
        	
         
        	
        	var icon = new Icons();
        	var icon_array = icon.icons();
        	for(x in icon_array){
        	icon.render(icon_array[x],"controls_left2","#000","none");
        	}
        	
        	var Btn1 =  new Button().render("controls_right2");
        	Btn1.setText("go back to page 1");
        	Btn1.setEvent(this,"alertButton");
        	Btn1.setIcon("arrowleftalt","left");// iconname,position
        	
        	var Btn2 =  new Button().render("controls_right2");
        	Btn2.setText("go to page 3");
        	Btn2.setEvent(this,"goToPage3");
        	Btn2.setIcon("arrowalt");
        	//TODO move icon render to control
        	//icon.renderByName("arrowalt","icon","270-#fff:5-#AAA:100","#555");
        	
        },
         alertButton: function(e){
        	var Spinner1 = new Spinner("a");
        	Spinner1.showSpinner("bar");
        	setTimeout(function(){
        		Spinner1.hideSpinner();
        	},2000);
        	console.log(e);
        	e.parentView.page2.fadeOut();
        	e.parentView.page1.slideLeft();
        },
        goToPage3: function(e){
        	var Spinner1 = new Spinner("a");
        	Spinner1.showSpinner("bar");
        	setTimeout(function(){
        		Spinner1.hideSpinner();
        	},2000);
        	console.log(e);
        	e.parentView.page2.fadeOut();
        	e.parentView.page3.slideDown();
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