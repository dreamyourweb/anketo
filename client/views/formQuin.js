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
    'submit form': function(){
    	console.log('test');
    	emailAddress = document.getElementById('email').value;

    	doc = {Voornaam: document.getElementsByName('Voornaam')[0].value, 
    		Achternaam: document.getElementsByName('Achternaam')[0].value,
    		Bedrijf: document.getElementsByName('Bedrijf')[0].value};


    	Meteor.call('sendEmail', emailAddress, doc, function(err, result) {		   
		 });
     }
});