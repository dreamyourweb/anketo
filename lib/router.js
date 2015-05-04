Router.configure({



});



Router.map(function () {

   this.route('quin', {

     path: '/',

  });

});

if (Meteor.isClient) {
    Meteor.startup(function () {

     Router.go('home');

    });
}