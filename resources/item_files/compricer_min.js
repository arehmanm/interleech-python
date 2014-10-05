blocket("@apps.compricer").extend({
	onReady: function () {
		"use strict";

		if (typeof blocket.params.compricer_vi === "undefined") {
			return;
		}

		// Setup compricer tab clicking
		var tabs = $(".compricer_tab a").each(function () {
			$(this).click(function () {
				// Add impression tag
				var impressionSrc = $(this).attr("data-impression");
				$("#compricer_container img.impression").remove();
				$("#compricer_container").append($("<img/>").attr("src", impressionSrc).addClass("impression"));

				// Change tab states
				$(".compricer_tab.active").removeClass("active");
				$(this).closest(".compricer_tab").addClass("active");
				$(".compricer_tab_content").hide();
				$($(this).attr("href")).show();
				return false;
			});
		}).length;

		// Select a random tab at page load
		$(".compricer_tab a").eq(parseInt(Math.random() * tabs), 10).click();

		if (typeof blocket.params.compricer_vi.broadband !== "undefined") {
			blocket.apps.compricer.bind_elements_broadband(blocket.params.compricer_vi.broadband);
		}

		if (typeof blocket.params.compricer_vi.savings !== "undefined") {
			blocket.apps.compricer.bind_elements_savings(blocket.params.compricer_vi.savings);
		}

		if (typeof blocket.params.compricer_vi.object !== "undefined") {
			if (typeof blocket.params.compricer_vi.object.homeinsurance !== "undefined") {
				blocket.apps.compricer.bind_elements_insurance(blocket.params.compricer_vi.object.homeinsurance);
			}

			if (typeof blocket.params.compricer_vi.object.power !== "undefined") {
				blocket.apps.compricer.bind_elements_power(blocket.params.compricer_vi.object.power);
			}
		}
	},

	// Add thousand separator to numbers
	amount_prettify: function (amount) {
		"use strict";

		amount = Math.round(amount);
		return $.trim(/^(\d{1,3})(\d{3})?(\d{3})?(\d{3})?(\d{3})?$/.exec(amount).slice(1).join(" "));
	},

	bind_elements_broadband: function (broadband) {
		"use strict";

		var parent = $("#compricer-broadband");
		var url_prefix = "http://ads.aftonbladet.se/eas?camp=101807;ty=ct;EASLink=";

		var change_values = function () {
			var bb_speed = parent.find(".compricer_ui_slider").val();
			var button_url = url_prefix + "http://www.compricer.se/bredband/?domain=blocketbostad.compricer.se&utm_source=blocketbostad&utm_medium=partner&utm_content=blocketbostad_bredband&utm_campaign=blocketbostad_bredband&xtor=AD-500-[compricer]-[tf_blocketbostad_bostadsannons_1405]-[integration]-[blocket_bostad]-[blocketbostad_annons]-[15002]#mobileresult&contractlength=1&speed=" + bb_speed + "&subtype=private&defaultprovider=1&sortorder=monthlyfee";
			parent.find(".compricer_cta_button").attr("href", button_url);

			var mbit, height;
			switch (bb_speed) {
				case "1":
					mbit = "2";
					height = 83;
					break;
				case "2":
					mbit = "6";
					height = 83;
					break;
				case "3":
					mbit = "20";
					height = 83;
					break;
				case "4":
					mbit = "50";
					height = 113;
					break;
			}
			parent.find(".lowest_price").text(Math.round(broadband[mbit].min) + " kr / m\u00e5n");
			parent.find(".compricer_single_graph").animate({height : height});

			// Loop through providers array
			for (var key in broadband[mbit].top3) {
				if (broadband[mbit].top3.hasOwnProperty(key)) {
					parent.find(".compricer_link_" + key).find(".compricer_link_name").text(broadband[mbit].top3[key].name);
					parent.find(".compricer_link_" + key).find(".compricer_link_price").text(Math.round(broadband[mbit].top3[key].monthlyfee) + " kr/m\u00e5n");

					// If the url doesn"t have a ? we use ?, otherwise use & for domain parameter
					if (broadband[mbit].top3[key].url === "http://www.compricer.se/bredband/") {
						parent.find(".compricer_link_" + key).find("a").attr("href", url_prefix + broadband[mbit].top3[key].url + "?domain=blocketbostad.compricer.se");
					} else {
						parent.find(".compricer_link_" + key).find("a").attr("href", url_prefix + broadband[mbit].top3[key].url + "&domain=blocketbostad.compricer.se");
					}
				}
			}
		};

		parent.find(".compricer_ui_slider").noUiSlider({
			start: 2,
			step: 1,
			orientation: "vertical",
			direction: "rtl",
			range: {
				"min": 1,
				"max": 4
			},
			serialization: {
				format: {
					decimals: 0
				}
			}
		});

		// Set values depeding on slider value
		parent.find(".compricer_ui_slider").change(function () {
			change_values();
		});

		// Set the initial variables on load
		change_values();
	},

	bind_elements_savings: function (savings) {
		"use strict";

		var parent = $("#compricer-savings");
		var url_prefix = "http://ads.aftonbladet.se/eas?camp=101806;ty=ct;EASLink=";

		// Determine range for slider
		var range = [];
		for (var key in savings) {
			if (savings.hasOwnProperty(key)) {
				range.push(key);
			}
		}
		// Change slider direction
		range = range.sort(function (a, b) {return b - a; });

		// Determine percent move for each step
		var percent = [];
		var step = 100 / (range.length - 1);

		for (var i = step ; i < 100 - step ; i += step) {
			percent.push(i);
		}

		// Merge percentages and amounts in object (adding min and max manually)
		var slider_range = {"min" : parseInt(range[0])};
		for (i = 0 ; i < percent.length ; i++) {
			slider_range[percent[i] + "%"] = parseInt(range[i + 1], 10);
		}
		$.extend(slider_range, {"max" : parseInt(range[i + 1], 10)});

		var change_values = function () {
			var amount = parent.find(".compricer_ui_slider").val().replace(/ /g, ""); // Remove thousands separator
			var button_url = url_prefix + "http://www.compricer.se/sparande/?domain=blocketbostad.compricer.se&utm_source=blocketbostad&utm_medium=partner&utm_content=blocketbostad_sparkonto&utm_campaign=blocketbostad_sparkonto&xtor=AD-500-[compricer]-[tf_blocketbostad_bostadsannons_1405]-[integration]-[blocket_bostad]-[blocketbostad_annons]-[15002]#savingsresult&amount=" + amount + "&time=0&timetype=exact&sig=true&withdrawal=true";
			parent.find(".compricer_cta_button").attr("href", button_url);

			// Animate graph height
			// The graph can have a height between 22 and 122 px
			// The max savings amount is 46000, so the height is
			// determined as 22 + the percentage of savings from
			// 46000 multiplied by the remaining 100 px

			var graph_height = 22 + (savings[amount].max / 46000) * 100;
			parent.find(".compricer_single_graph").animate({height: graph_height});
			parent.find(".max_savings").text(blocket.apps.compricer.amount_prettify(savings[amount].max) + " kr / \u00e5r");

			amount = amount.toString();
			// Loop through providers array
			for (var key in savings[amount].top3) {
				if (savings[amount].top3.hasOwnProperty(key)) {
					parent.find(".compricer_link_" + key).find(".compricer_link_name").text(savings[amount].top3[key].name);
					parent.find(".compricer_link_" + key).find(".compricer_link_price").text(savings[amount].top3[key].rate.replace(".", ",") + "%");
					parent.find(".compricer_link_" + key).find("a").attr("href", url_prefix + savings[amount].top3[key].url + "&domain=blocketbostad.compricer.se");
				}
			}
		};

		var update_graph = function () {
			var amount = parent.find(".compricer_ui_slider").val();
			parent.find(".compricer_slider_values").find("div").text(amount + " kr");
			var top_value = parent.find(".noUi-origin").css("top");
			parent.find(".compricer_slider_values").find("div").stop(true, true).animate({top: top_value});
		};

		// Set values depeding on slider change
		parent.find(".compricer_ui_slider").change(function () {
			change_values();
			setTimeout(function () {update_graph(); }, 300);
		});

		// Set values while sliding
		parent.find(".compricer_ui_slider").on({
			slide: function () {
				update_graph();
			}
		});
		parent.find(".compricer_ui_slider").noUiSlider({
			start: -5500000,
			orientation: "vertical",
			range: slider_range,
			snap: true,
			serialization: {
				format: {
					decimals: 0,
					thousand: " "
				}
			}
		});

		// Set the initial variables on load
		change_values();
		update_graph();
	},

	bind_elements_insurance: function (homeinsurance) {
		"use strict";

		var parent = $("#compricer-insurance");
		var url_prefix = "http://ads.aftonbladet.se/eas?camp=101804;ty=ct;EASLink=";

		//var current_object = parent.find("input[name="list_id"]").attr("value");

		// Set are size
		parent.find(".compricer_sqm").text(homeinsurance.area);

		// Get min, max and range of price
		var min_max = [];
		for (var key in homeinsurance.age) {
			if (homeinsurance.age.hasOwnProperty(key)) {
				// Include allrisk if it exists
				if (homeinsurance.age[key].allrisk) {
					min_max.push(homeinsurance.age[key].allrisk);
				}
				min_max.push(homeinsurance.age[key].noallrisk);
			}
		}
		var min_price = Math.min.apply(Math, min_max);
		var max_price = Math.max.apply(Math, min_max);
		var price_span = max_price - min_price;

		var change_values = function () {
			var age = parent.find(".compricer_ui_slider").val();
			var age_val = null;
			switch (age) {
				case "1":
					age_val = "18-25";
					break;
				case "2":
					age_val = "26-35";
					break;
				case "3":
					age_val = "36-45";
					break;
				case "4":
					age_val = "46-55";
					break;
				case "5":
					age_val = "56+";
					break;
			}

			// Graph height varies between 40 and 122 px
			// Calculate height of graph depending on available prices
			// Check if "allrisk" exists in object, if not, remove it and make the other graph wider
			var graph_height_without_risk;
			if (!homeinsurance.age[age_val].allrisk) {
				parent.find(".compricer_price_with_risk").parent().hide();
				parent.find(".without_risk").css({ width : 106 });
				graph_height_without_risk = Math.round(40 + (homeinsurance.age[age_val].noallrisk - min_price) / price_span * 82);
				parent.find(".without_risk").animate({height : graph_height_without_risk});
				parent.find(".compricer_price_without_risk").text(blocket.apps.compricer.amount_prettify(homeinsurance.age[age_val].noallrisk) + " kr");
			} else {
				var graph_height_with_risk = Math.round(40 + (homeinsurance.age[age_val].allrisk - min_price) / price_span * 82);
				graph_height_without_risk = Math.round(40 + (homeinsurance.age[age_val].noallrisk - min_price) / price_span * 82);
				parent.find(".with_risk").animate({height : graph_height_with_risk});
				parent.find(".without_risk").animate({height : graph_height_without_risk});
				parent.find(".compricer_price_with_risk").text(blocket.apps.compricer.amount_prettify(homeinsurance.age[age_val].allrisk) + " kr");
				parent.find(".compricer_price_without_risk").text(blocket.apps.compricer.amount_prettify(homeinsurance.age[age_val].noallrisk) + " kr");
			}
		};

		// Set values depeding on slider value
		parent.find(".compricer_ui_slider").change(function () {
			change_values();
		});

		// Postal code validation
		var category = blocket.params.cg;
		if (category === "3020") {
			// Only check for Apartment, not for other categories
			parent.find(".compricer_cta_button").on("click", function (event) {
				parent.find(".error_box").hide();

				if (parent.find(".input_postal_code").val() === "" || parent.find(".input_postal_code").val().length < 5) {
					parent.find(".error_pc").show();

					event.preventDefault();
					return false;
				}

				var postal_code = parent.find(".input_postal_code").val();
				var button_url = url_prefix + "https://www.compricer.se/forsakring/hem/index.php?insuranceflatform=Step1&userzip=" + postal_code + "&domain=blocketbostad.compricer.se&utm_source=blocketbostad&utm_medium=partner&utm_content=blocketbostad_hemfsk&utm_campaign=blocketbostad_hemfsk#xtor=AD-500-[compricer]-[tf_blocketbostad_bostadsannons_1405]-[integration]-[blocket_bostad]-[blocketbostad_annons]-[15002]";
				parent.find(".compricer_cta_button").attr("href", button_url);
				parent.find(".compricer_cta_button").click();
				return false;
			});
		}

		// Variations depending on category
		var button_url;
		switch (category) {
			case "3020":
				//parent.find(".compricer_cta_button").text("J\u00e4mf\u00f6r hemf\u00f6rs\u00e4kring");
				parent.find(".compricer_house_type").text("l\u00e4genhet");
				break;
			case "3100":
			case "3120":
			case "3070":
				parent.find(".compricer_postal_code").hide();
				parent.find(".compricer_cta").css("margin-top", 66);
				//parent.find(".compricer_cta_button").text("J\u00e4mf\u00f6r villaf\u00f6rs\u00e4kring");
				button_url = url_prefix + "https://www.compricer.se/forsakring/villa/?domain=blocketbostad.compricer.se&utm_source=blocketbostad&utm_medium=partner&utm_content=blocketbostad_villafsk&utm_campaign=blocketbostad_villafsk#xtor=AD-500-[compricer]-[tf_blocketbostad_bostadsannons_1405]-[integration]-[blocket_bostad]-[blocketbostad_annons]-[15002]";
				parent.find(".compricer_cta_button").attr("href", button_url);
				parent.find(".compricer_house_type").text("villa");
				break;
			case "3040":
				parent.find(".compricer_postal_code").hide();
				parent.find(".compricer_cta").css("margin-top", 66);
				//parent.find(".compricer_cta_button").text("J\u00e4mf\u00f6r fritidshusf\u00f6rs\u00e4kring");
				button_url = url_prefix + "https://www.compricer.se/forsakring/fritidshus/?domain=blocketbostad.compricer.se&utm_source=blocketbostad&utm_medium=partner&utm_content=blocketbostad_fritidshusfsk&utm_campaign=blocketbostad_fritidshusfsk#xtor=AD-500-[compricer]-[tf_blocketbostad_bostadsannons_1405]-[integration]-[blocket_bostad]-[blocketbostad_annons]-[15002]";
				parent.find(".compricer_cta_button").attr("href", button_url);
				parent.find(".compricer_house_type").text("fritidshus");
				break;
		}

		// Make sure only numbers are allowed in the postal code input
		parent.find(".compricer_pc_input").on("keyup paste change", ".validate_number", function (e) {
			var numStr = e.target.value.replace(/\D/g, "");
			if (e.target.value !== numStr) { e.target.value = numStr; }
		});

		parent.find(".compricer_ui_slider").noUiSlider({
			start: 3,
			step: 1,
			orientation: "vertical",
			direction: "rtl",
			range: {
				"min": 1,
				"max": 5
			},
			serialization: {
				format: {
					decimals: 0
				}
			}
		});

		// Set the initial variables on load
		change_values();
	},

	bind_elements_power: function (power) {
		"use strict";

		var parent = $("#compricer-power");
		var power_type;
		var url_prefix = "http://ads.aftonbladet.se/eas?camp=101805;ty=ct;EASLink=";

		// Set area, powerusage, zipcode and city
		parent.find(".compricer_sqm").text(power.area);
		var powerusage = blocket.apps.compricer.amount_prettify(power.powerusage);
		parent.find(".compricer_powerusage").text(powerusage);

		// Get min, max and range of price
		var min_max = [];
		for (var key in power.type) {
			if (power.type.hasOwnProperty(key)) {
				min_max.push(power.type[key].min);
				min_max.push(power.type[key].max);
			}
		}
		var min_price = Math.min.apply(Math, min_max);
		var max_price = Math.max.apply(Math, min_max);
		var price_span = max_price - min_price;

		var change_values = function () {
			var type = parent.find(".compricer_ui_slider").val();
			var price_type;
			switch (type) {
				case "1":
					power_type = "variable";
					price_type = "R\u00f6rligt";
					break;
				case "2":
					power_type = "fixed";
					price_type = "Fast < 1 \u00e5r";
					break;
				case "3":
					power_type = "fixed";
					price_type = "Fast 1 \u00e5r";
					break;
				case "4":
					power_type = "fixed";
					price_type = "Fast 2 \u00e5r";
					break;
				case "5":
					power_type = "fixed";
					price_type = "Fast > 2 \u00e5r";
					break;
			}

			// Graph height varies between 22 and 122 px
			// Calculate height of graph depending on available prices
			var graph_height_cheap = Math.round(22 + (power.type[price_type].min - min_price) / price_span * 100);
			var graph_height_expensive = Math.round(22 + (power.type[price_type].max - min_price) / price_span * 100);
			parent.find(".cheap").animate({height : graph_height_cheap});
			parent.find(".expensive").animate({height : graph_height_expensive});
			parent.find(".compricer_price_cheap").text(blocket.apps.compricer.amount_prettify(power.type[price_type].min) + " kr");
			parent.find(".compricer_price_expensive").text(blocket.apps.compricer.amount_prettify(power.type[price_type].max) + " kr");
		};

		// Set values depeding on slider value
		parent.find(".compricer_ui_slider").change(function () {
			change_values();
		});

		parent.find(".compricer_ui_slider").noUiSlider({
			start: 3,
			step: 1,
			orientation: "vertical",
			direction: "rtl",
			range: {
				"min": 1,
				"max": 5
			},
			serialization: {
				format: {
					decimals: 0
				}
			}
		});

		// Set the initial variables on load
		change_values();

		// Postal code validation
		parent.find(".compricer_cta_button").on("click", function (event) {
			parent.find(".error_box").hide();

			if (parent.find(".input_postal_code").val() === "" || parent.find(".input_postal_code").val().length < 5) {
				parent.find(".error_pc").show();
				event.preventDefault();
				return false;
			}

			var postal_code = parent.find(".input_postal_code").val();
			var button_url = url_prefix + "https://www.compricer.se/el/jamfor_el/indexcoops.php?domain=blocketbostad.compricer.se=&userzip=" + postal_code + "&powertype=" + power_type + "&utm_source=blocketbostad&utm_medium=partner&utm_content=blocketbostad_el&utm_campaign=blocketbostad_el#xtor=AD-500-[compricer]-[tf_blocketbostad_bostadsannons_1405]-[integration]-[blocket_bostad]-[blocketbostad_annons]-[15002]";
			parent.find(".compricer_cta_button").attr("href", button_url);
		});

		// Make sure only numbers are allowed in the postal code input
		parent.find(".compricer_pc_input").on("keyup paste change", ".validate_number", function (e) {
			var numStr = e.target.value.replace(/\D/g, "");
			if (e.target.value !== numStr) { e.target.value = numStr; }
		});
	}
});
