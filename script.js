// Pizza data
const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "Pizza z sosem pomidorowym, mozzarellą i świeżą bazyliąith",
    price: 35.99,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Sos pomidorowy, mozzarella i pikantne plasterki pepperoni",
    price: 37.99,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "Sos pomidorowy, mozzarella, papryka, pieczarki i oliwki",
    price: 38.99,
    image:
      "https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
  },
  {
    id: 4,
    name: "Hawaiian",
    description: "Sos pomidorowy, mozzarella, szynka i ananas",
    price: 36.99,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
  },
  {
    id: 5,
    name: "Meat Lovers",
    description: "Sos pomidorowy, mozzarella, pepperoni, kiełbasa, boczek i mielona wołowina",
    price: 38.99,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
  },
  {
    id: 6,
    name: "BBQ Chicken",
    description: "Sos BBQ, sos śmietanowy, mozzarella, grillowany kurczak, czerwona cebula, świeżą bazyliąith",
    price: 37.99,
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "pizza",
  },
  {
    id: 7,
    name: "Carbonara",
    description: "Sos śmietanowy, boczek, mozzarella, jajko, mozzarella, oregano",
    price: 37.99,
    image: "https://www.pizzatales.it/wp50/wp-content/uploads/2021/10/la-pizza-alla-carbonara.jpg",
    type: "pizza",
  },
  {
    id: 8,
    name: "Mexican",
    description: "Sos pomidorowy, mozzarella, oliwki, papryka, salami, peczarki, pomidory",
    price: 38.99,
    image: "https://sushiholl.com.ua/wp-content/uploads/pizza-suprema.jpg",
    type: "pizza",
  },
  {
    id: 9,
    name: "4 cheeze",
    description: "Sos pomidorowy, mozzarella, ser feta, ser pleśniawy ",
    price: 36.99,
    image: "https://xn----8sbtijjjbaolrt0e.com/image/cache/catalog/photo_2020-09-08_09-28-24-637x637.jpg",
    type: "pizza",
  },
]

// Drinks data
const drinks = [
  {
    id: 1,
    name: "Cola",
    description: "Klasyczna cola, orzeźwiający napój gazowany",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 2,
    name: "Sprite",
    description: "Orzeźwiający napój cytrynowo-limonkowy",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 3,
    name: "Woda mineralna",
    description: "Naturalna woda mineralna, gazowana lub niegazowana",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 4,
    name: "Sok pomarańczowy",
    description: "Świeżo wyciskany sok z pomarańczy",
    price: 10.99,
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 5,
    name: "Piwo rzemieślnicze",
    description: "Lokalne piwo rzemieślnicze, różne rodzaje",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
  {
    id: 6,
    name: "Kawa",
    description: "Świeżo parzona kawa, espresso lub americano",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "drink",
  },
]

// Appetizers data
const appetizers = [
  {
    id: 1,
    name: "Bruschetta",
    description: "Grzanki z pomidorami, czosnkiem, bazylią i oliwą z oliwek",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 2,
    name: "Krążki cebulowe",
    description: "Chrupiące krążki cebulowe podawane z sosem",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 3,
    name: "Frytki",
    description: "Złociste frytki z ziemniaków, podawane z ketchupem",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 4,
    name: "Skrzydełka kurczaka",
    description: "Pikantne skrzydełka kurczaka z sosem BBQ lub Buffalo",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 5,
    name: "Paluszki serowe",
    description: "Chrupiące paluszki z mozzarelli, podawane z sosem marinara",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
  {
    id: 6,
    name: "Sałatka Caprese",
    description: "Świeża mozzarella, pomidory i bazylia z oliwą z oliwek",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    type: "appetizer",
  },
]

// DOM elements
const pizzaMenu = document.getElementById("pizza-menu")
const drinksMenu = document.getElementById("drinks-menu")
const appetizersMenu = document.getElementById("appetizers-menu")
const cartIcon = document.getElementById("cart-icon")
const cartContainer = document.getElementById("cart-container")
const closeCart = document.getElementById("close-cart")
const cartItems = document.getElementById("cart-items")
const cartCount = document.getElementById("cart-count")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const tabs = document.querySelectorAll(".tab")
const tabContents = document.querySelectorAll(".tab-content")

// Cart data
let cart = []

// Display items in menu
function displayItems(items, container, itemType) {
  container.innerHTML = ""

  items.forEach((item) => {
    const itemElement = document.createElement("div")
    itemElement.classList.add(`${itemType}-item`)

    itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="${itemType}-img">
            <div class="${itemType}-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="${itemType}-price">${item.price.toFixed(2)} zł</div>
                <button class="add-to-cart" data-id="${item.id}" data-type="${item.type}">Dodać do koszyka</button>
            </div>
        `

    container.appendChild(itemElement)
  })
}

// Add to cart function
function addToCart(event) {
  const itemId = Number.parseInt(event.target.dataset.id)
  const itemType = event.target.dataset.type

  let itemsArray
  if (itemType === "pizza") {
    itemsArray = pizzas
  } else if (itemType === "drink") {
    itemsArray = drinks
  } else if (itemType === "appetizer") {
    itemsArray = appetizers
  }

  const item = itemsArray.find((i) => i.id === itemId)

  // Check if item is already in cart
  const existingItem = cart.find((cartItem) => cartItem.id === itemId && cartItem.type === itemType)

  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      type: item.type,
      quantity: 1,
    })
  }

  updateCart()

  // Show cart
  cartContainer.classList.add("active")
}

// Update cart display
function updateCart() {
  // Update cart count
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  cartCount.textContent = totalItems

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Twój koszyk jest pusty</div>'
  } else {
    cartItems.innerHTML = ""

    cart.forEach((item) => {
      const cartItemElement = document.createElement("div")
      cartItemElement.classList.add("cart-item")

      cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} zł</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn decrease" data-id="${item.id}" data-type="${item.type}">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}" data-type="${item.type}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}" data-type="${item.type}">
                    <i class="fas fa-trash"></i>
                </button>
            `

      cartItems.appendChild(cartItemElement)
    })
  }

  // Update cart total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = `${total.toFixed(2)} zł`

  // Add event listeners to cart item buttons
  const decreaseButtons = document.querySelectorAll(".decrease")
  const increaseButtons = document.querySelectorAll(".increase")
  const removeButtons = document.querySelectorAll(".remove-item")

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", decreaseQuantity)
  })

  increaseButtons.forEach((button) => {
    button.addEventListener("click", increaseQuantity)
  })

  removeButtons.forEach((button) => {
    button.addEventListener("click", removeItem)
  })
}

// Decrease quantity
function decreaseQuantity(event) {
  const itemId = Number.parseInt(event.target.dataset.id)
  const itemType = event.target.dataset.type
  const item = cart.find((item) => item.id === itemId && item.type === itemType)

  if (item.quantity > 1) {
    item.quantity--
  } else {
    cart = cart.filter((item) => !(item.id === itemId && item.type === itemType))
  }

  updateCart()
}

// Increase quantity
function increaseQuantity(event) {
  const itemId = Number.parseInt(event.target.dataset.id)
  const itemType = event.target.dataset.type
  const item = cart.find((item) => item.id === itemId && item.type === itemType)

  item.quantity++
  updateCart()
}

// Remove item
function removeItem(event) {
  const itemId = Number.parseInt(event.target.closest(".remove-item").dataset.id)
  const itemType = event.target.closest(".remove-item").dataset.type
  cart = cart.filter((item) => !(item.id === itemId && item.type === itemType))
  updateCart()
}

// Tab switching
function switchTab() {
  const tabId = this.getAttribute("data-tab")

  // Remove active class from all tabs and contents
  tabs.forEach((tab) => tab.classList.remove("active"))
  tabContents.forEach((content) => content.classList.remove("active"))

  // Add active class to current tab and content
  this.classList.add("active")
  document.getElementById(`${tabId}-menu`).classList.add("active")
}

// Event Listeners
cartIcon.addEventListener("click", () => {
  cartContainer.classList.add("active")
})

closeCart.addEventListener("click", () => {
  cartContainer.classList.remove("active")
})

checkoutBtn.addEventListener("click", () => {
  if (cart.length > 0) {
    window.location.href = 'formularz_zamowienia_pizza.html'
    cart = []
    updateCart()
    cartContainer.classList.remove("active")
  } else {
    alert("Twój koszyk jest pusty. Proszę dodać produkty przed przejściem do kasy.")
  }
})

tabs.forEach((tab) => {
  tab.addEventListener("click", switchTab)
})

// Initialize
function init() {
  displayItems(pizzas, pizzaMenu, "pizza")
  displayItems(drinks, drinksMenu, "drink")
  displayItems(appetizers, appetizersMenu, "appetizer")

  // Add event listeners to "Add to Cart" buttons
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
      addToCart(event)
    }
  })

  updateCart()
}

// Run initialization when DOM is fully loaded
document.addEventListener("DOMContentLoaded", init)
