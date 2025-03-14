document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const upiPayment = document.getElementById('upi-payment');
    const cardPayment = document.getElementById('card-payment');

    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.value === 'UPI') {
                upiPayment.style.display = 'block';
                cardPayment.style.display = 'none';
            } else if (method.value === 'Card') {
                upiPayment.style.display = 'none';
                cardPayment.style.display = 'block';
            } else {
                upiPayment.style.display = 'none';
                cardPayment.style.display = 'none';
            }
        });
    });

    const billingForm = document.getElementById('billing-form');
    billingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your order has been placed successfully!');
        // You can add further form submission logic here
    });
});
