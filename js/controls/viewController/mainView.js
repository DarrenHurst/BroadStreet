/********************************************
 *
 * Label Control
 *
 * Darren Hurst
 * BroadStreet Mobile
 * Created, July 23 2012
 *
 *
 * setTitle
 *   title = control line above title
 *
 * setLabel
 *  takes label text or HTML
 *
 */

define(['underscore', 'backbone',
        'controls/viewController/childView'
], function(_, Backbone,ChildView) {

	var MainView = Backbone.View.extend({
		
		initialize : function() {
		 
		},
		setPage:function(mainPage){
			this.newPage = new ChildView().render("#"+mainPage);
		},
		getPage: function(){
			return this.page;
		},
		render : function(parent) {
			$('#'+parent).wrap('<div id="'+this.cid+'"></div>');
			
			return this;
		}
	});
	return MainView;
}); 