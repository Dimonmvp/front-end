let doc = document.body;
let image = document.createElement("img");
let imArray = ["q.jpg","w.jpeg","e.jpeg","r.jpeg"];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

(function f() {

    let rand =getRndInteger(0,imArray.length-1);
    image.setAttribute("src","../img/"+imArray[rand]);
    doc.appendChild(image);

}())