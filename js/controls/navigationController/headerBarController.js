
define(['underscore', 'backbone',
'icons/icons'
], function(_, Backbone,Icons) {

	var headerBarView = Backbone.View.extend({
		initialize: function(){
			
		},
		setClass: function(name){
			$("#"+this.cid).removeClass('bsm_headerbar').addClass(name);
		},
		setLeftNav: function(){
			
		},
		setRightNav: function(){
			
		},
		getHtml: function(){
			return this.html;
		},
		render : function() {
			$('body').append.before('<div id="'+this.cid+'" class="bsm_headerbar"></div>');
			
           

			return this;
		}
	});
	return headerBarView;
}); 