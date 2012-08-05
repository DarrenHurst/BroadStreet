define(['jquery', 
		'backbone',
		'models/model', 
		'text!templates/main.html',
		'controls/labelBox',
		'controls/selectionList',
		'controls/toggle',
		'controls/textInput'
], function($, Backbone, Model, template,Label,Selection,Toggle,Input){

    var View = Backbone.View.extend({

        // Represents the actual DOM element that corresponds to your View (There is a one to one relationship between View Objects and DOM elements)
        el: 'body',

        // View constructor
        initialize: function() {

            // Setting the view's model property to the passed in model
            this.model = new Model();

            // Setting the view's template property
            this.template = _.template( template, { model: this.model.toJSON() } );
            

        },
        createControls: function(){
        	
        	var Label1 = new Label("label1","controls",this).render();
        	Label1.setTitle("label");
        	Label1.setLabel("label takes html");
        	
        	var Selection1 = new Selection("selection1","controls",this).render();
        	Selection1.setTitles("selection","make a selection");
        	Selection1.addRow("option1",1);
        	Selection1.addRow("option2",2);
        	
        	var Toggle1 = new Toggle("toggle1","controls",this).render();
        	Toggle1.setTitle("Do you like this?");
        	Toggle1.setOptions("YES","NO");
        	
        	var TextInput = new Input("textInput1","controls",this).render();
        	TextInput.setTitle("Your Name");
        	
        	
        },

        events: {

          
	    },

        render: function() {

            this.$el.find("#example").append(this.template);
            
            this.createControls();

        },

      

    });
	
    // Returns the View class
    return View;
});