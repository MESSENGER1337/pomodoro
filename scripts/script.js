let countdown;
let timeLeft;
let isPaused = false;
let isChronometer = false;

function startTimer() {
    if (!isPaused) {  // Only reset if not resuming
        const selectedValue = document.getElementById("timeSelect").value;
        
        if (selectedValue === "timer") {
            isChronometer = true;
            timeLeft = 0; // Always reset chronometer to zero on start
            document.getElementById("timer").textContent = "00:00"; // Clear display immediately
        } else {
            isChronometer = false;
            timeLeft = parseInt(selectedValue);
        }
    }

    clearInterval(countdown);
    document.getElementById("timeSelect").disabled = true;
    document.getElementById("startButton").style.display = "none";
    document.getElementById("pauseButton").style.display = "inline-block";

    const timerDisplay = document.getElementById("timer");

    function updateDisplay() {
        let minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        let seconds = (timeLeft % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }

    updateDisplay();
    countdown = setInterval(() => {
        if (!isChronometer && timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            resetTimer();
        } else {
            timeLeft += isChronometer ? 1 : -1;
            updateDisplay();
        }
    }, 1000);
    isPaused = false;
}

function pauseTimer() {
    clearInterval(countdown);
    isPaused = true;
    document.getElementById("startButton").style.display = "inline-block";
    document.getElementById("pauseButton").style.display = "none";
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById("timeSelect").disabled = false;
    document.getElementById("startButton").style.display = "inline-block";
    document.getElementById("pauseButton").style.display = "none";

    if (isChronometer) {
        timeLeft = 0;
        document.getElementById("timer").textContent = "00:00"; // Ensure reset to zero
    } else {
        timeLeft = parseInt(document.getElementById("timeSelect").value);
    }

    document.getElementById("timer").textContent = "00:00";
    isPaused = false;
}




















// let countdown;
// let timeLeft;
// let isPaused = false;

// function startTimer() {
//     clearInterval(countdown);
//     if (!isPaused) {
//         timeLeft = parseInt(document.getElementById("timeSelect").value);
//     }

//     document.getElementById("timeSelect").disabled = true; // Disable select when timer starts
//     document.getElementById("startButton").style.display = "none";
//     document.getElementById("pauseButton").style.display = "inline-block";

//     const timerDisplay = document.getElementById("timer");

//     function updateDisplay() {
//         let minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
//         let seconds = (timeLeft % 60).toString().padStart(2, '0');
//         timerDisplay.textContent = `${minutes}:${seconds}`;
//     }

//     updateDisplay();
//     countdown = setInterval(() => {
//         if (timeLeft <= 0) {
//             clearInterval(countdown);
//             alert("Time's up!");
//             resetTimer(); // Automatically reset when timer ends
//         } else {
//             timeLeft--;
//             updateDisplay();
//         }
//     }, 1000);
//     isPaused = false;
// }

// function pauseTimer() {
//     clearInterval(countdown);
//     isPaused = true;
//     document.getElementById("startButton").style.display = "inline-block";
//     document.getElementById("pauseButton").style.display = "none";
// }

// function resetTimer() {
//     clearInterval(countdown);
//     document.getElementById("timeSelect").disabled = false; // Re-enable select
//     document.getElementById("startButton").style.display = "inline-block";
//     document.getElementById("pauseButton").style.display = "none";
//     timeLeft = parseInt(document.getElementById("timeSelect").value); // Reset to selected time
//     document.getElementById("timer").textContent = "00:00";
//     isPaused = false;
// }
