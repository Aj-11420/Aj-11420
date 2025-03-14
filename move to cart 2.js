document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update cart count on page load
    cartCount.textContent = cart.length;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = productElement.querySelector('p').textContent.replace('₹', '');

            // Add product to cart
            const product = {
                name: productName,
                price: productPrice
            };
            cart.push(product);

            // Update cart count and localStorage
            cartCount.textContent = cart.length;
            localStorage.setItem('cart', JSON.stringify(cart));

            // Provide feedback to the user
            alert(`${productName} added to cart!`);
        });
    });
});
