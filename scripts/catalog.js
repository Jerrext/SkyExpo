document.documentElement.style.overflowX = "hidden"
document.body.style.overflowX = "hidden"

document.addEventListener("DOMContentLoaded", () => {
  const hint = document.querySelector('.hint')
  const fab = document.querySelector('.fab')
  const catalogItems = [...document.querySelectorAll(".catalog__items > div")]
  setTimeout(() => {
    hint.classList.add("_active")
    fab.classList.add("_active")
  }, 0)

  let i = 0
  const catalogItemsInterval = setInterval(() => {
    catalogItems[i].classList.add("_active")
    if (catalogItems[catalogItems.length - 1].classList.contains("_active")) {
      clearInterval(catalogItemsInterval)
    } else {
      i++
    }
    
  },200)
})

const overflowToggle = (arg) => {
  if (arg) {
    document.documentElement.style.overflow = "hidden auto"
    document.body.style.overflow = "hidden auto"
  } else {
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  }
}

const callBtnHandler = (popupContainer) => {
  const popup = document.querySelector(popupContainer)
  const popupWrapper = document.querySelector(`${popupContainer} .popup__wrapper`)
  const overlay = document.querySelector(`${popupContainer} .popup__overlay`)
  const popupClose = document.querySelector(`${popupContainer} .popup__close`)

  popup.style.display = "block"
  overflowToggle(false)

  const popUpClose = () => {
    popup.style.display = "none"
    overlay.style.opacity = "0"
    popupWrapper.style.opacity = "0"
    popupWrapper.style.top = "calc(50% + 30px)"
    overflowToggle(true)
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
document.querySelector(".burger__btn").addEventListener("click", () => callBtnHandler(".popup-call"))
document.querySelector(".fab-buttons__link").addEventListener("click", () => callBtnHandler(".popup-email"))

//

const burgerMenu = document.querySelector(".burger")
const burgerList = [...document.querySelector(".burger__list").children]
const burgerTitle = document.querySelector(".burger__company")
const burgerBtn = document.querySelector(".burger__btn")
const bugerClose = document.querySelector(".burger__close")

const burgerMenuBtnHandler = () => {
  burgerMenu.style.display = "block"
  setTimeout(() => {
    burgerMenu.style.transform = "translateX(0)"
    let i = 0
    burgerTitle.style.opacity = "1"
    overflowToggle(false)
    setTimeout(() => {
      const burgerLinksShow = setInterval(() => {
        if (burgerList[burgerList.length - 1].classList.contains("_active")) {
          clearInterval(burgerLinksShow)
          burgerBtn.style.opacity = "1"
          bugerClose.style.opacity = "1"
        } else {
          burgerList[i].classList.add("_active")
          i++
        }
      }, 200)
    }, 300)
  }, 0)
  
}

const burgerCloseHandler = () => {
  burgerMenu.style.transform = "translateX(-100vw)"
  overflowToggle(true)
  burgerTitle.style.opacity = ""
  burgerList.forEach(item => item.classList.remove("_active"))
  burgerBtn.style.opacity = ""
  bugerClose.style.opacity = ""
  setTimeout(() => burgerMenu.style.display = "none", 700)
}

burgerBtn.addEventListener("click", burgerCloseHandler)
document.querySelector(".header__burger-wrapper").addEventListener("click", burgerMenuBtnHandler)
bugerClose.addEventListener("click", burgerCloseHandler)

//

const bgBanner = document.querySelector(".bg-banner");
const animItemsIn = document.querySelectorAll('._anim-items'); // Появление блоков
const animItemsOut = document.querySelectorAll('._anim-out');

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

//

window.addEventListener("scroll", () => {
  showBlocks()
  // hideBlocks()
  if (cord(bgBanner) < (window.innerHeight) && cord(bgBanner) > -800) {
    bgBanner.style.transform = `translate3d(0,${-cord(bgBanner)/2}px,0)`
  }
})

//

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

//

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

//

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