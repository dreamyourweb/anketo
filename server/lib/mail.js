Meteor.methods({
 sendEmail: function(email, doc) {
   var text = 
           "Voornaam: " + doc.Voornaam + "\n\n\n\n" +
           "Achternaam: " + doc.Achternaam + "\n\n\n\n" +
           "Bedrijf: " + doc.Bedrijf + "\n\n\n\n";

   this.unblock();
   console.log(text);
   // Send the e-mail
   Email.send({
       to: "hanneke@orikami.nl",
       from: email,
       subject: "Orikami Contact Form - Message From ",
       text: text
   });
 }
});