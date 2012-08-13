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
		initialize : function(parent, that) {
			this.id = this.cid;
			this.parent = "#" + parent;
			_.extend({}, Backbone.Events);
			this.parentView = that;
		},
		setEvent: function(parent,method){
	       this.parent = parent;
	       this.method = method;
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
		setVal : function( val) {
			 this.val = val;
			$("#" + this.id).val( val );
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
				$('#' + this.id + '-bsm-input-icon').bind("keyup", function() {
					$("#" + that.id ).val(' ');
					that.val="";
					that.watchVal();
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

			$("#" + this.id).bind('keyup', function(e) {
				that.val = $("#" + that.id).val();
			    console.log(e.which);
				var x;
				if (e.which ==188){
					 x = that.val.replace(/,/g, '');
				
					 $("#" + that.id).val('');
					 $("#" + that.id).val(x);
				}
	               that.watchVal();

			});
			
            $("#" + this.id).bind("change", function() {
            	 var x;
             
            	 //x = that.val.replace(/,/g, '');
            	 $("#" + that.id).val(that.val);
            	 
            });

			$("#" + this.id).bind("focus", function() {

				that.iconImage();

			});
																																												
			$("#" + this.id).bind("blur", function() {
				//that.val = $("#" + that.id).val();
				that.focusOutIconImage();
				
	    		that.trigger("click", that.execFN(that.method, that.parent, this));
	    
								//that.watchVal();
			
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