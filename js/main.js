// Плавная прокрутка

const smoothCoef = 0.05;
const smoothScroll = document.querySelector(".smooth-scroll");
const smoothScrollBar = document.querySelector(".smooth-scrollbar");

function onResize(e) {
  smoothScrollBar.style.height = smoothScroll.offsetHeight + "px";
}

window.addEventListener("resize", onResize);
onResize();

let prevY = window.scrollY;
let curY = window.scrollY;
let y = window.scrollY;
let dy;

function loop(now) {
  curY = window.scrollY;
  dy = curY - prevY;
  y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
  prevY = y;
  smoothScroll.style.transform = `translate3d(0,${-y}px,0)`;

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

// Кнопка "Написать нам"

const fab = document.querySelector(".fab")
const fabBtns = document.querySelector(".fab-buttons")
const fabBtnsLink = document.querySelectorAll(".fab-buttons__link")

fab.addEventListener("click", () => {
    fabBtns.style.cssText = "opacity: 1; visibility: visible;"
    fabBtnsLink.forEach(item => item.style.cssText = "transform: scaleY(1) scaleX(1) translateY(-16px) translateX(0px);")
    
})

document.addEventListener("click", (e) => {
    console.log(e.target)
    if (!(fab.contains(e.target))) {
        fabBtns.style.cssText = ""
        fabBtnsLink.forEach(item => item.style.cssText = "")
    }
})