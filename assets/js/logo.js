(function(){
var head = document.head;
var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "https://sztupy.hu/assets/css/logo.css";
head.appendChild(link);
var body = document.body;
var div = document.createElement("div");
div.id = "zssr-logo";
div.innerHTML = '<a href="https://sztupy.hu/projects"></a>';
if (body.firstChild) {
  body.insertBefore(div, body.firstChild);
} else {
  body.appendChild(div);
}
})();
