document.addEventListener("contextmenu", function(e){
	e.preventDefault();
	var contextmenu = document.getElementById("contextMenu");
	contextmenu.style.display = "block";
	contextmenu.style.left = e.clientX +'px';
	contextmenu.style.top = e.clientY + 'px';
	if (parseInt(contextmenu.style.left)+contextmenu.offsetWidth>document.querySelector("html").clientWidth){
		contextmenu.style.left = parseInt(contextmenu.style.left) - contextmenu.offsetWidth + "px";
	}else
		contextmenu.style.left = parseInt(contextmenu.style.left) + "px";
	
	if (parseInt(contextmenu.style.top)+contextmenu.offsetHeight>document.querySelector("html").clientHeight){
		contextmenu.style.top = parseInt(contextmenu.style.top) - contextmenu.offsetHeight + "px";
	}else
		contextmenu.style.top = parseInt(contextmenu.style.top) + "px";

})

document.addEventListener("click", function(e){
	var contextmenu = document.getElementById("contextMenu");
	contextmenu.style.display = "none";
	
})

var contextmenu = document.getElementById("contextMenu");
contextmenu.addEventListener("click", function(e){
	e.stopPropagation();
})
