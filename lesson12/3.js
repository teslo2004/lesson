var news = document.getElementById("news");

function scrollNews(e){
    if (document.body.getBoundingClientRect().bottom < window.innerHeight + 100){
        loadNews();
    }}

function loadNews(){
    document.removeEventListener("scroll", scrollNews);

var xhr = new XMLHttpRequest();
xhr.open("GET", "news.html", true);
xhr.onload= function(){
    news.innerHTML += this.responseText;
    document.addEventListener("scroll", scrollNews);

}
xhr.send(null);
}


document.addEventListener("scroll",scrollNews);   
loadNews();