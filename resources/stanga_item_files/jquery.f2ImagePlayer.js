/*
 * jQuery Fast2 Image Player plugin
 *
 * Copyright (c) 2009 Fast2 AB (http://fast2.se)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */
;(function($) {

	var version = "0.8";
	
	var f2 = {};
	f2.imagePlayer = {
	
		id : null,
		imageList : null,
		currentIndex : 0,
		containerRef : function () { return this.id + "Container" },
		imagePrefix : "Image-",
		imageContainer : "imageContainer", 
		showImageText : false,
		showImagePagination : false,
		showImageThumbnails : false,
		linkToOriginal : false,
		showTumbnailTwipsy : false,
		
		text : {
			prev : "&#171; |",
			next : "| &#187;",
			prevtitle : "F&#246;reg&#229;nde",
			nexttitle : "N&#228;sta",
			current : "Bild {1} av {2}"
		},
		
		init : function (id, settings) {
			// Make sure everything is in order
			if ($("#" + id).length < 0 || !$.isArray(settings.imageList) || settings.imageList.length < 1) {
				return false;
			}
		
			this.id = id;
			this.imageList = settings.imageList;
			this.showImagePagination = settings.showImagePagination;
			this.showImageText = settings.showImageText;
			this.showImageThumbnails = settings.showImageThumbnails;
			this.linkToOriginal = settings.linkToOriginal;
			this.showTumbnailTwipsy = settings.showTubnailTipsy;
			
			// Add a wraping container
			$("#" + this.id).wrap("<div id='" + this.containerRef() + "' class='f2ImageSlider'><div class='" + this.imageContainer + "'></div></div>");

			
			// Make sure that the image has a src
			if ($("#" + this.id).attr("src") == undefined || $("#" + this.id).attr("src") == "") {
				$("#" + this.id).remove();
				this.addImage(0, true);
			}

			// Calculate current index
			if ($("#" + this.id).attr("src") != "") {
				for (var i = 0; i < this.imageList.length; i++) {
					if (this.imageList[i].image  == $("#" + this.id).attr("src")) {
						this.currentIndex = i; 
						break;
					}
				}
			}

			// Add image text
			if (this.showImageText) {
				$("#" + this.containerRef()).append("<div class='imagetext'>" + this.imageList[this.currentIndex].text + "</div>");
			}
			
			// Add pagination
			if (this.showImagePagination && this.imageList.length > 1) {
				$("#" + this.containerRef()).append("<div class='pagination'><span class='prev' title='" + this.text.prevtitle + "'>" + this.text.prev + "</span><span class='current'>" + this.getCurrentText() + "</span><span class='next' title='" + this.text.nexttitle + "'>" + this.text.next + "</span></div>");
			}
			
			// Add thumbnails
			if (this.showImageThumbnails && this.imageList.length > 1) {
				var html = "";
				for (var i = 0; i < this.imageList.length; i++) {
					var imageHtml = "<img id='" + this.id + this.imagePrefix + "thumbnail" + i + "' src='" + this.imageList[i].thumbnail + "'";
					if (this.currentIndex == i) {
						imageHtml += " class='current'";
					}
					if ( this.showTumbnailTwipsy ) {
						imageHtml += " data-text='" + this.imageList[ i ].text  + " ' "; 
					}
					imageHtml += " />";
					html += imageHtml;
				}
				 
				$("#" + this.containerRef()).append("<div class='thumbnails'>" + html + "</span></div>");
				if ( this.showTumbnailTwipsy ) {
					$( ".thumbnails img" , "#" + this.containerRef() ).bind( 'mouseenter' , function () { 
						var $this = $( this );
						$( 'body' ).append( '<div id="twipsytip">' + $this.attr( 'data-text' ) + '</div>' );
						var $tt = $( '#twipsytip' );
						var x = $this.offset().left + ( $this.outerWidth( true ) / 2 ) - ( $tt.outerWidth( true ) / 2 );
						var y = $this.offset().top - ( $tt.outerHeight( true )  + 4 );
						$tt.css( { 
							top : y + 'px',
							left : x + 'px'
						} );
						
					} ).bind( 'mouseleave' , function () { 
						$( '#twipsytip' ).remove( );
					} );
				}
			}
			
			
			// Set image id
			$("#" + this.id).attr("id", this.id + this.imagePrefix + this.currentIndex);
			
			// Add event handlers
			that = this;
			$(".prev","#" + this.containerRef()).click(function () {
				that.changeImage(that.currentIndex - 1);
			});
			
			var nextHook = ".next, .imageContainer";
			if ( this.linkToOriginal ) {
				nextHook = ".next";
				$(  ".imageContainer" , "#" + this.containerRef() ).click( function () {
					window.open( that.imageList[ that.currentIndex ].original , 'imageplayeroriginal' );
				});
			}
			$( nextHook , "#" + this.containerRef() ).click( function ( ) {
				that.changeImage( that.currentIndex + 1 );
			});
			
			$(".thumbnails img","#" + this.containerRef()).each(function (i) {
				$(this).click(function () {
					// Load image if not already loaded
					if ($("#" + that.id + that.imagePrefix + i).length == 0) {
						$("." + that.imageContainer ,"#" + that.containerRef() ).append("<img src='" + that.imageList[i].image + "' id='" + that.id + that.imagePrefix + i + "' style='display:none;'  />");
					}
					that.changeImage(i);
				});
			});
			
			// Preload previus and next image
			this.preload(this.currentIndex);
		},
		
		getCurrentText : function () {
			return this.text.current.replace("{1}", this.currentIndex+1).replace("{2}", this.imageList.length);
		},
		
		preload : function (index) {
			var previusIndex = (index - 1 < 0 ? this.imageList.length -1 : index - 1); 
			var nextIndex = (index + 1 > this.imageList.length - 1 ? 0 : index + 1);
			
			if ($("#" + this.id + this.imagePrefix + previusIndex).length == 0) {
				// Load previus image
				this.addImage(previusIndex ,false);
				//$("." + this.imageContainer ,"#" + this.containerRef()).append("<img src='" + this.imageList[previusIndex].image + "' id='" + this.id + this.imagePrefix + previusIndex + "' style='display:none;' />");
			}
			if ($("#" + this.id + this.imagePrefix + nextIndex).length == 0) {
				// Load next image
				this.addImage(nextIndex ,false);
				//$("." + this.imageContainer ,"#" + this.containerRef() ).append("<img src='" + this.imageList[nextIndex].image + "' id='" + this.id + this.imagePrefix + nextIndex + "' style='display:none;'  />");
			}
		},
		
		addImage : function (index, visible) {
			$("." + this.imageContainer ,"#" + this.containerRef() ).append("<img src='" + this.imageList[index].image + "' id='" + this.id + this.imagePrefix + index + "' style='" + (visible ? "" : "display:none;") + "'  />");
		},
		
		changeImage : function (nextIndex) {
			var indexToDisplay = (nextIndex > this.imageList.length - 1 ? 0 : (nextIndex < 0 ? this.imageList.length - 1 : nextIndex));
			// Hide current image
			$("#" + this.id + this.imagePrefix + this.currentIndex).hide();
			// Change active thumbnail
			if (this.showImageThumbnails) {
				$(".thumbnails img").removeClass("current");
				$("#" + this.id + this.imagePrefix + "thumbnail" + indexToDisplay).addClass("current");
			}
			// Show next picture
			$("#" + this.id + this.imagePrefix + indexToDisplay).show();
			// Set the current index
			this.currentIndex = indexToDisplay;
			// Update pagination text
			$(".pagination .current","#" + this.containerRef() ).html(this.getCurrentText());
			// Update Image Text
			if (this.showImageText) {
				$("#" + this.containerRef() + " div.imagetext").html(this.imageList[indexToDisplay].text);
			}
			// Preload images
			this.preload(indexToDisplay);
		}
	};
		
	$.fn.f2ImagePlayer = function( settings ) {
		f2.imagePlayer.init( this.attr( "id" ), settings );
		
		return this;
	};
})(jQuery);