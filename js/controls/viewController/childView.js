
define(['underscore', 'backbone','controls/viewController/mainView'
], function(_, Backbone,MainView) {

	var ChildView = Backbone.View.extend({
		
		setHtml: function(html){
			$('#'+this.cid).html(html);
			this.html=html;
		},
		getHtml: function(){
			return this.html;
		},
		render : function(mainView) {
			$(mainView).append('<div id="'+this.cid+'" class="bsm_childpage"></div>');
			

			return this;
		}
	});
	return ChildView;
}); 