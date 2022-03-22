const bg = document.querySelector('#bg')
const moon = document.querySelector('#moon')
const montain = document.querySelector('#montain')
const road = document.querySelector('#road')

function scrll() {
  let value = window.scrollY
  bg.style.top = value * 0.5 + 'px'
  moon.style.left = -value * 0.5 + 'px'
  montain.style.top = -value * 0.15 + 'px'
  road.style.top = value * 0.15 + 'px'
  text.style.top = value * 1 + 'px'
}

window.addEventListener('scroll', scrll)
