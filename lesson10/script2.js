var audio = document.getElementsByTagName("audio")[0];
var currentTime = document.getElementById("currentTime");
var duration = document.getElementById("duration");
var playBtn = document.getElementById("play");
playBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        playBtn.value = "pause"
    } else {
        audio.pause();
        playBtn.value = "play"
    }

    var stop = document.getElementById("stop");
    stop.addEventListener("click", function() {
        if (audio.played) {

            audio.pause();
            audio.currentTime = 0;
            playBtn.value = "play";
        }
    })
})

setInterval(function() {
    var c = Math.floor(audio.currentTime);
    audioSlider.value = c;
    currentTime.textContent = convertTime(c);
}, 500)

function convertTime(secs) {
    var min = Math.floor(secs / 60);
    var sec = secs % 60;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    return (min + ":" + sec);
}

setTimeout(function() {
    var d = Math.floor(audio.duration);
    audioSlider.setAttribute("max", d);
    duration.textContent = convertTime(d);
}, 500)

var audioSlider = document.getElementById("audioSlider");
audioSlider.addEventListener("change", function() {
    audio.currentTime = audioSlider.value;
    currentTime.textContent = convertTime(audio.currentTime);
})

var audioVolume = document.getElementById("audioVolume");
audioVolume.addEventListener("change", function() {
    audio.volume = audioVolume.value;
})

var offVol = document.getElementById("noVolume");
offVol.addEventListener("click", function() {
    if (audio.muted) {
        audio.muted = false;
        noVolume.value = "off";
    } else {
        audio.muted = true;
        noVolume.value = "on"
    }
})

var speedUp = document.getElementById("speedUp");
speedUp.addEventListener("click", function() {
    audio.playbackRate = 2;
})

var normal = document.getElementById("normal");
normal.addEventListener("click", function() {
    audio.playbackRate = 1;
})
var repeat = document.getElementById("repeat");
audio.addEventListener("ended", function() {
    if (!repeat.checked) {
        audio.pause();
        playBtn.value = "play";
    } else {
        audio.play();
        playBtn.value = "pause";
    }
})