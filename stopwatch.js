const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
let display = document.getElementById("displayTime");
let sec = 0;
let min = 0;
let hour = 0;
let count = 0;
let createInterval;
let formattedSec;
let formattedMin;
let formattedHour;
startBtn.addEventListener("click", execute);
function execute() {
    if (count == 0) {
        createInterval = setInterval(startfunc, 1000);
        count++;
    }
}
pauseBtn.addEventListener("click", () => {
    clearInterval(createInterval);
    count = 0;
});
resetBtn.addEventListener("click", () => {
    clearInterval(createInterval);
    count=0
    sec = 0;
    min = 0;
    hour = 0;
    formattedSec = formatDisplay(sec);
    formattedMin = formatDisplay(min);
    formattedHour = formatDisplay(hour);
    display.innerHTML = `${formattedHour}:${formattedMin}:${formattedSec}`;
})
function startfunc() {
    if (sec < 59) {
        sec++;
    } else {
        sec = 0;
        if (min < 59) {
            min++;
        } else {
            min = 0;
            hour++;
        }
    }
    formattedSec = formatDisplay(sec);
    formattedMin = formatDisplay(min);
    formattedHour = formatDisplay(hour);
    display.innerHTML = `${formattedHour}:${formattedMin}:${formattedSec}`;
}


function formatDisplay(value) {
    value = value.toString();
    if (value.length < 2) {
        value = '0' + value;
    }
    return value;
}