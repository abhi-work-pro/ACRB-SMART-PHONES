// ==========================
// ACRB Smart Phones Wishlist
// ==========================

const wishlistContainer = document.getElementById("wishlistItems");

// LocalStorage से Wishlist लाओ
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Wishlist दिखाओ
function loadWishlist() {

    if (!wishlistContainer) return;

    wishlistContainer.innerHTML = "";

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Your Wishlist is Empty ❤️</p>";
        return;
    }

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

// Wishlist से हटाओ
function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    loadWishlist();

}

// Cart में भेजो
function moveToCart(name){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        quantity: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " Added to Cart 🛒");
}

// Page खुलते ही Wishlist दिखाओ
window.onload = loadWishlist;