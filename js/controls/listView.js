/********************************************
 *
 * List Control
 *
 * Darren Hurst
 * BroadStreet Mobile
 * Created, July 23 2012
 *
 *setText may also take img as html
 *
 */

define(['underscore', 'backbone','icons/icons'], function(_, Backbone,Icons) {

	var ListControl = Backbone.View.extend({
	    setEvent: function(parent,method){
	    	var that = this;
	    	$('#'+this.cid+ '_List').bind('click',function(){
	    		that.trigger("click", that.execFN(method, parent));
	    	})
	    },
	    setClass: function(name){
	    	$('#'+this.cid+ '_List').addClass(name).removeClass("bsm_List");
	    },
	    getId:function(){
	    	return this.cid +"_List";
	    },
	    setIcon: function(name,position){
	    	
	    	var icon = new Icons();
        	//var elem = "icon"+this.cid;
        	//icon.renderByName(name,elem,"270-#fff:5-#AAA:100","#555");
        	
        },
        addRow: function(html){
        	$("#"+this.cid+ '_List').append('<div class="item">'+html+'</div>');
        	
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
			var control = '<div id="' + this.cid + '_List" class="bsm_List" ></div>';
			return control;
		},
		render : function(selector) {
			$("#"+selector).append(this.html());
			
			return this;
		}
	});
	return ListControl;
}); 