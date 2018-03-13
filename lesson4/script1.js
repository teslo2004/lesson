var timer;

var down = function() {
    window.scrollBy(0, 100);
    timer = setTimeout(down, 200);
}
clearTimeout(timer);


down();