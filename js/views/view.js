define(['jquery', 
		'backbone',
		'models/model', 
		'text!templates/main.html',
		'controls/labelBox',
		'controls/selectionList',
		'controls/toggle',
		'controls/textInput',
		'controls/alert',
		'controls/scrollView',
		'controls/picture',
		'controls/viewController/mainView'
], function($, Backbone, Model, template,Label,Selection,Toggle,Input,Alert,ScrollView,Picture,MainView){

    var View = Backbone.View.extend({

        // Represents the actual DOM element that corresponds to your View (There is a one to one relationship between View Objects and DOM elements)
        el: 'body',
     
        // bind valueChange for the id of the control.
        // this is a custom events method. you can bind other events normally.
        controlEvents:function(){
        return {
        	"valueChange #textInput1":"alertText",//your event.. 
        }
		},
        // View constructor
        initialize: function() {

            // Setting the view's model property to the passed in model
            this.model = new Model();

            // Setting the view's template property
            this.template = _.template( template, { model: this.model.toJSON() } );
            

        },
        alertText:function(e){
        	var AlertControl = new Alert;
        	AlertControl.setAlert(" your name is "+e.getVal());
        },
        createControls: function(){
        	
        	var Label1 = new Label("label1","controls_right",this).render();
        	Label1.setTitle("Label");
        	Label1.setLabel("Label takes html");
        	
        	var Selection1 = new Selection("selection1","controls_left",this).render();
        	Selection1.setTitles("Selection","Make a selection");
        	Selection1.addRow(Label1.getLabel(),1);
        	Selection1.addRow(Label1.getLabel(),2);
        	
        	var Toggle1 = new Toggle("toggle1","controls_left",this).render();
        	Toggle1.setTitle("Do you like this?");
        	Toggle1.setOptions("YES","NO");
        	
        	var TextInput = new Input("textInput1","controls_right",this).render();
        	TextInput.setTitle("Your Name - will alert on blur");
        	//TextInput.getVal() will return the input val
        	//Textinput takes setType - ie password, number
        	
        	var ScrollView1 = new ScrollView("scrollView1","controls_right").render();
        	ScrollView1.setTitle("Add a ScrollView Panel");
        	ScrollView1.setHtml("<p>BroadStreet is an HTML5, Backbone.js JQuery Control Set, Above are a few of the controls already available.</p>"+
			"If you would like to contribute please contact me. If you like what you see. Star or Watch the Repo."+
			"<br/"+
			"Suggestions are welcome!"+
			"Thank you for checking us out!");
        	ScrollView1.setHeight("100");
        	
        	var Picture1 = new Picture("picture1","controls_left").render();
        	Picture1.setTitle("Picture with 3 in array");
        	Picture1.setPictures(["images/html5.jpg",
        						  "images/backbone.jpeg",
        						  "images/jquery.jpeg"]);
        	//var ExpandInput1 = new ExpandInput("expand1","controls_left").render();
        	//ExpandInput1.setTitle("Message");
        	
        },

        events: {

          
	    },

        render: function() {

            //this.$el.find("#MainPage").append(this.template);
            
            
            
            this.app = new MainView().render(this.$el.selector);
            
            var page1 =  this.app.setPage(this.app);
            page1.setHtml(this.template);
            // page1.setClass("bsm_page");
            // page1.slideIn();
            // page1.slideRight();
            page1.slideLeft();
            page1.flipIn();
            
            var page2 =  this.app.setPage(this.app);
            page2.setHtml("page 2 not in view.")
            
            var page3 =  this.app.setPage(this.app);
             
            var page4 =  this.app.setPage(this.app);
                        

            //controls should be in MainView() but for sake of demoing paging they are here
            this.createControls();

        },

      

    });
	
    // Returns the View class
    return View;
});