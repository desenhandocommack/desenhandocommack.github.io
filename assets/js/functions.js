document.body.className = "js";

var toggle = document.getElementById("toggle");
var menu = document.getElementById("menu");
var toggle2 = document.getElementById("toggle2");
var menu2 = document.getElementById("menu2");

if (toggle) toggle.onclick = function() {
    if ( menu.classList.contains("expanded") )
        menu.classList.remove("expanded");
    else
        menu.classList.add("expanded");
}

if (toggle2) toggle2.onclick = function() {
    if ( menu2.classList.contains("expanded") )
        menu2.classList.remove("expanded");
    else
        menu2.classList.add("expanded");
}

var faq = document.getElementsByClassName("faq-item");
var faqQuestions = document.getElementsByClassName("faq-question");
var faqAnswers = document.getElementsByClassName("faq-answer");

if (faq) {
  for (var i = 0; i < faq.length; i++) {
    faqQuestions[i].onclick = function() {
      answer = this.parentElement.lastElementChild;
      plus = this.parentElement.firstElementChild.firstElementChild;

      if (answer.classList.contains("expanded")) {
        answer.classList.remove("expanded");
        plus.classList.replace("fa-minus", "fa-plus");
      } else {
        plus.classList.replace("fa-plus", "fa-minus");
        answer.classList.add("expanded");
      }

      var pluses = document.getElementsByClassName("fa-minus");
      for (var j = 0; j < pluses.length; j++)
        if (pluses[j] != plus) pluses[j].classList.replace("fa-minus", "fa-plus");

      for (var j = 0; j < faqAnswers.length; j++)
        if (faqAnswers[j] != answer) faqAnswers[j].classList.remove("expanded");
    }
  }
}
