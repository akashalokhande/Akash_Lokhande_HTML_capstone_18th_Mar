document.addEventListener("DOMContentLoaded", function () {
  displayCartItems();

  document.getElementById("clear-cart").addEventListener("click", function () {
    localStorage.removeItem("cartItems");
    displayCartItems();
  });
});

function displayCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");

  cartItemsContainer.innerHTML = "";

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  if (cartItems.length === 0) {
    document.getElementById("clear-cart").classList.add("empty");

    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.forEach(function (item, index) {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.title;

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");

    const itemName = document.createElement("h3");
    itemName.textContent = item.title;

    const itemPrice = document.createElement("p");
    itemPrice.textContent = "$" + item.price;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", function () {
      removeFromCart(index);
    });

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);

    cartItemElement.appendChild(itemImage);
    cartItemElement.appendChild(itemInfo);
    cartItemElement.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItemElement);
  });
}

function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCartItems();
}
