let sizeBox = document.querySelectorAll(".size-box");
let addToCartButton = document.querySelectorAll(".add-to-cart");
let shoeSizeWarning = document.querySelector(".select-shoe-size");
let nameOfShoe = document.querySelector(".name-of-shoe");
let modalProductName = document.querySelector(".modal-product-name");
let modalSex = document.querySelector(".modal-sex");
let modalSize = document.querySelector(".modal-size");
let modalPrice = document.querySelector(".modal-price");
let gender = document.querySelector(".gender");
let productPrice = document.querySelector(".product-price");
let modal = document.querySelector(".modal");
let orderSummaryList = document.querySelector(".order-summary-list");

let cart = [];
for (let i = 0; i < sizeBox.length; i++) {
    
    sizeBox[i].addEventListener("click", function() {
        console.log(sizeBox[i].textContent);
        cart.push(sizeBox[i].textContent);
    })
    
}

// let cartArray = [];
//             cartArray.push(JSON.parse(localStorage.getItem("shoe")));
//             localStorage.setItem("shoe", JSON.stringify(cartArray));
for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", function() {
        if (cart.length < 1) {
            shoeSizeWarning.textContent = "Please select a size.";
            addToCartButton[i].removeAttribute("data-toggle");
        } else {
            shoeSizeWarning.style.display = "none";
            addToCartButton[i].setAttribute("data-toggle", "modal");
            console.log(`${nameOfShoe.textContent}, size ${cart[cart.length - 1]} added to cart!`);
            modalProductName.textContent = nameOfShoe.textContent;
            modalSex.textContent = gender.textContent;
            console.log(modalProductName)
            
            modalSize.textContent = `Size: ${cart[cart.length - 1]}`;
            for (let i = 0; i < modalPrice.length; k++) {
                modalPrice[i].textContent = productPrice.textContent;
            }
            
            let shoeObj = {
                productName: `${modalProductName.textContent}`,
                productSize: `${modalSize.textContent}`,
                productSex: `${modalSex.textContent}`,
                productPrice: `${modalPrice.textContent}`
            }
            // localStorage.setItem("shoe", JSON.stringify(shoeObj));
    
            // let cartArray;
            // if (localStorage.getItem(cartArray) === null) {
            //     cartArray = [];
            // } else {
            //     cartArray = JSON.parse(localStorage.getItem(cartArray));
            // }
            // cartArray.push(JSON.stringify(modalProductName.textContent));
    
            // console.log("Cart Array" + JSON.stringify(cartArray));
            

            cartArray = JSON.parse(localStorage.getItem("shoe")) || [];
            cartArray.push(shoeObj);
            localStorage.setItem("shoe", JSON.stringify(cartArray));
            console.log(cartArray);

            let orderSummaryList = document.querySelector(".order-summary-list");
            let orderSummaryProductHeading = document.createElement("p");
            orderSummaryProductHeading.textContent = "hi";
            orderSummaryList.appendChild(orderSummaryProductHeading);
        }
        // cart.pop();
        // console.log(cart);
        // console.log(addToCartButton);
    })
    
}








