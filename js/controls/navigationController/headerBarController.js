
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
		setLeftNav: function(title){
			$("#"+this.cid).prepend('<div id="'+this.cid+'_headerleft" class="button back black">'+title+'</div>');

		},
		setRightNav: function(title,e){
			$("#"+this.cid).append('<div id="'+this.cid+'_headerright" class="button blue right">'+title+'</div>');
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