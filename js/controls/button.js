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

define(['underscore', 'backbone','icons/icons'], function(_, Backbone,Icons) {

	var ButtonControl = Backbone.View.extend({
	    setText: function(text){
	    	$('#'+this.cid+ '_Button').html("<div id='text'>"+text+"</div>");
	    },
	    setEvent: function(parent,method){
	    	var that = this;
	    	$('#'+this.cid+ '_Button').bind('click',function(){
	    		that.trigger("click", that.execFN(method, parent, parent));
	    	})
	    },
	    setClass: function(name){
	    	$('#'+this.cid+ '_Button').addClass(name).removeClass("bsm_Button");
	    },
	    setRaidus: function(radius){
	    	$('#'+this.cid+ '_Button').css({"border-radius":radius})
	    },
	    getId:function(){
	    	return this.cid +"_Button";
	    },
	    setIcon: function(name,position){
	    	
	    	var icon = new Icons();
        	if (position != undefined){
        	 $("#"+this.getId()).append('<div class="bsm_iconleft" ><div id="icon'+this.cid+'"></div></div>');
        	}else{
        	  $("#"+this.getId()).append('<div class="bsm_icon" ><div id="icon'+this.cid+'"></div></div>');
        	}
        	var elem = "icon"+this.cid;
        	icon.renderByName(name,elem,"270-#fff:5-#AAA:100","#555");
        	
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
			var control = '<div id="' + this.cid + '_Button" class="bsm_Button" ></div>';
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