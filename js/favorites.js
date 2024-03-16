 // Function to load and display favorite products from local storage
 function loadFavorites() {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    var favoritesList = document.getElementById("favorites-list");

    // Clear the existing list
    favoritesList.innerHTML = "";

    // Populate the list with favorite products
    favorites.forEach(function (item) {
      var li = document.createElement("li");
      li.classList.add("favorite-item"); // Add a class for styling
      li.innerHTML = `
  <img src="${item.image}" alt="${item.name}" class="product-image">
  <div class="product-info">
    <span class="product-name">${item.name}</span>
    <span class="product-price">$${item.price.toFixed(2)}</span>
    <button class="remove-button" onclick="removeFromFavorites('${
      item.name
    }')">Remove</button>
  </div>
`;
      favoritesList.appendChild(li);
    });
  }

  // Function to remove a product from favorites
  function removeFromFavorites(name) {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    var updatedFavorites = favorites.filter((item) => item.name !== name);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    loadFavorites(); // Refresh the favorites list
  }

  // Load and display favorite products when the page loads
  window.onload = function () {
    loadFavorites();
  };