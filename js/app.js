/*
var lastScroll = 60;

window.onscroll = function (){
	var header = document.getElementsByTagName("header")[0];
	var navTitle = document.getElementsByClassName("nav-title")[0];
	var listItem = document.getElementsByClassName("menu-list-item");

	var scroll = window.pageYOffset || document.body.scrollTop;
	if(scroll > lastScroll){
		header.classList.add("header-scroll-active");
		navTitle.classList.add("navTitle-scroll");
	}else if(scroll > 750){
		for(var i = 0; i < listItem.length; i++){
			listItem[i].classList.add("active");
		}
	}else{
		header.classList.remove("header-scroll");
		navTitle.classList.remove("navTitle-scroll");
		for(var i = 0; i < listItem.length; i++){
			listItem[i].classList.add("active");
		}
	}

};

*/
