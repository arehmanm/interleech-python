
		
	
			
			$.fn.followTo = function (pos,offset) {			
			    var $this = this,
		        $window = $(window);
		        
		        if ($window.scrollTop() > 180 && pos != null) {
		        	
		        	//console.log($window.scrollTop() > $('body').height() -$window.height() - offset, offset, $('.bs-sidebar').height() > $window.height() - offset);
					
		        	//if ($window.scrollTop() > $('body').height() - $window.height() - offset && offset && $('.bs-sidebar').height() > $window.height() - offset){
		        	if ($window.scrollTop() + pos+ $('.bs-sidebar').height() > $('body').height() - offset && offset && $('.bs-sidebar').height() > $window.height() - offset){
			        	  $this.css({
			        	  position: 'absolute',
		                  top: 'auto',
		                  bottom: 0
		                  
		            });
		            
					}
					
					else {
		            $this.css({
		                position: 'fixed',
		                top: pos,
		                bottom: 'auto'
		            });
		            }
		            $('.login-info-container, .alert-message, .login-control-mobile a').hide();
		            $('.breadcrumb').appendTo( $('.user-info .container .quick-nav') );
		            $('.user-info, #main_navigation_mobile').addClass('fixation');
		            
		            
		        } else {
		            $this.css({
		                position: 'static',
		                top: 0
		            });
		            $('.login-info-container, .alert-message, .login-control-mobile a').show();
		            $('.breadcrumb').prependTo( $('#main_content article') );
		            $('.user-info, #main_navigation_mobile').removeClass('fixation');
		        }

			};
