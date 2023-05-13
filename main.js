// Get the product list element
const productList = document.querySelector('.product-list');

// Add event listener for the Add to Cart button
productList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const product = event.target.parentElement;
    const productImg = product.querySelector('img').src;
    const productName = product.querySelector('h2').textContent;
    const productPrice = product.querySelector('p').textContent;

    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${productImg}" alt="${productName}" />
      <h3>${productName}</h3>
      <p>${productPrice}</p>
      <button class="remove-item">Remove</button>
    `;

    // Add the cart item element to the cart
    const cartItems = document.querySelector('.cart-items');
    cartItems.appendChild(cartItem);

    // Update the cart total
    updateCartTotal();
  }
});

// Add event listener for the Remove button
const cartItems = document.querySelector('.cart-items');
cartItems.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-item')) {
    const cartItem = event.target.parentElement;
    cartItem.remove();

    // Update the cart total
    updateCartTotal();
  }
});

// Update the cart total
function updateCartTotal() {
  const cartItems = document.querySelector('.cart-items');
  const cartItemPrices = cartItems.querySelectorAll('p');
  let total = 0;

  cartItemPrices.forEach((cartItemPrice) => {
    total += parseFloat(cartItemPrice.textContent.replace('$', ''));
  });

  const cartTotal = document.querySelector('.cart-total');
  cartTotal.textContent = `$${total.toFixed(2)}`;
}
const products = [
    {
      name: 'samsung tv',
      image: 'product1.jpg',
      description: 'mega offer',
      price: '300'
    },
    {
      name: 'sony tv',
      image: 'product2.jpg',
      description: 'great discount sale',
      price: '$100'
    },
    {
      name: 'redmi tv',
      image: 'product3.jpg',
      description: 'worth of price',
      price: '200'
    }
  ];
  
  const productContainer = document.getElementById('product-container');
  
  products.forEach(product => {
    const productBox = document.createElement('div');
    productBox.classList.add('product-box');
  
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productBox.appendChild(productImage);
  
    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productBox.appendChild(productName);
  
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productBox.appendChild(productDescription);
  
    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;
    productBox.appendChild(productPrice);
  
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    productBox.appendChild(addToCartButton);
  
    productContainer.appendChild(productBox);
  });
  