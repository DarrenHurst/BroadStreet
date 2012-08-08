/********************************************
 *
 * Input Control
 *
 * defaul type = Text.
 *
 * setTitles
 *   title = control line above title
 *
 * setPlaceHolder
 *   sets the Place Holder text
 *
 * setType
 *   takes input type attribute, ie number or text or password
 *
 * setPlaceHolder
 *   placeHolder = init contol grey'd out text
 *
 * getVal
 *  returns value of input control
 *
 */

define(['underscore', 'backbone'], function(_, Backbone) {

	var TextInputControl = Backbone.View.extend({
		el : function() {
			var el = '#' + this.id;
			this.el = el;
		},
		initialize : function(id, parent, that) {
			this.id = id;
			this.parent = "#" + parent;
			_.extend({}, Backbone.Events);
			this.parentView = that;
		},
		setPlaceHolder : function(placeHolder) {
			this.placeHolder = placeHolder;
			$("#" + this.id).prop('placeHolder', this.placeHolder);
		},
		setTitle : function(title) {
			$("#" + this.id).wrap('<div id="' + this.id + '_header"  class="bsm_title">' + title + '<br/></div>');
		},
		setType : function(typein) {
			$("#" + this.id).prop('type', typein);
		},
		getPlaceHolder : function() {
			return this.placeHolder();
		},

		getVal : function() {
			return this.val;
		},
		clear : function() {
			$("#" + this.id).val('');
			this.val = 0;
		},
		id : function() {
			return this.el();
		},
		html : function() {
			var control = '<input id="' + this.id + '" type="text" class="bsm-text-input" /><div id="' + this.id + '-bsm-input-icon" class="input_notselected bsm-input-icon"></div>';
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
        focusOutIconImage:function(){
			$('#' + this.id + '-bsm-input-icon').addClass('input_notselected').removeClass('input_selected');
		},
		iconImage : function() {
			var that = this;
			 $('#' + this.id + '-bsm-input-icon').addClass('input_selected').removeClass('input_notselected');
				$('#' + this.id + '-bsm-input-icon').bind("click", function() {
					$("#" + that.id ).val(' ');
				});
		},
		watchVal : function() {
			var events = this.parentView.controlEvents();
		
			for(x in events) {
				var split = events[x].split(":");
				var bindEvent = split[0];
				if("valueChange #" + this.id == x) {
					this.trigger("valueChange", this.execFN(bindEvent, this.parentView, this));
				}
			}

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
		render : function() {
			$(this.parent).append(this.html());
			this.val = "";
			var that = this;
			$("#" + this.id).bind("change", function() {
				that.val = $("#" + that.id).val();
	           
			});

			$("#" + this.id).bind("focus", function() {

				that.iconImage();

			});
																																												
			$("#" + this.id).bind("blur", function() {
				that.val = $("#" + that.id).val();
				that.focusOutIconImage();
				that.watchVal();
			
			});

			var width = $(this.parent).css('width');
			$('.bsm-text-input').css({
				'width' : this.trimCssProperty(width)
			});

			return this;
		}
	});
	return TextInputControl;
});
