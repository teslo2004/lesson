var t;
function up() {
if((window.innerHeight + window.pageYOffset) < document.documentElement.scrollHeight){ 
window.scrollBy(0,100); 
t = setTimeout('up()',200);
} 
else clearTimeout(t); 
return false;
}
up();