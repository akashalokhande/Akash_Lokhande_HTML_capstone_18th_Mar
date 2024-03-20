document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((productCard) => {
    productCard.addEventListener("mouseenter", function () {
      const popup = this.querySelector(".popup");
      popup.classList.remove("hidden");
    });

    productCard.addEventListener("mouseleave", function () {
      const popup = this.querySelector(".popup");
      popup.classList.add("hidden");
    });
  });
});

function redirectToProductPage() {
  window.location.href = "shopping.html";
}
