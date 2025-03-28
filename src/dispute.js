let lcGood = parseInt(localStorage.getItem('good'))
let lcBad = parseInt(localStorage.getItem('bad'))
let interaction = false

const containerButton = document.getElementById("containerButton")

const imageDispute = localStorage.getItem('dispute')
const alwaysGood = localStorage.getItem('alwaysGood')
const alwaysBad = localStorage.getItem('alwaysBad')


if (imageDispute === 'dark' && alwaysGood !== 'true'){
  document.getElementById('imageDispute').src = 'assets/imgs/dispute-squared.jpg'
}

const draggable = document.getElementById("containerDispute");

let offsetX = 0, offsetY = 0, isDragging = false;

draggable.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - draggable.offsetLeft;
  offsetY = event.clientY - draggable.offsetTop;
  draggable.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    draggable.style.left = `${event.clientX - offsetX}px`;
    draggable.style.top = `${event.clientY - offsetY}px`;

    if (!interaction) {
      interaction = true
      document.getElementById('pDispute').innerText = `!#??/[^&*,!#??/[^&*,!#??/[^&*,!#??/[^&*,`
      document.getElementById('imageDispute').src = 'assets/imgs/dispute-collage.jpg'

      containerButton.classList.remove('hidden')
      containerButton.classList.add('flex')

      lcBad++
      localStorage.setItem('bad', `${lcBad}`)
      localStorage.setItem('dispute', `dark`)
    }
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  draggable.style.cursor = "grab";
});

function setLocalStorage (condition) {
  if (!condition){
    localStorage.setItem('mariage', 'white')
    lcGood++
    localStorage.setItem('good', `${lcGood}`)
  }
}
