document.body.className = "js";

var toggle = document.getElementById("toggle");
var menu = document.getElementById("menu");
var toggle2 = document.getElementById("toggle2");
var menu2 = document.getElementById("menu2");

toggle.onclick = function() {
    if ( menu.classList.contains("expanded") )
        menu.classList.remove("expanded");
    else
        menu.classList.add("expanded");
}

toggle2.onclick = function() {
    if ( menu2.classList.contains("expanded") )
        menu2.classList.remove("expanded");
    else
        menu2.classList.add("expanded");
}
