let sizeBox = document.querySelectorAll(".size-box");
let addToCartButton = document.querySelector(".add-to-cart");

let cart = [];
for (let i = 0; i < sizeBox.length; i++) {
    
    sizeBox[i].addEventListener("click", function() {
        console.log(sizeBox[i].textContent);
        cart.push(sizeBox[i].textContent);
    })
}

addToCartButton.addEventListener("click", function() {
    console.log("hi");
})







