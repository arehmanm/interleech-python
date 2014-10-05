/*jshint bitwise: false*/
blocket("@apps.bostad_view").extend({
	onReady : function () {
		"use strict";

		// Add xiti tracking to links before anything else
		// so we dont care if another handler halts execution.
		blocket.apps.bostad_view.init_xiti();

		blocket(".carousel").apps.bostad_view.init_carousel();
		blocket.apps.bostad_view.collapse_ad_body_text();
		blocket.apps.bostad_view.init_contact_form();
		blocket.apps.bostad_view.init_view_menu();
		blocket.apps.bostad_view.init_final_price();
		blocket.apps.bostad_view.init_broker_callback();
		blocket.apps.bostad_view.init_broker_form();

		blocket("#save-item").apps.bostad_view.save_item_clicked();

		if (blocket.params.mplus !== undefined) {
			blocket.apps.bostad_view.checkHittaStreetview();
		}

		// Resize price to fill container
		$(".param-price").textfill({widthOnly: true, maxFontPixels: 128, minFontPixels: 20});

		// Lazy load image thumbnails
		blocket.apps.bostad_view.lazyload();

		blocket.apps.bostad_view.init_lightbox();
		blocket.apps.bostad_view.init_video();
		blocket.apps.bostad_view.init_phonenumber_link();
	},

	get_current_broker : function () {
		"use strict";
		return _.last(xtpage.split("::"));
	},

	is_partner : function () {
		"use strict";
		return parseInt($("#blocket_content > .view").attr("data-is-partner"), 10) === 1;
	},

	get_total_xiti_tag : function (params) {
		"use strict";
		return params.concat(blocket.apps.bostad_common.get_xiti_type(), this.get_current_broker()).join("::");
	},

	trigger_xiti_event_onclick : function ($element, totalTag, totalTagOnSend) {
		"use strict";
		$element.click(function () {
			xt_med("C", "28", totalTag, "A");
		});
		blocket.apps.bostad_view.set_xiti_event_on_contact_send(totalTagOnSend);
	},

	set_xiti_event_on_contact_send : function (tag) {
		"use strict";
		$("#ad-reply-form").attr("data-xiti", tag);
	},

	trigger_contact_send_xiti : function (defaultTag) {
		"use strict";
		var xiti = $("#ad-reply-form").attr("data-xiti");
		if (typeof xiti !== "undefined" && xiti !== "") {
			blocket.apps.bostad_common.trigger_xiti_event(xiti);
		} else {
			blocket.apps.bostad_common.trigger_xiti_event(defaultTag);
		}
	},

	init_xiti : function () {
		"use strict";
		this.trigger_xiti_event_onclick($("#js-broker-btn"), this.get_total_xiti_tag(["Leads", "Boka kostnadsfri vardering (open)"]), this.get_total_xiti_tag(["Leads", "Boka kostnadsfri vardering (send)"]));
		this.trigger_xiti_event_onclick($("#infopage_link"), this.get_total_xiti_tag(["Trafik maklare", "Las mer hos maklaren"]));
		this.trigger_xiti_event_onclick($("#link-abuse"), this.get_total_xiti_tag(["Ovriga funktioner", "Anmal annons"]));
		this.trigger_xiti_event_onclick($("a.broker-logo"), this.get_total_xiti_tag(["Ovriga funktioner", "Maklarloggan"]));
		this.trigger_xiti_event_onclick($("#view-menu-tellafriend"), this.get_total_xiti_tag(["Ovriga funktioner", "Tipsa en kompis (open)"]));
		this.trigger_xiti_event_onclick($("#link-share-fb"), this.get_total_xiti_tag(["Ovriga funktioner", "Dela pa Facebook"]));
		this.trigger_xiti_event_onclick($("#save-item"), this.get_total_xiti_tag(["Ovriga funktioner", "Spara som favorit"]));
		this.trigger_xiti_event_onclick($(".goto-map"), this.get_total_xiti_tag(["Ovriga funktioner", "Visa pa karta"]));
		this.trigger_xiti_event_onclick($("#floor-plan"), this.get_total_xiti_tag(["Ovriga funktioner", "Planlosning"]));
		this.trigger_xiti_event_onclick($("#edit-ad"), this.get_total_xiti_tag(["Ovriga funktioner", "Andra annons"]));
		this.trigger_xiti_event_onclick($("#all-images-partner"), this.get_total_xiti_tag(["Trafik maklare", "Alla bilder (partner)"]));
		this.trigger_xiti_event_onclick($("#all-images"), this.get_total_xiti_tag(["Ovriga funktioner", "Alla bilder (icke partner)"]));
		this.trigger_xiti_event_onclick($(".goto-all-images-partner"), this.get_total_xiti_tag(["Trafik maklare", "Visa alla XX bilder"]));
		this.trigger_xiti_event_onclick($(".goto-all-images"), this.get_total_xiti_tag(["Ovriga funktioner", "Visa alla XX bilder"]));
		this.trigger_xiti_event_onclick($(".store-box .goto-all-store-objects"), this.get_total_xiti_tag(["Ovriga funktioner", "Skyltfonster - Visa alla objekt fran butik"]));
		this.trigger_xiti_event_onclick($(".store-box .store-object"), this.get_total_xiti_tag(["Ovriga funktioner", "Skyltfonster - Objekt"]));
	},

	init_phonenumber_link : function () {
		"use strict";

		var $phonelink = $("#phonenumber-btn");
		if ($phonelink.length !== 0) {
			$phonelink.click(function () {
				var url = $(this).attr("data-href") + "&h=" + $(this).attr("data-phonehash");
				$.ajax({
					url: url,
					context: "html",
					success: function (data) {
						console.log(data);
						var $modal = $("#js-phonenumber-modal");
						$modal.modal("show");
						$modal.find(".modal-body").html(data);
					},
					error: function (err, textStatus, errorThrown) {
						console.log(err, textStatus, errorThrown);
					}
				});
				xt_med("C", "", "Visa_telefonnummer", "A");
				var self = blocket.apps.bostad_view;
				var common = blocket.apps.bostad_common;
				common.trigger_xiti_event(self.get_total_xiti_tag(["Ovriga funktioner", "Visa telefonnummer"]));
			});
		}
	},

	init_broker_form : function () {
		"use strict";
		var $bbtn = $("#js-broker-btn");
		if ($bbtn.length !== 0) {
			$bbtn.click(blocket.apps.bostad_view.broker_form_show_modal_broker);
		}
	},

	init_contact_form : function () {
		"use strict";
		var $cbtn_broker = $("#js-contact-btn");
		var $cbtn_private = $("#js-contact-btn-private");

		$(".js-tooltip").tooltip();

		if ($cbtn_broker.length !== 0) {
			$cbtn_broker.click(blocket.apps.bostad_view.contact_form_show_modal_broker);
		} else if ($cbtn_private.length !== 0) {
			$cbtn_private.click(blocket.apps.bostad_view.contact_form_show_modal_private);
		}
	},

	init_carousel : function () {
		"use strict";
		blocket.$.each(function () {
			var $carousel = $(this);
			$carousel.on("slide.bs.carousel", function (e) {
				var slideTo = $(e.relatedTarget).index();
				var self = blocket.apps.bostad_view;
				var common = blocket.apps.bostad_common;
				blocket.apps.bostad_view.set_current_page($carousel, slideTo);
				common.trigger_xiti_event(self.get_total_xiti_tag(["Ovriga funktioner", "Bildkarusellvaxlare"]));
			});

			$carousel.on("click", ".item.active.js-carousel-next", function () {
				$carousel.carousel("next");
			});

			blocket.apps.bostad_view.set_current_page($carousel, 0);
		});
	},

	init_lightbox : function () {
		"use strict";
		var selector = ".modal.lightbox";

		var stopSpinner = function ($ele) {
			var spinner = $ele.data("spinner");
			if (spinner) {
				$ele.data("spinner").stop();
			}
		};

		blocket.apps.bostad_view.lightbox_lazyloader = new window.Blazy({
			container: selector,
			successClass: "lazyloaded",
			selector: ".lazyload",
			src: "data-src",
			success: function (ele) {
				stopSpinner($(ele).parent());
			},
			error: function (ele) {
				stopSpinner($(ele).parent());
			}
		});

		//Display loading indicator
		$(selector).find("img.lazyload").parent().spin({
			lines: 11,
			length: 5,
			width: 5,
			radius: 15,
			color: "#f0f0f0",
			shadow: true,
			hwaccel: true,
			left: 0,
			top: 0
		});

		$("#blocket").on("click", selector, function (e) {
			var $target = $(e.target);
			if ($target.is("a") === false && $target.is("img") === false) {
				e.preventDefault();
				$(this).data("bs.modal").hide();
			}
		});

		$(".js-open-lightbox").click(function (e) {
			e.preventDefault();
			blocket.apps.bostad_view.open_lightbox($(this).attr("data-lightbox-selector"));
		});
	},

	init_video : function () {
		"use strict";
		$(".js-open-video").click(function (e) {
			e.preventDefault();
			var self = blocket.apps.bostad_view;
			var common = blocket.apps.bostad_common;
			common.trigger_xiti_event(self.get_total_xiti_tag(["Ovriga funktioner", "Spela film"]));
			blocket.apps.bostad_view.open_video_modal();
		});

		var $modal = $("#js-video-modal");
		$modal.on("hide.bs.modal", function () {
			// pause video
			var api = $(".flowplayer:first").data("flowplayer");
			if (api && !api.paused) {
				api.pause();
			}
		});
	},

	init_final_price : function () {
		"use strict";
		$("#final-price").click(blocket.apps.bostad_view.final_price_show_modal);
		$("#final-price-form").submit(function () {
			blocket.apps.bostad_view.final_price_form_submit_modal();
			return false;
		});
	},

	init_broker_callback : function () {
		"use strict";
		$("#js-callme").click(blocket.apps.bostad_view.broker_callback_show_modal);
		var $form = $("#broker-callback-form").submit(function () {
			blocket.apps.bostad_view.broker_callback_form_submit_modal();
			return false;
		});
		$form.find("#day").off("change").change(blocket.apps.bostad_view.broker_callback_update_times);
		$form.find("select").multiselect();
	},

	broker_callback_show_modal : function () {
		"use strict";
		var self = blocket.apps.bostad_view;
		var common = blocket.apps.bostad_common;
		self.clear_form_errors($("#broker-callback-form"));
		$("#js-modal-broker-callback").modal("show");
		self.broker_callback_update_times();
		common.trigger_xiti_event(self.get_total_xiti_tag(["Leads", "Bli uppringd (open)"]));
		return false;
	},

	final_price_show_modal : function () {
		"use strict";
		var self = blocket.apps.bostad_view;
		var common = blocket.apps.bostad_common;
		self.clear_form_errors($("#final-price-form"));
		$("#js-modal-final-price").modal("show");
		common.trigger_xiti_event(self.get_total_xiti_tag(["Leads", "Meddela mig slutpriset (open)"]));
		return false;
	},

	open_lightbox : function (selector) {
		"use strict";
		var $modal = $(selector).unbind().modal();

		$modal.on("shown.bs.modal", function () {
			// Force re-check of image visiblity for lazy loader
			blocket.apps.bostad_view.lightbox_lazyloader.revalidate();
		});

		return $modal;
	},

	lazyload : function () {
		"use strict";

		new window.Blazy({
			successClass: "lazyloaded",
			selector: ".lazyload",
			src: "data-src"
		});
	},

	set_current_page : function ($carousel, index) {
		"use strict";
		var tot = $carousel.attr("data-count");
		$carousel.find(".js-carousel-counter").text((index + 1) + " av " + tot);
	},

	clear_form_errors : function ($form) {
		"use strict";

		$form.find(".form-error").hide();
		$form.find(".form-group").removeClass("has-error");
	},

	set_form_errors : function ($form, response) {
		"use strict";
		for (var i in response) {
			if (i !== "status" && i !== "id") {
				$form.find(".err_" + i).show();
				$form.find(".err_" + i).addClass("error").text(response[i]);
				$form.find(".err_" + i).removeClass("hidden").closest(".form-group").addClass("has-error");
			}
		}
	},

	broker_callback_update_times: function () {
		"use strict";
		$.get("/vi/broker_callback_times_ajax.html?day=" + $("#day").val(), function (data) {
			var t = $("#time");
			t.children().remove();
			t.append($(data).find("option"));
			// If we dont get any valid times then that means that we are not able to choose Idag
			if ($("#time option").length === 0) {
				$("#day option:first").remove();
				blocket.apps.bostad_view.broker_callback_update_times();
			} else {
				t.val(t.find("option:first").val());
				t.multiselect("rebuild");
			}
		});
	},

	broker_callback_form_submit_modal : function () {
		"use strict";
		// Perform AJAX-post
		var self = blocket.apps.bostad_view;
		var $form = $("#broker-callback-form");
		self.clear_form_errors($form);
		$.ajax({
			url : "/vi/broker_callback_ajax.json",
			data : $form.serialize(),
			type : "post",
			dataType : "json",
			success : self.broker_callback_form_submit_modal_callback,
			error : function () {
				// Restore form
				blocket.apps.bostad_view.set_form_errors($form, {
					unknown: "Ett fel uppstod"
				});
			}
		});
	},

	final_price_form_submit_modal : function () {
		"use strict";
		var self = blocket.apps.bostad_view;
		$.ajax({
			url : "/send_ar_final_price",
			data : $("#final-price-form").serialize(),
			type : "post",
			dataType : "json",
			success : self.final_price_form_submit_modal_callback
		});
	},

	broker_callback_form_submit_modal_callback : function (response) {
		"use strict";
		var form = $("#js-modal-broker-callback");
		var self = blocket.apps.bostad_view;
		var common = blocket.apps.bostad_common;
		self.clear_form_errors(form);
		if (response.status === "OK") {
			form.modal("hide");
			$("#js-modal-final-price-success").modal("show");
			common.trigger_xiti_event(self.get_total_xiti_tag(["Leads", "Bli uppringd (Send)"]));
		} else if (response.status === "ERROR") {
			self.set_form_errors(form, response);
		}
	},

	final_price_form_submit_modal_callback : function (response) {
		"use strict";
		var form = $("#js-modal-final-price");
		var self = blocket.apps.bostad_view;
		var common = blocket.apps.bostad_common;
		self.clear_form_errors(form);
		if (response.status === "OK") {
			form.modal("hide");
			$("#js-modal-broker-callback-success").modal("show");
			common.trigger_xiti_event(self.get_total_xiti_tag(["Leads", "Meddela mig slutpriset (Send)"]));
		} else if (response.status === "ERROR") {
			self.set_form_errors(form, response);
		}
	},

	contact_form_reset_modal : function ($modal) {
		"use strict";
		if ($modal) {
			$modal.find("#contact-name").val("");
			$modal.find("#contact-email").val("");
			$modal.find("#contact-phone").val("");
			$modal.find(".modal-title").show();
			$modal.find('#ad-reply-safety-tip').hide();
			$modal.find("#ad-reply-success").hide();
			$modal.find("#ad-reply-intro-text").hide();
			$modal.find("#ad-reply-form").show();
			$modal.find(".has-error").removeClass("has-error");
			$modal.find(".form-error").text("");
			$modal.find("input[type=checkbox]").attr("checked", false);
		}
	},

	contact_form_show_modal_broker : function () {
		"use strict";
		var $modal = $("#js-contact-modal");
		var $that = $(this);

		function setText(text, element) {
			if (text && element.length !== 0) {
				element.text(text);
			}
		}

		if ($modal.length !== 0) {
			var self = blocket.apps.bostad_view;
			var common = blocket.apps.bostad_common;
			common.trigger_xiti_event(self.get_total_xiti_tag(["Leads", "Mejla maklaren (open)"]));
			self.set_xiti_event_on_contact_send(self.get_total_xiti_tag(["Leads", "Mejla maklaren (send)"]));
			blocket.apps.bostad_view.contact_form_reset_modal($modal);
			$modal.modal("show");

			setText($that.attr("data-header"), $modal.find(".js-broker.modal-title"));

			var $textarea = $("#js-contact-text");
			var $modal_textarea = $("#contact-body");
			if ($textarea.length !== 0 && $modal_textarea.length !== 0) {
				$modal_textarea.val($textarea.val());
			}

			var $mail_or_phone = $("#js-contact-mail");
			if ($mail_or_phone.length !== 0) {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			    if (re.test($mail_or_phone.val())) {
					var $modal_email = $("#contact-email");
					if ($modal_email.length !== 0) {
						$modal_email.val($mail_or_phone.val());
					}
				} else {
					re = /^[\d\+\(\) ]+$/;
					if (re.test($mail_or_phone.val())) {
						var $modal_phone = $("#contact-phone");
						if ($modal_phone.length !== 0) {
							$modal_phone.val($mail_or_phone.val());
						}
					}
				}
			}
			$modal.find("#contact-name").focus();
			blocket("#ad-reply-form").apps.bostad_view.contact_form_submit_modal();
			xt_med("C", "", "adreply_show_form", "A");
		}
	},

	broker_form_show_modal_broker : function () {
		"use strict";

		var $modal = $("#js-contact-modal");
		var $that = $(this);

		function setText(text, element) {
			if (text && element.length !== 0) {
				element.text(text);
			}
		}

		if ($modal.length !== 0) {
			blocket.apps.bostad_view.contact_form_reset_modal($modal);
			$modal.modal("show");
			$modal.find("#ad-reply-intro-text").show();

			setText($that.attr("data-header"), $modal.find(".js-broker.modal-title"));
			setText($that.attr("data-intro-text"), $modal.find("#ad-reply-intro-text p"));

			var text = $that.attr("data-text");
			var $modal_textarea = $("#contact-body");
			if (text && $modal_textarea.length !== 0) {
				$modal_textarea.val(text);
			}

			$modal.find("#contact-name").focus();
			blocket("#ad-reply-form").apps.bostad_view.contact_form_submit_modal();
			xt_med("C", "", "adreply_show_form", "A");
		}
	},

	contact_form_show_modal_private : function () {
		"use strict";
		var $modal = $("#js-contact-modal");
		if ($modal.length !== 0) {
			var self = blocket.apps.bostad_view;
			var common = blocket.apps.bostad_common;
			common.trigger_xiti_event(self.get_total_xiti_tag(["Ovriga funktioner", "Mejla annonsoren (open)"]));
			self.set_xiti_event_on_contact_send(self.get_total_xiti_tag(["Ovriga funktioner", "Mejla annonsoren (send)"]));
			blocket.apps.bostad_view.contact_form_reset_modal($modal);
			$modal.find('#ad-reply-safety-tip').show();
			$modal.modal("show");
			$modal.find("#contact-name").focus();
			blocket("#ad-reply-form").apps.bostad_view.contact_form_submit_modal();
		}
	},

	open_video_modal : function () {
		"use strict";
		var $modal = $("#js-video-modal");
		if ($modal.length !== 0) {
			$modal.modal("show");

			console.log($(this).attr("href"));
			//xt_med("C", "", "adreply_show_form", "A");

			var api = $(".flowplayer:first").data("flowplayer");
			if (api) {
				api.bind("fullscreen", function () {
					var $modal = $("#js-video-modal");
					$modal.addClass("fullscreen");
					return false;
				});
				api.bind("fullscreen-exit", function () {
					var $modal = $("#js-video-modal");
					$modal.removeClass("fullscreen");
				});
			}
		}
	},

	contact_form_hide_modal : function () {
		"use strict";
		var $modal = $("#js-contact-modal");
		if ($modal.length !== 0) {
			$modal.modal("hide");
		}
	},

	contact_form_submit_modal : function () {
		"use strict";
		blocket.$.submit(function () {
			// Perform AJAX-post
			$.ajax({
				url : "/send_ar",
				data : $(this).serialize(),
				type : "post",
				dataType : "json",
				success : blocket.apps.bostad_view.contact_form_callback_modal
			});
			return false;
		});
	},

	contact_form_callback_modal : function (response) {
		"use strict";
		if (response.status === "OK") {
			blocket.apps.bostad_view.trigger_contact_send_xiti("adreply_send_email");
			$("#ad-reply-form").hide();
			$("#ad-reply-success").show();
			$(".modal-title").hide();
			$("#ad-reply-intro-text").hide();

			// Add iframe with Xiti tag
			// category
			var cg = blocket.params.cg;

			// chain or store name
			var store_param = blocket.params.store_chain !== "" ? "store_chain" : "store_name";
			var store_value = store_param === "store_chain" ? blocket.params.store_chain : blocket.params.store_name;
			var xiti_src = "/iframe_xiti_tag.html?" + store_param + "=" + store_value + "&cg=" + cg;

			var $xiti_iframe = $("#xiti_iframe_modal");
			if ($xiti_iframe.length !== 0) {

				$xiti_iframe.attr("src", xiti_src);

			} else {

				var xitiIframe = document.createElement("iframe");
				xitiIframe.src = xiti_src;
				xitiIframe.id = "xiti_iframe_modal";
				xitiIframe.width = "0";
				xitiIframe.height = "0";
				xitiIframe.scrolling = "no";
				xitiIframe.marginheight = "0";
				xitiIframe.marginwidth = "0";
				xitiIframe.frameborder = "0";
				xitiIframe.style = "visibility:hidden;display:none";
				document.getElementById("ad-reply-success").appendChild(xitiIframe);

			}

			//Reset form
			$("#contact-body, #contact-name, #contact-phone, #contact-email").value("");

		} else if (response.status === "ERROR") {

			var i;
			var $modal = $("#js-contact-modal");
			// Reset error texts
			if ($modal.length !== 0) {
				$modal.find(".has-error").removeClass("has-error");
				$modal.find(".form-error").text("");
			}
			// Set error texts
			for (i in response) {
				if (i !== "status" && i !== "id" && i.indexOf(";") === -1) {
					var $field = $("#fg-contact-" + i);
					if ($field.length !== 0) {
						$field.addClass("has-error").find(".form-error").text(response[i]);
					}
				}
			}
		}
	},

	tellafriend_form_submit_modal : function (e) {
		"use strict";
		blocket.$.submit(function () {
			// Perform AJAX-post
			$.ajax({
				url : "/sendtip.htm",
				data : $(this).serialize(),
				type : "POST",
				dataType : "json",
				success : blocket.apps.bostad_view.tellafriend_form_callback_modal
			});
			return false;
		});
		e.preventDefault();
	},

	tellafriend_form_callback_modal : function (response) {
		"use strict";
		if (response.status === "TRANS_OK") {
			var self = blocket.apps.bostad_view;
			var common = blocket.apps.bostad_common;
			common.trigger_xiti_event(self.get_total_xiti_tag(["Ovriga funktioner", "Tipsa en kompis (send)"]));
			$("#tellafriend-form").hide();
			$("#tellafriend-success").show();
			$(".modal-title").hide();
			$("#js-tellafriend-modal .this-url").hide();

		} else {

			var i;
			var $modal = $("#js-tellafriend-modal");
			// Reset error texts
			if ($modal.length !== 0) {
				$modal.find(".has-error").removeClass("has-error");
				$modal.find(".form-error").text("");
			}
			// Set error texts
			for (i in response) {
				if (i !== "status" && i !== "id" && i.indexOf(";") === -1) {
					var $field = $("#fg-tellafriend-" + i);
					if ($field.length !== 0) {
						$field.addClass("has-error").find(".form-error").text(response[i]);
					}
				}
			}
		}
	},

	/**
	 * Only display a few lines of the ad body text by default.
	 */
	collapse_ad_body_text: function () {
		"use strict";
		var $bodytext = $(".body-broker .object-text");
		var toggled = false;
		$bodytext.readmore({
			maxHeight: 100,
			moreLink: "<a href='#' class='show-more'>+ Visa hela beskrivningen</a>",
			lessLink: "<a href='#' class='show-less'>- St&auml;ng</a>",
			afterToggle: function (trigger, element, expanded) {
				/* Scroll back to the top of the collapsed element if we've scrolled
				further down. */
				if (!toggled) {
					var self = blocket.apps.bostad_view;
					var common = blocket.apps.bostad_common;
					common.trigger_xiti_event(self.get_total_xiti_tag(["Ovriga funktioner", "Visa hela beskrivningen"]));
				}
				toggled = true;
				if (!expanded) {
					var elementTopOffset = element.offset().top;

					if (elementTopOffset < $("body").scrollTop()) {
						$("html, body").animate({
							scrollTop: elementTopOffset
						}, {
							duration: 300
						});
					}
				}
			}
		});
	},

	init_view_menu : function () {
		"use strict";
		var $tellafriend = $("#view-menu-tellafriend");
		if ($tellafriend.length !== 0) {
			$tellafriend.click(blocket.apps.bostad_view.tellafriend_form_show_modal);
		}
	},

	tellafriend_form_show_modal : function () {
		"use strict";

		var $modal = $("#js-tellafriend-modal");
		if ($modal.length !== 0) {
			var $name = $modal.find("#tellafriend-name");
			$name.val("");
			$modal.find("#tellafriend-email").val("");
			$modal.find("#tellafriend-receiver").val("");
			$modal.find("#tellafriend-body").val("");

			$modal.find(".modal-title").show();

			$modal.find("#tellafriend-success").hide();
			$modal.find("#tellafriend-form").show();
			$modal.find(".this-url").show();

			$modal.find(".has-error").removeClass("has-error");
			$modal.find(".form-error").text("");
			$modal.modal("show");
			$name.focus();

			blocket("#tellafriend-form").apps.bostad_view.tellafriend_form_submit_modal();
		}
	},

	save_item_clicked: function () {
		"use strict";
		blocket.$.each(function () {
			$(this).on("click", function (e) {
				e.preventDefault();

				var $element_clicked = $(this),
					$element_clicked_text = $element_clicked.find(".text"),
					list_id = blocket.params.list_id,
					save_callback_name = "save_" + blocket.params.list_id,
					remove_callback_name = "remove_" + blocket.params.list_id,
					save_url = mypages_base_url + "/konto/sparade/spara",
					remove_url = mypages_base_url + "/konto/sparade/ta_bort_json",
					isSaved = $element_clicked.hasClass("saved");

				$element_clicked.addClass("disabled");

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
							$element_clicked.addClass("saved");
							$element_clicked_text.text("Annons sparad");

							$element_clicked.popover({
								content: "Din annons har sparats!",
								placement: "bottom",
								trigger: "manual"
							}).popover("show");

							setTimeout(function () {
								$element_clicked.popover("hide");
							}, 2000);

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

								$element_clicked.find(".blocket-icon-heart").removeClass("blocket-icon-heart").addClass("blocket-icon-login");

								//Update the text
								$element_clicked_text.text(data.error_msg);

								//Update the URL of the link
								$element_clicked.attr("href", mypages_base_url + "/konto/sparade?list_id=" + list_id);

								//Add class to login button. Used in Selenium test
								$element_clicked.addClass("js-save-item-login");

								//Unbind click event
								$element_clicked.off("click");

								$(".nav_mypages").attr("href", mypages_base_url + "/konto/sparade?list_id=" + list_id);
							}
						}
					})
					.always(function () {
						$element_clicked.removeClass("disabled");
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
							$element_clicked.removeClass("saved");
							$element_clicked_text.text("Spara annons");
						}

						// @TODO Notifying the user if there's an error
					})
					.fail(function (jqXHR, textStatus, errorThrown) {
						console.log("Request failed:", jqXHR, textStatus, errorThrown);
					})
					.always(function () {
						$element_clicked.removeClass("disabled");
					});
				}
			});
		});
	},

	phonenumber_show_modal : function () {
							 
	},

	checkHittaStreetview : function () {
		"use strict";
		var hitta_url = "http://static.hitta.se/streetview/",
			map_url = "http://www.hitta.se/LargeMap.aspx?gatubild",
			$iframe = $("#broker-streetview-iframe"),
			normalized_string;

		var cleanupAddress = function (raw_input) {
			if (raw_input.hitta_streetview_address === undefined || raw_input.hitta_streetview_area === undefined) {
				return false;
			}

			var streetaddress = raw_input.hitta_streetview_address.split(",")[0],
				location_string = streetaddress + raw_input.hitta_streetview_area;

			return location_string
				.toLowerCase()
				.replace(/ /g, "")
				.replace(/\u00e4/gi, "ae")
				.replace(/\u00e5/gi, "oe")
				.replace(/\u00e6/gi, "oo")
				.replace(/\u00fc/gi, "uu")
				.replace(/\u00e9/gi, "ee");
		};


		normalized_string = cleanupAddress(blocket.params.mplus);

		if (!normalized_string) {
			return;
		}

		$.ajax({
			url: hitta_url + normalized_string,
			cache: true,
			dataType: "jsonp"
		})
		.then(function (result) {
			if (result.status === 1) {
				map_url += "&gvX=" + result.rt90north;
				map_url += "&gvY=" + result.rt90east;
				map_url += "&gvH=" + result.angle;
				map_url += "&toolbars=none&nomap=true";
				$iframe.attr("src", map_url);
				$iframe.fadeIn();
			} else if (result.error !== undefined) {
				$iframe.remove();
			}
		})
		.fail(function () {
			$iframe.remove();
		});
	},
});
