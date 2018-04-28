var div = document.getElementById('container');
div.addEventListener('copy', function(e) {
    console.log(e);
})
div.contentEditable = true;

var boldButton = document.getElementById('bold');
boldButton.addEventListener('click', function() {
    document.execCommand('bold', false, null);
})

var italicButton = document.getElementById('italic');
italicButton.addEventListener('click', function() {
    document.execCommand('italic', false, null);
})

var undButton = document.getElementById('underline');
undButton.addEventListener('click', function() {
    document.execCommand('underline', false, null);
})

var fontselect = document.getElementById('fontsize');
fontselect.addEventListener('change', function() {
    var value = this.value;
    document.execCommand('fontsize', false, value);
})

var fontName = document.getElementById("fontName");
fontName.addEventListener("change", function(){
	var value2 = this.value;
	document.execCommand("fontname", false, value2);
})

var colorInput = document.getElementById('color');
colorInput.addEventListener('change', function() {
    document.execCommand('forecolor', false, this.value);
})

setInterval(function() {
    if (document.queryCommandState('bold')) {
        boldButton.classList.add('active');
    } else {
        boldButton.classList.remove('active');
    }
    if (!document.queryCommandEnabled('bold')) {
        boldButton.disabled = true;
    } else {
        boldButton.disabled = false;
    }
    if (document.queryCommandState('underline')) {
        undButton.classList.add('active');
    } else {
        undButton.classList.remove('active');
    }
    if (!document.queryCommandEnabled('underline')) {
        undButton.disabled = true;
    } else {
        undButton.disabled = false;
    }
    if (document.queryCommandState('italic')) {
        italicButton.classList.add('active');
    } else {
        italicButton.classList.remove('active');
    }
    if (!document.queryCommandEnabled('italic')) {
        italicButton.disabled = true;
    } else {
        italicButton.disabled = false;
    }

    if (!document.queryCommandEnabled('forecolor')) {
        colorInput.disabled = true;
    } else {
        colorInput.disabled = false;
    }

    var color = document.queryCommandValue('forecolor');

    var matches = color.match(/rgb\((\d+)\,\s(\d+)\,\s(\d+)\)/);
    if (matches != null) {
        var r = matches[1] * 1;
        var g = matches[2] * 1;
        var b = matches[3] * 1;
        r = r.toString(16);
        r = r.length == 1 ? "0" + r : r;
        g = g.toString(16);
        g = g.length == 1 ? "0" + g : g;
        b = b.toString(16);
        b = b.length == 1 ? "0" + b : b;

        var color = ("#" + r + g + b);

        colorInput.value = color;
    }

    var fontsize = document.queryCommandValue('fontsize');
    if (document.queryCommandValue('fontsize')) {
        fontselect.value = fontsize;
        fontselect.disabled = false;
    } else {
        fontselect.disabled = true;
    }
}, 50)

var linkBtn = document.getElementById("linkBtn");
linkBtn.addEventListener("click", function(){
	var url = prompt("Enter url adress");
	document.execCommand("createlink", false, url);
})

var unlinkBtn = document.getElementById("unlinkBtn");
unlinkBtn.addEventListener("click", function(){
	document.execCommand("unlink", false, null);
})

var bgColor = document.getElementById("colorBg");
bgColor.addEventListener("change", function(){
	document.execCommand("backcolor", false, this.value);
})

var imageSrc = document.getElementById("image");
imageSrc.addEventListener("click", function(){
	document.execCommand("insertimage", false, "apple.jpg");
})

var insertLi = document.getElementById("insertLi");
insertLi.addEventListener("click", function(){
	document.execCommand("insertorderedlist", false, null);
})

document.getSelection().toString();








