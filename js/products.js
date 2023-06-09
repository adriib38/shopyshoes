//====
//Add product to cart popup
//====
const msgNotification = document.getElementById('msg-notification');
const btns_addToCart = document.querySelectorAll('.btn-add-to-cart');
btns_addToCart.forEach(btn => {
    btn.addEventListener('click', () => {
        showNotification();
    });
}); 

function showNotification() {
    msgNotification.classList.add('show');
    setTimeout(() => {
        msgNotification.classList.remove('show');
    }, 2000);
}

//====
//Add ONE product to cart animation
//====
const img_addCircle = document.querySelectorAll('.add-circle');
img_addCircle.forEach(img => {
    img.addEventListener('click', () => {

        let cardProduct = img.parentElement.parentElement;

        cardProduct.classList.add('add-one-cart');
        setTimeout(() => {
            cardProduct.classList.remove('add-one-cart');
        }, 2000);
    });
});

//====
//Remove ONE product to cart animation
//====
const img_removeCircle = document.querySelectorAll('.remove-circle');
img_removeCircle.forEach(img => {
    img.addEventListener('click', () => {

        let cardProduct = img.parentElement.parentElement;

        cardProduct.classList.add('remove-one-cart');
        setTimeout(() => {
            cardProduct.classList.remove('remove-one-cart');
        }, 2000);
    });
});

//====
//Filter products by name
//====
const input_filterProduct = document.getElementById("input-filter-product");
const box_deckProducts = document.getElementById("deck-products");   

input_filterProduct.addEventListener("keyup", function () {
    let filterValue = input_filterProduct.value.toUpperCase();
    articles = box_deckProducts.getElementsByTagName("article");
    for (i = 0; i < articles.length; i++) {
        article = articles[i];
        titleProduct = article.getElementsByTagName("h2")[0].innerText;
        if (titleProduct.toUpperCase().indexOf(filterValue) > -1) {
            article.style.display = "";
        } else {
            article.style.display = "none";
        }
    }
});


//====
//Filter products by price
//====
const range_price = document.getElementById("range-price");
const box_porductsPrice = document.querySelectorAll(".product-price");
const box_maxPrice = document.getElementById("max-price");
let prices = [];
box_porductsPrice.forEach(product => {
    let price = product.innerText;
    let priceBTC= price.replace("BTC", "");
    prices.push(priceBTC);
    
});

let mostExpensive = Math.max.apply(Math, prices);
let cheapest = Math.min.apply(Math, prices);

range_price.min = cheapest;
range_price.max = mostExpensive;
range_price.value = mostExpensive;
range_price.step = 0.0001;

range_price.addEventListener("change", function () {
    box_maxPrice.innerText = range_price.value + " BTC";
    for (i = 0; i < box_porductsPrice.length; i++) {
        let price = box_porductsPrice[i].innerText;
        let priceBTC= price.replace("BTC", "");
        if (priceBTC <= range_price.value) {
            box_porductsPrice[i].parentElement.style.display = "";
        } else {
            box_porductsPrice[i].parentElement.style.display = "none";
        }
    }
});