
define(['underscore', 'backbone','controls/viewController/mainView'
], function(_, Backbone,MainView) {

	var NavBarView = Backbone.View.extend({
		
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
		addButton: function(){
			
		},
		getHtml: function(){
			return this.html;
		},
		render : function(mainView) {
			$("#"+mainView).append('<div id="'+this.cid+'" class="bsm_navbar"></div>');
			

			return this;
		}
	});
	return NavBarView;
}); 