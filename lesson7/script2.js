var mail = document.getElementById("mail");
mail.addEventListener("keydown", function(e) {
  var chars = e.key;
  var value = this.value;
  var reg = /[a-zA-Z0-9\.\-\_@a-z0-9\-\_*\.a-z]/;
  if (!chars.match(reg)) {
    e.preventDefault();
  }
  if (value.match(/@/) && chars=="@") {
    e.preventDefault();
  }
  if (value[value.length-1]=="." && chars==".") {
    e.preventDefault();
  }
  if (value.length==0 && +(chars)) {
    e.preventDefault();
  }
});

