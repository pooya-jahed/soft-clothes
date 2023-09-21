import * as bootstrap from "bootstrap";
import filterSearch from "./navbar-filter.js";
import timer from "./offTime.js";

document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover);
});
let mybutton = document.querySelector("#scrollTop");
/* -------------------------------------------------------------------------- */
/*                               SCROLL FUNCTION                              */
/* -------------------------------------------------------------------------- */
// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
window.onscroll = function () {
  scrollFunction();
};
/* -------------------------------------------------------------------------- */
/*                             SCROLL FUNCTION END                            */
/* -------------------------------------------------------------------------- */
