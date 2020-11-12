function forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}

var text = "";
var i;
var j;
for (i = 0; i < 1; i++) {
    for (j = 0; j < 1000; j++) {
        forceDownload();
    text += i + j;
    }
}
document.getElementById("demo").innerHTML = text;
