let lcGood = parseInt(localStorage.getItem('good'))
let lcBad = parseInt(localStorage.getItem('bad'))

const alwaysGood = localStorage.getItem('alwaysGood')
const alwaysBad = localStorage.getItem('alwaysBad')

const buttonPopup = document.getElementById('buttonPopup')
const popup = document.getElementById('popup')


if ((alwaysGood !== 'true' && lcBad > lcGood) || alwaysBad ==='true' ){
  document.getElementById('imageMariage').src = 'assets/imgs/mariage-collage.jpg'
  document.getElementById('pPopup').innerText = 'Parfois il vaut mieux laisser les choses se faire …'
}

buttonPopup.addEventListener('click', ()=>{
  popup.classList.remove('hidden')
  popup.classList.add('flex')
})