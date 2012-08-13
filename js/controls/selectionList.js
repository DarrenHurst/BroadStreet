/********************************************
 *
 * Selection List Control
 *
 * Darren Hurst
 * BroadStreet Mobile
 * Created, July 23 2012
 *
 * addRow
 * add row to SelectionList options
 *
 * setTitle
 *   title = control line above title
 *
 * getSelectedData
 * returns the data Row passed as optional
 *
 * getSelectedIndex
 * returns index of selected control
 *
 * getSelectionBoxHtml
 * returns html of current selection
 *
 *
 */
define(['underscore', 'backbone', 'controls/selectionButton'], function(_, Backbone, DefaultBtn) {

	var SelectControl = Backbone.View.extend({
		el : function() {
			var el = '#' + this.id;
			this.el = el;
		},
		initialize : function( parent, that) {
			_.extend(this, Backbone.Events);
			this.parentView = that;
			this.id = this.cid;
			this.parent = "#" + parent;
			this.idx = 0;
			this.dataArray = new Array;

		},
		setTitles : function(title, subtitle) {
			$("#" + this.id + '_selectionBox').html(" ");
			$("#" + this.id + '_selectionBox').append('<div id="' + this.id + '_header" class="bsm_selection_header bsm_title"></div>');
			$("#" + this.id + '_header').append('<div id="' + this.id + '_selectionBox_title" class="bsm_selection_header_title">' + title + '</div>');
			$("#" + this.id + '_header').append('<div id="' + this.id + '_selectionBox_selection" class="bsm_selection_title"><div class="bsm_cell_content_title">' + subtitle + '<div id="selectionListIcon"></div></div></div>');
			$("#" + this.id + '_selectionBox').append('<div id="' + this.id + '_selectionBox_menu" class="bsm_selection_menu" ></div>');
			this.cssDefault();
			this.subTitle = subtitle;
			var that = this;
			$("#" + this.id + '_selectionBox_selection').bind("click", function() {
				that.val = $("#" + this.id + '_selectionBox_selection').html();
				that.showOptions();
			});
			var width = $(this.parent).css('width');
			$('#' + this.id + '_selectionBox_menu').css({
				'width' : this.trimCssProperty(width)
			});

		},
		setEvent: function(parent,method){
	       this.parent = parent;
	       this.method = method;
	    },
		addRow : function(html, data) {
			this.dataArray.push(data);
			//adds to selection list
			var rowToAdd = new DefaultBtn(this.id + "_selectionBox_menu", this.id + '_selectionBox', html, this.idx, this).render();
			this.idx += 1;
		},
		getSelectedData : function() {
			return this.dataArray[this.val];
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
		id : function() {
			return this.el();
		},
		html : function() {
			var control = '<div id="' + this.id + '_selectionBox" class="bsm_selection" ></div>';
			return control;
		},
		trimCssProperty : function(prop) {
			prop = prop.substring(0, prop.length - 2)
			return prop
		},
		cssDefault : function() {
			$("#" + this.id + '_selectionBox_menu').css({
				"display" : "none"
			});
		},
		getSelectedIndex : function() {
			return this.val;
		},
		getSelectedHtml : function() {
			return this.html;
		},
		clear : function() {
			$("#" + this.id + '_selectionBox_selection').html('<div class="bsm_cell_content_title">'+this.subTitle + '<div id="selectionListIcon"></div></div>');
		    $("#" + this.id + '_selectionBox_menu').html('');
			this.val = -1;
			this.html = "";
			this.idx = 0;
			this.dataArray = [];
		},
		showOptions : function() {
			var that = this;
			$("#" + this.id + "_selectionBox_menu").slideDown();
			$("#" + this.id + '_selectionBox_selection').unbind();
			$("#" + this.id + '_selectionBox_selection').bind("click", function() {
				//	that.val = $("#"+that.id+'_selectionBox_selection').html();
				that.hideOptions(that);
			});
		},
		hideOptions : function() {
			var that = this;
			if(this.val == -1) {
				$("#" + that.id + '_selectionBox_selection').html(this.getSelectionBoxHtml());
			} 
			$("#" + this.id + "_selectionBox_menu").slideUp();
			$("#" + this.id + '_selectionBox_selection').unbind();
			$("#" + this.id + '_selectionBox_selection').bind("click", function() {
				//$("#" + that.id + '_selectionBox_selection').html(this.val);
				that.showOptions(that);
			});
		},
		getSelectionBoxHtml : function() {
			return '<div class="bsm_cell_content_title">' + this.subTitle + '<div id="selectionListIcon"></div></div>';
		},
		render : function() {
			$(this.parent).append(this.html());

			//this.setTitles("From Account","Select Your Account");
			//$(this.id).wrap('<div id="'+this.el()+'"></div>');
			this.val = -1;

			return this;
		}
	});
	return SelectControl;
}); 