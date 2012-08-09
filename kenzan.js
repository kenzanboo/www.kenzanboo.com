if (Meteor.is_client) {
    var number_of_cover_backgrounds = 9;

    Template.cover.bg_num = function () {
        return Math.round(Math.random() * number_of_cover_backgrounds);
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