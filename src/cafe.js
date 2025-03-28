const containerButton = document.getElementById('containerButton')

let lcGood = parseInt(localStorage.getItem('good'))
let lcBad = parseInt(localStorage.getItem('bad'))
let interaction = false

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
  element.className = "absolute bg-black/70 text-blue-500 px-4 py-2 rounded-md text-lg font-medium shadow-lg transition-transform scale-90 underline";
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
    if (!interaction){
      lcBad++
      localStorage.setItem('bad', `${lcBad}`)
      document.getElementById('imageCafe').src = 'assets/imgs/cafe-doted.png'
    }
    interaction = true
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

function setLocalStorage (condition) {
  if (!condition){
    localStorage.setItem('canape', 'white')
    lcGood++
    localStorage.setItem('good', `${lcGood}`)
  }
}
