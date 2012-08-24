define(['jquery', 
		'backbone',
		'models/model', 
		'text!templates/page3.html',
		'controls/labelBox',
		'controls/selectionList',
		'controls/toggle',
		'controls/textInput',
		'controls/alert',
		'controls/scrollView',
		'controls/picture',
		'controls/button',
		'controls/viewController/mainView',
		'controls/popup',
		'icons/icons'
], function($, Backbone, Model, template,Label,Selection,Toggle,Input,Alert,ScrollView,Picture,Button,MainView,Popup,Icons){

    var View = Backbone.View.extend({

        el:'#page3',
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
        	
        	
        	
        	
            this.Popup1 = new Popup("controls_left3");
            this.Popup1.render();
            var Popup_Control =  this.Popup1.isControl();
            this.Popup1.setPointer(257);
            this.Popup1.setPosition(20,97);
            //alert(Popup_Control);
            var ScrollView1 = new ScrollView(Popup_Control,this).render();
           
            ScrollView1.setHtml("<p>This is a scrollView inside a popup control.</p>"+
			"If you would like to contribute please contact me. If you like what you see. Star or Watch the Repo."+
			"<br/"+
			"Suggestions are welcome!"+
			"Thank you for checking us out!<br/> I could add a whole lot of text in here to make it scroll, but instead i decided that if I told you, it would most likely be enough text to demonstrate that the control does infact scroll.");
        	ScrollView1.setHeight("100");
        
            this.Popup2 = new Popup("controls_left3");
            this.Popup2.render("top"); // top is handle pointer on top.
            this.Popup2.setContent("This is just a text popup and takes html or text");
            this.Popup2.setPosition(260,97);
             
          
         
            var Btn2 =  new Button().render("controls_left3");
         	Btn2.setText("Show Control Pop");
        	Btn2.setEvent(this,"showPop1");
        	
        	var Btn3 =  new Button().render("controls_left3");
         	Btn3.setText("Show Text Pop");
        	Btn3.setEvent(this,"showPop2");
        	
        	var Btn1 =  new Button().render("controls_right3");
        	Btn1.setText("Back to page 1");
        	Btn1.setEvent(this,"alertButton");
        	Btn1.setIcon("arrowleftalt","left");
        	
        	//TODO move icon render to control
        	//icon.renderByName("arrowalt","icon","270-#fff:5-#AAA:100","#555");
        	
        },
        showPop1: function(e){
        	e.Popup1.setShow();
        },
        showPop2: function(e){
        	e.Popup2.setShow();
        },
        alertButton: function(e){
        	console.log(e);
        	e.parentView.page3.hide();
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