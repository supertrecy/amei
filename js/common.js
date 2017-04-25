/**
 * @author yh
 * 
 * There are some common functions for all pages.
 * 
 */

var lang_switch = function() {
	var strUrl = window.location.href;
	var arrUrl = strUrl.split("/");
	var strPage = arrUrl[arrUrl.length - 1];
	var index = strPage.indexOf("cn_");
	var newPage = "";
	if (index === -1) {
		// page in En.
		if (strPage === "") {
			newPage = "cn_index.html";
		} else {
			newPage = "cn_" + strPage;
		}
	} else {

		newPage = strPage.substring(index + 3, strPage.length);
	}

	// alert(strPage); //for test!
	// alert(newPage); //for test!
	window.location.href = newPage;
}

$(document).ready(function() {
	$('.language-selector select').change(lang_switch);
});
