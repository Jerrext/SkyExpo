const obs = {               // обсервер
  childList: false,
  attributes: true,
  characterData: false,
  attributeFilter: ["class"]
}

// Загрузочный экран

const loadingAnim = () => {
  const item1 = document.querySelector('.loading__text')
  const item2 = document.querySelector('.loading__text-bg')
  const loading = document.querySelector('.loading')
  const bannerElements = document.querySelector('.banner__text')
  const hint = document.querySelector('.hint')
  const fab = document.querySelector('.fab')
  // const translateX = ((item1.parentElement.parentElement.clientWidth - item1.clientWidth) / 2)
  console.log(item2.getBoundingClientRect().width)
  setTimeout(() => {item1.style.width = `${item2.getBoundingClientRect().width}px`}, 300)
  
  // item2.style.transform = `translate(${translateX}px, 0)`
  const time = 4200

  document.documentElement.style.overflow = "hidden"
  document.body.style.overflow = "hidden"

  setTimeout(() => {
    loading.style.opacity = '0'
    document.documentElement.style.overflow = "hidden auto"
    document.body.style.overflow = "hidden auto"
    setTimeout(() => {
      loading.style.display = 'none'
    }, 1500)

    hint.classList.add("_active")
    fab.classList.add("_active")

    let i = 0
    const showbannerElements = setInterval(() => {
      if (bannerElements.lastElementChild.classList.contains("_active")) {
        clearInterval(showbannerElements)
      } else {
        bannerElements.children[i].classList.add("_active")
        i++
      }
    }, 300)
  }, time)
}

loadingAnim()




// Создание элемента

// const createElem = (tag, options, to) => {
//   const elem = document.createElement(tag)

//   Object.keys(options).forEach(item => {
//       elem[item] = options[item]
//   })
//   to.appendChild(elem)

//   return 
// }

// Модальные окна

const callBtnHandler = (popupContainer) => {
  const popup = document.querySelector(popupContainer)
  const popupWrapper = document.querySelector(`${popupContainer} .popup__wrapper`)
  const overlay = document.querySelector(`${popupContainer} .popup__overlay`)
  const popupClose = document.querySelector(`${popupContainer} .popup__close`)

  popup.style.display = "block"
  document.documentElement.style.overflow = "hidden"
  document.body.style.overflow = "hidden"

  const popUpClose = () => {
    popup.style.display = "none"
    overlay.style.opacity = "0"
    popupWrapper.style.opacity = "0"
    popupWrapper.style.top = "calc(50% + 30px)"
    document.documentElement.style.overflow = "hidden auto"
    document.body.style.overflow = "hidden auto"
  }

  setTimeout(() => {
    overlay.style.opacity = ".7"
    popupWrapper.style.opacity = "1"
    popupWrapper.style.top = "50%"
  },0)

  popup.addEventListener("click", (e) => {
    if (e.target.className === "popup__overlay") {
      popUpClose()
    }
  })

  popupClose.addEventListener("click", () => {
    popUpClose()
  }) 
}

document.querySelector(".header .btn").addEventListener("click", () => callBtnHandler(".popup-call"))
document.querySelector(".main__btn").addEventListener("click", () => callBtnHandler(".popup-call"))
document.querySelector(".fab-buttons__link").addEventListener("click", () => callBtnHandler(".popup-email"))

// Плавная прокрутка

const smoothCoef = 0.05;
const smoothScroll = document.querySelector(".smooth-scroll");
const smoothScrollBar = document.querySelector(".smooth-scrollbar");
const bgBanner = document.querySelector(".bg-banner");
const animItemsIn = document.querySelectorAll('._anim-items'); // Появление блоков
const animItemsOut = document.querySelectorAll('._anim-out');

// function onResize(e) {
//   smoothScrollBar.style.height = smoothScroll.offsetHeight + "px";
// }

// window.addEventListener("resize", onResize);
// onResize();

// Появление блоков

const showBlocks = () => {
  const blockIn = window.innerHeight * 0.9 // Координаты появления блоков относительно окна

  for (let i = 0; i < animItemsIn.length; i++) {
    if (offset(animItemsIn[i]).top < blockIn){
      animItemsIn[i].classList.add('_active');
    } else {
        if (!animItemsIn[i].classList.contains('_anim-no-hide')) {
          animItemsIn[i].classList.remove('_active');
        }
    }
  }
}

// Скрытие блоков

// const hideBlocks = () => {
//   const blockOut = window.innerHeight * 0.15

//   for (let i = 0; i < animItemsOut.length; i++) {
//     if ((offset(animItemsOut[i]).top < blockOut)) {
//       // console.log(cord(animItemsOut[i]))
//       animItemsOut[i].style.transform = `translateY(${cord(animItemsOut[i])/3 - window.innerHeight/20}px)`
//     }
//   }
// }

window.addEventListener("scroll", () => {
  showBlocks()
  // hideBlocks()

  bgBanner.style.transform = `translate3d(0,${-cord(bgBanner)/2}px,0)`
  document.querySelectorAll('.bg-img').forEach(item => {
    item.style.transform = `translateY(${-cord(item)/3 - 300}px)`
  })
  // titleRight.style.transform = `translateX(${cord(titleRight)/5 - 100}px)`

  // Анимация блоков

  document.querySelectorAll(".title-block-left").forEach(item => {
    if (cord(item) < (window.innerHeight + 100) && cord(item) > -300) {
      item.style.transform = `translateX(${cord(item)/7}px)`
    }
  })

  document.querySelectorAll(".bottom-in").forEach(item => {
    // if (item.classList.contains("bg-img")) {
    //   item.style.transform = `translateY(${cord(item) - 1350}px)`
    // }
    if (cord(item) < (window.innerHeight + 100) && cord(item) > -300) {
      item.style.transform = `translateY(${cord(item)/15 - 40}px)`
    }
  })

  document.querySelectorAll(".left-in").forEach(item => {
    if (cord(item) < (window.innerHeight + 100) && cord(item) > -300) {
      item.style.transform = `translateX(${-cord(item)/10 + 50}px)`
    }
  })

  document.querySelectorAll(".right-in").forEach(item => {
    if (cord(item) < (window.innerHeight + 100) && cord(item) > -300) {
      item.style.transform = `translateX(${cord(item)/10 - 50}px)`
    }
  })

  // let prevY = window.scrollY;
  // console.log(prevY)
  // let curY = window.scrollY;
  // let y = window.scrollY;
  // let dy;
  // curY = window.scrollY;
  // dy = curY - prevY;
  // y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
  // prevY = y;
  // console.log(y)
})

// showBlocks()

// Скрытие блоков






// // console.log(window.innerHeight/15)

// function loop(now) {
//   curY = window.scrollY;
//   dy = curY - prevY;
//   y = Math.abs(dy) < 1 ? curY : y + dy * smoothCoef;
//   prevY = y;

  

  
//   smoothScroll.style.transform = `translate3d(0,${-y}px,0)`;
  
 
//   // console.log(v)

//   // v.style.transform = `translateX(${(-y)/10}}px)`
    
//   requestAnimationFrame(loop);
// }
// requestAnimationFrame(loop);

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

// Скролл до блоков

const scrollLink = () => {
  const arrowBanner = document.querySelector(".banner__arrow-bottom")
  const aboutLink = document.querySelector(".about-link")
  const servicesLink = document.querySelector(".services-link")
  // const productsLink = document.querySelector(".products-link")
  const about = document.getElementById("about")
  const services = document.getElementById("services")
  // const products = document.getElementById("products")

  const elemOffsetY = (elem) => {
    let box = elem.getBoundingClientRect()

    return box.top + window.pageYOffset
  }

  const scrollToFunc = (link, block) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        window.scrollTo(0, elemOffsetY(block) - 90)
      },0)
    })
  }

  scrollToFunc(arrowBanner, about)
  scrollToFunc(aboutLink, about)
  scrollToFunc(servicesLink, services)
}

scrollLink()

// aboutLink.addEventListener("click", () => {
//   setTimeout(() => {
//     // window.scrollTo(0, 0)
//     window.scrollBy(0, -cord(about) + about.offsetHeight)
//   },0)
// })

// Анимация "Наши услуги"

const servicesItems = document.querySelector('.services__items')



const observerServices = new MutationObserver(function(mutations) {
  let i = 0
  servicesItems.children[i].classList.add("_active")
  const servicesShow = setInterval(() => {
    if (servicesItems.lastElementChild.classList.contains("_active")) {
      clearInterval(servicesShow)
    } else {
      i++
      servicesItems.children[i].classList.add("_active")
    }
  }, 1000)
});

observerServices.observe(servicesItems, obs);


const servicesLeft = document.querySelector('.services__left')

const observerServicesLeft = new MutationObserver(function(mutations) {
  let i = 0
  const servicesShowLeft = setInterval(() => {
    if (servicesLeft.firstElementChild.lastElementChild.classList.contains("_active")) {
      clearInterval(servicesShowLeft)
    } else {
      servicesLeft.firstElementChild.children[i].classList.add("_active")
      i++
    }
  }, 800)
});

observerServicesLeft.observe(servicesLeft, obs);


const servicesRight = document.querySelector('.services__right')
const servicesRightItems = document.querySelectorAll('.services__item-title')

const observerServicesRight = new MutationObserver(function(mutations) {
  let i = 0
  const servicesShowRight = setInterval(() => {
    if (servicesRightItems[servicesRightItems.length - 1].classList.contains("_active")) {
      clearInterval(servicesShowRight)
    } else {
      servicesRightItems[i].classList.add("_active")
      i++
    }
  }, 200)
});

observerServicesRight.observe(servicesRight, obs);

// Аккордион

const acc = document.getElementsByClassName("services__item-title");
const panelAcc = document.getElementsByClassName("panel");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // for (let i = 0; i < panelAcc.length; i++) {
    //   panelAcc[i].style.maxHeight = null;
    // }
    const panel = this.nextElementSibling;

    for (let i = 0; i < acc.length; i++) {
      if (this == acc[i]) {
        this.classList.toggle("active");
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      } else {
        acc[i].classList.remove("active")
        acc[i].nextElementSibling.style.maxHeight = null 
      }
    }

    
  });
}

// Появление карточек преимуществ

const cardsWrapperFirst = document.querySelector('.cards-first')

const observerCardsFirst = new MutationObserver(function(mutations) {
  // console.log(mutations);
  let i = 0
  const cardsShow = setInterval(() => {
    if (cardsWrapperFirst.lastElementChild.classList.contains("_active")) {
      clearInterval(cardsShow)
    } else {
      cardsWrapperFirst.children[i].classList.add("_active")
      i++
    }
  }, 400)
});

observerCardsFirst.observe(cardsWrapperFirst, obs);


const cardsWrapperSecond = document.querySelector('.cards-second')

const observerCardsSecond = new MutationObserver(function(mutations) {
  // console.log(mutations);
  let i = 0
  cardsWrapperSecond.children[i].classList.add("_active")
  i++
  const cardsShow = setInterval(() => {
    if (cardsWrapperSecond.lastElementChild.classList.contains("_active")) {
      clearInterval(cardsShow)
    } else {
      cardsWrapperSecond.children[i].classList.add("_active")
      i++
    }
  }, 400)
});

observerCardsSecond.observe(cardsWrapperSecond, obs);

// Наведение на 3D карточки

cards = document.querySelectorAll('.benefits__card-item')

VanillaTilt.init(cards, {
  reverse: true,
  max: 7,
  glare: true,
  'max-glare': 0.2,
  scale:  1.05,  // Масштабирование
  transition:  true,
  speed: 3000,
})

// Кнопка вверх

const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      if (scrollY > 400) {
        this.show();
      } else {
        this.hide();
      }
    });
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

// console.log(cards)

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('mousemove', startRotate)
//   cards[i].addEventListener('mouseleave', stopRotate)
// }

// function startRotate(e) {
//   const cardItem = this.querySelector('.projects__benefits-card-item')
//   const halfHeight = cardItem.offsetHeight / 2
//   const halfWidth = cardItem.offsetWidth / 2
//   console.log(e.offsetX)
  
//   cardItem.style.transform = `rotateY(${(e.offsetX - halfWidth) / 10}deg) rotateX(${-(e.offsetY - halfHeight) / 10}deg)`
// }

// function stopRotate(e) {
//   const cardItem = this.querySelector('.projects__benefits-card-item')
//   cardItem.style.transform = 'rotate(0)'
// }



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

// Свайперы

var swiper1 = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
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
  navigation: {
    nextEl: ".products .swiper-button-next",
    prevEl: ".products .swiper-button-prev",
  },
  loop: true
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1.8,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".projects .swiper-button-next",
    prevEl: ".projects .swiper-button-prev",
  },
  loop: true
});


var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".partners .swiper-button-next",
    prevEl: ".partners .swiper-button-prev",
  },
  loop: true
});


