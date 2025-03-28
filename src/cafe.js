const containerButton = document.getElementById('containerButton')
const containerCafe = document.getElementById('containerCafe')
const notif = document.getElementById('notif')

let lcGood = parseInt(localStorage.getItem('good'))
let lcBad = parseInt(localStorage.getItem('bad'))
let interaction = false

const phrases = [
  "Hâte de te voir ce soir ! ",
  "Tu viens toujours à 20h ? ",
  "Elle est là ce soir?",
  "J’ai adoré notre discussion d’hier ",
  "Trop hâte qu’on se revoie 👀",
  "Merci pour la soirée d’hier, c’était top ! ✨",
  "T’as bien dormi ? ",
  "J’ai trouvé la musique dont tu parlais 🎶",
  "T’oublies pas notre plan de demain ? 😇",
  "J’ai un cadeau pour toi 🎁",
  "Toujours partant pour ce week-end ?"
];

const imgPreload = new Image();
imgPreload.src = "assets/imgs/cafe-doted.png";

function getRandomPosition(minX, maxX, minY, maxY) {
  const x = Math.random() * (maxX - minX) + minX;
  const y = Math.random() * (maxY - minY) + minY;
  return { x, y };
}

function createRandomPhrase() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];

  const element = document.createElement("div");
  element.textContent = phrase;

  // Ajout des classes Tailwind
  element.className = "absolute bg-black/70 text-blue-500 px-4 py-2 rounded-md text-lg font-medium shadow-lg transition-transform scale-90 hover:underline cursor-pointer z-20";
  element.classList.add('notifDetector')

  // Définir les positions limites
  const minX = 250, maxX = 550;
  const minY = 150, maxY = 450;

  // Obtenir une position aléatoire
  const { x, y } = getRandomPosition(minX, maxX, minY, maxY);

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;

  containerCafe.appendChild(element);

  notif.classList.toggle('hidden')

  element.addEventListener('click', ()=>{
    localStorage.setItem('canape', 'dark')
    containerButton.classList.remove('hidden')
    containerButton.classList.add('flex')
    if (!interaction){
      lcBad++
      localStorage.setItem('bad', `${lcBad}`)
      document.getElementById('imageCafe').src = imgPreload.src
    }
    interaction = true
  })

  // Supprimer l'élément après 5 secondes
  setTimeout(() => {

    setTimeout(() => element.remove(), 500);
  }, 5000);
}

// Ajouter une nouvelle phrase toutes les 2 secondes
setInterval(createRandomPhrase, 1000);
setInterval(createRandomPhrase, 3000);
setInterval(createRandomPhrase, 4000);
setInterval(createRandomPhrase, 6000);

function setLocalStorage (condition) {
  if (!condition){
    localStorage.setItem('canape', 'white')
    lcGood++
    localStorage.setItem('good', `${lcGood}`)
  }
}
