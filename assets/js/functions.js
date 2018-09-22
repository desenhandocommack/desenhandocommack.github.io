document.body.className = "js";

/**
 * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
 *
 * @private
 * @author Todd Motto
 * @link https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
 * @callback requestCallback      callback   - Callback function for each iteration.
 * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
 * @returns {}
 */
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var navigation = document.getElementById("navigation");

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");

      navigation.classList.toggle("show");
    }, false);
  });
}


// var toggle = document.getElementById("toggle");
// var menu = document.getElementById("menu");
// var toggle2 = document.getElementById("toggle2");
// var menu2 = document.getElementById("menu2");

// if (toggle) toggle.onclick = function() {
//     if ( menu.classList.contains("expanded") )
//         menu.classList.remove("expanded");
//     else
//         menu.classList.add("expanded");
// }

// if (toggle2) toggle2.onclick = function() {
//     if ( menu2.classList.contains("expanded") )
//         menu2.classList.remove("expanded");
//     else
//         menu2.classList.add("expanded");
// }

// var faq = document.getElementsByClassName("faq-item");
// var faqQuestions = document.getElementsByClassName("faq-question");
// var faqAnswers = document.getElementsByClassName("faq-answer");

// if (faq) {
//   for (var i = 0; i < faq.length; i++) {
//     faqQuestions[i].onclick = function() {
//       answer = this.parentElement.lastElementChild;
//       plus = this.parentElement.firstElementChild.firstElementChild;

//       if (answer.classList.contains("expanded")) {
//         answer.classList.remove("expanded");
//         plus.classList.replace("fa-minus", "fa-plus");
//       } else {
//         plus.classList.replace("fa-plus", "fa-minus");
//         answer.classList.add("expanded");
//       }

//       var pluses = document.getElementsByClassName("fa-minus");
//       for (var j = 0; j < pluses.length; j++)
//         if (pluses[j] != plus) pluses[j].classList.replace("fa-minus", "fa-plus");

//       for (var j = 0; j < faqAnswers.length; j++)
//         if (faqAnswers[j] != answer) faqAnswers[j].classList.remove("expanded");
//     }
//   }
// }
