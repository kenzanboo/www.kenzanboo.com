if (Meteor.isClient) {
    var g_opts = {
        fly_in_left: 'flyInLeft',
        cities_flyin_delay: 200,
        travel_carousel_interval: 7000
    };

    initialize();
    
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
		initHtmlEvents();		

	}
	    /*
	function initHome(){
		setActive($('.navbar .nav li.home'));
		$('#content').html(Template.carousel({}));
		$('#content').append(Template.marketing({}));		
      	$('#myCarousel').carousel();
	}     */

    function initTravel(){
        initHome();
    }
	function initHome(){
		setActive($('.navbar .nav li.travel'));	   
		$('#content').html(Template.travel_carousel({}));
		$('.full_screen_wrapper').height($(window).height());
		$('#travel_carousel').carousel({
            interval: g_opts.travel_carousel_interval,
            pause: "click"
		}).addClass('appear');

        var delay = 0;
        $('#travel .places li').each(function(index, el){
            delay_time = index * g_opts.cities_flyin_delay;
            setTimeout(function(){
                $(el).addClass(g_opts.fly_in_left);
            },delay_time);
        });


        /*init HTML Events*/
        $('#travel .places li').click(function(q){
            q.preventDefault();
            targetSlide = $(this).attr('data-to')-1;
            $('#travel_carousel').carousel(targetSlide);
            $(this).addClass('active').siblings().removeClass('active');
        });

	}
	
	function setActive(elem){
		$(elem).addClass('active').siblings().removeClass('active');
	}
	
	function initHtmlEvents(){
		$(window).resize(function(){
			$('.full_screen_wrapper').height($(window).height());
		});
	}

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}


