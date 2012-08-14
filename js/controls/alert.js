    /********************************************
 *
 *  Alert IOS style alert
 * 
 * 
 */

define(['underscore', 'backbone'], function(_, Backbone) {
	
	


	var AlertControl = Backbone.View.extend({
    removeAlert: function(){
    	$('.alert').remove();
    	$('.alertoverlay').remove();
    	$('.alerterror').remove();
    },
  
	setAlert :function (msg){
	
	
	if (msg == ""){
		msg = "Alert Message Missing"
	}
    
	var btntext = "OK";	
	if(btntext==null){
		btntext = 'OK';
	}
    
    $('body').append('<div class="alerterror"><img class="gloss" src="css/images/controls/gloss.png" /><center><div class="alertmsg">'+msg+'</div><br /><br/><div id="closeButton">'+btntext+'</div></center>'+
    '</div>'
    ).fadeIn(2000);
    var alertError = $('.alerterror');


   	var width = 280;
   	$('.gloss').css({
   		'width':'305px',
   		'height':'35px',
   		'border':'0',
   		'position':'absolute',
   		'top':'-4px',
   		'left':'-10px'
   	});
   	$('.alertmsg').css({
   		'width':'280px',
   		'max-height':'300px',
   		'overflow':'auto'
   	});
   	$('#closeButton').css({
    	'width':'98%',
    	'position':'absolute',
    	'bottom':'1px',
    	'padding-top':'15px',
    	'height':'30px',
    	'color':'#FFF',
    	'vertical-align':'bottom',
	'border': '1px solid #333',
	'-moz-border-radius': '4px',
	'-webkit-border-radius': '4px',
	'border-radius': '4px',
	'-moz-box-shadow': '0px 0px 19px rgba(0,0,0,0.46), inset 0px 7px 21px rgba(255,255,255,0.4)',
	'-webkit-box-shadow':'0px 0px 19px rgba(0,0,0,0.46), inset 0px 7px 21px rgba(255,255,255,0.4)',
	'box-shadow':'0px 0px 19px rgba(0,0,0,0.46), inset 0px 7px 21px rgba(255,255,255,0.4)',
	'background-image': '-webkit-linear-gradient(90deg , rgb(6,14,68) 70%, rgb(31,116,156) 99%)',
	
    	
    });
    
    
   	var height= 100;		
    $('.alerterror').css({
    	'position':'absolute',
    	'padding':'2px',
    	'left':'50%',
    	'top':'40%',
    	'padding-top':'50px',
    	'padding-bottom':'60px',
    	'font-family':'HelveticaNeue !important',
        'text-shadow':'none !important',
    	'width': width+'px',
    	'height':'auto',
    	'opacity':'0.9',
    	'color':'#FFF',
    	'z-index':'99999',
	'border': '2px solid #FAFAFA',
	'-moz-border-radius': '11px',
	'-webkit-border-radius': '11px',
	'border-radius': '11px',
	'-moz-box-shadow': '0px 0px 19px rgba(0,0,0,0.46), inset 0px 7px 21px rgba(255,255,255,0.4)',
	'-webkit-box-shadow':'0px 0px 19px rgba(0,0,0,0.46), inset 0px 7px 21px rgba(255,255,255,0.4)',
	'box-shadow':'0px 0px 19px rgba(0,0,0,0.46), inset 0px 7px 21px rgba(255,255,255,0.4)',
	'background-image': '-webkit-linear-gradient(91deg , rgb(6,14,68) 70%, rgb(31,116,156) 99%)',
	
    	
    });
    $('.alerterror').css({
    	'margin-top':'-'+(height)/2+'px',
    	'margin-left':'-'+(width)/2+'px'
    });
   
    
   
    $('.alerterror').wrap('<div class="alert"></div>');
    $('.alert').append('<div class="alertoverlay"></div>');
    $('.alertoverlay').css({
    	 'position': 'fixed',
 		 'height': '100%',
  		 'width': '100%',
  		 'top': '0',
    	 'left': '0',
         'background': '#FFF',
         'z-index':'99998',
         'opacity':'0.01'
    });
    
    
    $('.alerterror').bind('click',function(){
    	
    	$('.alert').remove();
    	$('.alertoverlay').remove();
    	$('.alerterror').remove();
    
    });
   }
   });
 return AlertControl;
 
});



