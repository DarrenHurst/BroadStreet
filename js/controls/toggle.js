/********************************************
 *
 * toggle Control
 *
 * control.val
 * RETURNS 0 for left
 *         1 for right
 *
 * setTitles
 *   title = control line above title
 *
 * setOptions
 *  takes left and right options
 *
 * setClass
 * takes optional class styling like font-size, etc.
 */

define(['underscore', 'backbone'], function(_, Backbone) {

	var ToggleControl = Backbone.View.extend({
		el : function() {
			var el = '#' + this.id;
			this.el = el;
		},
		initialize : function( parent, that) {
			this.id = this.cid;
			this.parent = "#" + parent;
			_.extend(this, Backbone.Events);
			this.parentView = that;
		},
		setTitle : function(title) {
			$("#" + this.id + "_toggle").wrap('<div id="' + this.id + '_header_toggle"  class="bsm_toggle_title">' + title + ':<br/></div>');
		},
		setOptions : function(o1, o2) {
			$('#' + this.id + "_toggle").append('<div id="' + this.id + '_left" class="bsm-toggle-left"><div id="' + this.id + '_option1" >' + o1 + '</div></div><div id="' + this.id + '_right" class="bsm-toggle-right"><div id="' + this.id + '_option2" >' + o2 + '</div></div>')
			$('.bsm-toggle-left').addClass('toggle_on').removeClass('toggle_off');
			$('.bsm-toggle-right').addClass('toggle_off').removeClass('toggle_on');
			var id = this.id;
			this.optionSelection(id);
		},
		setEvent: function(parent,method){
	       this.parent = parent;
	       this.method = method;
	    },
		setClass : function(className) {
			$('#' + this.id + '_toggle').addClass(className).removeClass('bsm_toggle');
		},
		optionSelection : function(id) {

			var that = this;
			var id = this.id;

			$("#" + this.id + "_left").bind('click', function() {

				$("#" + id + "_right").addClass('toggle_off').removeClass('toggle_on');
				$("#" + id + "_left").addClass('toggle_on').removeClass('toggle_off');
				that.val = 0;
				that.watchVal();

			});

			$("#" + this.id + "_right").bind('click', function() {

				$("#" + id + "_right").addClass('toggle_on').removeClass('toggle_off');
				$("#" + id + "_left").addClass('toggle_off').removeClass('toggle_on');
				that.val = 1;
				that.watchVal();

			});

		},
		getVal : function() {
			return this.val;
		},
		setVal : function(inVal) {
			this.val = inVal;
			if (this.val == 0){
				$('.bsm-toggle-left').addClass('toggle_on').removeClass('toggle_off');
			    $('.bsm-toggle-right').addClass('toggle_off').removeClass('toggle_on');
			}
			else{
				$('.bsm-toggle-right').addClass('toggle_on').removeClass('toggle_off');
			    $('.bsm-toggle-left').addClass('toggle_off').removeClass('toggle_on');
			 }
		},
		id : function() {
			return this.el();
		},
		watchVal : function() {
		       this.trigger("click", this.execFN(this.method, this.parent, this));
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
			var control = '<div id="' + this.id + '_toggle" class="bsm_toggle"></div>';
			return control;
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
			this.val = 0;
			var that = this;
			return this;
		}
	});
	return ToggleControl;
}); 