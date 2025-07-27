document.getElementById('place-order').addEventListener('click', function () {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  // Store cart data
  localStorage.setItem('wishlistCart', JSON.stringify(cart));
  localStorage.setItem('lastOrder', JSON.stringify(cart));
  
  // Redirect to checkout page
  window.location.href = 'checkout.html';
});
