/********************************************
 *
 * picture Control
 *
 * Darren Hurst
 * BroadStreet Mobile
 * Created, July 23 2012
 *
 *
 * setTitle
 *   title = control line above title
 *
 * setpicture
 *  takes picture text or HTML
 *
 */

define(['underscore', 'backbone'], function(_, Backbone) {

	var pictureControl = Backbone.View.extend({
		el : function() {
			var el = '#' + this.id;
			this.el = el;
		},
		initialize : function(parent) {
			this.id = this.cid;
			this.parent = "#" + parent;
			this.height = 200;
			this.width = 350;
		},
		setTitle : function(title) {
			$("#" + this.id + "_picture").wrap('<div id="' + this.id + '_header_picture"  class="bsm_picture_title">' + title + '<br/></div>');
		},
		setTimeOut: function(time){
			if ((time==null)||(time=undefined)){
				this.timeout=1350;
			}
			else{
			this.timeout=time;
			}
		},
		setWidth:function(width){
			this.width = width;
		},
		getWidth:function(){
			return this.width;
		},
		setHeight:function(height){
			this.height = height;
		},
		getHeight:function(){
			return this.height;
		},
		setImage:function(tag){
			return '<img src="'+tag+'" height="'+this.height+'" width="'+this.width+'"/>';
		},
		setPicture : function(){
			  
		$("#" + this.id + "_picture").html(this.setImage(this.pictureArray[this.num]));
	   	this.num+=1;
		if (this.num==this.pictureArray.length){
			that = this;
			setTimeout (function(){
			that.setPictures(that.pictureArray);
			  },this.timeout);
		  }
			
		},
		setPictures : function(array) {
			if (this.pictureArray==undefined){
			this.pictureArray = array;
			}
			this.num = 0;
			if (array.length==1){
			$("#" + this.id + "_picture").html(this.setImage(array[0]));
			}
			else{
				//$("#" + this.id + "_picture").html(this.setImage(array[0]));
				
				for (x in array){
					that=this;
					setTimeout (function(){
				    that.setPicture();
					  },this.timeout*x);
						
					
	  			};
				
			} 
		},
		getpicture : function() {
			return $("#" + this.id + "_picture").html();
		},
		id : function() {
			return this.el();
		},
		html : function() {
			var control = '<div id="' + this.id + '_picture" class="bsm_picture"></div>';
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
			this.setTimeOut(null);
			$(this.parent).append(this.html());
			this.val = "";
			var that = this;

			return this;
		}
	});
	return pictureControl;
}); 