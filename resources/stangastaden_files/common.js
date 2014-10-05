/*
________________________________________
¤¤¤ Common: Template byBrick™ ¤¤¤
¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/

/*
 * runOnLoad.js: portable registration for onload event handlers.
 * 
 * This module defines a single runOnLoad() function for portably registering
 * functions that can be safely invoked only when the document is fully loaded
 * and the DOM is available.
 *
 * Functions registered with runOnLoad() will not be passed any arguments when
 * invoked. They will not be invoked as a method of any meaningful object, and
 * the this keyword should not be used.  Functions registered with runOnLoad()
 * will be invoked in the order in which they were registered.  There is no
 * way to deregister a function once it has been passed to runOnLoad().
 *
 * In old browsers that do not support addEventListener() or attachEvent(),
 * this function relies on the DOM Level 0 window.onload property and will not
 * work correctly when used in documents that set the onload attribute
 * of their <body> or <frameset> tags.
 */
function runOnLoad(f) {
    if (runOnLoad.loaded) f();    // If already loaded, just invoke f() now.
    else runOnLoad.funcs.push(f); // Otherwise, store it for later
}

runOnLoad.funcs = []; // The array of functions to call when the document loads
runOnLoad.loaded = false; // The functions have not been run yet.

// Run all registered functions in the order in which they were registered.
// It is safe to call runOnLoad.run() more than once: invocations after the
// first do nothing. It is safe for an initialization function to call
// runOnLoad() to register another function.
runOnLoad.run = function() {
    if (runOnLoad.loaded) return;  // If we've already run, do nothing

    for(var i = 0; i < runOnLoad.funcs.length; i++) {
        try { runOnLoad.funcs[i](); }
        catch(e) { /* An exception in one function shouldn't stop the rest */ }
    }
    
    runOnLoad.loaded = true; // Remember that we've already run once.
    delete runOnLoad.funcs;  // But don't remember the functions themselves.
    delete runOnLoad.run;    // And forget about this function too!
};

// Register runOnLoad.run() as the onload event handler for the window
if (window.addEventListener)
    window.addEventListener("load", runOnLoad.run, false);
else if (window.attachEvent) window.attachEvent("onload", runOnLoad.run);
else window.onload = runOnLoad.run;




runOnLoad(function(){ //fix for FireFox; when <img-tags doesn't have width and height set the "$(document).ready(function(){" will run before the images are loaded
	
	/*if($("div.???").size() > 0){ 
		setTimeout('fixHtml()', 1000);
	}
	else {*/
		fixHtml();
	//}
	
});	


function fixHtml() {
	$(this).fixBoxAlert();
	
}

//fix alert box width
jQuery.fn.fixBoxAlert = function()
{
	if($(".boxAlert").size() > 0){
		
		$(".boxAlert").each(function(){
			var iBoxWidth = $(this).width();
			var iTextContinerWidth = $(this).children(".icon").children("div").width();
			if(iTextContinerWidth) {
				var iHorizontalPadding = (iBoxWidth - iTextContinerWidth)/2;
				$(this).css("padding-left", iHorizontalPadding + "px");
				//$(this).css("padding-right", iHorizontalPadding + "px");
			}
		});
	}
}





$(document).ready(function(){
	//style fix
	if(jQuery.browser.safari) {
		$("#content").attr("class", $("#content").attr("class") + " safari");
		$("#page").attr("class", $("#page").attr("class") + " safari");
		$("#startpage").attr("class", $("#startpage").attr("class") + " safari");
		//$("table.search .btn_default").parent("td").width("35px");
	}
	/*
	$.browser.addSelectors("#content");
	$.browser.addSelectors("#page");
	$.browser.addSelectors("#startpage");
	*/
	
	$(".faq a").click(function(){
		$(".faq .faq_answer").hide();
		$(this).next().show();
		$(this).fixSubNav();
	});
	
	//add input button image end
	$("input.btn_default").after('<div class="btn_default_end"></div><div class="clear"></div>');
	//add width to input button container to make sure that the button image end doesn't wrap
	if($("#startpage input.btn_default").parent(".btnContainer").size() < 1){	//not on startpage
		$("input.btn_default").parent(".btnContainer").each(function(){
			var iBtnWidth = $(this).width();
			if($(this).children(".btn_default_end").size() > 0){
				iBtnWidth += $(this).children(".btn_default_end").width();
				$(this).css("width",  iBtnWidth + 'px');
			}
		});
	}
	
	//fix login top
	if($(".iframetop #msgBoxLoginAlert").size() >  0){
		var msgLogin = $("#msgBoxLoginAlert").html();
		if(msgLogin.length > 0){
			alert(msgLogin);
		}
	}
	if($(".iframetop .loginContainer").size() >  0){
		var strUsernameDefaultValue = "Personnummer";
		var strPasswordDefaultValue = "PIN-kod";
		$(".iframetop .loginContainer input[type='text']").attr("title", strUsernameDefaultValue);
		$(".iframetop .loginContainer input[type='text']").attr("value", strUsernameDefaultValue);
		$(".iframetop .loginContainer input[type='text']").focus(function(){
			if(this.value == strUsernameDefaultValue){this.value='';}
		});
		$(".iframetop .loginContainer input[type='text']").blur(function(){
			if(this.value == ''){this.value = strUsernameDefaultValue;}
		});
		$(".iframetop .loginContainer input[type='password']").attr("title", strPasswordDefaultValue);
		//$(".iframetop .loginContainer input[type='password']").attr("value", strPasswordDefaultValue);
	}
	
	
	//------------------------------------------------------------
	//syncronize frames depending on logged in or logged out mode
	//------------------------------------------------------------
	var bDevServer = (document.location.href.indexOf("fast2.se") > -1);
if(bDevServer){
	//login button onclick event
	$(".iframetop .loginContainer input[type='submit']").click(function(){
		if(parent.setCheckIframeTopLoggedin){
			parent.setCheckIframeTopLoggedin();
		}
	});
	$(".defaultLogin .loginContainer input[type='submit']").click(function(){
		if(parent.setCheckIframeLoggedin){
			parent.setCheckIframeLoggedin();
		}
	});

	
	
	if(bDevServer) {
		if(parent.fixIframeLoggedin){
			parent.fixIframeLoggedin(false);
		}
	}
	
	//logout button onclick event
	$("#custom_userinfo.iframetop a").click(function(){
		if(parent.setCheckIframeTopLoggedout){
			parent.setCheckIframeTopLoggedout();
		}
	});
	$("#custom_userinfo.defaultLogout a").click(function(){
		if(parent.setCheckIframeLoggedout){
			parent.setCheckIframeLoggedout();
		}
	});
	if(bDevServer) {
		if(parent.fixIframeLoggedout){
			parent.fixIframeLoggedout();
		}
	}
}
	//------------------------------------------------------------

});



function closeMsg(objMsg){
  if(objMsg){ objMsg.style.display = 'none'; }
}

var newWin;
var previousURL;
var previousWinName
function OpenWindow(URL,Width,Height,scrollbars,winname,resizable){
	if(scrollbars == "yes" || scrollbars == "1"){
	  scrollbars = "yes"
  }
  else{
	  scrollbars = "no"
  }
  if(resizable == "yes" || resizable == "1"){
	  resizable = "yes"
  }
  else{
	  resizable = "no"
  }
  
  if (!newWin || newWin.closed || winname != previousWinName){
		var winParams = 'toolbar=0,scrollbars='+scrollbars+',status=no,resizable='+resizable;
		if(Width.length > 0 && !isNaN(Width) && Height.length > 0 && !isNaN(Height)){
			if(parseInt(Width) > 0 && parseInt(Height) > 0){
				winParams += ',width='+Width+',height='+Height;
			}
		}
		newWin = window.open(URL,winname,winParams);
			
		previousURL = URL;
		if (!newWin.opener){
			newWin.opener = window;
		}
	}
	else if(URL != previousURL){
		newWin.location.href = URL;
		newWin.focus();
		previousURL = URL;
	}
	else {
		newWin.focus();
	}
	
	previousWinName = winname
}


function getForm(){
	for(var i=0; i < document.forms.length; i++){
		if(document.forms[i]){
			if(document.forms[i].name.indexOf('j_id') > -1){
				return document.forms[i];
			}
		}
	}
	
	return document.forms[0];
}

function getFirstChildByName(obj, childName){
	var objChildHierarchy = obj;
	for(var i=0; i < 10; i++){ //max depth 10
		objChildHierarchy = objChildHierarchy.firstChild;
		if(objChildHierarchy){
			if(objChildHierarchy.name && objChildHierarchy.name.indexOf(childName) > -1){
				return objChildHierarchy;
			}
		}
		else {
			break;
		}
	}
	
	return null;
}





function showAltTextF2K(objName, txt, bToggleHideShowSelecteBoxes){
	var objAltMsg = document.getElementById(objName);
	if(objAltMsg){
		objAltMsg.innerHTML = txt;
		objAltMsg.style.width = '150px';
		if(txt.length > 100){
			objAltMsg.style.width = '150px';
		}
		objAltMsg.style.display = "block";
		if(bToggleHideShowSelecteBoxes){
			toggleHideShowAllSelectBoxesF2K(false);
		}
	}
}


function hideAltTextF2K(objName){
	var objAltMsg = document.getElementById(objName);
	if(objAltMsg){
		objAltMsg.style.display = "none";
		toggleHideShowAllSelectBoxesF2K(true);
	}
}

function toggleHideShowAllSelectBoxesF2K(bShow){
	var appName = navigator.appName;
	if(appName.indexOf("Microsoft") > -1){
		var i = 0;
	  var selectObjects = document.getElementsByTagName("select")
	  if(selectObjects){
	  	for(var i=0; i < selectObjects.length; i++){
	  		if(selectObjects[i].type == "select-one"){
					if(bShow){  			
		  			selectObjects[i].style.visibility = "visible";
		  		}
		  		else {
		  			selectObjects[i].style.visibility = "hidden";
		  		}
	  		}
	  	}
	  }
  }
}

function showAltTextForceWidth(objName, txt, boxWidth){
	var objAltMsg = document.getElementById(objName);
	if(objAltMsg){
		if (txt.length > 0) {
			objAltMsg.innerHTML = txt;
		}
		
		objAltMsg.style.width = boxWidth.toString() + 'px';
		objAltMsg.style.display = "block";
	}
}

var strMaxWidth = 0;
function showAltText(objName, txt){
	var objAltMsg = document.getElementById(objName);
	if(objAltMsg){
		if (txt.length > 0) {
			objAltMsg.innerHTML = txt;
		}
		else {
		  txt = objAltMsg.innerHTML;
		}
		
		if(strMaxWidth.length > 0 && !isNaN(strMaxWidth)){
			objAltMsg.style.width = strMaxWidth + 'px';
		}
		else {
			objAltMsg.style.width = '200px';
			if(txt.length > 100){
				objAltMsg.style.width = '400px';
			}
		}
		objAltMsg.style.display = "block";
	}
}



function hideAltText(objName){
	var objAltMsg = document.getElementById(objName);
	if(objAltMsg){
		objAltMsg.style.display = "none";
	}
}

function listProperties(obj, strFind){
  var i = 0;
  var msg = "";
  for(itm in obj){
    if(i > 50){
      alert(msg);
      i = 0;
      msg = "";
    }	
		if(strFind.length > 0){
			if(itm.toLowerCase().indexOf(strFind.toLowerCase()) > -1){	//search for lower case part of item name
				msg += itm + "\n";	
				i++;
			}
		}
		else {
			msg += itm + "\n";	
			i++;
		}

  }
  alert(msg);
}

// Checks to see if a required radio input is checked.
function getCheckedRadio(objField){
	// is there any input-tag in the document named row, 
	// e.g. is there any radiobuttons named row?
	var checkedValue = "";
	if(objField){
		// if radio buttons has a length it's an array, ...
		if (!isNaN(objField.length)){
			for (var i = 0; i < objField.length; i++) {
				if (objField[i].checked){
					checkedValue = objField[i].value;
					break;
				}
			}
		}
		// ... else it's a variable (only one radiobutton named row has been made)
		else{
			if (objField.checked){
				//radio button is checked		
				checkedValue = objField.value;
			}
		}
	}
	return checkedValue;
}


 var prevThemePic = -1;
 function ThemePic() {
	/* IMAGES IS LOADED ON defatul.htm */
	/*var aThemes = new Array(2);
            aThemes[0]= 'images/pic_page_start_theme1a.jpg';
            aThemes[1]= 'images/pic_page_start_theme1a.jpg';*/
    if(prevThemePic == -1){
		RndPic = Math.floor(Math.random()*aThemes.length);
	}
	else{
		RndPic = prevThemePic + 1;
		if(RndPic >= aThemes.length) { RndPic = 0;}
	}
	var objThemePicHolder = document.getElementById("themePicHolder")
	if (objThemePicHolder){
		objThemePicHolder.style.backgroundImage = "url(" + aThemes[RndPic] + ")";
	}
	prevThemePic = RndPic;
	
	if(iLoadNextPictureAfterSec > 0){
		LoadThemePic();
	}
}

function LoadThemePic() {
	setTimeout('ThemePic()', iLoadNextPictureAfterSec*1000);
}


function unescapeXmlText(str){
	// å: unescape("%E5")
	// ä: unescape("%E4")
	// ö: unescape("%F6")
	// Å: unescape("%C5")
	// Ä: unescape("%C4")
	// Ö: unescape("%D6")
	
	str = str.replace(/&#229;/g, unescape("%E5"));
	str = str.replace(/&#228;/g, unescape("%E4"));
	str = str.replace(/&#246;/g, unescape("%F6"));
	str = str.replace(/&#197;/g, unescape("%C5"));
	str = str.replace(/&#196;/g, unescape("%C4"));
	str = str.replace(/&#214;/g, unescape("%D6"));
	return str;
}