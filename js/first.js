let array = ["apple", "pear", "plum"];
let doc =document.body;
(function f() {
    let ul = document.createElement("ul");
    for (let i = 0; i<array.length;i++)
    {

        //InnerHTML
        // ul.innerHTML += "<li>"+array[i]+"</li>";

        // Create element
        let li = document.createElement("li");
        li.textContent=array[i];
        ul.appendChild(li);

    }
    doc.appendChild(ul);

}())