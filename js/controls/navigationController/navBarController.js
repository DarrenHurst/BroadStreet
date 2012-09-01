
define(['underscore', 'backbone',
'controls/viewController/mainView',
'icons/icons'
], function(_, Backbone,MainView,Icons) {

	var NavBarView = Backbone.View.extend({
		initialize: function(){
			this.buttonidx = 0;
		},
		setClass: function(name){
			$("#"+this.cid).removeClass('bsm_navbar').addClass(name);
		},
		setHtml: function(html){
			$("#"+this.cid).html(html);
			//alert(html);
			this.html=html;
		},
		setBackground: function(color){
			
		},
		setBackgroundImage: function(gradient){
			
		},
		setIcon: function(name){
	    	
	    	var icon = new Icons();
        	$("#"+this.cid+'_navButton'+this.buttonidx).append('<div id="'+this.cid+'_icon'+this.buttonidx+'" class="icon"></div>');
        	var elem = this.cid+'_icon'+this.buttonidx;
        	icon.renderByName(name,elem,"270-#fff:5-#AAA:100","#555");
        	
        },
		addButton: function(icon,text,map){
			$(".nav_container").append('<div id="'+this.cid+'_navButton'+this.buttonidx+'" class="bsm_navButton"></div>');
			
			this.setIcon(icon);
			$("#"+this.cid+'_navButton'+this.buttonidx).append('<div class="text">'+text+'</div>');
			//set button width.
			var numberOfButtons = $(".bsm_navButton");
			var pageWidth = $("body").css("width");
			var newWidth = parseFloat(pageWidth)/  numberOfButtons.length ;
			$(".bsm_navButton").css({"width":newWidth-7});
			var that = this;
			if (map.nav != undefined){
			
				$("#"+this.cid+'_navButton'+this.buttonidx).bind("click",function(){
				that.inView.hideAll();
				setTimeout(function(){map.nav.slideDown()},500);
				});
			}
			if (map.link != undefined){
				$("#"+this.cid+'_navButton'+this.buttonidx).bind("click",function(){
					that.inView.hideAll();
					window.location = map.link;
				});
			}
			
			this.buttonidx +=1;
		},
		getHtml: function(){
			return this.html;
		},
		render : function(inView) {
			this.inView = inView;
			$('body').append('<div id="'+this.cid+'" class="bsm_navbar"><div id="'+this.cid+'_nav_container" class="nav_container"></div></div>');
			
            $(window).bind('orientationchange resize', function(event){
            	var numberOfButtons = $(".bsm_navButton");
			    var pageWidth = $("body").css("width");
			    var newWidth = parseFloat(pageWidth)/  numberOfButtons.length ;
			    $(".bsm_navButton").css({"width":newWidth-7});
            });

			return this;
		}
	});
	return NavBarView;
}); 