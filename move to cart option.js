document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.getAttribute('data-name');
            const productPrice = productElement.getAttribute('data-price');

            // Add product to cart
            const product = {
                name: productName,
                price: productPrice
            };
            cart.push(product);

            // Update cart count
            cartCount.textContent = cart.length;

            // Provide feedback to the user
            alert(`${productName} added to cart!`);
        });
    });

    // Add click event to cart link to view cart contents
    const cartLink = document.getElementById('cart-link');
    cartLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`Cart contains:\n` + cart.map(product => `${product.name} - ₹${product.price}`).join('\n'));
    });
});