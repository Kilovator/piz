document.addEventListener("DOMContentLoaded", () => {
  // Toggle password visibility
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

  // Registration form handling
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

      // Validation
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

      // In a real application, you would send this data to a server
      // For demo purposes, we'll store it in localStorage
      const user = {
        name,
        email,
        phone,
        password: hashPassword(password), // In a real app, NEVER store passwords in localStorage
        newsletter,
        registeredAt: new Date().toISOString(),
      }

      // Check if user already exists
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const existingUser = users.find((u) => u.email === email)

      if (existingUser) {
        showNotification("Użytkownik z tym adresem email już istnieje", "error")
        return
      }

      // Save user
      users.push(user)
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(user))

      showNotification("Rejestracja zakończona pomyślnie!", "success")

      // Redirect to profile page after a short delay
      setTimeout(() => {
        window.location.href = "profile.html"
      }, 1500)
    })
  }

  // Login form handling
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const remember = document.getElementById("remember")?.checked

      // Validation
      if (!email || !password) {
        showNotification("Wypełnij wszystkie wymagane pola", "error")
        return
      }

      // In a real application, you would send this data to a server
      // For demo purposes, we'll check against localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const user = users.find((u) => u.email === email)

      if (!user || user.password !== hashPassword(password)) {
        showNotification("Nieprawidłowy email lub hasło", "error")
        return
      }

      // Save current user
      localStorage.setItem("currentUser", JSON.stringify(user))
      if (remember) {
        localStorage.setItem("rememberMe", "true")
      } else {
        localStorage.removeItem("rememberMe")
      }

      showNotification("Logowanie zakończone pomyślnie!", "success")

      // Redirect to profile page after a short delay
      setTimeout(() => {
        window.location.href = "profile.html"
      }, 1500)
    })
  }

  // Profile form handling
  const profileForm = document.getElementById("profileForm")
  if (profileForm) {
    // Load user data
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) {
      // Redirect to login if not logged in
      window.location.href = "login.html"
      return
    }

    // Fill profile form with user data
    document.getElementById("profileName").value = currentUser.name || ""
    document.getElementById("profileEmail").value = currentUser.email || ""
    document.getElementById("profilePhone").value = currentUser.phone || ""
    document.getElementById("profileBirthdate").value = currentUser.birthdate || ""
    document.getElementById("profileNewsletter").checked = currentUser.newsletter || false

    // Update user name in header and sidebar
    document.getElementById("userName").textContent = currentUser.name
    document.getElementById("profileUserName").textContent = currentUser.name
    document.getElementById("profileUserEmail").textContent = currentUser.email

    // Handle form submission
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("profileName").value
      const email = document.getElementById("profileEmail").value
      const phone = document.getElementById("profilePhone").value
      const birthdate = document.getElementById("profileBirthdate").value
      const currentPassword = document.getElementById("currentPassword").value
      const newPassword = document.getElementById("newPassword").value
      const newsletter = document.getElementById("profileNewsletter").checked

      // Validation
      if (!name || !email || !phone) {
        showNotification("Wypełnij wszystkie wymagane pola", "error")
        return
      }

      // Update user data
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const userIndex = users.findIndex((u) => u.email === currentUser.email)

      if (userIndex === -1) {
        showNotification("Wystąpił błąd. Spróbuj ponownie później.", "error")
        return
      }

      // Check if password change is requested
      if (currentPassword && newPassword) {
        if (users[userIndex].password !== hashPassword(currentPassword)) {
          showNotification("Obecne hasło jest nieprawidłowe", "error")
          return
        }

        users[userIndex].password = hashPassword(newPassword)
      }

      // Update other user data
      users[userIndex].name = name
      users[userIndex].phone = phone
      users[userIndex].birthdate = birthdate
      users[userIndex].newsletter = newsletter

      // If email changed, check if new email is available
      if (email !== currentUser.email) {
        const emailExists = users.some((u, idx) => idx !== userIndex && u.email === email)
        if (emailExists) {
          showNotification("Ten adres email jest już używany", "error")
          return
        }
        users[userIndex].email = email
      }

      // Save updated user data
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))

      // Update displayed user name
      document.getElementById("userName").textContent = name
      document.getElementById("profileUserName").textContent = name
      document.getElementById("profileUserEmail").textContent = email

      showNotification("Profil zaktualizowany pomyślnie!", "success")
    })
  }

  // Logout functionality
  const logoutButtons = document.querySelectorAll("#logoutButton, #sidebarLogoutButton")
  logoutButtons.forEach((button) => {
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault()

        // Remove current user from localStorage
        localStorage.removeItem("currentUser")
        if (!localStorage.getItem("rememberMe")) {
          // If "remember me" is not checked, remove all user data
          localStorage.removeItem("users")
        }

        showNotification("Wylogowano pomyślnie!", "success")

        // Redirect to login page after a short delay
        setTimeout(() => {
          window.location.href = "login.html"
        }, 1500)
      })
    }
  })

  // Check authentication status on protected pages
  const protectedPages = ["profile.html", "orders.html", "addresses.html"]
  const currentPage = window.location.pathname.split("/").pop()

  if (protectedPages.includes(currentPage)) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (!currentUser) {
      window.location.href = "login.html"
    }
  }

  // Helper functions
  function showNotification(message, type) {
    // Check if notification container exists
    let notificationContainer = document.querySelector(".notification-container")

    // Create container if it doesn't exist
    if (!notificationContainer) {
      notificationContainer = document.createElement("div")
      notificationContainer.className = "notification-container"
      document.body.appendChild(notificationContainer)

      // Add styles
      notificationContainer.style.position = "fixed"
      notificationContainer.style.top = "20px"
      notificationContainer.style.right = "20px"
      notificationContainer.style.zIndex = "9999"
    }

    // Create notification
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

    // Add styles
    notification.style.display = "flex"
    notification.style.alignItems = "center"
    notification.style.backgroundColor = type === "success" ? "#4caf50" : "#f44336"
    notification.style.color = "white"
    notification.style.padding = "15px"
    notification.style.borderRadius = "5px"
    notification.style.marginBottom = "10px"
    notification.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
    notification.style.animation = "slideIn 0.3s ease-out forwards"

    // Add notification to container
    notificationContainer.appendChild(notification)

    // Add close button functionality
    const closeButton = notification.querySelector(".notification-close")
    closeButton.addEventListener("click", () => {
      notification.style.animation = "slideOut 0.3s ease-out forwards"
      setTimeout(() => {
        notificationContainer.removeChild(notification)
      }, 300)
    })

    // Auto-remove after 5 seconds
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

  // Simple password hashing (NOT secure for production)
  function hashPassword(password) {
    // In a real application, use a proper hashing algorithm
    // This is just for demo purposes
    let hash = 0
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }
    return hash.toString(16)
  }

  // Add CSS for notifications
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
