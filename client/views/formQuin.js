Template.formQuin.rendered = function(){
	$('.ui.form')
	  .form({
	    email: {
	      identifier  : 'email',
	      rules: [
	        {
	          type   : 'email',
	          prompt : 'Please enter your email'
	        }
	      ]
	    }
	});
};

Template.formQuin.events({	
    'submit form': function(e){
    	e.preventDefault();
    	emailAddress = document.getElementById('email').value;

    	doc = {Voornaam: document.getElementsByName('Voornaam')[0].value, 
    		Achternaam: document.getElementsByName('Achternaam')[0].value,
    		Bedrijf: document.getElementsByName('Bedrijf')[0].value};


    	Meteor.call('sendEmail', emailAddress, doc, function(err, result) {	
			if (err) {
    			console.log(err);
			}
			else
				{sAlert.info('Bedankt! We nemen spoedig contact met u op.', {effect: 'slide', position: 'bottom-left', timeout: 'none', onRouteClose: false, stack: false, offset: '150px'});}
		 	}
		 );
     }
        

});


    