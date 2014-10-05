/*jshint bitwise: false*/
blocket("@init.view.self").extend(function () {
	"use strict";

	//Truncate breadcrumb
	blocket.tools.breadcrumb_truncator($("#breadcrumb").width());

	// BBF
	$("#bbf_possible_link").click(function () {
		$("#bbf_possible_link").css({"textDecoration" : "none", "color" : "#000000"});
		$("#bbf_possible_param").addClass("bbf_possible_param_value").fadeIn(300);
		$("#bbf_possible_container").addClass("bbf_possible_container").fadeIn(300);
	});

	$("#hittathumb").mouseover(function () {
		$("#hittathumb_mouseover").fadeIn(250);
	});

	$("#hittathumb").mouseout(function () {
		$("#hittathumb_mouseover").hide();

	});

	// Allow for alt + right key to go to next ad
	$(document).keydown(function (event) {
		if (event.altKey && event.keyCode === '39') {
			if ($("#vi_next_ad".attr('href')) !== undefined) {
				window.location = $("#vi_next_ad").attr('href');
			}
		}
	});
	// Register bring onclick event

	$('.bring_link').click(function () {
		blocket(".bring_link").apps.lightbox.open({
			type : "iframe",
			settings : {
				width : "860px",
				height : "605px",
				name : "bring_iframe"
			}
		});
		blocket.apps.view.ajax_redir_count("bring_adview_click");
		return false;
	});


	if (blocket.params.mplus !== undefined) {
		blocket.apps.view.checkHittaStreetview();
	}


	// Add functionallity for twitter share link
	blocket(".share_facebook").apps.view.facebook_share_func();


	// IE9 Box
	blocket(".ie9_tip").apps.view.show_ie9_box();

	// Print popup
	blocket("#print").apps.view.print_popup();

	// BBF
	blocket(".view_bbf").apps.view.bbf_popup();

	// Maklarpaketet
	blocket("#mpaket_possible").apps.view.mpaket_possible_popup();

	// Print inkclubs
	$("#inkclub").click(function () {
		blocket.apps.view.ajax_redir_count("inkclub_ad_printed");
	});

	/* 
	 * Save ad. Because Blocket wants to keep their old-style save button, and Bostad
	 * wants to convert it into an action button, we get to write basically the same logic
	 * twice.
	 */
	blocket("#save_item_action_button").apps.view.save_item_action_button_callback();
	blocket("#save_item_action_link").apps.view.save_item_action_link_callback();

	// phonenumber_link 
	$("#phonenumber_link").bind("click", function () {
		blocket.apps.view.open_phonenumber(this);
	});

	$("#thumbs .video_thumb").click(function () {
		$("#thumbs img").removeClass("transparent");
		$(this).addClass("transparent");
	});

	// Image thumb functionality
	$("#thumbs .thumb_link.image_thumb").click(function () {
		var $thumb_link = $(this);

		// Remove marked thumb
		$("#thumbs img,.video_thumb").removeClass("transparent");

		// Mark selected thumb
		$("#thumbs #thumb_" + $thumb_link.attr("id").substring(11)).addClass("transparent");

		blocket.apps.view.hide_video();

		// set correct "Alla bilder" css
		$('.all_images_container').removeClass("ais_all_border_active").addClass("ais_all_border_inactive");

		// get index of clicked thumb
		var image_index = parseInt($thumb_link.attr("id").replace(/thumb_link_/g, ""), 10);

		// set image source
		blocket.apps.view.set_ais_image_src(image_index);

		return false;
	});

	$(document).delegate("#fs_thumbs .thumb_link", "click", function () {
		var $thumb_link = $(this);

		// Remove marked thumb
		$("#fs_thumbs img").removeClass("transparent");

		// Mark selected thumb
		$("#fs_thumbs #fs_thumb_" + $thumb_link.attr("id").substring(11)).addClass("transparent");
		blocket.apps.view.hide_video();

		// get index of clicked thumb
		var image_index = parseInt($thumb_link.attr("id").replace(/thumb_link_/g, ""), 10);

		// set image source
		blocket.apps.view.set_ais_image_src(image_index);

		return false;
	});

	$("#ad_video").click(function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else if (window.event) {
			window.event.cancelBubble = true;
		}
	});

	// Next image functionality
	$("#media").click(function () {

		// get next image index
		var next_index = blocket.apps.view.params.ais_index + 1;
		 // make sure next image index exists
		if (blocket.apps.view.params["ais_image_" + next_index] === undefined) {
			next_index = 0;
		}
		if (blocket.apps.view.params["ais_image_" + next_index] === undefined) {
			next_index = 1;
		}
		blocket.apps.view.set_adaptive_image_size(next_index);
		// highlight "Alla bilder" when next:ing beyond visible thumbs
		if (next_index > 10) {
			$('.all_images_container').removeClass("ais_all_border_inactive").addClass("ais_all_border_active");
		} else {
			$('.all_images_container').removeClass("ais_all_border_active").addClass("ais_all_border_inactive");
		}
		blocket.apps.view.hide_video();
	});

	// Thumb map
	$(".thumb_map").mouseover(function () {
		$(".thumb_map").addClass("transparent");
	});

	$(".thumb_map").mouseout(function () {
		$(".thumb_map").removeClass("transparent");
	});

	// Options box
	$(".sendtip").each(function () {
		$(this).click(function () {
			blocket.apps.lightbox.open({

				type : "url",
				data : "/view/tip_friend.html",
				callback : function () {
					// Bind event
					blocket("#send_tip_form").apps.view.send_tip_form_submit();

					// Set input value to correct list_id
					$("#list_id").attr("value", blocket.params.list_id);
				}

			});
		});
	});

	// Close lightbox
	$(".lightbox_close").click(function () {
		$.colorbox.close();
	});

	// Initiate lightbox iframe links
	jQuery("#lightbox_carinfo").click(function () {
		blocket("#lightbox_carinfo").apps.lightbox.open({
			type : "iframe",
			settings : {width : "400px", height : "50%"}
		});
		return false;
	});
	// Truncate news if they're too long
	blocket.apps.news.truncate();

});

blocket("@apps.view").extend({

	params : {
		ais_index : null,
		ais_preloaded : null
	},

	fullscreen_params : {
		store_attr : null,
		img_max_height : null
	},

	onReady : function () {
		"use strict";

		blocket.apps.view.adaptive_image_size();
		blocket.apps.view.full_screen_play_button();

		$(".action_button").bind("mouseover", function () {
			$(this).addClass("mouseover");
		});
		$(".action_button").bind("mouseout", function () {
			$(this).removeClass("mouseover");
		});

	},

	adaptive_image_size : function () {
		"use strict";
		setTimeout(function () {
			blocket.apps.view.ais_preload();
		}, 1000);
	},

	on_open_callback_popup : function () {
		"use strict";
		xt_med('C', '28', 'VI::Callback open', 'A');
	},

	on_open_final_price_popup : function () {
		"use strict";
		xt_med('C', '28', 'VI::Final price open', 'A');
	},

	// Store visited ad for the "previous visited" feature on /li
	store_previous_visited_ad : function () {
		"use strict";
		var index_of_item;
		if (Storage !== undefined && blocket.params.previous_ads.enabled === "1") {

			var img = $("#media img");
			var current_ad = {};
			var prev_ads = [];
			current_ad.id = blocket.params.ad_id;

			if (localStorage.getItem(blocket.params.previous_ads.local_storage_name) !== null) {
				prev_ads = JSON.parse(localStorage.getItem(blocket.params.previous_ads.local_storage_name));
			}

			if ($("#no_ad_title").length !== 0) {
				index_of_item = blocket.apps.common.index_of_object_in_array(current_ad, prev_ads, "id");
				if (index_of_item !== -1) {
					prev_ads.splice(index_of_item, 1);
					localStorage.setItem(blocket.params.previous_ads.local_storage_name, JSON.stringify(prev_ads));
				}
			} else {
				index_of_item = blocket.apps.common.index_of_object_in_array(current_ad, prev_ads, "id");
				if (index_of_item === -1) {

					//New ad; add to list and append the last=1 param in order to hide the "next ad" link
					if (document.URL.indexOf("htm?") === -1) {
						current_ad.url = document.URL + "?last=1";
					} else {
						current_ad.url = document.URL + "&last=1";
					}

					//current_ad.subject = $(".view .subject_small, .view .subject_medium, .view .subject_large").text();
					current_ad.subject = $(".view .subject_small, .view .subject_medium, .view .subject_large").text().trim();

					if (img.length !== 0) {
						current_ad.thumb = img[0].src.replace("images_full", "lithumbs");
					} else if ($("#video_thumb").length !== 0) {
						current_ad.thumb = $("#video_thumb")[0].src.replace("thumbs_videos", "lithumbs");
					} else {
						current_ad.thumb = "/img/list/no_thumb_last_viewed.png";
					}
					current_ad.image_ratio = blocket.params.image_size.width === null ? null : blocket.params.image_size.height / blocket.params.image_size.width;

					if (prev_ads.unshift(current_ad) === blocket.params.previous_ads.limit + 1) {
						prev_ads.pop();
					}
				} else {
					// Existing ad; Move element to top in array
					var item_to_move = prev_ads.splice(index_of_item, 1)[0];
					prev_ads.unshift(item_to_move);
				}

				localStorage.setItem(blocket.params.previous_ads.local_storage_name, JSON.stringify(prev_ads));
			}

		}
	},

	// Full screen play button
	full_screen_play_button : function () {
		"use strict";
		if (blocket.apps.view.isFullScreenEnabled()) {
			document.addEventListener("fullscreenchange", function () {
				blocket.apps.view.onFullScreenChange();
			});
			document.addEventListener("mozfullscreenchange", function () {
				blocket.apps.view.onFullScreenChange();
			});
			document.addEventListener("webkitfullscreenchange", function () {
				blocket.apps.view.onFullScreenChange();
			});
		} else {
			jQuery("#view_fullscreen").hide();
		}
	},

	sort_ascending : function (a, b) {
		"use strict";
		return (a - b);
	},

	set_adaptive_image_size : function (image_index) {
		"use strict";
		blocket.apps.view.set_ais_image_src(image_index);
		$("#media_container .transparent").removeClass("transparent");
		if ($("#thumb_" + image_index) !== undefined) {
			$("#thumb_" + image_index).addClass("transparent");
		}
		if ($("#fs_thumb_" + image_index) !== undefined) {
			$("#fs_thumb_" + image_index).addClass("transparent");
		}
	},

	/* preload all images for current image size to avoid "blinking" issues while "next":ing */
	ais_preload : function () {
		"use strict";
		// make sure current image size is not already preloaded
		if (blocket.apps.view["params.ais_preloaded"] === null) {
			blocket.apps.view.params.ais_preloaded = true;
			// preload images for current image size
			var index = 0;
			while (blocket.apps.view.params["ais_image_" + index] !== undefined) {
				var tmp_url = blocket.apps.view.params["ais_image_" + index];
				$('<img />').attr('src', tmp_url);
				index++;
			}
		}
	},

	// set ais image source
	// TODO: fix attributes
	set_ais_image_src : function (image_index) {
		"use strict";
		var iind = image_index !== undefined ? image_index : 0;
		blocket.apps.view.params.ais_index = iind;
		var max_height;
		var img_src = blocket.apps.view.params["ais_image_" + iind];

		if (blocket.apps.view.isFullScreen()) {
			img_src = img_src.replace('images_full', 'original');
			blocket.apps.view.preload_fullscreen_images(".preload", image_index + 1, 1);
		} else {
			img_src = img_src.replace('original', 'images_full');
			max_height = $("#main_image").css("max-height");
		}
		var alt = blocket.apps.view.params.ais_alt;
		var num_images = blocket.apps.view.params.ais_num_images;
		var video_name = blocket.apps.view.params.ais_video_name;

		// create image object
		var img = document.createElement("img");
		$(img).attr("id", "main_image");
		$(img).attr("src", img_src);
		$(img).attr("alt", alt);
		$(img).attr("itemprop", "image");

		if (max_height !== undefined && max_height) {
			$(img).css("max-height", max_height);
		}

		if (num_images > 1) {
			$(img).addClass("image_next");
		} else if (num_images === 1 && video_name === "") {
			$(img).addClass("ad_image_single");
		}

		if ($(img).prop("width")) {
			$(img).removeAttr("width");
		}

		if ($(img).prop("height")) {
			$(img).removeAttr("height");
		}

		// remove any existing image, if present
		$('#main_image').remove();

		// display image
		$('#adaptive_image_size #ais_valign').append($(img));
	},

	/*
	 * Is run when clicking on a save-item button.
	 * Should be split into multiple methods for saving and removing an item from the watchlist.
	 * The reason it isn't is because we don't have a promises library to deal with asyncronous requests.
	 * The alternative might be callback hell.
	 *
	 * This is only used for action buttons.
	 */
	save_item_action_button_callback : function () {
		"use strict";
		blocket.$.each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();

				var $element_clicked = $(this),
				    $element_clicked_icon = $element_clicked.find(".action_button_icon"),
				    $element_clicked_text = $element_clicked.find(".action_button_text"),
				    sprite_active = "sprite_view_item_actions_heart_red",
				    sprite_inactive = "sprite_view_item_actions_heart",
				    save_callback_name = "save_" + blocket.params.list_id,
				    remove_callback_name = "remove_" + blocket.params.list_id,
				    list_id = blocket.params.list_id,
				    save_url = mypages_base_url + "/konto/sparade/spara",
				    remove_url = mypages_base_url + "/konto/sparade/ta_bort_json",
				    isSaved = $element_clicked_icon.hasClass(sprite_active);

				$element_clicked.addClass("link_disable");

				// Check if the item has been saved already				
				if (isSaved === false) {
					// Save watch
					$.ajax({
						url : save_url,
						cache : true,
						dataType : "jsonp",
						jsonpCallback : save_callback_name,
						data : {
							"list_id" : list_id
						},
						crossDomain : true
					})
					.done(function (data) {
						// The API always returns 200, so we have to parse the result to see if the operation was successful
						if (data.status !== "error") {
							$element_clicked_icon.removeClass(sprite_inactive).addClass(sprite_active);
							$element_clicked_text.text("Annons sparad");

							// Dispatch Xiti event
							xt_click(this, "C", mypages_xtn2, "new_saved_ad", "A");
						} else {
							/*
							 * Error codes
							 * 1 = Ad is inactive
							 * 2 = User has too many watched ads
							 * 3 = User is not logged in
							 */
							if (data.error_code === 3) {
								//Replace the icon
								$element_clicked_icon.removeClass(sprite_inactive).addClass("sprite_view_item_actions_login");

								//Update the text
								$element_clicked_text.text(data.error_msg);

								//Update the URL of the link
								$element_clicked.attr("href", mypages_base_url + "/konto/sparade?list_id=" + list_id);

								//Add class to login button. Used in Selenium test
								$element_clicked.addClass("save_item_login");

								//Unbind click event
								$element_clicked.off("click");

								$(".nav_mypages").attr("href", mypages_base_url + "/konto/sparade?list_id=" + list_id);
							}
						}
					})
					.always(function () {
						$element_clicked.removeClass("link_disable");
					});
				} else {
					// Remove watch
					$.ajax({
						url : remove_url,
						cache : true,
						dataType : "jsonp",
						jsonpCallback : remove_callback_name,
						data : {
							"list_id" : list_id
						},
						crossDomain : true
					})
					.done(function (data) {
						// The API always returns 200, so we have to parse the result to see if the operation was successful
						if (data.status !== "error") {
							$element_clicked_icon.removeClass(sprite_active).addClass(sprite_inactive);
							$element_clicked_text.text("Spara annons");
						}

						// @TODO Notifying the user if there's an error
					})
					.fail(function (jqXHR, textStatus, errorThrown) {
						console.log("Request failed:", jqXHR, textStatus, errorThrown);
					})
					.always(function () {
						$element_clicked.removeClass("link_disable");
					});
				}
			});
		});
	},

	/*
	 * Saves an ad.
	 * This is only used for action links.
	 */
	save_item_action_link_callback : function () {
		"use strict";
		blocket.$.each(function () {
			$(this).click(function () {
				console.log("Clicked save link");
				var $element_clicked = $(this),
				    callback_name = "save_" + blocket.params.list_id,
				    list_id = blocket.params.list_id,
				    save_url = mypages_base_url + "/konto/sparade/spara";

				$element_clicked.addClass("link_disable");

				$.ajax({
					url : save_url,
					cache : true,
					dataType : "jsonp",
					jsonpCallback : callback_name,
					data : {
						"list_id" : list_id
					},
					success : function (data) {
						$element_clicked.removeClass("link_disable");
						if (data.status !== "error") {
							$element_clicked
								.unbind("click")
								.addClass("save_item_okey")
								.html("Annonsen sparad!");

							xt_click(this, "C", mypages_xtn2, "new_saved_ad", "A");
						} else {
							if (data.error_code === 3) {
								var $parent = $element_clicked.parent();
								$parent.attr("id", "js_save_item_response");
								$parent.attr("style", "height:auto;overflow:hidden;");
								var new_item = document.createElement("a");
								new_item.setAttribute("class", "save_item_login");
								new_item.setAttribute("id", $element_clicked.attr("id"));
								new_item.setAttribute("href", mypages_base_url + "/konto/sparade?list_id=" + list_id);
								new_item.innerHTML = data.error_msg;
								$element_clicked.remove();

								var target = document.getElementById("js_save_item_response");
								target.appendChild(new_item);

								$(".nav_mypages").attr("href", mypages_base_url + "/konto/sparade?list_id=" + list_id);
							}
						}
					},
					error : function () {
						$element_clicked.removeClass("link_disable");
					},
					complete : function () {
					}
				});

				$element_clicked.unbind("click");
			});
		});
	},

	checkHittaStreetview : function () {
		"use strict";
		var hitta_url = "http://static.hitta.se/streetview/";
		var cleanupAddress = function (raw_input) {
			if (raw_input.hitta_streetview_address === undefined || raw_input.hitta_streetview_area === undefined) {
				return false;
			}
			var streetaddress = raw_input.hitta_streetview_address.split(",")[0];
			var location_string = streetaddress + raw_input.hitta_streetview_area;
			var normalized_string = location_string
				.toLowerCase()
				.replace(/ /g, "")
				.replace(/\u00e4/gi, "ae")
				.replace(/\u00e5/gi, "oe")
				.replace(/\u00e6/gi, "oo")
				.replace(/\u00fc/gi, "uu")
				.replace(/\u00e9/gi, "ee");
			return normalized_string;
		};


		var normalized_string = cleanupAddress(blocket.params.mplus);
		if (!normalized_string) {
			return;
		}

		var map_url = "http://www.hitta.se/LargeMap.aspx?gatubild";

		$.ajax({
			url : hitta_url + normalized_string,
			cache : true,
			dataType : "jsonp",
			jsonpCallback : "broker_streetview",
			success : function (result) {
				if (result.status === 1) {
					map_url += "&gvX=" + result.rt90north;
					map_url += "&gvY=" + result.rt90east;
					map_url += "&gvH=" + result.angle;
					map_url += "&toolbars=none&nomap=true";
					$("#broker_streetview_iframe").attr("src", map_url);
					$("#broker_streetview_iframe").css("height", "200px");
					//$(".details_bottom").removeClass("details_small");
					//$(".details_bottom").addClass("details_full");
				} else if (result.error !== undefined) {
					//if ($(".details_bottom").hasClass("details_small")) $(".details_bottom").removeClass("details_small");
					//if ($(".details_bottom").hasClass("details_full")) $(".details_bottom").removeClass("details_full");
					//$(".details_bottom").addClass("details_small");
					//console.log("STREET VIEW ERROR");
					$("#broker_streetview_iframe").css("height", "0px");
				}
			}
		});

	},

	open_send_tip_email : function (url) {
		"use strict";
		xt_click(this, 'C', '', 'Tipsa_mail', 'A');
		blocket.apps.common.open_ad_action_dialog({"url" : url, "whoami" : "tellafriend"});
	},

	open_phonenumber : function (that) {
		"use strict";
		var url = $(that).attr("data-href") + "&h=" + $(that).attr("data-phonehash");
		blocket.apps.common.open_ad_action_dialog({"url" : url, "whoami" : "phonenumber"});
	},

	reply_form_open_lightbox : function () {
		"use strict";
		blocket.$.click(function () {
			$(document).unbind('cbox_cleanup'); /* Events for binding when the lightbox opens are not working */
			$(document).bind('cbox_cleanup', function () {
				$(".contact_success").addClass("hidden");
				$("#ad_reply").addClass("hidden");
			});
			// Show reply box
			$("#ad_reply").removeClass("hidden");

			//If a message is sent, then clicked again.
			$(".contact_success").addClass("hidden");

			blocket("#ad_reply_form").apps.view.reply_form_submit_lightbox();

			blocket.apps.lightbox.open({
				type : "id",
				data : "ad_reply",
				callback : function () {
				// Set focus on first input
					$("input[name=name]").focus();
				}
			});
			xt_med('C', '', 'adreply_show_form', 'A');

			return false;
		});
	},

	broker_callback_update_times: function () {
		"use strict";
		console.log("updating times");
		$.get("/vi/broker_callback_times_ajax.html?day=" + $("#day").val(), function (data) {
			var t = $("#time");
			t.children().remove();
			t.append($(data).find("option"));
			// If we dont get any valid times then that means that we are not able to choose Idag
			if ($("#time option").length === 0) {
				$("#day option:first").remove();
				blocket.apps.view.broker_callback_update_times();
			} else {
				t.val(t.find("option:first").val());
			}
		});
	},

	broker_callback_form_submit_lightbox : function () {
		"use strict";
		// Perform AJAX-post
		$("#ad_reply_form .loader, #ad_reply_form input:submit").toggle();
		$("#err_unknown").hide();
		$.ajax({
			url : "/vi/broker_callback_ajax.json",
			data : $("#ad_reply_form").serialize(),
			type : "post",
			dataType : "json",
			success : blocket.apps.view.broker_callback_form_callback_lightbox,
			error : function () {
				// Restore form
				$("#ad_reply_form .loader, #ad_reply_form input:submit").toggle();
				$("#err_unknown").show();
			}
		});
		xt_med('C', '28', 'VI::Callback send', 'A');
	},

	reply_form_close_lightbox : function () {
		"use strict";
		$("#ad_reply").unbind("submit");
	},

	broker_callback_form_callback_lightbox : function (response) {
		"use strict";
		$("#ad_reply_form .loader, #ad_reply_form input:submit").toggle();
		if (response.status === "OK") {
			// Show mail confirmation
			$("#ad_reply_form").remove();
			$("#ad_reply_success_broker_callback").show();
			blocket.apps.lightbox.resize();
		} else if (response.status === "ERROR") {
			// Hide error texts
			$("[id^=err_]").hide();

			// Set error texts
			for (var i in response) {
				if (i !== "status" && i !== "id") {
					$("#err_" + i).show();
					$("#err_" + i).addClass("error").text(response[i]);
					$("#err_" + i).removeClass("hidden");
				}
			}
			$.colorbox.resize();
		}
	},

	facebook_share_func : function () {
		"use strict";
		blocket.$.click(function () {
			var u = location.href;
			var t = document.title;
			window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer');
			return false;

		});
	},

	reply_form_submit : function (form) {
		"use strict";
		// Perform AJAX-post
		$.ajax({
			url : "/send_ar",
			data : $(form).serialize(),
			type : "post",
			dataType : "json",
			success : blocket.apps.view.reply_form_callback
		});
		xt_med('C', '', 'adreply_send_email', 'A');
		return false;
	},

	reply_form_submit_lightbox : function () {
		"use strict";
		blocket.$.submit(function () {
			// Perform AJAX-post
			$.ajax({
				url : "/send_ar",
				data : $(this).serialize(),
				type : "post",
				dataType : "json",
				success : blocket.apps.view.reply_form_callback_lightbox
			});
			xt_med('C', '', 'adreply_send_email', 'A');
			return false;
		});
	},
	final_price_form_submit_lightbox : function () {
		"use strict";
		// Perform AJAX-post
		$.ajax({
			url : "/send_ar_final_price",
			data : $("#ad_reply_form").serialize(),
			type : "post",
			dataType : "json",
			success : blocket.apps.view.final_price_form_callback_lightbox
		});
		xt_med('C', '28', 'VI::Final price send', 'A');
	},
	show_video : function () {
		"use strict";
		$("#main_image").hide();

		$("#flowplayerholder").show();
		$(".thumb").removeClass("transparent");
		$("#video_thumb").addClass("transparent");
	},

	hide_video : function () {
		"use strict";
		var fplayer = flowplayer();
		if (fplayer && !fplayer.paused) {
			fplayer.pause();
		}

		$("#flowplayerholder").hide();
		$("#main_image").show();
	},
	reply_form_callback : function (response) {
		"use strict";
		if (response.status === "OK") {
			var ad_reply_form = $("#ad_reply_form");
			ad_reply_form.unbind("submit");
			ad_reply_form.remove();
			// Show mail confirmation
			$("#ad_reply_success").fadeIn(500);

		} else if (response.status === "ERROR") {
			// Hide error texts
			$("[id^=err_]").hide();

			// Set error texts
			for (var i in response) {
				if (i !== "status" && i !== "id") {
					blocket.apps.common.set_err(i, response[i]);
				}
			}
		}
	},
	reply_form_callback_lightbox : function (response) {
		"use strict";
		if (response.status === "OK") {
			blocket.apps.view.reply_form_close_box();

			// Show mail confirmation
			$(".contact_success").removeClass("hidden");
			blocket.apps.lightbox.open({
				type : "id",
				data : "broker_contact_success"
			});

			// Add iframe with Xiti tag
			// category
			var cg = blocket.params.cg;

			// chain or store name
			var store_param = blocket.params.store_chain !== "" ? 'store_chain' : 'store_name';
			var store_value = store_param === 'store_chain' ? blocket.params.store_chain : blocket.params.store_name;

			// actual iframe
			var xitiIframe = document.createElement("iframe");
			xitiIframe.src = '/iframe_xiti_tag.html?' + store_param + '=' + store_value + "&cg=" + cg;
			xitiIframe.width = '0';
			xitiIframe.height = '0';
			xitiIframe.scrolling = 'no';
			xitiIframe.marginheight = '0';
			xitiIframe.marginwidth = '0';
			xitiIframe.frameborder = '0';
			xitiIframe.style = 'visibility:hidden;display:none';
			document.getElementById('broker_contact_success').appendChild(xitiIframe);

		} else if (response.status === "ERROR") {
			// Hide error texts
			$("[id^=err_]").hide();

			// Set error texts
			for (var i in response) {
				if (i !== "status" && i !== "id") {
					$("#err_" + i).show();
					$("#err_" + i).addClass("error").text(response[i]);
					$("#err_" + i).removeClass("hidden");
				}
			}
			$.colorbox.resize();
		}
	},

	final_price_form_callback_lightbox : function (response) {
		"use strict";
		if (response.status === "OK") {
			// Show mail confirmation
			$("#ad_reply_form").remove();
			$("#ad_reply_success_final_price").show();
			blocket.apps.lightbox.resize();
		} else if (response.status === "ERROR") {
			// Hide error texts
			$("[id^=err_]").hide();

			// Set error texts
			for (var i in response) {
				if (i !== "status" && i !== "id") {
					$("#err_" + i).show();
					$("#err_" + i).addClass("error").text(response[i]);
					$("#err_" + i).removeClass("hidden");
				}
			}
			$.colorbox.resize();
		}
	},

	send_tip_form_submit : function (form) {
		"use strict";
		$.ajax({
			url : "/sendtip.htm",
			data : $(form).serialize(),
			type : "POST",
			dataType : "json",
			success : blocket.apps.view.send_tip_form_callback
		});
	},

	send_tip_form_callback : function (response) {
		"use strict";
		if (response.status !== "TRANS_OK") {
			$("[id^=err_]").hide();

			// Set error texts
			for (var i in response) {
				if (i !== "status" && i !== "id") {
					blocket.apps.common.set_err(i, response[i]);
				}
			}
		} else {
			var ad_reply_form = $("#tellafriend");
			ad_reply_form.unbind("submit");
			ad_reply_form.remove();
			// Show mail confirmation
			$("#ad_reply_success").fadeIn(500);

			$("#sendtip_ok").html(js_info.TIP_SENT).fadeIn(500);
			$("#sendtip_ok").removeClass("hidden");
		}

	},

	print_choice : function (option) {
		"use strict";
		if (option === 'normal') {
			$("#print_normal").attr("checked", true);
			$("#print_button").removeClass("print_button_stripe").addClass("print_button_normal");
			$("#print_button").val("Skriv ut");
		} else {
			$("#print_stripe").attr("checked", true);
			$("#print_button").removeClass("print_button_normal").addClass("print_button_stripe");
			$("#print_button").val("Skapa PDF");
		}
	},

	save_item_cb : function (result) {
		"use strict";
		$("#save_item_text").hide().addClass("success").fadeIn(700);
		$(".save_item").unbind("click").css("cursor", "default").parent(".text").addClass("save_item_okey").html("Annonsen sparad!");

		if (result.status === 'OK') {
			blocket.common.setCookie(adwatch.cookie_name, result.watch_unique_id, adwatch.cookie_expire_days, '/', adwatch.cookie_domain);
			blocket.common.setCookie(adwatch.cookie_invalidate_cache, 1, adwatch.cookie_expire_days, '/', adwatch.cookie_domain);
		}
	},

	other_watched_second_resize : function (obj, w_def, h_def) {
		"use strict";

		// abort
		if (obj === null || obj === undefined) {
			return;
		}

		// defines
		var new_top = "";
		var new_left = "";
		var obj_width = "";
		var obj_height = "";

		// defaults
		if (w_def === "") {
			w_def = 0;
		}
		if (h_def === "") {
			h_def = 0;
		}

		// get dimensions
		obj_width = $(obj).css("width");
		obj_height = $(obj).css("height");
		obj_width = obj_width.replace("px", "");
		obj_height = obj_height.replace("px", "");

		// abort if with or height are less than 2px
		if (obj_width < 2 || obj_height < 2) {
			return;
		}

		// calculate
		new_left = (w_def / 2) - (obj_width / 2);
		new_top = (h_def / 2) - (obj_height / 2);

		// set css
		$(obj).css("left", new_left + "px");
		$(obj).css("top", new_top + "px");

		return true;
	},

	print_popup : function () {
		"use strict";
		var self = this.print_popup;
		self.$.click(function () {
			var $phone_number_link = $("#phonenumber_link");
			if ($phone_number_link.length > 0) {
				var url = $phone_number_link.attr("data-href") + "&h=" + $phone_number_link.attr("data-phonehash");
				blocket.apps.common.open_ad_action_dialog({"url" : url, "prevent_scroll" : true});
			}
			blocket.apps.lightbox.open({
				type : "url",
				data : "/view/print_popup.html",

				settings : {
					width : "452px",
					height : "459px",
					name : "print_popup"
				},

				callback : function () {
					$(".sprite_view_print_popup_plate_normal").click(function () {
						blocket.apps.view.print_choice("normal");
					});
					$("#print_normal").click(function () {
						blocket.apps.view.print_choice("normal");
					});
					$(".sprite_view_print_popup_plate_list").click(function () {
						blocket.apps.view.print_choice("stripe");
					});
					$("#print_stripe").click(function () {
						blocket.apps.view.print_choice("stripe");
					});
					$("#print_button").click(function () {
						blocket.apps.view.print_ad();
					});

					var thumbTitle = "";
					var viewTitle = $(".view").find("h2").html();
					if (viewTitle !== "") {
						thumbTitle = viewTitle;
					}
					$(".print_box_thumbtitle").html(thumbTitle);

					if ($("#main_image").length) {
						var thumb_url = $("#main_image").attr("src");
						thumb_url = thumb_url.replace('/images/', '/thumbs/');
						$(".print_box_thumb").attr("src", thumb_url);

					} else {
						$(".print_box_thumb").empty();

					}
					fif_popup_callback();
				}
			});
		});
	},

	bbf_popup : function () {
		"use strict";
		var self = this.bbf_popup;

		self.$.click(function () {
			blocket.apps.lightbox.open({
				type : "url",
				data : "/view/bbf_popup.html"
			});
		});
	},

	mpaket_possible_popup : function () {
		"use strict";
		var self = this.mpaket_possible_popup;

		self.$.click(function () {
			blocket.apps.lightbox.open({
				type : "url",
				data : "/view/mpaket_possible_popup.html",
				settings : {
					width : "340px"
				}
			});
		});
	},

	bring_check : function () {
		"use strict";
		var bring_zip = $("#bring_zip").val();
		if (bring_zip.match(/^\d{5}$/)) {
			$.cookie("bring_zipcode", $("#bring_zip").val(), { expires : 360 });
			return true;
		}

		return false;
	},

	ajax_redir_count : function (code) {
		"use strict";
		$.ajax({
			url : "/redir",
			data : "s=" + code + "&nc=1&logonly=1",
			dataType : "post"
		});
	},

	show_ie9_box : function () {
		"use strict";
		blocket.$.click(function () {
			blocket.apps.lightbox.open({
				type : "url",
				data : "/ie9_pin.htm"
			});
			return false;
		});
	}
});


blocket("@apps.view").extend({
	check_save_item : function (result, xmlhttp) {
		"use strict";

		if (result) {
			var display_message = document.getElementById("save_item_msg");

			if (result.match(/Status:SAVED_AD/)) {
				display_message.className = "okey";
			}
			display_message.style.display = "block";
		} else if (xmlhttp.responseText.indexOf('<!DOCTYPE') >= 0) {
			var newbody = xmlhttp.responseText;

			/*
			 * Since we can't intercept 302 responses from the server
			 * indicating that something strange has happened (eg.
			 * that we need to log in again) because xmlhttp automagically
			 * follows the redirect, we try to detect that this has happened
			 * through finding a "<!DOCTYPE" in the document and replacing
			 * our body with what appears to be the body of the document
			 * we got.
			 */

			newbody = newbody.replace(/(.|\n)*<body>/, "");
			newbody = newbody.replace(/<\/body>[^<]*<\/html>[^<]*$/m, "");
			document.body.innerHTML = newbody;
			return;
		}
	},

	save_item: function (link) {
		"use strict";
		var get = link + "&ax=1";
		var post = '';

		blocket.common.ajax_request(get, post, blocket.apps.view.check_save_item, link, false, "GET");

		return false;
	},

	submit_aw : function (id) {
		"use strict";
		var post = '';
		var uuid = blocket.common.getCookie(adwatch.cookie_name);

		if (adwatch.save_items.cookie_storage === 1) {
			var save_items_cookie = blocket.common.getCookie(adwatch.save_items.cookie_name);
			if (save_items_cookie && save_items_cookie.length) {
				save_items_cookie += ',' + id;
			} else {
				save_items_cookie = id;
			}

			blocket.common.setCookie(adwatch.save_items.cookie_name, save_items_cookie, adwatch.cookie_expire_days, '/', adwatch.cookie_domain);
		} else {
			post += 'aid=' + id + '&';
			if (uuid !== null) {
				post += 'uuid=' + uuid + '&';
			}
			blocket.common.ajax_request("/send_aw", post, blocket.apps.view.aw_submit_result);
		}
		return true;
	},

	display_sendtip_message : function (focus_element, msg, class_name) {
		"use strict";
		var display_message = document.getElementById("sendtip_error");

		display_message.innerHTML = msg;
		display_message.className = class_name;

		if (focus_element) {
			blocket.common.setFocus(focus_element);
		}

		display_message.style.display = "block";
	},

	aw_save_item : function (id) {
		"use strict";
		if (!blocket.apps.view.submit_aw(id)) {
			return true;
		}

		return false;
	},

	check_sendtip : function (result, xmlhttp) {
		"use strict";

		if (result) {
			if (result.status === "TRANS_OK") {
				document.getElementById("tip_email").value = "";
				blocket.apps.view.display_sendtip_message("tip_email", js_info.TIP_SENT, "okey");
			} else {
				if (result.name) {
					blocket.apps.view.display_sendtip_message("tip_name", result.name, "error");
				} else if (result.email) {
					blocket.apps.view.display_sendtip_message("tip_email", result.email, "error");
				} else {
					document.getElementById("tip_email").value = "";
					blocket.apps.view.display_sendtip_message(null, js_info.TIP_SENT, "okey");
				}
			}
		} else if (xmlhttp.responseText.indexOf('<!DOCTYPE') >= 0) {
			var newbody = xmlhttp.responseText;

			/*
			 * Since we can't intercept 302 responses from the server
			 * indicating that something strange has happened (eg.
			 * that we need to log in again) because xmlhttp automagically
			 * follows the redirect, we try to detect that this has happened
			 * through finding a "<!DOCTYPE" in the document and replacing
			 * our body with what appears to be the body of the document
			 * we got.
			 */

			newbody = newbody.replace(/(.|\n)*<body>/, "");
			newbody = newbody.replace(/<\/body>[^<]*<\/html>[^<]*$/m, "");
			document.body.innerHTML = newbody;
			return;
		}
	},

	send_tip : function (form) {
		"use strict";
		var target = '/sendtip.htm';
		var post = '';

		if ($("#tip_name").val() === send_tip_strings.name.label) {
			blocket.apps.view.display_sendtip_message("tip_name", send_tip_strings.name.error_msg, "error");
			return false;
		} else if ($("#tip_email").val() === send_tip_strings.email.label) {
			blocket.apps.view.display_sendtip_message("tip_email", send_tip_strings.email.error_msg, "error");
			return false;
		}

		if ($("#tip_msg").val() === send_tip_strings.message.label) {
			$("#tip_msg").val("");
		}

		for (var i = 0; i < form.elements.length; i++) {
			var temp = form.elements[i];
			post += temp.name + '=' + blocket.common.escape_component(temp.value).replace(/%u[0-9][0-9][0-9][0-9]/g, '%3F') + '&';
		}


		blocket.common.ajax_request(target, post, blocket.apps.view.check_sendtip, form, true);

		return false;
	},

	show_mail_form : function (scroll) {
		"use strict";
		/* Allowed browsers */
		var browser_list = [
				{agent : 'Firefox', version : '1.5'},
				{agent : 'Explorer', version : '5.5'},
				{agent : 'Safari', version : '412.2'},
				{agent : 'Opera', version : '8'},
				{agent : 'Chrome', version : '1'}
			];
		if (!blocket.common.BrowserDetect.isValid(browser_list)) {
			return true;
		}
		if (!blocket.apps.all_pages.ajax_check()) {
			return true;
		}

		var menu = document.getElementById("adview_menu");
		var mailto = document.getElementById("mailto");

		mailto.style.display = "block";
		menu.style.display = "none";

		blocket.common.showElement("TipBox", false);
		blocket.common.setFocus("yourName");

		if (scroll) {
			blocket.common.scrollToObject(mailto);
		}
		return false;
	},

	hide_mail_form : function () {
		"use strict";
		var menu = document.getElementById("adview_menu");
		var mailto = document.getElementById("mailto");

		mailto.style.display = "none";
		menu.style.display = "block";
		return false;
	},

	ar_submit_result : function (result, xmlhttp, form) {
		"use strict";
		blocket.common.hideProgressBar();

		if (!result || !result.status) {
			result = [];
			result.status = 'ERROR';
			delete form.onsubmit;
			form.action = document.getElementById("ar_link").href.replace('/ar', '/ar/send');
			form.submit();
			return;
		}

		if (result.status === 'OK') {
			var reply = document.getElementById("ar_reply");

			reply.className = "okey";
			reply.style.display = "block";
			reply.innerHTML = js_info.MAIL_SENT;
			blocket.apps.view.hide_mail_form();
			form.reset();
		} else {
			for (var key in result) {
				if (result.hasOwnProperty(key)) {
					var err = document.getElementById('ar_err_' + key);

					if (err) {
						err.innerHTML = result[key];
						err.style.display = 'block';
					}
				}
			}
		}
	},

	ar_submit : function (form) {
		"use strict";
		var post = '';

		for (var i = 0; i < form.elements.length; i++) {
			var temp = form.elements[i];

			if (temp.name && (temp.type !== "checkbox" || temp.checked === true)) {
				// post += temp.name + '=' + escape(temp.value.replace(/[\u0100-\uFFFF]/g, '?')) + '&';
				post += temp.name + '=' + blocket.common.escape_component(temp.value).replace(/%u[0-9][0-9][0-9][0-9]/g, '%3F') + '&';
			}
		}

		var errdivs = blocket.common.getElementsByClassName(form, 'DIV', 'error');
		for (var idx in errdivs) {
			if (errdivs.hasOwnProperty(idx)) {
				errdivs[idx].style.display = 'none';
			}
		}
		blocket.common.ajax_request("/send_ar", post, blocket.apps.view.ar_submit_result, form);
		return false;
	},

	calendar_next_month : function () {
		"use strict";
		if (blocket.params.calendar.calendar_month >= 12) {
			blocket.params.calendar.calendar_year++;
			blocket.params.calendar.calendar_month = 1;
		} else {
			blocket.params.calendar.calendar_month++;
		}
		blocket.apps.view.calendar_update();
	},

	calendar_prev_month : function () {
		"use strict";
		if (blocket.params.calendar.calendar_month <= 1) {
			blocket.params.calendar.calendar_year--;
			blocket.params.calendar.calendar_month = 12;
		} else {
			blocket.params.calendar.calendar_month--;
		}
		blocket.apps.view.calendar_update();
	},

	days_in_month : function (year, mon) {
		"use strict";
		var dim;
		switch (mon) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			dim = 31;
			break;
		case 2:
			if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
				dim = 29;
			} else {
				dim = 28;
			}
			break;
		default :
			dim = 30;
			break;
		}
		return dim;
	},

	calendar_update : function () {
		"use strict";
		var d = new Date();
		var bm, matchre;

		d.setFullYear(blocket.params.calendar.calendar_year, blocket.params.calendar.calendar_month - 1, 1);
		var week = d.getWeek(1);
		var wday = d.getDay();
		var dim = blocket.apps.view.days_in_month(blocket.params.calendar.calendar_year, blocket.params.calendar.calendar_month);

		document.getElementById('awc_month_name').innerHTML = month_short_names[d.getMonth()].substr(0, 3) + " -" + String(d.getFullYear()).slice(2);

		if (wday === 0) {
			d.setDate(d.getDate() - 6);
		} else {
			d.setDate(d.getDate() - (wday - 1));
		}

		var weekstoshow;
		if (d.getMonth() + 1 === 2 && d.getDate() === 1 && (d.getFullYear() % 4 !== 0 || (d.getFullYear() % 100 === 0 && d.getFullYear() % 400 !== 0))) {
			weekstoshow = 4;
		} else if ((wday === 0 && d.getMonth() + 1 !== 1) || (wday === 6 && dim === 31)) {
			weekstoshow = 6;
		} else {
			weekstoshow = 5;
		}

		var tbody = document.createElement('tbody');

		var tr_weekdays = document.createElement('tr');
		var th_weekday = document.createElement('th');
		var weekday_class = 'awc_weekday';

		th_weekday.className = '';
		th_weekday.innerHTML = '';
		tr_weekdays.appendChild(th_weekday);

		var td_weekday = document.createElement('td');
		td_weekday.className = weekday_class;
		td_weekday.innerHTML = "M\u00e5";
		tr_weekdays.appendChild(td_weekday);

		td_weekday = document.createElement('td');
		td_weekday.className = weekday_class;
		td_weekday.innerHTML = "Ti";
		tr_weekdays.appendChild(td_weekday);

		td_weekday = document.createElement('td');
		td_weekday.className = weekday_class;
		td_weekday.innerHTML = "On";
		tr_weekdays.appendChild(td_weekday);

		td_weekday = document.createElement('td');
		td_weekday.className = weekday_class;
		td_weekday.innerHTML = "To";
		tr_weekdays.appendChild(td_weekday);

		td_weekday = document.createElement('td');
		td_weekday.className = weekday_class;
		td_weekday.innerHTML = "Fr";
		tr_weekdays.appendChild(td_weekday);

		td_weekday = document.createElement('td');
		td_weekday.className = weekday_class;
		td_weekday.innerHTML = "L\u00f6";
		tr_weekdays.appendChild(td_weekday);

		td_weekday = document.createElement('td');
		td_weekday.className = weekday_class;
		td_weekday.innerHTML = "S\u00f6";
		tr_weekdays.appendChild(td_weekday);

		tbody.appendChild(tr_weekdays);


		for (var i = 0; i < weekstoshow; i++) {
				/* Seven days of this week: 
				 * -: not available
				 * a: available
				 * p: peak season rent
				 * o: off season rent
				 */
			var dayinfo = [];
			for (bm = 0; bm < 7; bm++) {
				dayinfo[bm] = '-';
			}

			var weekyear = d.getFullYear();
			if (d.getMonth() + 1 === 12 && week === 1) {
				weekyear += 1;
			}

			if (blocket.params.calendar.available_weeks_peakseason.length ||
					blocket.params.calendar.available_weeks_offseason.length ||
					blocket.params.calendar.available_weeks.length) {

				matchre = new RegExp("(^|,)" + weekyear + ":" + week + "(,|$)");
				var avail = '-';

				if (matchre.test(blocket.params.calendar.available_weeks_peakseason)) {
					avail = 'p';
				} else if (matchre.test(blocket.params.calendar.available_weeks_offseason)) {
					avail = 'o';
				} else if (matchre.test(blocket.params.calendar.available_weeks)) {
					avail = 'a';
				}
				for (bm = 0; bm < 7; bm++) {
					dayinfo[bm] = avail;
				}
			} else if (blocket.params.calendar.available_days.length) {
				matchre = new RegExp("(^|,)(" + weekyear + "):(" + week + "):([0-9a-f]{2})(,|$)");
				var match = matchre.exec(blocket.params.calendar.available_days);

				if (match !== null) {
					var daymask = parseInt(match[4], 16);
					for (bm = 0; bm < 7; bm++) {
						if (daymask & (1 << bm)) {
							dayinfo[bm] = 'a';
						}
					}
				}
			}

			var dayclass = [];
			for (bm = 0; bm < 7; bm++) {
				switch (dayinfo[bm]) {
					case 'a':
						dayclass[bm] = blocket.params.calendar.season_class_any_season;
						break;
					case 'o':
						dayclass[bm] = blocket.params.calendar.season_class_off_season;
						break;
					case 'p':
						dayclass[bm] = blocket.params.calendar.season_class_peak_season;
						break;
					default:
						dayclass[bm]  = blocket.params.calendar.season_class_none;
						break;
				}
			}

			var tr = document.createElement('tr');
			var th = document.createElement('th');
			th.className = 'awc_week';
			th.innerHTML = 'v.' + week;
			tr.appendChild(th);

			for (var dnum = 0; dnum < 7; dnum++) {
				if (dnum > 0) {
					d.setDate(d.getDate() + 1);
				}
				var td = document.createElement('td');
				td.className = dayclass[dnum];
				td.innerHTML = d.getDate();
				tr.appendChild(td);
			}

			d.setDate(d.getDate() + 1);
			if (d.getMonth() + 1 === 1 && d.getDate() <= 4 || (d.getMonth() + 1 === 12 && d.getDate() >= 29)) {
				week = 1;
			} else {
				week++;
			}
			tbody.appendChild(tr);
		}

		while (document.getElementById("awc_table").childNodes.length !== 0) {
			document.getElementById("awc_table").removeChild(document.getElementById("awc_table").childNodes[0]);
		}

		if (blocket.params.calendar.calendar_year === blocket.params.calendar.min_year && blocket.params.calendar.calendar_month === blocket.params.calendar.min_month) {
			document.getElementById("awc_prev_arrow").style.display = 'none';
		} else {
			document.getElementById("awc_prev_arrow").style.display = 'block';
		}

		if (blocket.params.calendar.calendar_year === blocket.params.calendar.min_year + 1 && blocket.params.calendar.calendar_month === blocket.params.calendar.min_month) {
			document.getElementById("awc_next_arrow").style.display = 'none';
		} else {
			document.getElementById("awc_next_arrow").style.display = 'block';
		}

		document.getElementById('awc_table').appendChild(tbody);
	},

	// Change print button text variying on input checked
	print_choice : function (option) {
		"use strict";
		if (option === 'normal') {
			document.getElementById('print_normal').checked = 'checked';
			document.getElementById('print_button').className = 'print_button_normal';
			document.getElementById('print_button').value = 'Skriv ut';
		} else {
			document.getElementById('print_stripe').checked = 'checked';
			document.getElementById('print_button').className = 'print_button_stripe';
			document.getElementById('print_button').value = 'Skapa PDF';
		}
	},

	// Print ad either with print.css or generate PDF
	print_ad : function () {
		"use strict";
		$('#colorbox').css("display", "");
		$('#colorbox').addClass("unhidden");
		$('#cboxOverlay').css("display", "");
		$('#cboxOverlay').addClass("unhidden");


		var print_normal = document.getElementById("print_normal");
		var print_stripe = document.getElementById("print_stripe");

		// Normal print
		if (print_normal.checked) {
			if ($('#print_map_image').size() === 0) {
				window.print();
			} else {
				$('#print_map').css("display", "");

				if ($('#print_map_image').attr("src") !== "" && $('#print_map_image').attr("src") !== null) {
					window.print();
				} else {
					$('#print_map_image').unbind("load");
					$('#print_map_image').load(function () {
						window.print();
					}).attr("src", blocket.params.map_location);
				}
			}
		}

		// PDF print
		if (print_stripe.checked) {
			var new_window = window.open(blocket.params.pdf_location, '_blank');
			new_window.focus();
			return false;
		}
	},

	remove_saved_ad_cb : function (result) {
		"use strict";
		if (result && result.status === 'OK') {
			return true;
		}

		return false;
	},

	view_all : function (id) {
		"use strict";
		if (blocket.apps.view.isFullScreen()) {
			setTimeout(function () {
				window.open("/alla_bilder.htm?id=" + id, "_blank", "width=1025,height=" + (parseInt(screen.height, 10) - 100) + ",scrollbars=yes");
			}, 2000);
			blocket.apps.view.close_fullscreen();
		} else {
			window.open("/alla_bilder.htm?id=" + id, "_blank", "width=1025,height=" + (parseInt(screen.height, 10) - 100) + ",scrollbars=yes");
		}
	},

	close_fullscreen : function () {
		"use strict";

		if (blocket.apps.view.params.ais_original !== undefined) {
			$("#fs_thumbs").hide();
			$("#thumbs").show();
		}

		blocket.apps.view.full_screen_play_button();

		if (document.CancelFullScreen !== undefined) {
			document.CancelFullScreen();
		} else if (document.webkitCancelFullScreen !== undefined) {
			document.webkitCancelFullScreen();
		} else if (document.mozCancelFullScreen !== undefined) {
			document.mozCancelFullScreen();
		}
	},

	isFullScreenEnabled : function () {
		"use strict";
		if (document.fullScreenEnabled !== undefined) {
			return document.fullScreenEnabled;
		} else if (document.webkitFullscreenEnabled !== undefined) {
			return document.webkitFullscreenEnabled;
		} else if (document.mozFullScreenEnabled !== undefined) {
			return document.mozFullScreenEnabled;
		}
		return false;
	},

	isFullScreen : function () {
		"use strict";
		if (document.fullScreen !== undefined) {
			return document.fullScreen;
		} else if (document.webkitIsFullScreen !== undefined) {
			return document.webkitIsFullScreen;
		} else if (document.mozFullScreen !== undefined) {
			return document.mozFullScreen;
		}
		return false;
	},

	enter_fullscreen : function () {
		"use strict";
		xt_click(this, 'F', '', 'bildspel');

		blocket.apps.view.fullscreen_params.store_attr = jQuery("#media").attr("style");
		blocket.apps.view.fullscreen_params.img_max_height = jQuery("#main_image").attr("style");
		jQuery("#media").hide();
		//Due to a rendering bug in Safari flash components must not be renderd when using full screen.
		jQuery(".top_items iframe").addClass("outside_screen");
		jQuery("#right_bar_campaigns").addClass("outside_screen");
		var e = document.getElementById('media_container');
		if (e.requestFullscreen !== undefined) {
			return e.requestFullscreen();
		} else if (e.webkitRequestFullScreen !== undefined) {
			return e.webkitRequestFullScreen();
		} else if (e.mozRequestFullScreen !== undefined) {
			return e.mozRequestFullScreen();
		}
		return false;
	},

	enter_bostad_fullscreen : function (t) {
		"use strict";
		if (blocket.apps.view.enter_bostad_fullscreen.cache === undefined) {
			var index = $('.thumb_link.video_thumb').length ? 1 : 0;
			while (blocket.apps.view.params["ais_thumb_" + index] !== undefined) {
				if (index === 0) {
					$("#fs_thumbs").html("");
				}
				var thumb_url = blocket.apps.view.params["ais_thumb_" + index];
				var original_url = blocket.apps.view.params["ais_image_" + index].replace('images_full', 'original');

				var $thumb = $('<img />').attr('src', thumb_url)
					.attr("id", "fs_thumb_" + index).addClass("thumb preload_" + index + "");
				var $link = $('<a />').addClass("thumb_link")
					.attr("href", original_url).attr("id", "thumb_link_" + index).append($thumb);
				$('#fs_thumbs').append($('<li />').addClass("thumb_element").append($link));
				index++;
			}
			blocket.apps.view.enter_bostad_fullscreen.cache = true;
		}

		$("#fs_thumbs img").removeClass("transparent");
		var selected_index = (blocket.apps.view.params.ais_index === undefined ||
				blocket.apps.view.params.ais_index === null) ? 0 : blocket.apps.view.params.ais_index;

		$("#fs_thumbs #fs_thumb_" + selected_index).addClass("transparent");

		if (blocket.apps.view.params.ais_original !== undefined) {
			$("#fs_thumbs").show();
			$('#thumbs').hide();
		}

		blocket.apps.view.enter_fullscreen(t);
		blocket.apps.view.full_screen_play_button();
	},

	preload_fullscreen_images : function (thumb_id_prefix, offset_thumb_number, number_of_images_to_preload) {
		"use strict";
		var preloaded_images = [];

		var current_thumb_number = offset_thumb_number;
		for (var i = 0; i < number_of_images_to_preload; i++) {
			current_thumb_number += i;
			var next_img = $(thumb_id_prefix + "_" + current_thumb_number);

			if (next_img.length > 0) {
				var img_to_preload = new Image();
				img_to_preload.src = next_img.attr("src").replace('thumbs', 'original');

				preloaded_images.push(img_to_preload);
			}
		}
		return preloaded_images;
	},

	onFullScreenChange : function () {
		"use strict";
		var media_container = document.getElementById('media_container');
		var main_image = jQuery("#main_image");
		var media = jQuery("#media");
		var thumb_to_click;
		if (blocket.apps.view.isFullScreen()) {

			if (blocket.apps.view.params.ais_original !== undefined) {
				$("#fs_thumbs").show();
				$('#thumbs').hide();
			}

			if (!$('#main_image').is(':visible')) {
				blocket.apps.view.hide_video();
			}

			blocket.apps.view.full_screen_play_button();

			var height = window.innerHeight - jQuery('#thumbs')[0].offsetHeight;
			media.attr("style", "line-height: " + height + "px;");
			main_image.attr("style", "max-height: " + height + "px;");
			main_image[0].src = jQuery(media_container).find('img.image_next')[0].src.replace('images_full', 'original');
			blocket.apps.view.preload_fullscreen_images(".preload", 1, 1);

			jQuery(media_container).find('.thumb_link').each(function () {
				this.href = this.href.replace('images_full', 'original');
			});

			//Bind key events
			$(document).unbind("keyup.fullscreen");
			$(document).bind("keyup.fullscreen", function (e) {
				if (e.keyCode === 37) { //Left
					thumb_to_click = $("img.transparent:visible").parents("li").prev(".thumb_element");
					if (thumb_to_click.length === 0) { //Make circled
						thumb_to_click = $(".thumb_element:visible:last");
					}
					thumb_to_click.find(".thumb_link").click();

				} else if (e.keyCode === 39) { //Right
					thumb_to_click = $("img.transparent:visible").parents("li").next(".thumb_element");
					if (thumb_to_click.length === 0) { //Make circled
						thumb_to_click = $(".thumb_element:visible:first");
					}
					thumb_to_click.find(".thumb_link").click();
				}
			});

			blocket.apps.view.light_up();
		} else {

			if (blocket.apps.view.params.ais_original !== undefined) {
				$("#fs_thumbs").hide();
				$('#thumbs').show();
			}

			if (!$('#main_image').is(':visible')) {
				blocket.apps.view.show_video();
			}

			blocket.apps.view.full_screen_play_button();

			//Work around for images without image data.
			if (blocket.apps.view.fullscreen_params.store_attr) {
				media.attr("style", blocket.apps.view.fullscreen_params.store_attr);
			} else {
				media.removeAttr("style");
			}
			main_image.attr("style", blocket.apps.view.fullscreen_params.img_max_height);
			main_image[0].src = jQuery(media_container).find('img.image_next')[0].src.replace('original', 'images_full');
			jQuery(media_container).find('.thumb_link').each(function () {
				this.href = this.href.replace('original', 'images_full');
			});
			jQuery(".top_items iframe").removeClass("outside_screen");
			jQuery("#right_bar_campaigns").removeClass("outside_screen");

			//Unbind key events
			$(document).unbind("keyup.fullscreen");
		}
	},

	light_up : function () {
		"use strict";
		jQuery("#media").show();
	}
});
