document.getElementById("place-order").addEventListener("click", function() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Save order data in localStorage (simulate saving order)
  localStorage.setItem("latestOrder", JSON.stringify(cartItems));

  // Clear the cart
  localStorage.removeItem("cart");

  // Redirect to receipt page
  window.location.href = "receipt.html";
});

