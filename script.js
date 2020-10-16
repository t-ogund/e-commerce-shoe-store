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
let actualProductPrice = document.querySelector(".actual-product-price");
let modalImage = document.querySelectorAll(".modal-image");
let itemID = document.querySelector(".item-id");
let cartEmpty = document.querySelector(".cart-empty");
let cartEmptyV2 = document.querySelector(".the-cart-is-now-empty");
let orderSummaryBreakdown = document.querySelector(".order-summary-breakdown");

let cart = [];
for (let i = 0; i < sizeBox.length; i++) {
  sizeBox[i].addEventListener("click", function () {
    // console.log(sizeBox[i].textContent);
    cart.push(sizeBox[i].textContent);
  });
}

for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    if (cart.length < 1) {
      shoeSizeWarning.textContent = "Please select a size.";
      addToCartButton[i].removeAttribute("data-toggle");
    } else {
      shoeSizeWarning.style.display = "none";
      addToCartButton[i].setAttribute("data-toggle", "modal");
      // console.log(
      //   `${nameOfShoe.textContent}, size ${
      //     cart[cart.length - 1]
      //   } added to cart!`
      // );
      modalProductName.textContent = nameOfShoe.textContent;
      modalSex.textContent = gender.textContent;
      // console.log(modalProductName);
      modalPrice.textContent = actualProductPrice.textContent;

      modalSize.textContent = `Size: ${cart[cart.length - 1]}`;

      let shoeObj = {
        productName: `${modalProductName.textContent}`,
        productSize: `${modalSize.textContent}`,
        productSex: `${modalSex.textContent}`,
        productPrice: `${modalPrice.textContent}`,
        productImage: gender.textContent === "Men's" ? `img/men-${itemID.textContent}.jpg` : `img/women-${itemID.textContent}.jpg` 
      };
      cartArray = JSON.parse(localStorage.getItem("shoe")) || [];
      cartArray.push(shoeObj);
      localStorage.setItem("shoe", JSON.stringify(cartArray));
      console.log("Cart Array: ", cartArray[0].productPrice);
    }
  });
}

let summaryListItems = document.querySelector(".summary-list-items");

let myCart = JSON.parse(localStorage.getItem("shoe"));

for (let i = 0; i < myCart.length; i++) {
  let cartRowItem = document.createElement("div");
  cartRowItem.classList.add("row", "cart-row-item");
  let newCartRowColOne = document.createElement("div");
  newCartRowColOne.classList.add("col-lg-4", "cart-left-column");
  let newCartRowColTwo = document.createElement("div");
  newCartRowColTwo.classList.add("col-lg-8", "cart-right-column");
  let deleteButtonSection = document.createElement("row");
  deleteButtonSection.classList.add("delete-button-section");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove Item";
  deleteButton.classList.add("delete-button");
  deleteButtonSection.appendChild(deleteButton);
  orderSummaryList.appendChild(cartRowItem);
  cartRowItem.appendChild(newCartRowColOne);
  cartRowItem.appendChild(newCartRowColTwo);
  // console.log(newCartRowColTwo);
  }
  console.log("My Cart: ", myCart, myCart.length);
  // let cartRowItems = document.querySelectorAll(".cart-row-item");
  
  // for (let a = 0; a < orderSummaryList.childNodes.length; a++) {

    // if (orderSummaryList.childNodes[a].classList.contains(".cart-row-item")) {
    //   cartEmpty.style.display = "none";
    // } else {
    //   cartEmpty.style.display = "block";
    // }
  // }
  

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

 
  let deleteButtonSection = document.createElement("row");
  deleteButtonSection.classList.add("delete-button-section");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove Item";
  deleteButton.classList.add("delete-button", "btn", "btn-danger");
  deleteButtonSection.appendChild(deleteButton);
  cartRightCol[i].appendChild(deleteButton);
}
let cartLeftCol = document.querySelectorAll(".cart-left-column");
for (let i = 0; i < cartLeftCol.length; i++) {
    let cartLeftColImg = document.createElement("img");
    cartLeftColImg.classList.add("cart-left-col-img");
    cartLeftCol[i].appendChild(cartLeftColImg);
}

let cartLeftColNodeList = document.querySelectorAll(".cart-left-col-img");
    for (let j = 0; j < cartLeftColNodeList.length; j++) {
      cartLeftColNodeList[j].src = myCart[j].productImage.replace(/\s/g,'')
    }
    
let cartDeleteButton = document.querySelectorAll(".delete-button");
let cartRowItems = document.querySelectorAll(".cart-row-item");
let retrievedMyCartItems = localStorage.getItem("shoe");

console.log("Cart Row Items: ", cartRowItems, cartRowItems.length);
if (cartRowItems.length > 0) {
  cartEmpty.style.display = "none";
} else {
  cartEmpty.style.display = "block";
}
if (cartEmpty.style.display === "block") {
  orderSummaryBreakdown.style.display = "none";
}



let toArrayOfObjects = JSON.parse(retrievedMyCartItems);
// if (toArrayOfObjects.length === 0) {
//   cartEmpty.style.display = "none";
// }

for (let d = 0; d < cartDeleteButton.length; d++) {
  cartDeleteButton[d].addEventListener("click", function() {
      for (let p = 0; p < toArrayOfObjects.length; p++) {
        // console.log(p, toArrayOfObjects[p]);
        toArrayOfObjects.splice(d, 1);
        localStorage.setItem("shoe", JSON.stringify(toArrayOfObjects));
        if (toArrayOfObjects.length === 0) {
          cartEmpty.style.display = "block";
          orderSummaryBreakdown.style.display = "none";
        }
        // if (toArrayOfObjects.length === 0) {
        //   let emptyNotification = document.createElement("h4");
        //   emptyNotification.classList.add("empty-notification");
        //   emptyNotification.textContent= "Your cart is empty.";
        //   cartEmpty.appendChild(emptyNotification);
        // } else {
        //   cartEmpty.style.display = "none";
        // }
      }
      console.log("New Array: ", toArrayOfObjects, toArrayOfObjects.length)
      
      for (let c = 0; c < cartRowItems.length; c++) {
        cartRowItems[d].style.display = "none";
      }
  })
}


