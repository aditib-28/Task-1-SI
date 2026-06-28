const cartContainer = document.getElementById("cart-items");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let subtotal = 0;

cart.forEach(product => {

    subtotal += product.price;

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
    `;

    cartContainer.appendChild(card);

});

const tax = subtotal * 0.10;
const shipping = 10;
const total = subtotal + tax + shipping;

document.getElementById("subtotal").textContent = subtotal.toFixed(2);
document.getElementById("tax").textContent = tax.toFixed(2);
document.getElementById("shipping").textContent = shipping.toFixed(2);
document.getElementById("total").textContent = total.toFixed(2);