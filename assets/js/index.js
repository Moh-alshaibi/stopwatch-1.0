'use strict';

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const timerDisplay = document.getElementById("timer");
const lapDisplay = document.getElementById("lap-display");

let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let lapTimes = [];

function startTimer() {
  // Check if timer is already running
  if (timer) {
    return;
  }
  
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
  timer = null; // Reset the timer variable
}

function resetTimer() {
  stopTimer();
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  timerDisplay.innerHTML = "00:00:00";
  lapDisplay.innerHTML = "";  
  lapTimes = [];
}

function lapTimer() {
  lapTimes.push(
    `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }:${milliseconds < 10 ? "0" + milliseconds : milliseconds}`
  );
  let lapDisplayItem = document.createElement("p");
  lapDisplayItem.innerHTML = `Lap ${lapTimes.length}: ${lapTimes[lapTimes.length - 1]}`;
  lapDisplayItem.style.borderBottom = "1px solid #333";
  lapDisplay.appendChild(lapDisplayItem);
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", lapTimer);