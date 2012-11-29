if (Meteor.isClient) {
    initialize();
    
    Template.hello.greeting = function () {
        return "Welcome to kenzanboo.com.";
    };

    Template.navbar.events({
        'click li.travel' : function (event) {
			setActive(event.currentTarget);
            initTravel();
        },
		
        'click li.home' : function (event) {
			setActive(event.currentTarget);		
            initHome();
        }
    });
	
	Template.content.rendered = function () {
		switch(window.location.hash)
		{
			case '#travel':
				initTravel();
				break;
			default:
				initHome();
		}	
	};
	
	/*
	* Initialize the javascript on the page. 
	*/
	function initialize(){
				

	}
	
	function initHome(){
		setActive($('.navbar .nav li.home'));
		$('#content').html(Template.carousel({}));
		$('#content').append(Template.marketing({}));		
      	$('#myCarousel').carousel();
	}
	
	function initTravel(){  
		setActive($('.navbar .nav li.travel'));	   
		$('#content').html(Template.travel_carousel({}));
		$('#travel_carousel').carousel({interval: 5000, pause:"click"});
		$('#full_screen_wrapper').height($(window).height());
	}
	
	function setActive(elem){
		$(elem).addClass('active').siblings('li').removeClass('active');
	}

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}


