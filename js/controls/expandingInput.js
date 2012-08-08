/********************************************
 * 
 * Input Control
 * 
 * defaul type = Text.
 * 
 * setType options
 *   number = "number"
 *   password = "password"
 * 
 * setTitles 
 *   title = control line above title
 *  
 * 
 * setPlaceHolder
 *   placeHolder = init contol grey'd out text
 * 
 * 
 */


define(['underscore',
        'backbone'
        
], function(_, Backbone) {
 
   var ExpandingInputControl = Backbone.View.extend({
   el:function(){
   	var el = '#'+this.id;
   	this.el = el;
   },
   initialize: function(id,parent,idtohide,that){
   	 this.id = id;
   	 this.parent = "#"+ parent;
   	 this.idtohide = idtohide;
   	  _.extend(this, Backbone.Events);
     this.parentView = that;
   },
   setPlaceHolder :function(placeHolder){
   	this.placeHolder =placeHolder;
   	 $("#"+this.id).prop('placeHolder',this.placeHolder);
   },
   setTitle: function(title){
     $("#"+this.id).wrap('<div id="'+this.id+'_header"  class="bsm_title">'+title+'<br/></div>');
   },
   setText: function(text){
   	 $("#"+this.id).html(text);
   },
   setShortText: function(text) {
   	this.shortText = text;
   },
   getShortText: function(text) {
   	return this.shortText;
   },
   setLongText: function(text) {
   	this.longText = text;
   },
   getLongText: function(text) {
   	return this.longText;
   },
   getPlaceHolder:function(){
   	return this.placeHolder();
   },
   val: function(){
   	return $(this.el).val();
   },
   id :function(){
   	return this.el();
   },
   html:function(){
   	var control = '<div><textarea rows="1" id="'+this.id+'" type="text" class="bsm-textarea-input" disabled/><div id="'+this.id+'-bsm-expanding-icon" class="expanding_notselected bsm-expanding-icon"></div></div>';
   	return control;
   },
   click:function(){
   	 return "click "+ this.id();
   },
   trimCssProperty: function(prop){
   	prop = prop.substring(0,prop.length-2)
   	prop = parseInt(prop);
   	prop = prop-27; //margin fix
   	return prop
   },
   iconImage: function(){
      that = this;
        if($('#'+this.id+'-bsm-expanding-icon').hasClass('expanding_selected'))
        {
            //$('#'+this.id+'-bsm-expanding-icon').unbind();
            $('#'+this.id+'-bsm-expanding-icon').addClass('expanding_notselected').removeClass('expanding_selected');
            $("#"+this.id).html(this.shortText);
            $("#"+this.id).animate({'height':'20px'},'medium');
            $('#' + this.idtohide).show(200);
            //$('#' + this.idtohide).addClass('expanding_visible').removeClass('expanding_invisible');
            
        }
        else
        {
            $('#'+this.id+'-bsm-expanding-icon').addClass('expanding_selected').removeClass('expanding_notselected');
            //$('#' + this.idtohide).addClass('expanding_invisible').removeClass('expanding_visible');
            $('#' + this.idtohide).hide(200);
            $("#"+this.id).animate({'height':'100px'},'medium');
            $("#"+this.id).html(this.longText);
        }

   },
    watchVal: function(){	 
   	     var events = this.parentView.controlEvents();
   	     for(x in events){
   	     	var split = events[x].split(":");
   	     	var bindEvent = split[0];
   	     	if("valueChange #"+this.id == x){
   	     		this.trigger("valueChange",this.execFN(bindEvent,this.parentView,this));
   	     	}
   	     }
   	 	
   },
  execFN: function(functionName, context , args ) {
  var args = Array.prototype.slice.call(arguments).splice(2);
  var namespaces = functionName.split(".");
  var func = namespaces.pop();
  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(this, args);
},
   render:function(){
     $(this.parent).append(this.html());
     this.val ="";
     var that = this;
     $("#"+this.id).bind("change", function() {
     	that.val = $("#"+that.id).val();
     
     	});
     	
     $("#"+this.id).bind("focus", function() {
     	    
            that.iconImage();
        	
        	});
     $("#"+this.id).bind("blur", function() {
     	    that.val = $("#"+that.id).val();
            that.iconImage();
        	that.watchVal();
        	});   	
      
     	
     var width= $(this.parent).css('width');
     $('.bsm-text-input').css({'width': this.trimCssProperty(width)});
     $('#'+this.id+'-bsm-expanding-icon').bind("click",function(){ that.iconImage(); });
  
     return this;
   }
  
 });
 return ExpandingInputControl;  
});