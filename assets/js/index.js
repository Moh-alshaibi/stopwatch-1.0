'use strict';

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
  timer = setInterval(() => {
    milliseconds++;
    if (milliseconds === 60) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    timerDisplay.innerHTML = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }:${milliseconds < 10 ? "0" + milliseconds : milliseconds}`;
  }, 15);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  timerDisplay.innerHTML = "00:00:00";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
