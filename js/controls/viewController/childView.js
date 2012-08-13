
define(['underscore', 'backbone','controls/viewController/mainView'
], function(_, Backbone,MainView) {

	var ChildView = Backbone.View.extend({
		
		setClass: function(name){
			$("#"+this.cid).removeClass('bsm_childpage').addClass(name);
		},
		setHtml: function(html){
			$("#"+this.cid).html(html);
			//alert(html);
			this.html=html;
		},
		getHtml: function(){
			return this.html;
		},
		slideDown: function(){
			$("#"+this.cid).slideDown({},1000);
		},
		slideRight: function(){
			$("#"+this.cid).css({"display":"inline"});
			var element =  $("#"+this.cid);
			var width = element.context.width;
			element.css({"left":width*-1});
			$("#"+this.cid).animate({"left":"0px"}, "slow");
		},
		slideLeft:function(){
			$("#"+this.cid).css({"display":"inline"});
			var element =  $("#"+this.cid);
			var width = element.context.width;
			element.css({"right":width*-1});
			$("#"+this.cid).animate({"right":"0px"}, "slow");
		},
		slideUp: function(){
			
		},
		flipIn: function(){
		    $("#"+this.cid).css({"display":"inline"});
			$("#"+this.cid).addClass("flip.in");
			$("#"+this.cid).removeClass("flip.out");
		},
		flipOut: function(){
		    $("#"+this.cid).css({"display":"none"});
			$("#"+this.cid).addClass("flip.out");
			$("#"+this.cid).removeClass("flip.in");
		},
		render : function(mainView) {
			$("#"+mainView).append('<div id="'+this.cid+'" class="bsm_childpage"></div>');
			

			return this;
		}
	});
	return ChildView;
}); 