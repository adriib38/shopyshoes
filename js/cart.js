
const select_paymentMethod = document.getElementById('select-payment-method');
const form_creditCard = document.getElementById('form-credit-card');
const form_bitcoin = document.getElementById('form-bitcoin');

select_paymentMethod.addEventListener('change', () => {
    console.log(select_paymentMethod.value);
    if(select_paymentMethod.value == "cc") {
        form_creditCard.style.display = "block";
        form_bitcoin.style.display = "none";
    }

    if(select_paymentMethod.value == "BTC") {
        form_bitcoin.style.display = "block";
        form_creditCard.style.display = "none";
    }
});
