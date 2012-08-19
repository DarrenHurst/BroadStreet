/********************************************
 *
 *  Spinner IOS style Spinner
 *
 *
 */

define(['underscore', 'backbone','raphael'], function(_, Backbone,Raphael) {

	var SpinnerControl = Backbone.View.extend({
    initialize: function(type,msg){
    	this.type = type;
    	this.msg = msg;
    },
    
            
    spinner : function(holderid, R1, R2, count, stroke_width, colour) {
                var sectorsCount = count || 12,
                    color = colour || "#fff",
                    width = stroke_width || 15,
                    r1 = Math.min(R1, R2) || 35,
                    r2 = Math.max(R1, R2) || 60,
                    cx = r2 + width,
                    cy = r2 + width,
                    r = Raphael(holderid, r2 * 2 + width * 2, r2 * 2 + width * 2),
                    
                    sectors = [],
                    opacity = [],
                    beta = 2 * Math.PI / sectorsCount,

                    pathParams = {stroke: color, "stroke-width": width, "stroke-linecap": "round"};
                    Raphael.getColor.reset();
                for (var i = 0; i < sectorsCount; i++) {
                    var alpha = beta * i - Math.PI / 2,
                        cos = Math.cos(alpha),
                        sin = Math.sin(alpha);
                    opacity[i] = 1 / sectorsCount * i;
                    sectors[i] = r.path([["M", cx + r1 * cos, cy + r1 * sin], ["L", cx + r2 * cos, cy + r2 * sin]]).attr(pathParams);
                    if (color == "rainbow") {
                        sectors[i].attr("stroke", Raphael.getColor());
                    }
                }
                var tick;
                (function ticker() {
                    opacity.unshift(opacity.pop());
                    for (var i = 0; i < sectorsCount; i++) {
                        sectors[i].attr("opacity", opacity[i]);
                    }
                    r.safari();
                    tick = setTimeout(ticker, 1000 / sectorsCount);
                })();
                return function () {
                    clearTimeout(tick);
                    r.remove();
                };
            },
    setColor: function(color){
    	
    },
    setRadius1: function(R1){
    	
    },
    setRadius2: function(R2){
    	
    },
    setCount: function(count){
    	
    },
    setStroke: function(stroke){
    	
    },        
    showSpinner: function(type){
    	if (this.msg != undefined){	
    	$('body').append('<div id="'+this.cid+'" class="bsm_spinner_with_text"><div class="text"><center>'+this.msg+'</center></div></div>');
    	}else{
    	$('body').append('<div id="'+this.cid+'" class="bsm_spinner"></div>');	
    	}
    	if (type == "dots"){
    	        this.spinner(this.cid, 19, 19, 12, 3, "#FFF");
    	}
    	else if (type == "bar"){
    		  this.spinner(this.cid, 19, 19, 55, 6, "#FFF");
    	}
    	else{
    			this.spinner(this.cid, 10, 20, 16, 3, "#FFF");
    	}
    	$("#"+this.cid).wrap('<div id="'+this.cid+'_wrap" class="bsm_overlay"></div>')
    },
    hideSpinner: function(){
    	$('.bsm_overlay').remove();
    },
	});
	return SpinnerControl;

});

