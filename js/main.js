import * as bootstrap from "bootstrap";
import filterSearch from "./navbar-filter.js";
/* -------------------------------------------------------------------------- */
/*                          BOOTSTRAP TOAST FUNCTION                          */
/* -------------------------------------------------------------------------- */
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new bootstrap.Popover(popover);
});
/* -------------------------------------------------------------------------- */
/*                        BOOTSTRAP TOAST FUNCTION END                        */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               SCROLL FUNCTION                              */
/* -------------------------------------------------------------------------- */
let myButton = document.querySelector("#scrollTop");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
/* -------------------------------------------------------------------------- */
/*                             SCROLL FUNCTION END                            */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                       COUNTDOWN FUNCTION OFF SECTION                       */
/* -------------------------------------------------------------------------- */
const getIdDays = document.querySelector("#days");
const getIdMinutes = document.querySelector("#minutes");
const getIdHours = document.querySelector("#hours");
const getIdSeconds = document.querySelector("#seconds");

const dayN = document.querySelector("#day-n");
const hourN = document.querySelector("#hour-n");
const minuteN = document.querySelector("#minute-n");
const secondN = document.querySelector("#second-n");

// Date method

let curDate = new Date();
let curYear = curDate.getFullYear();
let curMonth = curDate.getMonth();
let curDays = curDate.getDay();
let curHours = curDate.getHours();
let curMinutes = curDate.getMinutes();
let curSeconds = curDate.getSeconds();
// -----------------------------------

let SystemCurTime = {};
// IFFe function get system data time
(function getSystemCurTime() {
  let evCurTime = eval(
    curYear + curMonth + curDays + curHours + curMinutes + curSeconds
  );
  SystemCurTime = {
    curYear,
    curMonth,
    curDays,
    curHours,
    curMinutes,
    curSeconds,
    evCurTime,
  };
})();

// /* -------------------------------------------------------------------------- */
// /*                     COUNTDOWN FUNCTION OFF SECTION END                     */
// /* -------------------------------------------------------------------------- */
function getTime() {
  let now = new Date();
  let y2k = new Date("SEPTEMBER 30 2023 2:00:00");
  let days = (y2k - now) / 1000 / 60 / 60 / 24;
  let daysRound = Math.floor(days);
  let hours = (y2k - now) / 1000 / 60 / 60 - 24 * daysRound;
  let hoursRound = Math.floor(hours);
  let minutes = (y2k - now) / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound;
  let minutesRound = Math.floor(minutes);
  let seconds =
    (y2k - now) / 1000 -
    24 * 60 * 60 * daysRound -
    60 * 60 * hoursRound -
    60 * minutesRound;
  let secondsRound = Math.round(seconds);
  secondN.textContent = secondsRound == 1 ? " second." : " seconds.";
  minuteN.textContent = minutesRound == 1 ? " minute" : " minutes, ";
  hourN.textContent = hoursRound == 1 ? " hour" : " hours, ";
  dayN.textContent = daysRound == 1 ? " day" : " days, ";
  getIdDays.textContent = daysRound;
  getIdMinutes.textContent = minutesRound;
  getIdHours.textContent = hoursRound;
  getIdSeconds.textContent = secondsRound;
  // document.timeForm.input1.value =

  console.log(
    "Time remaining: " +
      daysRound +
      dayN +
      hoursRound +
      hourN +
      minutesRound +
      minuteN +
      secondsRound +
      secondN
  );
}

setInterval(getTime, 1000);
