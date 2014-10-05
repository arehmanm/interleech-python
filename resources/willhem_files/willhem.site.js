$(document).ready(function() {

    // Toggle Mobile-menu
	

    $('.modal').appendTo('body');
	
	$('.collapse-button').on('click', function(e) {
      $('#about, #my-pages, #customer_service').hide().removeClass("in");
      $('#selected-accordion-menu').toggle();
      $('.nr1, .nr2, .nr3, .nr0').removeClass("icon-close");
      e.preventDefault();
    });

    // Toggle Mobile-sub-menus	
	
	$('.nr1').on('click', function(e) {
	  $('#customer_service').slideToggle();
	  $('#my-pages, #about').slideUp().removeClass("in");
	  $('.nr2, .nr3').removeClass("icon-close");
	  $(this).toggleClass("icon-close"); 
      e.preventDefault();
    });
    
    $('.nr2').on('click', function(e) {
      $('#about').slideToggle();
      $('#my-pages, #customer_service').slideUp().removeClass("in");
      $('.nr1, nr3').removeClass("icon-close");
      $(this).toggleClass("icon-close"); 
      e.preventDefault();
    });
    
    $('.nr3').on('click', function(e) {
      $('#my-pages').slideToggle();
      $('#about, #customer_service').slideUp().removeClass("in");
      $('.nr1, .nr2').removeClass("icon-close");
      $(this).toggleClass("icon-close"); 
      e.preventDefault();
    });
    
    
    $('#selected-accordion-menu .nr0').on('click', function(e) {
      $('#selected-accordion-menu .selected-sub-menu-level2').slideToggle();
      $('#my-pages, #about, #customer_service').slideUp().removeClass("in");
      $('.nr1, nr2, .nr3').removeClass("icon-close");
      $(this).toggleClass("icon-close"); 
      e.preventDefault();
    });

    // Smooth-scroll
   
     $(function() {
      $('a.target[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });  

    // last-child etc..
    
     $(".anchor-links p a:last-child, .start-puff:last-child div, .puff-startpage div p:last-child, .progressbar div:last-child, footer ul li:last-child, #main_navigation_mobile ul li:last-child").addClass("last-child");
     $("tr:nth-child(even)").addClass("even");
     $("tr:nth-child(odd)").addClass("odd");


    if(!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    } 

    $(".willhemlyftet-startpuff, .guide-puff, .start-puff, .object-list tr, #main_navigation_desktop li").click(function () {
        var url = $(this).find("a").attr("href");
        if (url != undefined) {
            window.location = $(this).find("a").attr("href");
        }
        
         return false;
    });

    $(".willhemlyftet-startheader, .willhemlyftet-startpuff, .guide-puff, .start-puff, .object-list tr, #main_navigation_desktop li").css('cursor', 'pointer');
	 
    // Toggle class Active on Bootstrap dynamic events
   
    $( "#accordion_faq .collapse-link" ).on('click', function(e) {
    	$(".collapse-link").removeClass("active");
	    $(this).toggleClass("active");
	    e.preventDefault();
    });

    // Prevent background scroll on mobile, when modal opens

	$('.modal') 
	.on('shown', function(){ 
	  console.log('show'); 
	  $('body').css({overflow: 'hidden'}); 
	}) 
	.on('hidden', function(){ 
	  $('body').css({overflow: ''}); 
	}); 
 
    // Accordon-FAQ   
    
	$('#accordion_faq').collapse({
	  toggle: false
	});
    
    
    // Carousel

    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });


    // Responsive tables

    $( ".table-responsive" ).wrap( "<div class='table-container'></div>" );	
	       
    // Sticky-icky Menu script
    
    function sideNavScrollHandler() {
        if ($("body").css("margin-top") == "2px") {
            $("body").addClass('mobile');
            $("body").removeClass('desktop');
        }

        else {
            $("body").removeClass('mobile');
            $("body").addClass('desktop');

        }

        $(window).scroll(function (e) {

            var wrapper = $("#wrapper").height();
            var win = $(window).height();
            var isDesktop = $("body").hasClass('desktop');

            if (wrapper > win && isDesktop) {

                $('.desktop #side-navigation .bs-sidebar').followTo(80, 560);
                $('.desktop .user-info').followTo(0);

            }
            else {
                $('.desktop #side-navigation .bs-sidebar, .desktop .user-info').followTo(null);
            }

        });
    }
    
    $(window).resize(sideNavScrollHandler);	
    sideNavScrollHandler();

    willhem.start();
});
