var timer;
function down() {
if((window.innerHeight + window.pageYOffset) < document.documentElement.scrollHeight){ 
window.scrollBy(0,100); 
timer = setTimeout(down,200);
} 
else clearTimeout(timer); 
return false;
}
down();
