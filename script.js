let sizeBox = document.querySelectorAll(".size-box");
let addToCartButton = document.querySelector(".add-to-cart");
let shoeSizeWarning = document.querySelector(".select-shoe-size");
let nameOfShoe = document.querySelector(".name-of-shoe");

let cart = [];
for (let i = 0; i < sizeBox.length; i++) {
    
    sizeBox[i].addEventListener("click", function() {
        console.log(sizeBox[i].textContent);
        cart.push(sizeBox[i].textContent);
    })
    
}

addToCartButton.addEventListener("click", function() {
    if (cart.length < 1) {
        shoeSizeWarning.textContent = "Please select a size.";
    } else {
        shoeSizeWarning.style.display = "none";
        console.log(`${nameOfShoe.textContent}, size ${cart[cart.length - 1]} added to cart!`)
    }
})







