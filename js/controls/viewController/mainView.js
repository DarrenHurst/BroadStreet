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
		 this.onPage =0;
		 this.pageArray = new Array();
		 
		},
		setPage:function(Page){
			this.onPage +=1;
			var child = new ChildView().render(Page); 
			this.pageArray.push(child);
			return child
		},
		getPage: function(){
			return this.page;
		},
		hideAll: function(){
			for(x in this.pageArray){
				this.pageArray[x].fadeOut();
			}
		},
		render : function(parent) {
			$(parent).append('<div id="'+this.cid+'" class="bsm_page"></div>');
			$("#"+this.cid).wrap("<div id='container'></div>")
			return this;
		}
	});
	return MainView;
}); 