var reg = /\+\d{12}/g;
var str = "+3752531237443asdasjdalsjdlkjalsjd+3753111234567asdasd";
var res=str.match(reg);
//console.log(res)

var str1 = "adasd asddaa www.site.ru dasda http://www.mail.ru asdd tut.by https://www.onliner.by "
var reg1 = /(https{0,1}:\/\/){0,1}([\w\.]+)\.[a-z][a-z0-9\-\_]*\.[a-z]{2,10}/g;
var res1 = str1.match(reg1);
console.log(res1);

var str2 = "adasd ul.Lubimova d.1 kv.22 asddaa site.ru dasda https://www.mail.ru ul.Lenina d.4 kv.33asdd tut.by https://www.onliner.by "
var reg2 = /[ul.]{3}[A-Z][a-zA-Z]+\s[d.]{2}[0-9]+\s[kv.]{3}[0-9]+/gi;
var res2 = str2.match(reg2);
//console.log(res2);

var reg3 = /<[a-z]+>/gi;
var str3 = "<> <a> <1> <br> <B> input name <body <head>";
var res3=str3.match(reg3);
//console.log(res4)