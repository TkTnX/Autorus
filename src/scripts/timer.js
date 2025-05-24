// значения таймера
const daysValue = document.querySelector("#timerDays");
const hoursValue = document.querySelector("#timerHours");
const minutesValue = document.querySelector("#timerMinutes");
const secondsValue = document.querySelector("#timerSeconds");

// progress
const progressDays = document.querySelector("#progressDays");
const progressHours = document.querySelector("#progressHours");
const progressMinutes = document.querySelector("#progressMinutes");
const progressSeconds = document.querySelector("#progressSeconds");

const now = new Date();

let seconds = 59;
let minutes = 40;
let hours = 14;
let days = 10;

const radius = 40;
const circumference = 2 * Math.PI * radius;

function setProgress(element, value, max) {
  const offset = circumference - (value / max) * circumference;
  element.style.strokeDashoffset = offset;
}

function updateTime() {
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    minutes = 59;
    hours--;
  }

  if (hours < 0) {
    hours = 23;
    days--;
  }

  if (days < 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  daysValue.textContent = days;
  hoursValue.textContent = hours;
  minutesValue.textContent = minutes;
  secondsValue.textContent = seconds;

  setProgress(progressSeconds, seconds, 60);
  setProgress(progressMinutes, minutes, 60);
  setProgress(progressHours, hours, 24);
  setProgress(progressDays, days, 10);
}

setInterval(updateTime, 1000);
