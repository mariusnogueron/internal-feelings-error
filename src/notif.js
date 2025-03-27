const button = document.getElementById('button')
const input = document.getElementById('input')

const containerButton = document.getElementById("containerButton")

let lcGood = parseInt(localStorage.getItem('good'))
let lcBad = parseInt(localStorage.getItem('bad'))
let interaction = false

const localStorageNotif = localStorage.getItem('notif')

if (localStorageNotif === 'dark'){
  document.getElementById('imageNotif').src = 'assets/imgs/notif-doted.png'
}

button.addEventListener('click', ()=>{
  document.getElementById('message').classList.remove('hidden')
  input.value = ''


  document.getElementById('imageNotif').src = 'assets/imgs/notif-dark.jpg'
  afficherMessages();

  interaction = true

  lcBad++
  localStorage.setItem('bad', `${lcBad}`)
  localStorage.setItem('dispute', `dark`)
})

function afficherMessages(id = 1) {
  if (id > 18) return; // Arrête la récursion quand tous les messages sont traités

  // Sélectionne l'élément et enlève la classe 'hidden'
  const message = document.getElementById(`message${id}`);
  if (message) {
    message.classList.remove('hidden');
  }

  // Définit un délai aléatoire entre 500ms (0.5s) et 2000ms (2s)
  const delai = Math.random() * (1000 - 500) + 500;

  setTimeout(() => {
    afficherMessages(id + 1); // Appelle la fonction pour le message suivant
  }, delai);
}

function setLocalStorage (condition) {
  if (!condition){
    localStorage.setItem('dispute', 'white')
    lcGood++
    localStorage.setItem('good', `${lcGood}`)
  }
}