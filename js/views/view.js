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
		'controls/button',
		'controls/viewController/mainView',
		'controls/spinner',
		'views/page2',
		'views/page3',
		'controls/navigationController/navBarController',
], function($, Backbone, Model, template,Label,Selection,Toggle,Input,Alert,ScrollView,Picture,Button,MainView,Spinner,Page2,Page3,NavBar){

    var View = Backbone.View.extend({

        // Represents the actual DOM element that corresponds to your View (There is a one to one relationship between View Objects and DOM elements)
        el: 'body',
     
        // bind valueChange for the id of the control.
        // this is a custom events method. you can bind other events normally.
       
        // View constructor
        initialize: function() {
            document.getElementsByTagName('BODY')[0].innerHTML = '';
            // Setting the view's model property to the passed in model
            this.model = new Model();

            // Setting the view's template property
            this.template = _.template( template, { model: this.model.toJSON() } );
            
            
            var fbiframe = '<iframe src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2FBroadstreetMobile&amp;width=292&amp;height=62&amp;colorscheme=light&amp;show_faces=false&amp;border_color&amp;stream=false&amp;header=true&amp;appId=153402774797488" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:292px; height:62px;" allowTransparency="true"></iframe>';
           
            var googleplus = '<div class="g-plusone" data-annotation="none" data-width="300"></div>'+
						"<script type='text/javascript'>(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/plusone.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();</script>";
            
            $('BODY').append('<div id="header"><a href="https://github.com/DarrenHurst/BroadStreet">BroadStreet</a></div><div id="fb">'+fbiframe+'</div><div id="google">'+ googleplus+'</div>');
            

        },
        alertText:function(e){
        	var AlertControl = new Alert;
        	AlertControl.setAlert(" your name is "+this.getVal());
        },
        createControls: function(){
           
        	var Spinner1 = new Spinner("a");
        	Spinner1.showSpinner();
        	setTimeout(function(){
        		Spinner1.hideSpinner();
        	},2000);
        	
        	var Label1 = new Label("controls_right",this).render();
        	Label1.setTitle("Label");
        	Label1.setLabel("Label takes html");
        	
        	var Selection1 = new Selection("controls_left",this).render();
        	Selection1.setTitles("Selection","Make a selection");
        	Selection1.addRow(Label1.getLabel(),1);
        	Selection1.addRow(Label1.getLabel(),2);
        	
        	var Toggle1 = new Toggle("controls_left",this).render();
        	Toggle1.setTitle("Do you like this?");
        	Toggle1.setOptions("YES","NO");
        	
        	var TextInput = new Input("controls_right",this).render();
        	TextInput.setTitle("Your Name - will alert on blur");
        	TextInput.setEvent(this,"alertText");
        	//TextInput.getVal() will return the input val
        	//Textinput takes setType - ie password, number
        	
        	
        	var ScrollView1 = new ScrollView("controls_right").render();
        	ScrollView1.setTitle("Add a ScrollView Panel");
        	ScrollView1.setHtml("<p>BroadStreet is an HTML5, Backbone.js JQuery Control Set, Above are a few of the controls already available.</p>"+
			"If you would like to contribute please contact me. If you like what you see. Star or Watch the Repo."+
			"<br/"+
			"Suggestions are welcome!"+
			"Thank you for checking us out!");
        	ScrollView1.setHeight("100");
        	
        	var Picture1 = new Picture("controls_left").render();
        	Picture1.setTitle("Picture with 3 in array");
        	Picture1.setPictures(["images/html5.jpg",
        						  "images/backbone.jpeg",
        						  "images/jquery.jpeg"]);
        	//var ExpandInput1 = new ExpandInput("expand1","controls_left").render();
        	//ExpandInput1.setTitle("Message");
        	var Btn1 =  new Button().render("controls_right");
        	Btn1.setText("Click For Page 2");
        	Btn1.setEvent(this,"alertButton");
        	Btn1.setIcon("arrowalt");
        	
        	
        	
        },
        navBar: function(){
        	
        	//  nav : nav to a new MainView or to a childView in Mainview scope"
        	//  link : nav to any other link
        	this.navbar = new NavBar().render(this.app); 
            this.navbar.addButton("twitter","Twitter Example",{"link":"#twitter"});//https://twitter.com/ITS_A_NERD// set the start location;
        	this.navbar.addButton("gear","page2 nav example",{"nav":this.page2});
        	this.navbar.addButton("video","page3 nav example",{"nav":this.page3});
        	this.navbar.addButton("githubalt","GitHub",{"link":"https://github.com/DarrenHurst/BroadStreet"});
        	this.navbar.addButton("linkedin","LinkedIn",{"link":"http://ca.linkedin.com/pub/darren-hurst/23/299/149"});
     		this.navbar.addButton("i","Read My Blog",{"link":"http://newdev.tumblr.com/"});
        },
        alertButton: function(e){
        	console.log(e);
        		var Spinner1 = new Spinner("a");
        	Spinner1.showSpinner("dots");
        	setTimeout(function(){
        		Spinner1.hideSpinner();
        	},2000);
        	e.page1.fadeOut();
        	//e.page2.flipIn();
       	    e.page2.slideRight();
        },

        events: {

          
	    },

        render: function() {

            //this.$el.find("#MainPage").append(this.template);
            
            
            
            this.app = new MainView().render(this.$el.selector);
            
            
            
            this.page1 =  this.app.setPage(this.app);
            this.page1.setHtml(this.template);
            // page1.setClass("bsm_page");
            // page1.slideIn();
            // page1.slideRight();
            this.page1.slideLeft();
            //this.page1.flipIn();
            
            
            //create the page2 in main View
            this.page2 =  this.app.setPage(this.app);
            //generate the page2 object
            var page2obj = new Page2(this);
            // add the page2 instance to the main view object
            this.page2.setHtml(page2obj.template);
            // render the page2 view
            page2obj.render();
            
            
            
            
            this.page3 =  this.app.setPage(this.app);
            var page3obj = new Page3(this);
            this.page3.setHtml(page3obj.template);
            page3obj.render();
             
            var page4 =  this.app.setPage(this.app);
                        

            //controls should be in MainView() but for sake of demoing paging they are here
            this.createControls();
            
            this.navBar();

        },

      

    });
	
    // Returns the View class
    return View;
});