
const gess = document.getElementById("gess");
const stat = document.getElementById("status");
const button = document.getElementById("button");
const body = document.getElementById("body")
const counter = document.getElementById("counter")
const timer = document.getElementById("timer")
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");


const result = Math.floor(Math.random() * 50) + 1
let count = 0;
let seconds = 0;
let timerInterval = null;
playBtn.addEventListener("click", () => {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        seconds++;
        timer.textContent = seconds + " seconds";
    }, 1000);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});
button.addEventListener("click", (e) => {
    if (gess.value == result) {
        stat.textContent = "correct"
        body.classList.remove("body2")
        body.classList.add("body1")
        count++
        counter.textContent = count;
        clearInterval(timerInterval);
    }
    else if (gess.value > 0 && gess.value > result) {
        stat.textContent = "to hige"
        body.classList.add("body2")
        count++
        counter.textContent = count
    }
    else if (gess.value < result && gess.value > 0) {
        stat.textContent = "to low"
        body.classList.add("body2")
        count++
        counter.textContent = count
    }
    e.preventDefault();
})
