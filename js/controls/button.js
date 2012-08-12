/********************************************
 *
 * Button Control
 *
 * Darren Hurst
 * BroadStreet Mobile
 * Created, July 23 2012
 *
 *setText may also take img as html
 *
 */

define(['underscore', 'backbone'], function(_, Backbone) {

	var ButtonControl = Backbone.View.extend({
	    setText: function(text){
	    	$('#'+this.cid+ '_Button').html(text);
	    },
	    setEvent: function(parent,method){
	    	var that = this;
	    	$('#'+this.cid+ '_Button').bind('click',function(){
	    		this.trigger("click", that.execFN(method, parent, parent));
	    	})
	    },
	    setClass: function(name){
	    	$('#'+this.cid+ '_Button').addClass(name).removeClass("bsm_Button");
	    },
	    execFN : function(functionName, context, args) {
			var args = Array.prototype.slice.call(arguments).splice(2);
			var namespaces = functionName.split(".");
			var func = namespaces.pop();
			for(var i = 0; i < namespaces.length; i++) {
				context = context[namespaces[i]];
			}
			return context[func].apply(this, args);
		},
	    html : function() {
			var control = '<div id="' + this.cid + '_Button" class="bsm_Button"></div>';
			return control;
		},
		render : function(selector) {
			$("#"+selector).append(this.html());
			this.val = "";
			var that = this;

			return this;
		}
	});
	return ButtonControl;
}); 