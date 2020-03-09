
let doc = document.body;
let siteURL = "http://"+top.location.toString();
let href = document.getElementsByTagName("a");
(function f() {
    for (let i = 0 ;i<href.length;i++) {
        let s = href[i].getAttribute("href").substr(0, 3);
        if (s.includes("./") || s.includes(".") || s.includes("../") || s.includes("#")||s.includes("html/")) {
            href[i].setAttribute("style", "color:red;");
        } else {
            href[i].setAttribute("style", "color:green;");
        }
    }


}());