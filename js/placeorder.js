document.getElementById("order-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;

  // Retrieve product details from localStorage
  var orderItems = JSON.parse(localStorage.getItem("orderItems"));

  // Create object to store order data
  var orderData = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    pincode: pincode,
    orderItems: orderItems || [], // Ensure orderItems is an array
  };

  // Retrieve existing orders or initialize an empty array
  var orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Add the new order to the array
  orders.push(orderData);

  // Save the updated orders array to local storage
  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear form fields
  document.getElementById("order-form").reset();

  // Clear order items after submitting
  localStorage.removeItem("orderItems");

  // Display success message
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  setTimeout(function () {
    window.location.href = "home.html"; // Change 'home.html' to your actual home page URL
  }, 1000);
});



