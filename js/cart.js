// ===============================
// ACRB Smart Phones - Cart JS
// ===============================

// Cart Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

// Cart दिखाओ
function loadCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your Cart is Empty 🛒</p>";
        totalPrice.innerText = "0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += 
        <div class="cart-card">

            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>Price : ₹${item.price}</p>
                <p>Quantity : ${item.quantity}</p>
            </div>

            <button onclick="removeCart(${index})">
                ❌ Remove
            </button>

        </div>
        ;

    });

    totalPrice.innerText = total;

}

// Remove Product
function removeCart(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

}

// Checkout
function checkout(){

    if(cart.length==0){

        alert("Your Cart is Empty.");

        return;

    }

    window.location.href="checkout.html";

}

// Page Load
loadCart();