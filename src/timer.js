let duration = 20;
let timeLeft = duration;
let timerInterval;


const timerDisplay = document.createElement("div");
timerDisplay.className = "fixed top-5 right-5 bg-gray-900 text-white text-2xl font-bold px-6 py-3 rounded-lg shadow-lg";
document.body.appendChild(timerDisplay);

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = "⏳ Temps écoulé !";
    containerButton.classList.remove('hidden')
    containerButton.classList.add('flex')
    setLocalStorage(interaction)
  } else {
    timeLeft--;
  }
}

function startTimer() {
  timeLeft = duration;
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

startTimer();