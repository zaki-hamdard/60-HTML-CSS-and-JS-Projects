const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");
let timeLeft = 1500;
let interval;

start.addEventListener("click", startTimer);
stop.addEventListener("click", () => {
    clearInterval(interval);
    updateTimer();
    start.innerHTML = "resume";
});
reset.addEventListener("click", () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer()
    
});

function updateTimer () {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timer.innerHTML = formattedTime;


}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer()
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
        }
    },1000);
}