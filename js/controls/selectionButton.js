/********************************************
 * 
 * Selection Button wrapper for SelectionList Control
 * 
 * Darren Hurst
 * BroadStreet Mobile
 * Created, July 23 2012
 * 
 * 
 * 
 */
define(['underscore',
        'backbone',
       
], function(_, Backbone) {
 
   var defaultSelectionButton = Backbone.View.extend({
   el:function(){
   	var el = '#'+this.id;
   	this.el = el;
   },
   initialize: function(id,parent,data,idx,listview){
   	 this.id = id;
   	 this.parent = "#"+parent;
   	 this.idx = idx;
   	 this.data = data;
   	 this.listview = listview;
   	 
   },
   val: function(){
   	return $(this.el).html();
   },
   id :function(){
   	return this.el();
   },
   html:function(html){

   	var control = '<div id="'+this.id+'_control'+this.idx+'" class="bsm_selection_btn">'+this.data+'</div>';
   	return control;
   },
   numberPattern: new RegExp( "[0-9]+$"),
   render:function(){
     $("#"+this.id).append(this.html());
    // $(this.id).wrap('<div id="'+this.el()+'"></div>');
     this.val ="";
     var that = this;
     $("#"+this.id+'_control'+this.idx).bind("click", function(e) {
     	    $(that.parent+ "_selection").html(that.data);
     	     var target = e.currentTarget;
     	    //return the clicked options row
     		that.listview.html = $("#"+this.id).html() // 
     	    //var valTarget = target.id.match(this.numberPattern)
     		that.listview.val= that.idx;
     		
     		that.listview.hideOptions();
     	   // $('.bsm_selection_title').css({"padding":"0px"});
   
     		that.listview.watchVal();
     		
     	   
     		
     	});
     return this;
   }
  
 });
 return defaultSelectionButton;  
});