// Обработчики для форм авторизации и регистрации
document.addEventListener("DOMContentLoaded", () => {
  // Обработка формы регистрации
  const registerForm = document.getElementById("registerForm")
  if (registerForm) {
    // Инициализация полей формы
    initFormFields(registerForm)

    // Обработка отправки формы регистрации
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Получаем значения полей
      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const phone = document.getElementById("phone").value.trim()
      const password = document.getElementById("password").value
      const confirmPassword = document.getElementById("confirmPassword").value
      const termsAccepted = document.getElementById("terms").checked

      // Валидация формы
      let isValid = true

      // Проверка имени
      if (!name) {
        showError("name", "Proszę podać imię i nazwisko")
        isValid = false
      } else {
        hideError("name")
      }

      // Проверка email
      if (!email || !isValidEmail(email)) {
        showError("email", "Proszę podać prawidłowy adres e-mail")
        isValid = false
      } else {
        hideError("email")
      }

      // Проверка телефона
      if (!phone || !isValidPhone(phone)) {
        showError("phone", "Proszę podać prawidłowy numer telefonu")
        isValid = false
      } else {
        hideError("phone")
      }

      // Проверка пароля
      if (!password || password.length < 6) {
        showError("password", "Hasło musi zawierać co najmniej 6 znaków")
        isValid = false
      } else {
        hideError("password")
      }

      // Проверка подтверждения пароля
      if (password !== confirmPassword) {
        showError("confirmPassword", "Hasła nie są identyczne")
        isValid = false
      } else {
        hideError("confirmPassword")
      }

      // Проверка принятия условий
      if (!termsAccepted) {
        showError("terms", "Proszę zaakceptować regulamin i politykę prywatności")
        isValid = false
      } else {
        hideError("terms")
      }

      // Если форма валидна, отправляем данные
      if (isValid) {
        // В реальном приложении здесь был бы запрос к серверу
        // Для демонстрации просто показываем сообщение об успехе
        showSuccessMessage("Rejestracja zakończona pomyślnie! Możesz się teraz zalogować.")

        // Перенаправление на страницу входа через 2 секунды
        setTimeout(() => {
          window.location.href = "login.html"
        }, 2000)
      }
    })
  }

  // Обработка формы входа
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    // Инициализация полей формы
    initFormFields(loginForm)

    // Обработка отправки формы входа
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Получаем значения полей
      const email = document.getElementById("email").value.trim()
      const password = document.getElementById("password").value
      const rememberMe = document.getElementById("rememberMe")?.checked || false

      // Валидация формы
      let isValid = true

      // Проверка email
      if (!email || !isValidEmail(email)) {
        showError("email", "Proszę podać prawidłowy adres e-mail")
        isValid = false
      } else {
        hideError("email")
      }

      // Проверка пароля
      if (!password) {
        showError("password", "Proszę podać hasło")
        isValid = false
      } else {
        hideError("password")
      }

      // Если форма валидна, отправляем данные
      if (isValid) {
        // В реальном приложении здесь был бы запрос к серверу
        // Для демонстрации просто показываем сообщение об успехе
        showSuccessMessage("Logowanie zakończone pomyślnie!")

        // Перенаправление на главную страницу через 2 секунды
        setTimeout(() => {
          window.location.href = "index.html"
        }, 2000)
      }
    })
  }

  // Обработчики для кнопок показа/скрытия пароля
  const togglePasswordButtons = document.querySelectorAll(".toggle-password")
  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentElement.querySelector("input")
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
})

// Инициализация полей формы
function initFormFields(form) {
  const inputs = form.querySelectorAll("input:not([type='checkbox'])")

  inputs.forEach((input) => {
    // Добавляем обработчик фокуса
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused")
    })

    // Добавляем обработчик потери фокуса
    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("focused")
      }
    })

    // Устанавливаем начальное состояние
    if (input.value) {
      input.parentElement.classList.add("focused")
    }
  })
}

// Функция для отображения ошибки
function showError(inputId, message) {
  const input = document.getElementById(inputId)
  const errorElement = document.getElementById(`${inputId}-error`)

  if (input) {
    input.classList.add("error")
  }

  if (errorElement) {
    errorElement.textContent = message
    errorElement.style.display = "block"
  } else {
    // Если элемента ошибки нет, создаем его
    const newErrorElement = document.createElement("div")
    newErrorElement.id = `${inputId}-error`
    newErrorElement.className = "error-message"
    newErrorElement.textContent = message

    if (input && input.parentElement) {
      input.parentElement.appendChild(newErrorElement)
    }
  }
}

// Функция для скрытия ошибки
function hideError(inputId) {
  const input = document.getElementById(inputId)
  const errorElement = document.getElementById(`${inputId}-error`)

  if (input) {
    input.classList.remove("error")
  }

  if (errorElement) {
    errorElement.style.display = "none"
  }
}

// Функция для отображения сообщения об успехе
function showSuccessMessage(message) {
  // Проверяем, существует ли уже элемент сообщения
  let successElement = document.querySelector(".success-message")

  if (!successElement) {
    // Создаем новый элемент
    successElement = document.createElement("div")
    successElement.className = "success-message"
    document.body.appendChild(successElement)
  }

  // Устанавливаем сообщение и показываем элемент
  successElement.textContent = message
  successElement.style.display = "block"

  // Скрываем сообщение через 5 секунд
  setTimeout(() => {
    successElement.style.display = "none"
  }, 5000)
}

// Функция для валидации email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Функция для валидации телефона
function isValidPhone(phone) {
  // Простая проверка: не менее 9 цифр
  const phoneRegex = /^[0-9+\s()-]{9,}$/
  return phoneRegex.test(phone)
}
