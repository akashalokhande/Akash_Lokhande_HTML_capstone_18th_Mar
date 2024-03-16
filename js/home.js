function addToCart(title, image, price) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ title: title, image: image, price: price });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Product added to cart!");
}

function addToOrder(title, image, price) {
  let orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];
  orderItems.push({ title: title, image: image, price: price });
  localStorage.setItem("orderItems", JSON.stringify(orderItems));
  window.location.assign("placeorder.html")
}

// Function to toggle product as favorite
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
