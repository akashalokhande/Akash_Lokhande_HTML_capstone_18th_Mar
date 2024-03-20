function addToOrder(title, image, price) {
  let orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];
  orderItems.push({ title: title, image: image, price: price });
  localStorage.setItem("orderItems", JSON.stringify(orderItems));
  window.location.assign("placeorder.html");
}

function addToCart(title, image, price) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ title: title, image: image, price: price });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Product added to cart!");
}

function toggleFavorite(button, name, image, price) {
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  var index = favorites.findIndex((item) => item.name === name);
  if (index === -1) {
    // Product not in favorites, add it
    favorites.push({ name: name, image: image, price: price });
    button.classList.add("favorite");
  } else {
    // Product already in favorites, remove it
    favorites.splice(index, 1);
    button.classList.remove("favorite");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Function to set the color of 'Favorite' button based on favorited status
function setFavoriteButtonColor() {
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  console.log(favorites);
  var buttons = document.querySelectorAll(".favorite-button");
  console.log(buttons);
  buttons.forEach(function (button) {
    var productName =
      button.parentNode.parentNode.querySelector(".card-title").innerText;
    console.log(productName);
    var index = favorites.findIndex((item) => item.name === productName);
    if (index !== -1) {
      // Product is favorited, add 'favorite' class to change color
      button.classList.add("favorite");
    }
  });
}

// Set the color of 'Favorite' buttons when the page loads
window.onload = function () {
  setFavoriteButtonColor();
};

function toggleAddToCartButton() {
  // Get all checkboxes with the class "product-checkbox"
  let checkboxes = document.querySelectorAll(".product-checkbox");
  let addButton = document.getElementById("addToCartButton");

  // Loop through all checkboxes
  let anyCheckboxChecked = false;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      anyCheckboxChecked = true;
    }
  });

  // Show or hide the "Add to Cart" button based on the selection status
  if (anyCheckboxChecked) {
    addButton.style.display = "block";
  } else {
    addButton.style.display = "none";
  }
}

// Call the toggleAddToCartButton function whenever a checkbox is clicked
document.querySelectorAll(".product-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("click", toggleAddToCartButton);
});

// Function to add selected products to the cart and save them in local storage
function addToCartSelected() {
  // Get all checkboxes with the class "product-checkbox"
  let checkboxes = document.querySelectorAll(".product-checkbox");
  let selectedItems = [];

  // Loop through all checkboxes
  checkboxes.forEach((checkbox) => {
    // If checkbox is checked
    if (checkbox.checked) {
      // Get the card element associated with the checkbox
      let card = checkbox.closest(".card");
      // Get product details from the card
      let title = card.querySelector(".card-title").textContent.trim();
      let image = card.querySelector("img").getAttribute("src");
      let price = card.querySelector(".data-price").textContent.trim();
      console.log(price);
      // Add product details to selectedItems array
      selectedItems.push({ title: title, image: image, price: price });
    }
  });

  // Store the selected items in local storage
  localStorage.setItem("cartItems", JSON.stringify(selectedItems));

  // Display alert or perform any other action as needed
  alert("Selected items added to cart!");
  location.reload();
}

