const scrollEl = document.documentElement
const body = document.body;
const main = document.getElementById('custom');
let scrollPos
let b = scrollPos
let s = 0

function parallax() {
  if (scrollPos !== scrollEl.scrollTop) {
    scrollPos = scrollEl.scrollTop
    scrollEl.style.setProperty('--scrollPos', scrollPos /0.75 + 'px')
  }
  window.requestAnimationFrame(parallax)
}
window.requestAnimationFrame(parallax)