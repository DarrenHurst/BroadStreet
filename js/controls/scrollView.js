/********************************************
 *
 * scrollView Control
 *
 * Darren Hurst
 * BroadStreet Mobile
 * Created, Aug 8 2012
 *
 *
 * setTitle
 *   title = control line above title
 *
 * setHtml
 *  takes Html to set to view
 *
 */

define(['underscore', 'backbone'], function(_, Backbone) {

	var scrollViewControl = Backbone.View.extend({
		el : function() {
			var el = '#' + this.id;
			this.el = el;
		},
		initialize : function(parent) {
			this.id = this.cid;
			this.parent = "#" + parent;
		},
		setTitle : function(title) {
			$("#" + this.id + "_scrollView").wrap('<div id="' + this.id + '_header_scrollView"  class="bsm_scrollView_title">' + title + '<br/></div>');
		},
		setHtml : function(html) {
			$("#" + this.id + "_scrollView").html(html);
		},
		setHeight: function(height){
			$("#" + this.id + "_scrollView").css({
				"height":height
			});
		},
		setWidth: function(width){
			$("#" + this.id + "_scrollView").css({
				"width":width
			});
		},
		getscrollView : function() {
			return $("#" + this.id + "_scrollView").html();
		},
		id : function() {
			return this.el();
		},
		getId:function(){
			return this.id + '_scrollView';
		},
		html : function() {
			var control = '<div id="' + this.id + '_scrollView" class="bsm_scrollView"></div>';
			return control;
		},
		click : function() {
			return "click " + this.id();
		},
		trimCssProperty : function(prop) {
			prop = prop.substring(0, prop.length - 2)
			prop = parseInt(prop);
			prop = prop - 27;
			//margin fix
			return prop
		},

		render : function() {
			$(this.parent).append(this.html());
			this.val = "";
			var that = this;

			return this;
		}
	});
	return scrollViewControl;
}); 