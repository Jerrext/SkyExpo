// Плавная прокрутка

const smoothCoef = 0.05;
const smoothScroll = document.querySelector(".smooth-scroll");
const smoothScrollBar = document.querySelector(".smooth-scrollbar");
const bgImg = document.querySelector(".bg-img")
const animItemsIn = document.querySelectorAll('._anim-items'); // Появление блоков
const animItemsOut = document.querySelectorAll('._anim-out')

function onResize(e) {
  smoothScrollBar.style.height = smoothScroll.offsetHeight + "px";
}

window.addEventListener("resize", onResize);
onResize();

let prevY = window.scrollY;
let curY = window.scrollY;
let y = window.scrollY;
let dy;

const blockIn = window.innerHeight * 0.9 // Координаты появления блоков относительно окна
const blockOut = window.innerHeight * 0.15
// console.log(window.innerHeight/15)

function loop(now) {
  curY = window.scrollY;
  dy = curY - prevY;
  y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
  prevY = y;

  for (let i = 0; i < animItemsIn.length; i++) {
    if (offset(animItemsIn[i]).top < blockIn){
      animItemsIn[i].classList.add('_active');
    } else {
        if (!animItemsIn[i].classList.contains('_anim-no-hide')) {
          animItemsIn[i].classList.remove('_active');
        }
    }
  }

  for (let i = 0; i < animItemsOut.length; i++) {
    if ((offset(animItemsOut[i]).top < blockOut)) {
      // console.log(cord(animItemsOut[i]))
      animItemsOut[i].style.transform = `translateY(${cord(animItemsOut[i])/3 - window.innerHeight/20}px)`
    }
  }

  smoothScroll.style.transform = `translate3d(0,${-y}px,0)`;
  bgImg.style.transform = `translate3d(0,${(-y)/2}px,0)`
  // titleRight.style.transform = `translateX(${cord(titleRight)/5 - 100}px)`

  // Карточки "О нас"

  document.querySelectorAll(".title-block-left").forEach(item => {
    item.style.transform = `translateX(${cord(item)/5 - 100}px)`
  })

  document.querySelectorAll(".bottom-in").forEach(item => {
    if (item.classList.contains("products__bg")) {
      item.style.transform = `translateY(${cord(item) - 1350}px)`
    }
    item.style.transform = `translateY(${cord(item)/15 - 40}px)`
  })

  document.querySelectorAll(".left-in").forEach(item => {
    item.style.transform = `translateX(${-cord(item)/10 + 50}px)`
  })

  document.querySelectorAll(".right-in").forEach(item => {
    item.style.transform = `translateX(${cord(item)/10 - 50}px)`
  })
 
  // console.log(v)

  // v.style.transform = `translateX(${(-y)/10}}px)`
    
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

function offset(el) {
  const rect = el.getBoundingClientRect()
      // scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      // scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left
  }
}

function cord(elem) {
  return elem.getBoundingClientRect().top
}

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

  // console.log(cord(v))

  
})

// Кнопка "Стрелка вниз"

const arrowBanner = document.querySelector(".banner__arrow-bottom")
const aboutLink = document.querySelector(".about-link")
const productsLink = document.querySelector(".products-link")
const about = document.getElementById("about")
const products = document.getElementById("products")

const scrollToFunc = (link, block) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      window.scrollTo(0, cord(block) - 94)
    },0)
  })
}

console.log(about.offsetHeight)
console.log(cord(about))

scrollToFunc(arrowBanner, about)


aboutLink.addEventListener("click", () => {
  setTimeout(() => {
    // window.scrollTo(0, 0)
    window.scrollBy(0, -cord(about) + about.offsetHeight)
  },0)
})

// productsLink.addEventListener()

// Появление текста

// const animItems = document.querySelectorAll('._anim-items');
// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i];
//             const animItemHeight = animItems[i].offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;

//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//             console.log(offset(titleRight).bottom)
//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('_active');
//             } else {
//                 if (!animItem.classList.contains('_anim-no-hide')) {
//                     animItem.classList.remove('_active');
//                 }
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect()
//             // scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             // scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return {
//             top: rect.top,
//             bottom: rect.bottom,
//             left: rect.left
//         }
//     }
//     animOnScroll();
// }

// window.addEventListener("scroll", () => {
//   let a = window.scrollY
//   let coef = 0.1
//   b = a * coef
//   console.log(window.scrollY)
//   titleLeft.style.transform = `translateX(${-b}px)`
// })

// Свайпер "Продукты"

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true
});