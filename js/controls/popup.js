define(['underscore', 'backbone'], function(_, Backbone) {

	var PopupControl = Backbone.View.extend({
		
	initialize: function(parent){
		this.parent = parent;
	},	
	
	setEvent: function(parent,method){
	    	var that = this;
	    	$('#'+this.cid+ '_Button').bind('click',function(){
	    		this.trigger("click", that.execFN(method, parent, parent));
	    	});
	},
	setShow: function(){
			$('#'+this.cid).css({'display':'inline'});
			$('#'+this.cid).append('<div class="bsm_overlay"></div>');
	},
	setHide: function(){
			$('#'+this.cid).css({'display':'none'});
			$('.bsm_overlay').remove();			
	},
	setPosition: function(top,left){
			$('#'+this.cid).css({'position':'fixed',
			  					 'top':top,
								 'left':left});
								
	},
	setPointer: function(x){
			$('#'+this.cid+"_menuHandle").css({'left':x});
	},
	setHtml: function(){
			$('#'+this.cid).append("<menu><div class='pop' id='"+this.cid+"_pop'></div></menu>");
	},
	setHandlePos:function(){
		$('#'+this.cid+"_pop").append("<div id='"+this.cid+"_menuHandle' class='menuHandle'></div>");
		if (this.handlePos != "top"){
		$('#'+this.cid+"_menuHandle").addClass('menuHandleDown').removeClass('menuHandle');
		} 		
			  					 
	},
	setHeader: function(){
		$('#'+this.cid+"_pop").append('<header><a class="button back black">back</a><h3>title</h3><a id="'+this.cid+'_buttonRight" class="button close black closeBtn">close</a></header>')
	},
	isControl: function(){
		$('#'+this.cid+"_pop").append("<div id='"+this.cid+"_popdiv' class='popdiv'><div id='"+this.cid+"_popupControl' class='control'></div></div>");
		var divHeight = $("#"+this.cid+"_popdiv").css("height")		
		$("#"+this.cid+"_popdiv").css({"padding":"0"});
		$("#"+this.cid+"_popupControl").css({"height":divHeight - 10})
		return this.cid+"_popupControl";
	},
	setContent: function(content){
	    $('#'+this.cid+"_pop").append("<div id='"+this.cid+"_popdiv' class='popdiv'><div id='"+this.cid+"_popupControl' class='content'><div class='text'>"+content+"</div></div></div>");	
		var divHeight = $("#"+this.cid+"_popdiv").css("height");
		$("#"+this.cid+"_popupControl").css({"height":divHeight - 10})
	
	},
	bind: function(){
		var that = this;
		$("#"+this.cid+"_buttonRight").bind("click",function(){
			that.setHide();
		});
	},
	render:function(handlePos){
		this.handlePos = handlePos;
		$("#"+this.parent).append('<div id="'+this.cid+'"></div>');
		this.setHtml();
		this.setHeader();
	    this.setHandlePos();
	    this.setHide();
	    this.bind();
	  
	},
	

});
	return PopupControl;

});
