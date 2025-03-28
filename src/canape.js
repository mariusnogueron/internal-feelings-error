const container = document.getElementById("container");
const drag = document.getElementById("drag");

const containerButton = document.getElementById("containerButton")

const imageType = localStorage.getItem('canape')

const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')

let lcGood = parseInt(localStorage.getItem('good'))
let lcBad = parseInt(localStorage.getItem('bad'))
let interaction = false

let isResizing = false;
let initialWidth;
let startX;
const minWidth = 356; // Modifie cette valeur pour ajuster la largeur minimale

if (imageType === 'white'){
  img1.src = 'assets/imgs/canape-gauche.jpg'
  img2.src = 'assets/imgs/coussin.jpg'
  img3.src = 'assets/imgs/canape-droit.jpg'
}

if (imageType === 'dark'){
  img1.src = 'assets/imgs/canape-gauche-squared.png'
  img2.src = 'assets/imgs/coussin-squared.png'
  img2.classList.add('pt-[7px]')
  img2.classList.add('pb-[7px]')
  img3.src = 'assets/imgs/canape-droit-squared.png'
}



drag.addEventListener("mousedown", (event) => {
  isResizing = true;
  initialWidth = container.offsetWidth;
  startX = event.clientX;

  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", stopResize);
});

function resize(event) {
  if (!isResizing) return;

  let deltaX = event.clientX - startX;
  let newWidth = initialWidth + deltaX;

  if (newWidth < minWidth) newWidth = minWidth;

  if (newWidth < initialWidth) {
    container.style.width = `${newWidth}px`;
  }

  if (newWidth < 550){

    img1.src = 'assets/imgs/canape-gauche-doted.png'
    img2.src = 'assets/imgs/coussin-doted.png'
    img2.classList.add('pt-[7px]')
    img2.classList.add('pb-[7px]')
    img3.src = 'assets/imgs/canape-droit-doted.png'

    afficherBoutonInteraction()
    if (!interaction){
      localStorage.setItem('notif', 'dark')
      lcBad++
      localStorage.setItem('bad', `${lcBad}`)
    }
    interaction = true
  }
}

function stopResize() {
  isResizing = false;
  document.removeEventListener("mousemove", resize);
  document.removeEventListener("mouseup", stopResize);
}

function afficherBoutonInteraction () {
  containerButton.classList.remove('hidden')
  containerButton.classList.add('flex')
}

function setLocalStorage (condition) {
  if (!condition){
    localStorage.setItem('notif', 'white')
    lcGood++
    localStorage.setItem('good', `${lcGood}`)
  }
}