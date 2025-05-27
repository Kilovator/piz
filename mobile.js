
document.addEventListener("DOMContentLoaded", () => {
  createMobileMenu()
  initMobileEventListeners()

  adjustCartForMobile()
})

function createMobileMenu() {
  const header = document.querySelector("header")
  if (!header) return

  const menuToggle = document.createElement("button")
  menuToggle.className = "mobile-menu-toggle"
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>'
  menuToggle.setAttribute("aria-label", "Открыть меню")

  header.insertBefore(menuToggle, header.firstChild)

  const mobileMenuHTML = `
    <div class="mobile-menu-overlay"></div>
    <div class="mobile-menu">
      <div class="mobile-menu-header">
        <h3>Меню</h3>
        <button class="close-mobile-menu" aria-label="Закрыть меню">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="mobile-menu-items">
        <a href="index.html" class="mobile-menu-item">
          <i class="fas fa-home"></i> Главная
        </a>
        <a href="#" class="mobile-menu-item" data-tab="pizza">
          <i class="fas fa-pizza-slice"></i> Пицца
        </a>
        <a href="#" class="mobile-menu-item" data-tab="drinks">
          <i class="fas fa-glass-cheers"></i> Напитки
        </a>
        <a href="#" class="mobile-menu-item" data-tab="appetizers">
          <i class="fas fa-cheese"></i> Закуски
        </a>
        <a href="login.html" class="mobile-menu-item">
          <i class="fas fa-sign-in-alt"></i> Вход
        </a>
        <a href="register.html" class="mobile-menu-item">
          <i class="fas fa-user-plus"></i> Регистрация
        </a>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML("beforeend", mobileMenuHTML)
}

function initMobileEventListeners() {
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  const closeMenu = document.querySelector(".close-mobile-menu")
  const mobileMenu = document.querySelector(".mobile-menu")
  const overlay = document.querySelector(".mobile-menu-overlay")
  const menuItems = document.querySelectorAll(".mobile-menu-item[data-tab]")

  if (!menuToggle || !closeMenu || !mobileMenu || !overlay) return

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    overlay.classList.add("active")
    document.body.style.overflow = "hidden" 
  })

  closeMenu.addEventListener("click", closeMobileMenu)
  overlay.addEventListener("click", closeMobileMenu)

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault()
      const tabId = item.getAttribute("data-tab")

      const tabElement = document.querySelector(`.tab[data-tab="${tabId}"]`)
      if (tabElement) {
        tabElement.click()
      }

      closeMobileMenu()
    })
  })

  function closeMobileMenu() {
    mobileMenu.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = "" 
  }
}

function adjustCartForMobile() {
  const cartContainer = document.getElementById("cart-container")
  const closeCart = document.getElementById("close-cart")

  if (!cartContainer || !closeCart) return

  let startX, startY, endX, endY
  const minSwipeDistance = 50

  cartContainer.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    },
    false,
  )

  cartContainer.addEventListener(
    "touchend",
    (e) => {
      endX = e.changedTouches[0].clientX
      endY = e.changedTouches[0].clientY

      const xDiff = startX - endX
      const yDiff = startY - endY

      if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > minSwipeDistance) {
        if (xDiff < 0) {
          cartContainer.classList.remove("active")
        }
      }
    },
    false,
  )

  document.addEventListener("click", (e) => {
    if (
      cartContainer.classList.contains("active") &&
      !cartContainer.contains(e.target) &&
      !e.target.closest("#cart-icon")
    ) {
      cartContainer.classList.remove("active")
    }
  })
}

function adjustOrderFormForMobile() {
  const inputs = document.querySelectorAll("input, select, textarea")

  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      setTimeout(() => {
        input.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 300)
    })
  })
}

if (window.location.href.includes("formularz_zamowienia_pizza.html")) {
  document.addEventListener("DOMContentLoaded", adjustOrderFormForMobile)
}
