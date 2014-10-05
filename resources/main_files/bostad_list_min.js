blocket("@apps.bostad_list").extend({
	getAutoCompleteSelector : function () {
		"use strict";
		return "#searchform-place  #searchtext";
	},
	onReady : function () {
		"use strict";

		// Disable the Län option in dropdown
		$("select[name=w]").find("option[value=00]").attr("disabled", "disabled");

		// Save edited adwatch
		$("#save-watch-edit").click(function (e) {
			e.preventDefault();
			$(this).closest("form").submit();
		});

		var promises = {};

		// Initialize autocomplete
		promises.autocomplete = new RSVP.Promise(function (resolve) {
			// Populate autocomplete
			var searchTokens = [];
			$(blocket.apps.bostad_list.getAutoCompleteSelector()).find("option").each(function () {
				var $this = $(this);
				searchTokens.push($this.val());
				$this.remove();
			});
			blocket.apps.bostad_list.initSearch(blocket.apps.bostad_list.getAutoCompleteSelector(), searchTokens);
			resolve();
		});

		// Initialize cg multiselect
		promises.cg = new RSVP.Promise(function (resolve) {
			var isUthyres = $(".type_u_b, .type_u").length === 1;
			$("#cg").multiselect({
				buttonContainer: "<span class=\"btn-group category-multiselect-container searchform-dropdown\" />",
				nonSelectedText: "alla typer av objekt",
				onChange: function (element, checked) {
					var values = $("#cg").val() || [];
					$("input[type=hidden][name=cg]").val("3000");

					// Grey out other options if we are selecting Utland or sometimes Fritidsboende
					var selected = $(element).val();
					if (selected === "3080" || (isUthyres && selected === "3040")) {
						if (checked) {
							// Close multiselect
							$(".category-multiselect-container").removeClass("open");

							// Deselect all other values
							$("input[type=hidden][name=cg]").val(selected);
							var other = _.without(values, selected);
							this.deselect(other);
							blocket.apps.bostad_list.grey_other_categories(true, selected);
							blocket.apps.bostad_list.clearAutocomplete($(blocket.apps.bostad_list.getAutoCompleteSelector()));
						} else {
							//
							blocket.apps.bostad_list.grey_other_categories(false, selected);
							blocket.apps.bostad_list.clearAutocomplete($(blocket.apps.bostad_list.getAutoCompleteSelector()));
						}
					} else {
						this.deselect("3080");
						if (isUthyres) {
							this.deselect("3040");
						}
						blocket.apps.bostad_list.grey_other_categories(false);

						// When deselecting category 3080, remove all tags
						if (_.indexOf(values, "3080") !== -1) {
							blocket.apps.bostad_list.clearAutocomplete($(blocket.apps.bostad_list.getAutoCompleteSelector()));
						}
					}
					blocket.apps.bostad_list.update_autocomplete_placeholder();
					blocket.apps.bostad_list.on_after_category_changed(true);
				},
				buttonText: blocket.apps.bostad_common.default_button_text_callback
			});

			// See if utland is selected at page load
			var values = $("#cg").val();
			if (_.contains(values, "3080") || (isUthyres && _.contains(values, "3040"))) {
				blocket.apps.bostad_list.grey_other_categories(true, values[0]);
			}
			blocket.apps.bostad_list.update_autocomplete_placeholder();

			// Fix other select boxes
			$("select[name=w]").multiselect({
				nonSelectedText: "V&auml;lj plats",
				buttonContainer: "<span class=\"btn-group w-multiselect-container searchform-dropdown\" />",
				buttonText: blocket.apps.bostad_common.default_button_text_callback
			}).removeAttr("disabled")
				.removeAttr("onchange")
				.change(blocket.apps.bostad_list.on_search_expanded_change);
			blocket.apps.bostad_list.build_region_select();

			$("select[name=co]").removeAttr("disabled").multiselect({
				nonSelectedText: "V&auml;lj land",
				buttonContainer: "<span class=\"btn-group co-multiselect-container searchform-dropdown\" />",
				buttonText: blocket.apps.bostad_common.default_button_text_callback
			});//.change(blocket.apps.bostad_list.on_search_expanded_change);

			resolve();
		});

		// Initialize filters
		$(".featurebox_col").each(function () {
			var $this = $(this);
			var sync = $this.hasClass("sync");

			// See what kind of featurebox this is
			if ($this.find(".active select").length === 2) {
				$this.find(".content").RangeSelect({
					min: $this.find(".active select:first"),
					max: $this.find(".active select:last"),
					onChange: function (value) {
						blocket.apps.bostad_common.featurebox_interval_onchange($this, value);

						if (sync) {
							blocket.apps.bostad_common.featurebox_sync($this, value);
						}
					}
				});

			}
			else if ($this.find(".active select").length === 1) {
				$this.find(".content").RangeSelect({
					max: $this.find(".active select:first"),
					onChange: function (value) {
						blocket.apps.bostad_common.featurebox_single_onchange($this, value);

						if (sync) {
							blocket.apps.bostad_common.featurebox_sync($this, value);
						}
					}
				});
			}

			blocket.apps.bostad_common.bind_featurebox_open($this);
		});

		$(".more-filters").click(function () {
			$(this).closest(".searchform-filters").next().toggle();
			// Close all open dropdowns
			$("html").click();
			return false;
		});

		$("#search-form select[name=w]").change(blocket.apps.bostad_list.update_form_region_info);

		// Initialize text search
		blocket.apps.bostad_list.bind_searchtext($(".q_featurebox"));

		$("#bostad_singleselect, #bostad_multiselect").removeClass("hide");
		blocket.apps.bostad_list.on_after_category_changed(false);

		// Wait for promises before showing search form
		RSVP.hash(promises).then(function () {
			$("#searchform-place").addClass("open");
		})["catch"](function (e) {
			console.log("Could not load search form", e);
		});

		// Bind search form callback
		$("#search_form").on("submit", blocket.apps.bostad_common.banner_hide);

		// Lazy load images
		blocket.apps.bostad_list.lazyload();

		blocket.apps.bostad_list.init_easyads();

		if (blocket.params.calendar) {
			blocket.apps.bostad_list.bind_week_calendar(false);
			blocket.apps.bostad_list.populate_week_calendar();
		}
	},

	update_autocomplete_placeholder: function () {
		"use strict";
		var values = $("#cg").val();
		var $ph = $(".bootstrap-tagsinput input:text");
		var $select = $(blocket.apps.bostad_list.getAutoCompleteSelector());
		var name = _.contains(values, "3080") ? "countries" : "places";
		$ph.attr("placeholder", $select.attr("data-placeholder-" + name));
		$ph.attr("size", $ph.attr("placeholder").length);
	},

	update_form_region_info: function () {
		"use strict";

		// *sigh* back to the old shit of handling w,r,m,as :)
		$("input[type=hidden].auto-build").remove();
		var places = $("select[name=place]").val();
		if (places) {
			_.each(places, function (place) {
				var hidden = $("<input/>").attr("type", "hidden").addClass("auto-build");
				if (place.indexOf("_") > -1) {
					hidden.attr("name", "as").val(place);
				} else {
					hidden.attr("name", "m").val(place);
				}
				$("form").append(hidden);
			});
		}
	},

	on_search_expanded_change: function () {
		"use strict";

		blocket.apps.bostad_list.update_form_region_info();

		var cg = $("#cg").val() || [];
		if (cg.length > 0) {
			cg = cg[0];
		}
		var w = parseInt($("select[name=w]").val());
		var reg = $("input[name=ca]").val();
		if (reg.indexOf("_") !== -1) {
			reg = reg.substring(0, reg.indexOf("_"));
		}
		var data = {
			w: isNaN(w) ? 0 : w,
			reg: w >= 100 ? w - 100 : reg,
			cg: cg
		};
		var last_w = (cg === "3080") ? -1 : w;
		$("#bostad_singleselect, #bostad_multiselect").load("/bostad_multiselect.html #searcharea_region_multiselect", data, function () {
			blocket.apps.bostad_list.build_region_select();
			blocket.apps.bostad_list.update_form_region_info();
			window.blocket_searchbox_last_w = last_w;
		});
		$(".w-multiselect-container").removeClass("open");
	},

	build_region_select: function () {
		"use strict";
		var region = $("#searcharea_region_multiselect");
		region.multiselect({
			nonSelectedText: region.attr("name") === "co" ? "V&auml;lj land" : "V&auml;lj plats",
			buttonContainer: "<span class=\"btn-group region-multiselect-container searchform-dropdown\" />",
			buttonText: blocket.apps.bostad_common.default_button_text_callback
		}).change(blocket.apps.bostad_list.update_form_region_info);
		$("select[name=w]").multiselect("enable");
	},

	bind_searchtext: function ($featurebox) {
		"use strict";
		var $input = $featurebox.find(".q");
		$input.change(function () {
			var query = $(this).val();
			var $p = $featurebox.find("p:first");
			if (query.length === 0) {
				$p.text($input.attr("placeholder")).removeClass("selected");
			} else {
				$p.text(query).addClass("selected");
			}
			$("input[name=q]").val(query);
		});

		$featurebox.find(".reset").click(function () {
			$input.val("");
			$input.trigger("change");
		});

		$input.trigger("change");
	},

	bind_week_calendar: function (rows_only) {
		"use strict";

		var $wc = $('.week_calendar');
		if (rows_only !== true) {
			$wc.find('.awc_month_text').unbind('click').click(blocket.apps.bostad_list.week_calendar_heading_click);
			$wc.find('.reset').unbind('click').click(blocket.apps.bostad_list.week_calendar_reset);
		}
		$wc.find('.awc_table tr.awc_select, .awc_table tr.awc_selected').unbind('click').click(blocket.apps.bostad_list.week_calendar_select_row);
	},

	base32: {
		// public method for decoding
		decode : function (input) {
			"use strict";

			var output = "",
				characters = [],
				encodedCharacters = [],
				keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ2345670";

			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			for (var i = 0; i < input.length;) {
				encodedCharacters[0] = keyStr.indexOf(input.charAt(i++));
				encodedCharacters[1] = keyStr.indexOf(input.charAt(i++));
				encodedCharacters[2] = keyStr.indexOf(input.charAt(i++));
				encodedCharacters[3] = keyStr.indexOf(input.charAt(i++));
				encodedCharacters[4] = keyStr.indexOf(input.charAt(i++));
				encodedCharacters[5] = keyStr.indexOf(input.charAt(i++));
				encodedCharacters[6] = keyStr.indexOf(input.charAt(i++));
				encodedCharacters[7] = keyStr.indexOf(input.charAt(i++));

				characters[0] = (encodedCharacters[0] << 3) | (encodedCharacters[1] >> 2);
				characters[1] = ((encodedCharacters[1] & 3) << 6) | (encodedCharacters[2] << 1) | (encodedCharacters[3] >> 4);
				characters[2] = ((encodedCharacters[3] & 15) << 4) | (encodedCharacters[4] >> 1);
				characters[3] = ((encodedCharacters[4] & 1) << 7) | (encodedCharacters[5] << 2) | (encodedCharacters[6] >> 3);
				characters[4] = ((encodedCharacters[6] & 7) << 5) | encodedCharacters[7];

				output += String.fromCharCode(characters[0]);

				if (encodedCharacters[2] !== 32) {
					output += String.fromCharCode(characters[1]);
				}
				if (encodedCharacters[4] !== 32) {
					output += String.fromCharCode(characters[2]);
				}
				if (encodedCharacters[5] !== 32) {
					output += String.fromCharCode(characters[3]);
				}
				if (encodedCharacters[7] !== 32) {
					output += String.fromCharCode(characters[4]);
				}
			}

			return output;

		}
	},

	base64: {
		decode : function (input) {
			"use strict";
			var keyStr = "ABCDEFGHIJKLMNOP" +
						"QRSTUVWXYZabcdef" +
						"ghijklmnopqrstuv" +
						"wxyz0123456789-_" +
						",";

			var output = "";
			var chr1, chr2, chr3 = "";
			var enc1, enc2, enc3, enc4 = "";
			var i = 0;

			// remove all characters that are not A-Z, a-z, 0-9, +, /, or =
			var base64test = /[^A-Za-z0-9\-*_]/g;
			if (base64test.exec(input)) {
				alert("There were invalid base64 characters in the input text.\n" +
						"Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
						"Expect errors in decoding.");
			}
			input = input.replace(/[^A-Za-z0-9\-_]/g, "");

			do {
				enc1 = keyStr.indexOf(input.charAt(i++));
				enc2 = keyStr.indexOf(input.charAt(i++));
				enc3 = keyStr.indexOf(input.charAt(i++));
				enc4 = keyStr.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 !== 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 !== 64) {
					output = output + String.fromCharCode(chr3);
				}

				chr1 = chr2 = chr3 = "";
				enc1 = enc2 = enc3 = enc4 = "";

			} while (i < input.length);

			return output;
		}
	},

	initSearch: function (ref, search) {
		"use strict";

		/*
		 * Tomas Malmer's dirty hacks. Turns an autocomplete token from 
		 * a search engine friendly string to something human readable.
		 *
		 * Returns an array with all the parts of the search token.
		 * The first part is the type of the result returned, and the following
		 * fields are parts of the location (street, municipality, etc.)
		 */
		function decode(datum) {
			var prefix = datum.val[0],
				token = datum.val.substring(1);

			if (prefix === "1") {
				return blocket.apps.bostad_list.base64.decode(token).split("|");
			} else {
				return blocket.apps.bostad_list.base32.decode(token).split("|");
			}
		}

		/*
		 * Turns a decoded token into a human-friendly string.
		 */
		function displayEncodedStr(token) {
			var data = decode(token);
			if (data[0] === "s") {
				return data[2] + ", " + data[3];
			} else {
				return data[2];
			}
		}

		/*
		 * Translates a token type into a human-friendly string
		 */
		function translateTokenType(tokenType) {
			switch (tokenType) {
				case "s":
					return "gata";
				case "c":
					return "stad";
				case "p":
					return "f&ouml;rsamling";
				case "co":
					return "l&auml;n";
				case "m":
					return "kommun";
				case "a":
					return "omr&aring;de";
				case "country":
					return "land";
			}
		}

		/*
		 * Adds a tag to the tag input.
		 */
		function acAddTag(tagsSelect) {
			return function (obj, token) {
				tagsSelect.tagsinput("add", {"value": token.val, "text": displayEncodedStr(token), "valid": true});
				tagsSelect.tagsinput("input").typeahead("close");
			};
		}

		function getAutoCompleteUrl(url, query) {
			var cg = parseInt($("input[type=hidden][name=cg]").val(), 10);

			url = url.replace("%QUERY", query);

			if (cg === 3080) {
				url += "&type=country";
			}

			return url;
		}

		/*
		 * Auto-suggestion engine.
		 */
		var engine = new Bloodhound({
			name: "areas",
			remote: {
				url: blocket.bconf.bostad.autocomplete.url + "?q=%QUERY",
				replace: getAutoCompleteUrl,
				filter: function (response) {
					// https://github.com/twitter/typeahead.js/issues/785
					return $.map(response, function (value) {
						return { val: value };
					});
				}
			},
			datumTokenizer: function (d) {
				return Bloodhound.tokenizers.whitespace(d.val);
			},
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			limit: blocket.bconf.bostad.autocomplete.suggestion_limit
		});

		// initialize the bloodhound suggestion engine
		engine.initialize();

		// Set up bindings for adding tags
		var $tagsSelect = $(ref);
		var addTag = acAddTag($tagsSelect);

		$tagsSelect.tagsinput({
			tagClass: function (item) {
				return item.valid ? "label label-success" : "label label-danger label-important";
			},
			itemValue: "value",
			itemText: function (item) {
				return item.text;
			},
			maxTags: blocket.bconf.bostad.autocomplete.tag_limit
		});

		$tagsSelect.tagsinput("input").typeahead({
				autoselect: true,
				highlight: true,
				hint: false
			}, {
				source: engine.ttAdapter(),
				templates: {
					suggestion: function (searchToken) {
						var token = decode(searchToken),
							type = translateTokenType(token[0]),
							html = "<span class='suggestion-name'>" + token[2] + "</span>";

						if (token[3]) {
							html += " <span class='suggestion-subtitle'>" + token[3] + "</span>";
						}

						if (type) {
							html += "<span class='suggestion-type'>" + type + "</span>";
						}

						return html;
					},
					empty: function () {
						return "<span class='empty'>Inga resultat hittades</span>";
					},
					footer: Handlebars.templates.autocompleteFooter
				}
			}).on("typeahead:selected", addTag);

		// Add tags from the regular text input to the tag field.
		for (var i =  0; i < search.length; i++) {
			$tagsSelect.tagsinput("add", {"value": search[i], "text": displayEncodedStr({val: search[i]}), "valid": true});
		}

		// Prevent form submit on enter in auto complete field.
		$("#searchform-place .tt-input").keypress(function (event) { return event.keyCode !== 13; });
	},

	clearAutocomplete: function ($tagsinput) {
		"use strict";

		$tagsinput.tagsinput("removeAll");
	},

	grey_other_categories : function (grey, selected) {
		"use strict";

		$(".category-multiselect-container .multiselect-container li:not(.value-" + selected + ")").toggleClass("disabled", grey);
	},

	on_after_category_changed : function (triggerPlaceChange) {
		"use strict";

		// Update form and form container classes to reflect selected categories
		var place = $("#searchform-place");
		var form = place.closest("form");
		$(".category-multiselect-container li").each(function () {
			var $this = $(this);
			place.toggleClass($this.attr("class"), $this.hasClass("active"));
			form.toggleClass($this.attr("class"), $this.hasClass("active"));
		});

		// Disable all filters not currently visible and enable all visible
		$(".filter-container:visible").find(".active select").removeAttr("disabled");
		$(".filter-container").not(":visible").find(".active select").attr("disabled", "disabled");

		// Trigger a change
		if (triggerPlaceChange) {
			blocket.apps.bostad_list.on_search_expanded_change();
		}
	},

	lazyload : function () {
		"use strict";
		new window.Blazy({
			successClass: "lazyloaded",
			selector: ".lazyload",
			src: "data-src"
		});
	},

	"get_banner_ad_params" : function () {
		"use strict";
		var $ads = $("#item_list .item_row"),
			params = {"lkfs": []};

		$ads.each(function () {
			params.lkfs = _.union(params.lkfs, $(this).attr("data-lkf").split(","));
		});

		return params;
	},

	"get_banner_url_params" : function (src, params) {
		"use strict";
		// Get params to set on iframe
		var url_params = blocket.apps.bostad_common.url_params_to_object(src);
		url_params = blocket.apps.bostad_common.merge(params, url_params);

		if (url_params.length === 0) {
			return;
		}

		// Create new URL for iframe
		var url = src.split("?")[0].split("#")[0];
		url += blocket.apps.bostad_common.object_to_query_string(url_params, "?");

		return url;
	},

	"create_easyads_iframe" : function () {
		"use strict";
		var banner_ad_params = blocket.apps.bostad_list.get_banner_ad_params();
		$(".easyads_iframe").each(function () {
			var src = $(this).attr("data-src");
			var iframe_id = $(this).attr("id") + "_iframe";
			$("<iframe src='" + blocket.apps.bostad_list.get_banner_url_params(src, banner_ad_params) + "' id='" + iframe_id + "' frameborder='0' marginheight='0' marginwidth='0' scrolling='no' ></iframe>").appendTo(this);
		});
	},

	"init_easyads" : function () {
		"use strict";
		blocket.apps.bostad_list.create_easyads_iframe();
	},

	week_calendar_select_row : function () {
		"use strict";

		if (typeof(blocket.apps.bostad_list.calendar_selected_weeks) === 'undefined') {
			blocket.apps.bostad_list.calendar_selected_weeks = {};
		}

		var $row = $(this);
		var weekkey = $row.attr('week');
		var $weekrows = $('.week_calendar tr[week="' + weekkey + '"]');

		if ($row.hasClass('awc_selected')) {
			$weekrows.removeClass('awc_selected').addClass('awc_select');
			delete blocket.apps.bostad_list.calendar_selected_weeks[weekkey];
		} else {
			$weekrows.addClass('awc_selected').removeClass('awc_select');
			blocket.apps.bostad_list.calendar_selected_weeks[weekkey] = true;
		}

			/* IE8 will "forget" to display the tick mark when we show it, this
			 * will force the browser to refresh */
		var need_refresh_workaround = blocket.common.BrowserDetect.isValid([{agent : 'Explorer', version : '8.0'}], true);
		if (need_refresh_workaround) {
			var element = $row.get(0);
			var disp = element.style.visibility;

			element.style.visibility = 'hidden';

			setTimeout(function () {
				element.style.visibility = disp;
			}, 1);
		}
		blocket.apps.bostad_list.week_calendar_update_filter();
	},

	week_calendar_reset : function () {
		"use strict";

		var d = new Date();

		blocket.params.calendar.calendar_year = d.getFullYear();
		blocket.params.calendar.calendar_month = d.getMonth() + 1;

		if (typeof(blocket.apps.bostad_list.calendar_selected_weeks) !== 'undefined') {
			delete blocket.apps.bostad_list.calendar_selected_weeks;
			blocket.apps.bostad_list.week_calendar_update_filter();
		}
		blocket.apps.bostad_list.week_calendar_update();
	},

	week_calendar_heading_click : function (ev) {
		"use strict";

		var $div  = $(this);
		var canoffset = $div.offset();
		var x = ev.clientX + document.body.scrollLeft + this.scrollLeft - Math.floor(canoffset.left);
		var w = this.offsetWidth;

		if (x > w / 2) {
			if ($div.find('.awc_arrow_right').is(':visible')) {
				blocket.apps.bostad_list.calendar_next_month(ev);
			}
		} else {
			if ($div.find('.awc_arrow_left').is(':visible')) {
				blocket.apps.bostad_list.calendar_prev_month(ev);
			}
		}
	},

	calendar_next_month : function () {
		"use strict";
		if (blocket.params.calendar.calendar_month >= 12) {
			blocket.params.calendar.calendar_year++;
			blocket.params.calendar.calendar_month = 1;
		} else {
			blocket.params.calendar.calendar_month++;
		}
		blocket.apps.bostad_list.week_calendar_update();
	},

	calendar_prev_month : function () {
		"use strict";
		if (blocket.params.calendar.calendar_month <= 1) {
			blocket.params.calendar.calendar_year--;
			blocket.params.calendar.calendar_month = 12;
		} else {
			blocket.params.calendar.calendar_month--;
		}
		blocket.apps.bostad_list.week_calendar_update();
	},

		/* FIXME, Should be in common */
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

	week_calendar_update : function () {
		"use strict";

		var currentd = new Date();
		var currentweek = currentd.getWeek(1);
		var currentyear = currentd.getFullYear();

		var d = new Date();

		d.setFullYear(blocket.params.calendar.calendar_year, blocket.params.calendar.calendar_month - 1, 1);
		var week = d.getWeek(1);
		var wday = d.getDay();
		var dim = blocket.apps.bostad_list.days_in_month(blocket.params.calendar.calendar_year, blocket.params.calendar.calendar_month);

		$('.awc_month_name_long').text(month_long_names[d.getMonth()]);

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

		var rowtemplate = $('.awc_table tr.awc_week').first().clone();
		$('.awc_table tr.awc_week').remove();

		for (var i = 0; i < weekstoshow; i++) {
			var year = d.getFullYear();
			if (d.getMonth() + 1 === 12 && week === 1) {
				year += 1;
			}

			var new_row = rowtemplate.clone();
			var selected_key = year + ':' + (week < 10 ? '0' : '') + String(week);
			var is_selected = false;
			if (typeof(blocket.apps.bostad_list.calendar_selected_weeks) !== 'undefined' &&
					blocket.apps.bostad_list.calendar_selected_weeks.hasOwnProperty(selected_key) &&
					blocket.apps.bostad_list.calendar_selected_weeks[selected_key] === true) {
				is_selected = true;
			}

			new_row.find('.week_number').text(week);
			new_row.attr('week', selected_key);

			var selectable = true;
			if (year <= currentyear && week < currentweek) {
				selectable = false;
			}

			if (is_selected) {
				new_row.addClass('awc_selected').removeClass('awc_select');
			} else {
				new_row.removeClass('awc_selected');

				if (selectable) {
					new_row.addClass('awc_select');
				} else {
					new_row.removeClass('awc_select');
				}
			}

			for (var dnum = 0; dnum < 7; dnum++) {
				var td = new_row.find('td:nth-child(' + (dnum + 2) + ')');

				if (dnum > 0) {
					d.setDate(d.getDate() + 1);
				}
				td.text(d.getDate());
			}

			d.setDate(d.getDate() + 1);
			if (d.getMonth() + 1 === 1 && d.getDate() <= 4 || (d.getMonth() + 1 === 12 && d.getDate() >= 29)) {
				week = 1;
			} else {
				week++;
			}
			$('.awc_table').append(new_row);
		}

		blocket.apps.bostad_list.bind_week_calendar(true);

		if (blocket.params.calendar.calendar_year === blocket.params.calendar.min_year &&
			blocket.params.calendar.calendar_month === blocket.params.calendar.min_month) {

			$('.awc_arrow_left').addClass('hidden');
		} else {
			$('.awc_arrow_left').removeClass('hidden');
		}

		var next_month = blocket.params.calendar.calendar_month + 1;
		if (next_month === 13) {
			next_month = 1;
		}

		if (blocket.params.calendar.calendar_year === blocket.params.calendar.min_year + 1 &&
				next_month === blocket.params.calendar.min_month) {

			$('.awc_arrow_right').addClass('hidden');
		} else {
			$('.awc_arrow_right').removeClass('hidden');
		}

		return false;
	},

	week_calendar_update_filter : function () {
		"use strict";

		var weekstr;
		var $wc = $('.week_calendar');
		var $wcp = $wc.find('p');
		var $form = $('#search_form');

		$form.find('input[name=wk]').remove();
		if (typeof(blocket.apps.bostad_list.calendar_selected_weeks) !== 'undefined') {
			var weeks = [];
			var ordered_weeks = [];

			for (var prop in blocket.apps.bostad_list.calendar_selected_weeks) {
				if (blocket.apps.bostad_list.calendar_selected_weeks.hasOwnProperty(prop)) {
					ordered_weeks.push(prop);
				}
			}
				
			ordered_weeks.sort(function (a, b) {
				if (a.substr(0, 4) !== b.substr(0, 4)) {
					a = parseInt(a.substr(0, 4));
					b = parseInt(b.substr(0, 4));
				} else {
					a = parseInt(a.substr(5, 2));
					b = parseInt(b.substr(5, 2));
				}

				if (a < b) {
					return -1;
				} else if (a > b) {
					return 1;
				} else {
					return 0;
				}
			});

			if (ordered_weeks.length > 0) {
				var lastweek = '';
				var lastyear = '';
				for (var i in ordered_weeks) {
					if (blocket.apps.bostad_list.calendar_selected_weeks[ordered_weeks[i]] === true) {
						var yearweek = ordered_weeks[i];
						var week = yearweek.substr(5, 2);
						var year = yearweek.substr(0, 4);

						if (lastyear === year && lastweek === (parseInt(week) - 1)) {
							weeks[weeks.length - 1] = weeks[weeks.length - 1].substr(0, 2) + '-' + week;
						} else {
							weeks.push(week);
						}

						lastweek = parseInt(week);
						lastyear = year;

						var input = document.createElement('INPUT');
						input.type = 'hidden';
						input.value = lastweek;
						input.name = 'wk';
						$form.append(input);
					}
				}
				weekstr = 'v ' + weeks.join(', ');
			}
		}
		if (typeof(weekstr) === 'string') {
			$wcp.addClass('selected').text(weekstr);
		} else {
			$wcp.removeClass('selected').text('Alla');
		}
	},

	populate_week_calendar : function () {
		"use strict";

			/* All week numbers before ours is next year */
		var d = new Date();
		var week = d.getWeek(1);
		var year = d.getFullYear();

		blocket.apps.bostad_list.calendar_selected_weeks = {};
		$('#search_form input[name=wk]').each(function () {
			var tw = parseInt($(this).val());
			var key;
			if (tw < week) {
				key = (year + 1) + ':' + (tw < 10 ? '0' : '') + tw;
			} else {
				key = (year) + ':' + (tw < 10 ? '0' : '') + tw;
			}
			blocket.apps.bostad_list.calendar_selected_weeks[key] = true;
		});
		
		blocket.apps.bostad_list.week_calendar_update_filter();
		blocket.apps.bostad_list.week_calendar_update();
	}
});
