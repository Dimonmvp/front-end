let doc = document.body;
let arrayTr = document.getElementsByTagName("tr");

(function f() {
    for (let i = 0 ;i<arrayTr.length; i++)
    {
        let tdText = parseInt(arrayTr[i].cells[0].textContent)+
                        parseInt(arrayTr[i].cells[1].textContent);
        let createTd = document.createElement("td");
        createTd.textContent=tdText.toString();
        arrayTr[i].append(createTd);
    }
}());