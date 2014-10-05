blocket("@apps.bostad_common").extend({
	onReady : function () {
		"use strict";

		$("input, textarea").not(".no-placeholder").placeholder();

		$("#bostad-logo a").on("click", blocket.apps.bostad_common.banner_show);

		$(".popover-only-blocket").popover({
			"template": "<div class='popover'><div class='arrow'></div><div class='popover-inner'><h3 class='popover-title' style='display: none;'></h3><div class='popover-content'><p></p></div></div></div>"
		});
	},

	banner_hide : function () {
		"use strict";
		blocket.common.setCookie("bostad_hide_list_banner", 1, 1, "/");
	},

	banner_show : function () {
		"use strict";
		blocket.common.deleteCookie("bostad_hide_list_banner", "/");
	},

	featurebox_single_onchange : function ($featurebox, value) {
		"use strict";
		if (value.max !== "") {
			var selected = [];
			$featurebox.find(".active select:first option:selected").each(function () {
				var $option = $(this);
				selected.push($option.text());
			});
			var maxText = selected.join(", ");
			if ($featurebox.attr("data-type") === "price") {
				maxText = blocket.apps.bostad_common.price_int_to_str(maxText);
			}
			value.max = maxText;
		}

		blocket.apps.bostad_common.featurebox_set_selected_value($featurebox, value.max);
	},

	featurebox_interval_onchange : function ($featurebox, value) {
		"use strict";
		var minText,
			maxText;
		if (value.min !== "") {
			minText = $featurebox.find(".active select:first option:selected").text();
			switch ($featurebox.attr("data-type")) {
				case "price":
					minText = blocket.apps.bostad_common.price_int_to_str(minText);
					break;
				case "rooms":
					minText = minText + " rum";
					break;
			}
			value.min = minText;
		}
		if (value.max !== "") {
			maxText = $featurebox.find(".active select:last option:selected").text();
			switch ($featurebox.attr("data-type")) {
				case "price":
					maxText = blocket.apps.bostad_common.price_int_to_str(maxText);
					break;
				case "rooms":
					maxText = maxText + " rum";
					break;
			}
			value.max = maxText;
		}
		blocket.apps.bostad_common.featurebox_set_selected_interval($featurebox, minText, maxText);
	},

	featurebox_sync : function ($featurebox, value) {
		"use strict";
		var syncType = $featurebox.attr("data-type");
		$(".featurebox_col." + syncType).not($featurebox).each(function () {
			var $this = $(this);
			var isInterval = $this.find(".active select").length === 2;
			$this.find(".active select:first").val($featurebox.find(".active select:first").val());
			$this.find(".active select:last").val($featurebox.find(".active select:last").val());
			if (isInterval) {
				blocket.apps.bostad_common.featurebox_interval_onchange($this, value);
			} else {
				blocket.apps.bostad_common.featurebox_single_onchange($this, value);
			}
		});
	},

	bind_featurebox_open: function ($featurebox) {
		"use strict";

		$("html").click(function () {
			$(".featurebox_col.open").removeClass("open").find(".content").hide();
		});

		$featurebox.find(".content").click(function (e) {
			e.stopPropagation();
		});

		$featurebox.click(function (e) {
			e.stopPropagation();
			// Close any other open featureboxes
			$(".featurebox_col.open").not(this).removeClass("open").find(".content").hide();

			// Open this one
			$(this).toggleClass("open").find(".content").toggle();
		});
	},

	price_int_to_str: function (price) {
		"use strict";
		// Strip everything except digits
		var priceStr = ("" + price).replace(/[^\d]/g, ""),
			p;
		if (parseInt(priceStr, 10) === 0) {
			return priceStr + " kr";
		} else if (priceStr.length >= 7) {
			// Million+
			p = ("" + parseInt(priceStr) / 1000000).replace(".", ",");
			return p + " mkr";
		} else {
			p = ("" + parseInt(priceStr) / 1000).replace(".", ",");
			return p + " tkr";
		}
	},

	concat_values_to_string: function (values) {
		"use strict";

		var text = "";
		if (values.length === 1) {
			text = values[0];
		} else if (values.length === 2) {
			text = values.join(" och ");
		} else if (values.length === 3) {
			text = values.join(", ");
		} else {
			var some = values.splice(0, 3);
			text = some.join(", ") + " +" + values.length + " till";
		}
		return text;
	},

	default_button_text_callback: function (options) {
		"use strict";
		var text = "";
		if (options.length === 0) {
			text = this.nonSelectedText;
		} else {
			var selected = [];
			options.each(function () {
				var label = ($(this).attr("label") !== undefined) ? $(this).attr("label") : $(this).html();
				selected.push(label);
			});
			text = blocket.apps.bostad_common.concat_values_to_string(selected);
		}
		return "<div class=\"selected-text\">" + text + "</div>";
	},

	featurebox_set_selected_interval: function ($featurebox, min, max) {
		"use strict";
		var $p = $featurebox.find("p");
		$p.attr("class", "");
		if (min && max) {
			$p.text(min + " - " + max);
			$p.addClass("selected");
		} else if (min) {
			$p.text("Min " + min);
			$p.addClass("selected");
		} else if (max) {
			$p.text("Max " + max);
			$p.addClass("selected");
		} else {
			$p.text("Alla");
		}
	},

	featurebox_set_selected_value: function ($featurebox, value) {
		"use strict";
		var $p = $featurebox.find("p");
		$p.attr("class", "");
		if (value) {
			$p.html("<span class='prefix'>Max</span> <span class='value'>" + value + "</span>");
			$p.addClass("selected");
		} else {
			$p.html("Alla");
		}
	},

	merge: function () {
		"use strict";
		var o = {};
		for (var i = arguments.length - 1; i >= 0; i --) {
			var s = arguments[i];

			for (var k in s) {
				if (s.hasOwnProperty(k)) {
					o[k] = s[k];
				}
			}
		}
		return o;
	},

	is_array : function (obj) {
		"use strict";
		return Object.prototype.toString.call(obj) === "[object Array]";
	},

	// This function name is like mysql_real_escape_string...
	decode_uri_component_working : function (s) {
		"use strict";
		s = s.replace(/%([0-9A-Fa-f]{2})%([0-9A-Fa-f]{2})%([0-9A-Fa-f]{2})/gi, function (code, hex1, hex2, hex3) {
				var n1 = parseInt(hex1, 16) - 0xE0;
				var n2 = parseInt(hex2, 16) - 0x80;
				if (n1 === 0 && n2 < 32) {
					return code;
				}
				var n3 = parseInt(hex3, 16) - 0x80;
				var n = (n1 << 12) + (n2 << 6) + n3;
				if (n > 0xFFFF) {
					return code;
				}
				return String.fromCharCode(n);
			});
		s = s.replace(/%([0-9A-Fa-f]{2})%([0-9A-Fa-f]{2})/gi, function (code, hex1, hex2) {
				var n1 = parseInt(hex1, 16) - 0xC0;
				if (n1 < 2) {
					return code;
				}
				var n2 = parseInt(hex2, 16) - 0x80;
				return String.fromCharCode((n1 << 6) + n2);
			});
		s = s.replace(/%([0-9A-Fa-f]{2})/gi, function (code, hex) {
				return String.fromCharCode(parseInt(hex, 16));
			});
		return s;
	},

	url_params_to_object : function (url) {
		"use strict";

		if (url.length === 0) {
			return {};
		}

		var result = {};

		if (url.indexOf("?") !== -1) {
			url = url.substr(url.indexOf("?") + 1);
		}

		var params = url.split("&");
		for (var i = 0; i < params.length; i++) {
			var keyVal = blocket.apps.bostad_common.decode_uri_component_working(params[i]).split("=");
			var key = keyVal[0];
			var value = keyVal[1];
			if (result.hasOwnProperty(key)) {
				// Take the old value and replace it with a list containing old and new value
				if (blocket.apps.bostad_common.is_array(result[key])) {
					result[key] = result[key].concat(value);
				} else {
					result[key] = [result[key], value];
				}
			} else {
				result[key] = value;
			}
		}
		return result;
	},

	object_to_query_string : function (obj, prefix) {
		"use strict";
		var str = [];
		prefix = (prefix) ? prefix : "";
		for (var p in obj) {
			if (obj.hasOwnProperty(p)) {
				if (typeof obj[p] === "object") {
					for (var n in obj[p]) {
						if (obj[p].hasOwnProperty(n)) {
							str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p][n]));
						}
					}
				} else {
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				}
			}
		}
		return prefix + str.join("&");
	},

	get_xiti_type : function () {
		"use strict";
		return xtpage.split("::")[1];
	},

	trigger_xiti_event : function (totalTag) {
		"use strict";
		xt_med("C", "28", totalTag, "A");
	},

	create_pageview_xiti_iframe : function () {
		"use strict";
		var cg = blocket.params.cg;

		// chain or store name
		var store_param = blocket.params.store_chain !== "" ? "store_chain" : "store_name";
		var store_value = store_param === "store_chain" ? blocket.params.store_chain : blocket.params.store_name;

		// actual iframe
		var xitiIframe = document.createElement("iframe");
		xitiIframe.src = "/iframe_xiti_tag.html?" + store_param + "=" + store_value + "&cg=" + cg;
		xitiIframe.width = "0";
		xitiIframe.height = "0";
		xitiIframe.scrolling = "no";
		xitiIframe.marginheight = "0";
		xitiIframe.marginwidth = "0";
		xitiIframe.frameborder = "0";
		xitiIframe.style = "visibility:hidden;display:none";
		document.getElementById("broker_contact_success").appendChild(xitiIframe);
	}
});
