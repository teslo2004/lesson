var container = document.getElementById("container");
var load = document.getElementById("load");
var txt = document.getElementById("txt");


var loadText = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "N.txt", true);
    xhr.addEventListener("load", function() {
        txt.value = this.responseText;
        var n = txt.value;
        var tbody = document.querySelector("tbody");

        var count = 1;
        for (var i = 0; i < n; i++) {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.innerHTML = count;
            tr.appendChild(td);
            for (var j = 0; j < n; j++) {
                var td = document.createElement("td");
                td.innerHTML = count * (j + 1);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
            count++;
        }
    })
    xhr.send();
}
load.addEventListener("click", loadText);