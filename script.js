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
let total = document.querySelector(".total");

let cart = [];
for (let i = 0; i < sizeBox.length; i++) {
  sizeBox[i].addEventListener("click", function () {
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
      modalProductName.textContent = nameOfShoe.textContent;
      modalSex.textContent = gender.textContent;
      modalPrice.textContent = actualProductPrice.textContent;
      modalSize.textContent = `Size: ${cart[cart.length - 1]}`;

      let shoeObj = {
        productName: `${modalProductName.textContent}`,
        productSize: `${modalSize.textContent}`,
        productSex: `${modalSex.textContent}`,
        productPrice: `${modalPrice.textContent}`,
        productImage: gender.textContent === "Men's" ? `img/men-${itemID.textContent}.jpg` : `img/women-${itemID.textContent}.jpg`,
        productID: `${itemID.textContent}` 
      };
      cartArray = JSON.parse(localStorage.getItem("shoe")) || [];
      cartArray.push(shoeObj);
      localStorage.setItem("shoe", JSON.stringify(cartArray));
      // console.log("Cart Array: ", cartArray[0].productPrice);
      console.log(shoeObj);
    }
  });
}

let summaryListItems = document.querySelector(".summary-list-items");

let myCart = JSON.parse(localStorage.getItem("shoe"));
// console.log("My Cart: ", myCart);


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
  }
  // console.log("My Cart: ", myCart, myCart.length);


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
  deleteButton.setAttribute("data-id", myCart[i].productID);
  deleteButton.addEventListener("click", remove);
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


console.log("Cart Row Items: ", cartRowItems, cartRowItems.length);
if (cartRowItems.length > 0) {
  cartEmpty.style.display = "none";
  orderSummaryBreakdown.classList.remove("hide");

} else {
  cartEmpty.style.display = "block";
  orderSummaryBreakdown.classList.add("hide");
}
// if (cartEmpty.style.display === "block") {
//   orderSummaryBreakdown.style.display = "none";
// }


// function retrieveItems() {
  // let toArrayOfObjects = JSON.parse(retrievedMyCartItems);
// }


// let newToArrayOfObjects;
// function deleteItem() {
//   for (let q = 0; q < toArrayOfObjects.length; q++) {
    
//   }
// }
function remove(e) {
  let retrievedMyCartItems = localStorage.getItem("shoe");
  let toArrayOfObjects = JSON.parse(retrievedMyCartItems);
    console.log(e)
    let newToArrayOfObjects = toArrayOfObjects.filter(item => e.target.parentNode.childNodes[0].textContent !== item.productName);
    console.log("IT'S A MATCH!");
    console.log(e.target.parentNode.childNodes);
    console.log(toArrayOfObjects[0].productName);
    localStorage.setItem("shoe", JSON.stringify(newToArrayOfObjects));
    console.log(toArrayOfObjects);
    return toArrayOfObjects
}
// retrieveItems();

// for (let d = 0; d < cartDeleteButton.length; d++) {
//   cartDeleteButton[d].addEventListener("click", remove)
  // console.log("hi")
    // console.log(toArrayOfObjects);
    // console.log(cartDeleteButton);
    // remove();
    // console.log(e);
    // console.log(e.target.parentNode.childNodes[0].textContent)
    // console.log(e.target.parentNode.parentNode);
    // let valueToRemove = cartDeleteButton[d];
    // console.log("Value to remove: ", d);
  // newToArrayOfObjects = toArrayOfObjects.filter(item => e.target.parentNode.childNodes[0].textContent !== item.productName);
  // console.log("New To Array Of Objects: ", newToArrayOfObjects)
  
    // console.log("Hi, from: ", d);
    // console.log(toArrayOfObjects[d]);
    // toArrayOfObjects.splice(d, 1);
    // console.log(toArrayOfObjects);
   
    
    // console.log("What was Spliced: ", whatWasSpliced, d);
    // console.log("Updated Array: ", toArrayOfObjects);
    // cartRowItems[d].style.display = "none";
 
      //   whatWasSpliced;
      //   console.log("Updated Array: ", toArrayOfObjects)
   
        
        // d--
      //   console.log(localStorage.shoe);
      //   toArrayOfObjects;
          
          
        // for (let c = cartRowItems.length; c >= 0; c--) {
        //   cartRowItems[d].style.display = "none";
        // }

        // for (let y = toArrayOfObjects.length - 1; y >= 0; y--) {
        //   let itemThatWasSpliced = toArrayOfObjects.splice(y, 1);
        //   console.log("Item that was spliced: ", itemThatWasSpliced);
        //   console.log("Updated Array: ", toArrayOfObjects)
        // }
      //   if (toArrayOfObjects.length === 0) {
      //     cartEmpty.style.display = "block";
      //     orderSummaryBreakdown.style.display = "none";
      //     localStorage.clear();
      //   }
      
      // for (let m = 0; m < toArrayOfObjects.length; m++) {
      //   let amountToSubtract = toArrayOfObjects[m].productPrice.slice(1);
      //   // total.textContent = Number(total) - Number(amountToSubtract);
      //   // console.log(typeof amountToSubtract, "amount to subtract :", amountToSubtract);
      //   let newTotal = Number(total.textContent.slice(1)) - amountToSubtract;
      //   // console.log("modified?: ", Number(total.textContent.slice(1)) - newTotal)
      // }
      // localStorage.setItem("shoe", JSON.stringify(newToArrayOfObjects));

  
  // console.log("Cart Delete Button: ", cartDeleteButton[d].parentNode.childNodes[0].textContent);
  // let newToArrayOfObjects = toArrayOfObjects.filter(item => cartDeleteButton[d].parentNode.childNodes[0].textContent !== item.productName);
  // console.log(newToArrayOfObjects);
  
// }




let productPriceArray = document.querySelectorAll(".cart-product-price");
let updatedPriceArray = [];
for (let i = 0; i < productPriceArray.length; i++) {
  let individualProductPrice = productPriceArray[i].textContent.slice(1);
  updatedPriceArray.push(individualProductPrice);
  // console.log("Individual Product Price: ", individualProductPrice);
}
// console.log("Updated Price Array: ", updatedPriceArray);

let sum = 0;
for (let s = 0; s < updatedPriceArray.length; s++) {
  sum += Number(updatedPriceArray[s]);
}
// console.log(sum);

total.textContent = `$${sum}.00`;