// Retrieve orders from local storage
let orders = JSON.parse(localStorage.getItem("orders"));

// Check if there are any orders
if (orders && orders.length > 0) {
    // Get the container where orders will be displayed
    let ordersContainer = document.getElementById("orders-container");

    // Loop through each order
    orders.forEach(function(order, index) {
        // Create a div element for the order
        let orderDiv = document.createElement("div");
        orderDiv.classList.add("order");

        // Set order details as inner HTML of the div
        orderDiv.innerHTML = "<h3>Order " + (index + 1) + "</h3>" +
                             "<p>Name: " + order.name + "</p>" +
                             "<p>Email: " + order.email + "</p>" +
                             "<p>Phone: " + order.phone + "</p>" +
                             "<p>Address: " + order.address + "</p>" +
                             "<p>Pincode: " + order.pincode + "</p>" +
                             "<h4>Product Details:</h4>";

        // Create an unordered list for product details
        let productList = document.createElement("ul");

        // Loop through each product in the order and add it to the list
        order.orderItems.forEach(function(product) {
            // Create a list item for the product
            let listItem = document.createElement("li");

            // Product Details Container
            let productDetailsDiv = document.createElement("div");
            productDetailsDiv.classList.add("product-details");

            // Product Image Container
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("product-img-container");

            // Product Image
            let img = document.createElement("img");
            img.src = product.image;
            img.alt = product.name;
            img.classList.add("product-image");

            // Product Details Container
            let detailsContainer = document.createElement("div");
            detailsContainer.classList.add("product-text-container");

            // Product Name
            let productName = document.createElement("p");
            productName.textContent = "Product: " + product.title;
            productName.classList.add("product-name");

            // Product Price
            let productPrice = document.createElement("p");
            productPrice.textContent = "Price: " + product.price;
            productPrice.classList.add("product-price");

            // Product Quantity
            // let productQuantity = document.createElement("p");
            // productQuantity.textContent = "Quantity: " + product.quantity;
            // productQuantity.classList.add("product-quantity");

            // Append product image to the image container
            imgContainer.appendChild(img);

            // Append product details to the details container
            detailsContainer.appendChild(productName);
            detailsContainer.appendChild(productPrice);
            // detailsContainer.appendChild(productQuantity);

            // Append image container and details container to the product details div
            productDetailsDiv.appendChild(imgContainer);
            productDetailsDiv.appendChild(detailsContainer);

            // Append the product details div to the list item
            listItem.appendChild(productDetailsDiv);

            // Append the list item to the product list
            productList.appendChild(listItem);
        });

        // Append the product list to the order div
        orderDiv.appendChild(productList);

        // Add the order div to the container
        ordersContainer.appendChild(orderDiv);
    });
} else {
    // Display a message if there are no orders
    let noOrdersMessage = document.createElement("p");
    noOrdersMessage.textContent = "No orders found.";
    document.body.appendChild(noOrdersMessage);
}
