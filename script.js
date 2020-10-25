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
let uniqueID = document.querySelector(".unique-id");

let cart = [];
for (let i = 0; i < sizeBox.length; i++) {
  sizeBox[i].addEventListener("click", function () {
    cart.push(sizeBox[i].textContent);
  });
}

let productHolder = [];

for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].addEventListener("click", function (e) {
    if (cart.length < 1) {
      shoeSizeWarning.textContent = "Please select a size.";
      addToCartButton[i].removeAttribute("data-toggle");
    } else {
      console.log(e)
      shoeSizeWarning.style.display = "none";
      addToCartButton[i].setAttribute("data-toggle", "modal");
      modalProductName.textContent = nameOfShoe.textContent;
      modalSex.textContent = gender.textContent;
      modalPrice.textContent = actualProductPrice.textContent;
      modalSize.textContent = `Size: ${cart[cart.length - 1]}`;

      productHolder.push(itemID)
      console.log(productHolder.length);

      let uniqueIdValue = 0;
      let shoeObj = {
        productName: `${modalProductName.textContent}`,
        productSize: `${modalSize.textContent}`,
        productSex: `${modalSex.textContent}`,
        productPrice: `${modalPrice.textContent}`,
        productImage: gender.textContent === "Men's" ? `img/men-${itemID.textContent}.jpg` : `img/women-${itemID.textContent}.jpg`,
        productID: `${itemID.textContent}`,
        uniqueID: `${e.timeStamp}`
      };

      cartArray = JSON.parse(localStorage.getItem("shoe")) || [];
      cartArray.push(shoeObj);
      localStorage.setItem("shoe", JSON.stringify(cartArray));

      productHolderArray = JSON.parse(localStorage.getItem("productHolder")) || [];
      productHolderArray.push(i);
      localStorage.setItem("productHolder", JSON.stringify(productHolderArray));
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
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove Item";
  deleteButton.classList.add("delete-button", "btn", "btn-danger", `unique-${i}`);
  deleteButton.setAttribute("data-id", myCart[i].uniqueID);
  deleteButton.addEventListener("click", remove);
  deleteButtonSection.appendChild(deleteButton);
  cartRightCol[i].appendChild(deleteButton);
}
let cartLeftCol = document.querySelectorAll(".cart-left-column");
for (let i = 0; i < cartLeftCol.length; i++) {
    let cartLeftColImg = document.createElement("img");
    cartLeftColImg.classList.add("cart-left-col-img");
    cartLeftCol[i].appendChild(cartLeftColImg);
    cartLeftCol[i].classList.add(`unique-${i}`);
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

function remove(e) {
  let retrievedMyCartItems = localStorage.getItem("shoe");
  let toArrayOfObjects = JSON.parse(retrievedMyCartItems);
    console.log(e)

    //productHolderArray
    let retrievedProductHolderItems = localStorage.getItem("productHolder");
    let toArrayOfIndexes = JSON.parse(retrievedProductHolderItems);
    console.log("Array of Indexes: ", toArrayOfIndexes);

    // filter method (works: line 2)
    // let newToArrayOfObjects = toArrayOfObjects.filter(item => e.target.parentNode.childNodes[0].textContent !== item.productName);

    //This should be it!
    let newToArrayOfObjects = toArrayOfObjects.filter(item => e.target.dataset.id !== item.uniqueID);
  
    for (let w = 0; w < cartDeleteButton.length; w++) {
      let buttonUnique = e.target.classList[3];
      let imageUnique = e.target.parentNode.parentNode.childNodes[0].classList[2];

      if (buttonUnique === imageUnique) {
        let parentToDelete = e.target.parentNode.parentNode;
        parentToDelete.remove();
      }
    }

    localStorage.setItem("shoe", JSON.stringify(newToArrayOfObjects));
    return toArrayOfObjects
}

        if (toArrayOfObjects.length === 0) {
          cartEmpty.style.display = "block";
          orderSummaryBreakdown.style.display = "none";
          localStorage.clear();
        }
      

let productPriceArray = document.querySelectorAll(".cart-product-price");
let updatedPriceArray = [];
for (let i = 0; i < productPriceArray.length; i++) {
  let individualProductPrice = productPriceArray[i].textContent.slice(1);
  updatedPriceArray.push(individualProductPrice);
}

let sum = 0;
for (let s = 0; s < updatedPriceArray.length; s++) {
  sum += Number(updatedPriceArray[s]);
}

total.textContent = `$${sum}.00`;