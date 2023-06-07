class Product {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price;
    }
}

let p1 = new Product("Shoes Pro Max", "Black", 0.030);
let p2 = new Product("Shoes Pro Max 2", "White", 0.090);
let p3 = new Product("Mart", "Red", 0.050);
let p4 = new Product("Saturn", "Blue", 0.070);
let p5 = new Product("Shoes Pro Max 3", "Green", 0.080);
let p6 = new Product("Nepal", "Yellow", 0.060);
let p7 = new Product("Infinity", "Orange", 0.040);
let p8 = new Product("AirMap", "Purple", 0.020);
let p9 = new Product("AirMap 2", "Pink", 0.010);
let p10 = new Product("Nature", "Brown", 0.100);

let products = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

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
