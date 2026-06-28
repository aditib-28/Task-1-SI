
const productContainer=document.getElementById('products');
fetch("https://dummyjson.com/products?limit=194")
.then(response=>response.json())
.then(data=>{displayProducts(data.products);})
.catch(error=>{console.log("Error:",error);

});

function displayProducts(products){
    products.forEach(product=>{
        const card=document.createElement("div");
        card.className="product-card";
        card.innerHTML=`<img src="${product.thumbnail}" alt="${product.title}"><h3>${product.title}</h3><p>${product.price}$ </p> <p> ${product.rating}⭐ </p>
        <button onclick="viewProduct(${product.id})" > View Details</button>`;
        productContainer.appendChild(card);

    });
}
function viewProduct(id){
    window.location.href=`product.html?id=${id}`;
}
