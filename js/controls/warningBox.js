/********************************************
 *
 * warning Control
 *
 *
 *
 *
 * setTitle
 *   title = control line above title
 *
 * setwarning
 *  takes warning text or HTML
 *
 */

define(['underscore', 'backbone'], function(_, Backbone) {

	var WarningControl = Backbone.View.extend({
		el : function() {
			var el = '#' + this.id;
			this.el = el;
		},
		initialize : function(id, parent) {
			this.id = id;
			this.parent = "#" + parent;
		},
		setTitle : function(title) {
			$("#" + this.id + "_warning").wrap('<div id="' + this.id + '_header_warning"  class="bsm_warning_title">' + title + ':<br/></div>');
		},
		setType : function(type) {

			$('.bsm_warning_icon').addClass('bsm_warning_icon_' + type).removeClass('bsm_warning_icon');
			$('.bsm_warning_msg').addClass('bsm_warning_msg_' + type).removeClass('bsm_warning_msg');
		},
		setWarning : function(html) {
			$("#" + this.id + "_warning").html(html);
		},
		id : function() {
			return this.el();
		},
		html : function() {
			var control = '<div class="bsm_warning"><div class="bsm_warning_icon"></div>' + '<div id="' + this.id + '_warning" class="bsm_warning_msg"></div></div>';
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
	return WarningControl;
}); 