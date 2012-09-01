define(['jquery', 
		'backbone',
		'models/model', 
		'text!templates/docs/docs.html',
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
		'controls/popup',
		'models/twitter',
		'controls/listView',
		'controls/navigationController/navBarController',
], function($, Backbone, Model, template,Label,Selection,Toggle,Input,Alert,ScrollView,Picture,Button,MainView,Spinner,Page2,Page3,Popup,Twitter,listView,NavBar){

    var View = Backbone.View.extend({

        // Represents the actual DOM element that corresponds to your View (There is a one to one relationship between View Objects and DOM elements)
        el: 'body',
     
        // bind valueChange for the id of the control.
        // this is a custom events method. you can bind other events normally.
       
        // View constructor
      
        // View constructor
        initialize: function(page) {
             document.getElementsByTagName('BODY')[0].innerHTML = '';
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
        buildTweets: function(data){
        	console.log(data);
            var list = new listView().render(this.ScrollView1.getId());
            for(x in data){
            	//console.log(data[x].text);
            	
            	list.addRow(this.buildTweetBlock(data[x])); 
            }
        },
        replaceURLWithHTMLLinks: function(text) {
   		    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
 	   		return text.replace(exp,"<a href='$1'>$1</a>"); 
		},
        buildTweetBlock: function(data){
        	var pic = data.user.profile_image_url;
        	var text = this.replaceURLWithHTMLLinks(data.text);
        	return '<div class="img"><img src="'+pic+'" /></div><div class="text" >'+text+'</div>';
        	
        },
        createControls: function(){
        	
        	
        	
            this.Popup1 = new Popup("tweet","Tweets");
            this.Popup1.render("top");
            this.Popup1.hideLeftBtn();
            var Popup_Control =  this.Popup1.isControl();
            this.Popup1.setPointer(25);
            this.Popup1.setPosition(180,10);
            //alert(Popup_Control);
            this.ScrollView1 = new ScrollView(Popup_Control,this).render();
            
            //this.ScrollView1.setHtml();
        	this.ScrollView1.setHeight("300");
            
            this.twitter = new Twitter(this);
        
            
     
            var Btn2 =  new Button().render("tweet");
         	Btn2.setText("show tweets @ITS_A_NERD");
        	Btn2.setEvent(this,"showPop1");
        	
        	
        	//TODO move icon render to control
        	//icon.renderByName("arrowalt","icon","270-#fff:5-#AAA:100","#555");
        	
        },
          showPop1: function(e){
        	e.Popup1.setShow();
        },
        events: {

          
	    },

           navBar: function(){
        	
        	//  nav : nav to a new MainView or to a childView in Mainview scope"
        	//  link : nav to any other link
        	this.navbar = new NavBar().render(this.app); // set the start location;
        	this.navbar.addButton("home","Home",{"link":"#"});
     		this.navbar.addButton("i","Read My Blog",{"link":"http://newdev.tumblr.com/"});
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
            
            this.createControls();
            this.navBar();

        },

      

    });
	
    // Returns the View class
    return View;