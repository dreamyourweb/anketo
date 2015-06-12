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
			{FlashMessages.sendSuccess("Bedankt voor het achterlaten van uw gegevens. Wij nemen binnenkort contact met u op.");}
		 });
     }
});

