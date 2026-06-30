// ACRB Smart Phones

console.log("ACRB Smart Phones Loaded");

// Shop Now Button
const shopBtn = document.querySelector(".hero button");

if (shopBtn) {
    shopBtn.addEventListener("click", function () {
        alert("Welcome to ACRB Smart Phones!");
    });
}

// Search Button
const searchBtn = document.querySelector(".search button");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        const searchText = document.querySelector(".search input").value;

        if (searchText === "") {
            alert("Please enter a phone name.");
        } else {
            alert("Searching for: " + searchText);
        }
    });
}