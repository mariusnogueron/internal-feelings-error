const container = document.getElementById("container");
const drag = document.getElementById("drag");

const containerButton = document.getElementById("containerButton")

let isResizing = false;
let initialWidth;
let startX;
const minWidth = 356; // Modifie cette valeur pour ajuster la largeur minimale

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
    afficherBoutonInteraction()
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
