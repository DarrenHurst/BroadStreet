/********************************************
 *
 *  Spinner IOS style Spinner
 *
 *
 */

define(['underscore', 'backbone'], function(_, Backbone) {

	var SpinnerControl = Backbone.View.extend({
    initialize: function(type,msg){
    	this.type = type;
    	this.msg = msg;
    },
    showSpinner: function(){
    	if (this.msg != undefined){	
    	$('body').append('<div id="'+this.cid+'" class="bsm_spinner_with_text"><div class="text"><center>'+this.msg+'</center></div></div>');
    	}else{
    	$('body').append('<div id="'+this.cid+'" class="bsm_spinner"></div>');	
    	}
    },
    hideSpinner: function(){
    	$("#"+ this.cid).remove();
    },
	});
	return SpinnerControl;

});

