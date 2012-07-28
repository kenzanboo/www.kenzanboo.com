if (Meteor.is_client) {
  Template.hello.greeting = function () {
    return "Welcome to Kenzan Boo's site. Currently being migrated to Metoer...";
  };

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}