document.addEventListener("DOMContentLoaded", () => {

  const togglePasswordButtons = document.querySelectorAll(".toggle-password")
  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.previousElementSibling
      const icon = this.querySelector("i")

      if (input.type === "password") {
        input.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        input.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  })
  const registerForm = document.getElementById("registerForm")
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const password = document.getElementById("password").value
      const confirmPassword = document.getElementById("confirmPassword").value
      const terms = document.getElementById("terms").checked
      const newsletter = document.getElementById("newsletter").checked

      if (!name || !email || !phone || !password) {
        showNotification("Wypełnij wszystkie wymagane pola", "error")
        return
      }
      if (password !== confirmPassword) {
        showNotification("Hasła nie są identyczne", "error")
        return
      }
      if (!terms) {
        showNotification("Musisz zaakceptować regulamin", "error")
        return
      }
      const user = {
        name,
        email,
        phone,
        password: hashPassword(password), 
        newsletter,
        registeredAt: new Date().toISOString(),
      }
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const existingUser = users.find((u) => u.email === email)

      if (existingUser) {
        showNotification("Użytkownik z tym adresem email już istnieje", "error")
        return
      }
      users.push(user)
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(user))

      showNotification("Rejestracja zakończona pomyślnie!", "success")

      setTimeout(() => {
        window.location.href = "profile.html"
      }, 1500)
    })
  }
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const remember = document.getElementById("remember")?.checked

      if (!email || !password) {
        showNotification("Wypełnij wszystkie wymagane pola", "error")
        return
      }
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const user = users.find((u) => u.email === email)

      if (!user || user.password !== hashPassword(password)) {
        showNotification("Nieprawidłowy email lub hasło", "error")
        return
      }
      localStorage.setItem("currentUser", JSON.stringify(user))
      if (remember) {
        localStorage.setItem("rememberMe", "true")
      } else {
        localStorage.removeItem("rememberMe")
      }
      showNotification("Logowanie zakończone pomyślnie!", "success")

      setTimeout(() => {
        window.location.href = "profile.html"
      }, 1500)
    })
  }
  const profileForm = document.getElementById("profileForm")
  if (profileForm) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) {
      window.location.href = "login.html"
      return
    }
    document.getElementById("profileName").value = currentUser.name || ""
    document.getElementById("profileEmail").value = currentUser.email || ""
    document.getElementById("profilePhone").value = currentUser.phone || ""
    document.getElementById("profileBirthdate").value = currentUser.birthdate || ""
    document.getElementById("profileNewsletter").checked = currentUser.newsletter || false

    document.getElementById("userName").textContent = currentUser.name
    document.getElementById("profileUserName").textContent = currentUser.name
    document.getElementById("profileUserEmail").textContent = currentUser.email

    profileForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("profileName").value
      const email = document.getElementById("profileEmail").value
      const phone = document.getElementById("profilePhone").value
      const birthdate = document.getElementById("profileBirthdate").value
      const currentPassword = document.getElementById("currentPassword").value
      const newPassword = document.getElementById("newPassword").value
      const newsletter = document.getElementById("profileNewsletter").checked

      if (!name || !email || !phone) {
        showNotification("Wypełnij wszystkie wymagane pola", "error")
        return
      }
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const userIndex = users.findIndex((u) => u.email === currentUser.email)

      if (userIndex === -1) {
        showNotification("Wystąpił błąd. Spróbuj ponownie później.", "error")
        return
      }
      if (currentPassword && newPassword) {
        if (users[userIndex].password !== hashPassword(currentPassword)) {
          showNotification("Obecne hasło jest nieprawidłowe", "error")
          return
        }
        users[userIndex].password = hashPassword(newPassword)
      }
      users[userIndex].name = name
      users[userIndex].phone = phone
      users[userIndex].birthdate = birthdate
      users[userIndex].newsletter = newsletter

      if (email !== currentUser.email) {
        const emailExists = users.some((u, idx) => idx !== userIndex && u.email === email)
        if (emailExists) {
          showNotification("Ten adres email jest już używany", "error")
          return
        }
        users[userIndex].email = email
      }
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))

      document.getElementById("userName").textContent = name
      document.getElementById("profileUserName").textContent = name
      document.getElementById("profileUserEmail").textContent = email

      showNotification("Profil zaktualizowany pomyślnie!", "success")
    })
  }

  const logoutButtons = document.querySelectorAll("#logoutButton, #sidebarLogoutButton")
  logoutButtons.forEach((button) => {
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.removeItem("currentUser")
        if (!localStorage.getItem("rememberMe")) {
      
          localStorage.removeItem("users")
        }

        showNotification("Wylogowano pomyślnie!", "success")

    
        setTimeout(() => {
          window.location.href = "login.html"
        }, 1500)
      })
    }
  })

  const protectedPages = ["profile.html", "orders.html", "addresses.html"]
  const currentPage = window.location.pathname.split("/").pop()

  if (protectedPages.includes(currentPage)) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) {
      window.location.href = "login.html"
    }
  }

  function showNotification(message, type) {
   
    let notificationContainer = document.querySelector(".notification-container")

    if (!notificationContainer) {
      notificationContainer = document.createElement("div")
      notificationContainer.className = "notification-container"
      document.body.appendChild(notificationContainer)

      notificationContainer.style.position = "fixed"
      notificationContainer.style.top = "20px"
      notificationContainer.style.right = "20px"
      notificationContainer.style.zIndex = "9999"
    }
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
            </div>
            <div class="notification-content">
                <p>${message}</p>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `

    notification.style.display = "flex"
    notification.style.alignItems = "center"
    notification.style.backgroundColor = type === "success" ? "#4caf50" : "#f44336"
    notification.style.color = "white"
    notification.style.padding = "15px"
    notification.style.borderRadius = "5px"
    notification.style.marginBottom = "10px"
    notification.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
    notification.style.animation = "slideIn 0.3s ease-out forwards"
    notificationContainer.appendChild(notification)

    const closeButton = notification.querySelector(".notification-close")
    closeButton.addEventListener("click", () => {
      notification.style.animation = "slideOut 0.3s ease-out forwards"
      setTimeout(() => {
        notificationContainer.removeChild(notification)
      }, 300)
    })
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = "slideOut 0.3s ease-out forwards"
        setTimeout(() => {
          if (notification.parentNode) {
            notificationContainer.removeChild(notification)
          }
        }, 300)
      }
    }, 5000)
  }
  function hashPassword(password) {
   
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }
    return hash.toString(16)
  }
  const style = document.createElement("style")
  style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
        }
        
        .notification {
            display: flex;
            align-items: center;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            animation: slideIn 0.3s ease-out forwards;
        }
        
        .notification.success {
            background-color: #4caf50;
            color: white;
        }
        
        .notification.error {
            background-color: #f44336;
            color: white;
        }
        
        .notification-icon {
            margin-right: 15px;
            font-size: 24px;
        }
        
        .notification-content {
            flex: 1;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.3s;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
    `
  document.head.appendChild(style)
})
