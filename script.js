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

            
                
        }
        // cart.pop();
        // console.log(cart);
        // console.log(addToCartButton);
        
        
    })
    
    
}

let summaryListItems = document.querySelector(".summary-list-items")
// console.log(summaryListItems)

let myCart = JSON.parse(localStorage.getItem("shoe"));

for (let i = 0; i < myCart.length; i++) {
    let cartRowItem = document.createElement("div");
    cartRowItem.classList.add("row", "cart-row-item");
    let newCartRowColOne = document.createElement("div");
    newCartRowColOne.classList.add("col-lg-4", "cart-left-column");
    let newCartRowColTwo = document.createElement("div");
    newCartRowColTwo.classList.add("col-lg-8", "cart-right-column");
    orderSummaryList.appendChild(cartRowItem);
    cartRowItem.appendChild(newCartRowColOne);
    cartRowItem.appendChild(newCartRowColTwo);
    console.log(newCartRowColTwo);
    // let newNewLi = document.createElement("li");
    // newNewLi.textContent = myCart[i].productName;
    // summaryListItems.appendChild(newNewLi);
    // newNewLi.classList.add("new-new-li")
    // let newLiRow = document.createElement("div");
    // newLiRow.classList.add("row");
    
    // newLiRow.appendChild(newLiColOne);
    // newLiRow.appendChild(newLiColTwo);
    // newNewLi.appendChild(newLiRow);    
}

let cartRightCol = document.querySelectorAll(".cart-right-column");
    for (let i = 0; i < cartRightCol.length; i++) {
        // product name
        let cartProductName = document.createElement("h5");
        cartProductName.classList.add("cart-product-name");
        cartProductName.textContent = myCart[i].productName;
        cartRightCol[i].appendChild(cartProductName);
        // product size
        let cartProductSize = document.createElement("p");
        cartProductSize.classList.add("cart-product-size");
        cartProductSize.textContent = myCart[i].productSize;
        cartRightCol[i].appendChild(cartProductSize);
        // product price
        let cartProductPrice = document.createElement("p");
        cartProductPrice.classList.add("cart-product-price");
        cartProductPrice.textContent = myCart[i].productPrice;
        cartRightCol[i].appendChild(cartProductPrice);
    }








