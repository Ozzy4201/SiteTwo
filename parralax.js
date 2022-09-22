const scrollEl = document.documentElement
const body = document.body;
const main = document.getElementById('custom');

let sx = 0, // For scroll positions
    sy = 0;
let dx = sx, // For container positions
    dy = sy;

let scrollPos
let b = scrollPos
let s = 0




window.addEventListener('scroll', easeScroll);

function easeScroll() {
  
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render(){
  //We calculate our container position by linear interpolation method
  dx = li(dx,sx,0.07);
  dy = li(dy,sy,0.07);
  
  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;
  
  
  main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
  
  
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}



function parallax() {
  if (scrollPos !== scrollEl.scrollTop) {
    scrollPos = scrollEl.scrollTop
    scrollEl.style.setProperty('--scrollPos', scrollPos /0.75 + 'px')
  }
  window.requestAnimationFrame(parallax)
}
window.requestAnimationFrame(parallax)