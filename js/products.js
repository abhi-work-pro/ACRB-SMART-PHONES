// ===============================
// ACRB Smart Phones - Products JS
// ===============================

// Cart & Wishlist
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// -------------------------------
// Add To Cart
// -------------------------------
function addToCart(name, price) {

    const product = {
        name: name,
        price: price,
        quantity: 1
    };

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to Cart 🛒");
}

// -------------------------------
// Wishlist
// -------------------------------
function addToWishlist(name) {

    if (!wishlist.includes(name)) {

        wishlist.push(name);

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        alert(name + " added to Wishlist ❤️");

    } else {

        alert("Already in Wishlist ❤️");

    }

}

// -------------------------------
// Buy Now
// -------------------------------
function buyNow() {

    window.location.href = "checkout.html";

}

// -------------------------------
// Search
// -------------------------------
const searchBox = document.querySelector(".search input");

if(searchBox){

searchBox.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

}

// -------------------------------
// Cart Count
// -------------------------------
function updateCartCount(){

    let count = 0;

    cart.forEach(item=>{

        count += item.quantity;

    });

    let cartLink = document.querySelector('a[href="cart.html"]');

    if(cartLink){

        cartLink.innerHTML = "Cart ("+count+")";

    }

}

updateCartCount();

// -------------------------------
// Dark Mode
// -------------------------------
const darkBtn = document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

}