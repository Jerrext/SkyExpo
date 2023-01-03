// Плавная прокрутка

const smoothCoef = 0.05;
const smoothScroll = document.querySelector(".smooth-scroll");
const smoothScrollBar = document.querySelector(".smooth-scrollbar");
const bgImg = document.querySelector(".bg-img")

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
  bgImg.style.transform = `translate3d(0,${(-y)/2}px,0)`

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
    if (!(fab.contains(e.target))) {
        fabBtns.style.cssText = ""
        fabBtnsLink.forEach(item => item.style.cssText = "")
    }
})

// Header transformation

const header = document.querySelector(".header")

window.addEventListener("scroll", (e) => {
  if(window.scrollY > 0) {
    header.classList.add("scrollNav")
  } else {
    header.classList.remove("scrollNav")
  }
})

// Кнопка "Стрелка вниз"

const arrowBanner = document.querySelector(".banner__arrow-bottom")
const about = document.getElementById("about")

	

arrowBanner.addEventListener("click", () => {
  console.log(window.innerHeight)
  setTimeout(() => {
    window.scrollTo(0, window.innerHeight - 94)
  },0)
})

// Появление текста



const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            console.log(window.pageYOffset)
        return {
            top: rect.top + 200,
            left: rect.left + scrollLeft
        }
    }
    animOnScroll();
}