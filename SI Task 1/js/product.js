const productContainer=document.getElementById("product-details");
const params=new URLSearchParams(window.location.search);
const id=params.get("id");
fetch(`https://dummyjson.com/products/${id}`)
.then(response=>response.json())
.then(product=>{displayProduct(product);})
.catch(error=>{console.log("Error:",error);
});
function displayProduct(product) {
    productContainer.innerHTML = `
        <div class="product-detail">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p><strong>Price:</strong> ₹${product.price}</p>
            <p><strong>Rating:</strong> ⭐ ${product.rating}</p>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
            <p>${product.description}</p>
            <button onclick="addToCart()">Add To Cart</button>
        </div>`;
    window.currentProduct = product;
}
function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(window.currentProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}