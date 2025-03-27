const containerButton = document.getElementById('containerButton')

const phrases = [
  "📩 Nouveau message reçu.",
  "🔔 Tu as une nouvelle notification.",
  "💬 Quelqu'un t'a envoyé un message.",
  "📢 Alerte importante !",
  "📥 Tu as un nouveau fichier à consulter.",
  "🚀 Mise à jour disponible.",
  "📆 N'oublie pas ton rendez-vous aujourd'hui.",
  "🔑 Sécurité : Vérifie ton compte.",
  "🛒 Ton panier t'attend.",
  "🎉 Félicitations ! Tu as gagné une récompense."
];

function createRandomPhrase() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];

  const element = document.createElement("div");
  element.textContent = phrase;

  // Ajout des classes Tailwind
  element.className = "absolute bg-black/70 text-white px-4 py-2 rounded-md text-lg font-medium shadow-lg transition-transform scale-90";
  element.classList.add('notifDetector')

  // Position aléatoire
  const x = Math.random() * (window.innerWidth - 200); // Largeur max - marge
  const y = Math.random() * (window.innerHeight - 50); // Hauteur max - marge

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;

  document.body.appendChild(element);

  element.addEventListener('click', ()=>{
    localStorage.setItem('canape', 'dark')
    containerButton.classList.remove('hidden')
    containerButton.classList.add('flex')
  })

  // Supprimer l'élément après 5 secondes
  setTimeout(() => {

    setTimeout(() => element.remove(), 500);
  }, 5000);
}

// Ajouter une nouvelle phrase toutes les 2 secondes
setInterval(createRandomPhrase, 2000);
setInterval(createRandomPhrase, 4000);
setInterval(createRandomPhrase, 5000);
setInterval(createRandomPhrase, 7000);



let duration = 30;
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
    localStorage.setItem('canape', 'white')
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

