// ===============================
// ACRB Smart Phones - Wishlist JS
// ===============================

// Wishlist Local Storage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistContainer = document.getElementById("wishlistItems");

// Wishlist दिखाना
function loadWishlist() {

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Your Wishlist is Empty ❤️</p>";
        return;
    }

    wishlistContainer.innerHTML = "";

    wishlist.forEach((item, index) => {

        wishlistContainer.innerHTML += 
            <div class="wish-card">
                <h3>${item}</h3>

                <button onclick="moveToCart('${item}')">
                    🛒 Add to Cart
                </button>

                <button onclick="removeWishlist(${index})">
                    ❌ Remove
                </button>
            </div>
        ;

    });

}

// Wishlist से हटाना
function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem("wishlist",JSON.stringify(wishlist));

    loadWishlist();

}

// Cart में भेजना
function moveToCart(name){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name:name,
        quantity:1
    });

    localStorage.setItem("cart",JSON.stringify(cart));

    alert(name + " Added to Cart 🛒");

}

loadWishlist();