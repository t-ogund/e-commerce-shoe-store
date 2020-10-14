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

let cart = [];
for (let i = 0; i < sizeBox.length; i++) {
  sizeBox[i].addEventListener("click", function () {
    console.log(sizeBox[i].textContent);
    cart.push(sizeBox[i].textContent);
  });
}

// let cartArray = [];
//             cartArray.push(JSON.parse(localStorage.getItem("shoe")));
//             localStorage.setItem("shoe", JSON.stringify(cartArray));
for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function () {
    if (cart.length < 1) {
      shoeSizeWarning.textContent = "Please select a size.";
      addToCartButton[i].removeAttribute("data-toggle");
    } else {
      shoeSizeWarning.style.display = "none";
      addToCartButton[i].setAttribute("data-toggle", "modal");
      console.log(
        `${nameOfShoe.textContent}, size ${
          cart[cart.length - 1]
        } added to cart!`
      );
      modalProductName.textContent = nameOfShoe.textContent;
      modalSex.textContent = gender.textContent;
      console.log(modalProductName);
      modalPrice.textContent = actualProductPrice.textContent;

      modalSize.textContent = `Size: ${cart[cart.length - 1]}`;

      let shoeObj = {
        productName: `${modalProductName.textContent}`,
        productSize: `${modalSize.textContent}`,
        productSex: `${modalSex.textContent}`,
        productPrice: `${modalPrice.textContent}`,
        productImage: `img/men-${itemID.textContent}.jpg`
      };
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
  });
}

let summaryListItems = document.querySelector(".summary-list-items");
// console.log(summaryListItems)

let myCart = JSON.parse(localStorage.getItem("shoe"));

for (let i = 0; i < myCart.length; i++) {
  let cartRowItem = document.createElement("div");
  cartRowItem.classList.add("row", "cart-row-item");
  let newCartRowColOne = document.createElement("div");
  newCartRowColOne.classList.add("col-lg-4", "cart-left-column");
  let newCartRowColTwo = document.createElement("div");
  newCartRowColTwo.classList.add("col-lg-8", "cart-right-column");
  // let newCartRowColTwoContainer = document.createElement("div");
  // newCartRowColTwoContainer.classList.add("row-two-container");
  // newCartRowColTwo.appendChild(newCartRowColTwoContainer);
  let deleteButtonSection = document.createElement("row");
  deleteButtonSection.classList.add("delete-button-section");
  // newCartRowColTwo.appendChild(deleteButtonSection);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove Item";
  deleteButton.classList.add("delete-button");
  deleteButtonSection.appendChild(deleteButton);
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

  let deleteButtonSection = document.createElement("row");
  deleteButtonSection.classList.add("delete-button-section");
  // newCartRowColTwo.appendChild(deleteButtonSection);
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
      // console.log(myCart[j].productImage);
    }

console.log(myCart);
console.log(modalImage);

let cartDeleteButton = document.querySelectorAll(".delete-button");
let cartRowItems = document.querySelectorAll(".cart-row-item");
for (let d = 0; d < cartDeleteButton.length; d++) {
  for (let c = 0; c < cartRowItems.length; c++) {
    cartDeleteButton[d].addEventListener("click", function() {
      cartRowItems[d].style.display = "none";
    })
  }
}

// let productImages = ["img/men-1.jpg", "img/men-2.jpg", "img/men-3.jpg", "img/men-4.jpg", 
// "img/men-5.jpg", "img/men-6.jpg", "img/men-7.jpg", "img/men-8.jpg"]


