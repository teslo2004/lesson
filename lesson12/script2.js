var txt = document.getElementById("txt");
var spin = document.getElementById("spin");
var launch = function(){
    var path = txt.value;
    var xhr = new XMLHttpRequest;
    xhr.open("GET", path, true);
    xhr.onload = function(){
        spin.innerHTML = this.responseText;
		};
    xhr.send();
    spin.innerHTML = "<img src='spin.gif'>";
    
}

var btn = document.getElementById("launch");
btn.addEventListener("click", launch);
