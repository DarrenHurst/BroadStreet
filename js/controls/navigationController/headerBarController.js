
define(['underscore', 'backbone',
'icons/icons'
], function(_, Backbone,Icons) {

	var headerBarView = Backbone.View.extend({
		initialize: function(){
			
		},
		setClass: function(name){
			$("#"+this.cid).removeClass('bsm_headerbar').addClass(name);
		},
		setTitle:function(title){
			$("#"+this.cid).append('<div id="'+this.cid+'_headerbar" class="bsm_headerbarTitle"><h3>'+title+'</h3></div>');
		},
		setLeftNav: function(title,hash){
			
			$("#"+this.cid).prepend('<div id="'+this.cid+'_headerleft" class="button back black">'+title+'</div>');
			var that=this;
			if(hash.nav != undefined){
				$("#"+this.cid+'_headerleft').bind("click",function(){
				//that.inView.hideAll();	
				setTimeout(function(){hash.nav.slideDown()},500);
				});
			
			}else{
			$("#"+this.cid+'_headerleft').bind("click",function(){
				window.location=hash.link;
			});
			}

		},
		setRightNav: function(title,hash){
			$("#"+this.cid).append('<div id="'+this.cid+'_headerright" class="button blue right">'+title+'</div>');
			var that=this;	
			if(hash.nav != undefined){
				$("#"+this.cid+'_headerright').bind("click",function(){
				//that.inView.hideAll();	
				setTimeout(function(){hash.nav.slideDown()},500);
				});
			
			}else{
			$("#"+this.cid+'_headerright').bind("click",function(){
				window.location=hash.link;
				
			});
			}
		},
		getHtml: function(){
			return this.html;
		},
		render : function() {
			$('body').prepend('<div id="'+this.cid+'" class="bsm_headerbar"></div>');
			
           

			return this;
		}
	});
	return headerBarView;
}); 