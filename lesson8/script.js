var karty = document.getElementById("karty");
var num_karts = 5;
for (var i=0;i<num_karts*2;i++){
	var karta = document.createElement("div");
	karta.classList.add("karty");
	karty.appendChild(karta);	
}	
var karts=[];
for (var i=0, j=1;i<num_karts*2;i+=2,j++){
	karts[i]="karta"+j;
	karts[i+1]="karta"+j;
}
	
for (var i=0;i<karty.children.length;i++){
	karty.children[i].classList.add(karts[i]);
}

var kart1;
var kart2;
var step=0;
var check=true; 
karty.addEventListener("click", function(e) {
  if (check==true) {
    e.target.classList.add("open_kart");
    step++;
    if (!kart2) {
      kart1=e.target;
      kart2=kart1;
    } else {
      kart1=kart2;
      kart2=e.target;
      check=false;
      if (kart1.classList[1] == kart2.classList[1]) {
        var timer=window.setTimeout(function() {
          kart1.remove();
          kart2.remove();
        }, 500);}
      if (step == 2) {
        var timer=window.setTimeout(function() {
          kart1.classList.remove("open_kart");
          kart2.classList.remove("open_kart");
          step=0;
          kart2=null;
          check=true;
        }, 500);}
    }
  }
});