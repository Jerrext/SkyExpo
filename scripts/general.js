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
