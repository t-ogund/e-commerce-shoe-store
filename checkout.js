//Contact Information
let checkOutButton = document.querySelector(".checkout");
let checkOutTotal = document.querySelector(".checkout-total");
let saveAndContinueContact = document.querySelector(".save-and-continue");
let cancelButton = document.querySelector(".cancel");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let contactToggle = document.querySelector(".contact-toggle");
let formContactSection = document.querySelector(".form-contact-section");
let emailAddress = document.querySelector("#email");
let phoneNumber = document.querySelector("#phone");
let alreadyAccount = document.querySelector(".already-account");
let contactInfo = document.querySelectorAll(".contact-info");
let contactInfoLabel = document.querySelectorAll(".contact-info-label");

cancelButton.addEventListener("click", function(e) {
        e.preventDefault();
        // firstName.value = "";
        // lastName.value = "";
        // emailAddress.value = "";
        // phone.value = "";
        // console.log("cancel")
        formContactSection.reset();
    })

saveAndContinueContact.addEventListener("click", function(e) {
    // e.stopPropagation();

    for (let i = 0; i < 1; i++) {
        if (contactInfo[0].value < 1 || contactInfo[1].value < 1 || contactInfo[2].value < 1) {
           console.log(contactInfoLabel[i], "is empty");
        //    e.preventDefault();
           contactToggle.style.display = "block";
        // e.target.disabled = true;
        } else {
            e.preventDefault();
            console.log(e);
    contactToggle.style.display = "none";
    alreadyAccount.style.display = "none";
    let contactDisplay = document.createElement("div");
    contactDisplay.classList.add("contact-display");
    let contactName = document.createElement("p");
    firstName.textContent = firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1);
    lastName.textContent = lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1);
    contactName.textContent = `${firstName.textContent} ${lastName.textContent}`;
    contactName.style.fontWeight = "700";
    console.log(contactName)
    let contactEmail = document.createElement("p");
    contactEmail.textContent = emailAddress.value;
    console.log(contactName)
    let phoneNumber = document.createElement("p");
    phoneNumber.textContent = phone.value;
    console.log(phoneNumber);
    let editButton = document.createElement("button");
    contactDisplay.appendChild(contactName);
    contactDisplay.appendChild(contactEmail);
    contactDisplay.appendChild(phoneNumber);
    formContactSection.appendChild(contactDisplay);
    editButton.classList.add("btn", "btn-outline-dark", "btn-lg", "btn-block", "edit-button");
    editButton.textContent = "Edit";
    formContactSection.appendChild(editButton);


    editButton.addEventListener("click", function(e) {
        e.preventDefault();
        editButton.style.display = "none";
        contactDisplay.style.display = "none";
        contactToggle.style.display = "block";
    })

    cancelButton.addEventListener("click", function(e) {
        e.preventDefault();
        // firstName.value = "";
        // lastName.value = "";
        // emailAddress.value = "";
        // phone.value = "";
        // console.log("cancel")
        formContactSection.reset();
    })
        }
    }
    console.log()
    
})

//Package Info
let saveAndContinuePackage = document.querySelector(".save-and-continue-package");
let firstNamePackage = document.querySelector("#first-name-package");
let lastNamePackage = document.querySelector("#last-name-package");
let addressOne = document.querySelector("#inputAddress-package");
let addressTwo = document.querySelector("#inputAddress2-package");
let zipCode = document.querySelector("#inputZip-package");
let city = document.querySelector("#inputCity-package");
let packageToggle = document.querySelector(".package-toggle");
let formPackageSection = document.querySelector(".form-package-section");
let state = document.querySelector("#inputState-package");
let displayPackageNarrative = document.querySelector(".checkout-display-narrative-package");
let shippingOptionPackage = document.querySelector("#shipping-option-package");
let contactInfoPackage = document.querySelectorAll(".package-contact-info");
let cancelButtonPackage = document.querySelector(".cancel-package");

cancelButtonPackage.addEventListener("click", function(e) {
    e.preventDefault();
    // firstNamePackage.value = "";
    // lastNamePackage.value = "";
    // addressOne.value = "";
    // addressTwo.value = "";
    // zipCode.value = "";
    // city.value = "";
    formPackageSection.reset();
    // console.log("cancel")
})

saveAndContinuePackage.addEventListener("click", function(e) {

    for (let i = 0; i < 1; i++) {
        if (contactInfoPackage[0].value < 1 || 
            contactInfoPackage[1].value < 1 || 
            contactInfoPackage[2].value < 1 ||
            contactInfoPackage[4].value < 1 ||
            contactInfoPackage[5].value < 1 ||
            contactInfoPackage[6].value < 1) {
            console.log(contactInfoPackage[i], "is empty");
            console.log(contactInfoPackage[6])
        //    e.preventDefault();
           packageToggle.style.display = "block";
        // e.target.disabled = true;
        } else {
            e.preventDefault();
    console.log("hi")
    packageToggle.style.display = "none"; 



    let packageDisplay = document.createElement("div");
    packageDisplay.classList.add("package-display");
    let contactDisplayPackage = document.createElement("div");
    contactDisplayPackage.classList.add("contact-display-package");
    packageDisplay.appendChild(contactDisplayPackage);
    let contactNamePackage = document.createElement("p");
    firstNamePackage.textContent = firstNamePackage.value.charAt(0).toUpperCase() + firstNamePackage.value.slice(1);
    lastNamePackage.textContent = lastNamePackage.value.charAt(0).toUpperCase() + lastNamePackage.value.slice(1);
    contactNamePackage.textContent = `${firstNamePackage.textContent} ${lastNamePackage.textContent}`;
    contactNamePackage.style.fontWeight = "700";

    formPackageSection.appendChild(packageDisplay);
    let streetAddress = document.createElement("p");
    streetAddress.classList.add("street-address");
    streetAddress.textContent = addressOne.value.toUpperCase();
    packageDisplay.appendChild(streetAddress);
    let cityStateZip = document.createElement("p");
    cityStateZip.classList.add("city-state-zip");
    cityStateZip.textContent = `${city.value.charAt(0).toUpperCase() + city.value.slice(1)}, ${state.options[state.selectedIndex].text} ${zipCode.value}`;
    contactDisplayPackage.appendChild(contactNamePackage);
    contactDisplayPackage.appendChild(streetAddress);
    contactDisplayPackage.appendChild(cityStateZip);

    let reviewCheckoutDisplaySection = document.querySelector(".review-checkout-display-section");
    reviewCheckoutDisplaySection.classList.add("review-checkout-display-section");

    // let reviewCheckoutDisplayItem = document.createElement("div");
    // reviewCheckoutDisplayItem.classList.add("review-checkout-display-item");

    // reviewCheckoutDisplaySection.appendChild(reviewCheckoutDisplayItem);

    
    // let reviewCheckoutImageSection = document.createElement("div");
    // reviewCheckoutImageSection.classList.add("review-checkout-image-section");
    // let reviewCheckoutNarrative = document.createElement("div");
    // reviewCheckoutNarrative.classList.add("review-checkout-narrative");
    // let reviewCheckoutItemPrice = document.createElement("div");
    // reviewCheckoutItemPrice.classList.add("review-checkout-item-price");
    // reviewCheckoutDisplayItem.appendChild(reviewCheckoutImageSection);
    // reviewCheckoutDisplayItem.appendChild(reviewCheckoutNarrative);
    // reviewCheckoutDisplayItem.appendChild(reviewCheckoutItemPrice);
    


    
    
    // packageDisplay.appendChild(contactNamePackage);
    
    // console.log(cityStateZip)
    // packageDisplay.appendChild(cityStateZip);
    let editButtonPackage = document.createElement("button");
    editButtonPackage.classList.add("btn", "btn-outline-dark", "btn-lg", "btn-block", "edit-button");
    editButtonPackage.textContent = "Edit";
    formPackageSection.appendChild(editButtonPackage);

    let cartArray = JSON.parse(localStorage.getItem("shoe"));
    console.log(cartArray);
    for (let i = 0; i < cartArray.length; i++) {
        let packageDisplayContainer = document.createElement("div");
        let packageDisplayRow = document.createElement("div");
        packageDisplayRow.classList.add("row", "package-display-row");
        packageDisplayContainer.classList.add("package-display-container");
        packageDisplay.appendChild(packageDisplayContainer);
        packageDisplayContainer.appendChild(packageDisplayRow);
        let imageSection = document.createElement("div");
        imageSection.classList.add("image-section");
        let narrativeSection = document.createElement("div");
        narrativeSection.classList.add("narrative-section");
        imageSection.style.backgroundImage = `url(${cartArray[i].productImage.replace(/\s/g,'')})`
        console.log(cartArray[i].productImage.replace(/\s/g,''));
        packageDisplayRow.appendChild(imageSection);
        packageDisplayRow.appendChild(narrativeSection);
        let packageDescription = document.createElement("p");
        packageDescription.classList.add("package-description");
        let packageDetails = document.createElement("p");
        packageDetails.classList.add("package-details");
        packageDescription.textContent = cartArray[i].productName;
        packageDetails.textContent = `${cartArray[i].productSex} ${cartArray[i].productSize}`;
        narrativeSection.appendChild(packageDescription);
        narrativeSection.appendChild(packageDetails);

        //review section

        let reviewCheckoutDisplayItem = document.createElement("div");
    reviewCheckoutDisplayItem.classList.add("review-checkout-display-item");

    reviewCheckoutDisplaySection.appendChild(reviewCheckoutDisplayItem);

    
    let reviewCheckoutImageSection = document.createElement("div");
    reviewCheckoutImageSection.classList.add("review-checkout-image-section");
    reviewCheckoutImageSection.style.backgroundImage = `url(${cartArray[i].productImage.replace(/\s/g,'')})`
    let reviewCheckoutNarrative = document.createElement("div");
    reviewCheckoutNarrative.classList.add("review-checkout-narrative");
    let reviewDescription = document.createElement("p");
    reviewDescription.classList.add("review-description");
    reviewDescription.textContent = cartArray[i].productName;
    let reviewSize = document.createElement("p");
    reviewSize.classList.add("review-size");
    reviewSize.textContent = `${cartArray[i].productSize}`
    reviewCheckoutNarrative.appendChild(reviewDescription);
    reviewCheckoutNarrative.appendChild(reviewSize);
    let reviewCheckoutItemPrice = document.createElement("div");
    reviewCheckoutItemPrice.classList.add("review-checkout-item-price");
    let reviewPrice = document.createElement("p");
    reviewPrice.classList.add("review-price");
    reviewPrice.textContent = `${cartArray[i].productPrice}`;
    reviewCheckoutItemPrice.appendChild(reviewPrice);
    reviewCheckoutDisplayItem.appendChild(reviewCheckoutImageSection);
    reviewCheckoutDisplayItem.appendChild(reviewCheckoutNarrative);
    reviewCheckoutDisplayItem.appendChild(reviewCheckoutItemPrice);
    


        //review section
    }
        let shippingSelectionSection = document.createElement("div");
        shippingSelectionSection.classList.add("shipping-selection-section");
        let shippingOption = document.createElement("p");
        shippingOption.classList.add("shipping-option");
        shippingOption.textContent = `${shippingOptionPackage.options[shippingOptionPackage.selectedIndex].text}`
        console.log(shippingOption.textContent);
        packageDisplay.appendChild(shippingSelectionSection);
        shippingSelectionSection.appendChild(shippingOption);

        
        let shippingSelection = document.querySelector(".shipping-selection");
        // shippingSelection.textContent = `${shippingOptionPackage.options[shippingOptionPackage.selectedIndex].text}`;
        let dollarAmount = shippingOption.textContent.slice(shippingOption.textContent.indexOf("$"), shippingOption.textContent.indexOf("(") -1);
        shippingSelection.textContent = `Shipping: ${dollarAmount}`;
        console.log(dollarAmount);

    //shipping under review section
    let reviewShippingContainer = document.createElement("div");
    reviewShippingContainer.classList.add("review-shipping-container");
    let reviewShipping = document.createElement("p");
    reviewShipping.classList.add("review-shipping");
    reviewShipping.textContent = `${shippingOptionPackage.options[shippingOptionPackage.selectedIndex].text}`
    reviewCheckoutDisplaySection.appendChild(reviewShippingContainer);
    reviewShippingContainer.appendChild(reviewShipping);
    //shipping under review section

    let subTotal = document.querySelector(".subtotal");
    let subTotalArray = [];
    for (let j = 0; j < cartArray.length; j++) {
        subTotalArray.push(Number(cartArray[j].productPrice.slice(1)));
    }
    let sumSubTotalArray = subTotalArray.reduce(function(a, b) {
        return a + b
    }, 0);
    subTotal.textContent = `Subtotal: $${sumSubTotalArray}.00`;

    let checkoutTotal = document.querySelector(".checkout-total");
    checkoutTotal.textContent = `Order total: $${Number(dollarAmount.slice(1)) + sumSubTotalArray}`;

    let summaryContainer = document.querySelector(".summary-container");
    let fixedOrderSummary = document.querySelector(".fixed-order-summary");
    let placeOrderButton = document.createElement("button");
    placeOrderButton.classList.add("btn", "btn-outline-secondary", "btn-lg", "btn-block");
    placeOrderButton.textContent = "Place Order";
    summaryContainer.appendChild(placeOrderButton);
    summaryContainer.classList.remove("hide");



    editButtonPackage.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(e);
        editButtonPackage.style.display = "none";
        packageDisplay.style.display = "none";
        placeOrderButton.remove();
        summaryContainer.classList.add("hide");
        let itemsInReviewSection = reviewCheckoutDisplaySection.children
        itemsInReviewSection.length = 0;
        console.log(itemsInReviewSection);
        while (itemsInReviewSection.length > 0) {
            itemsInReviewSection[0].remove();
        }
        packageToggle.style.display = "block";
    })

    cancelButtonPackage.addEventListener("click", function(e) {
        e.preventDefault();
        // firstNamePackage.value = "";
        // lastNamePackage.value = "";
        // addressOne.value = "";
        // addressTwo.value = "";
        // zipCode.value = "";
        // city.value = "";
        formPackageSection.reset();
        // console.log("cancel")
    })
        }
        
    } 

    

    
})


let paymentCheckbox = document.querySelector("#payment-form-check-input");
let cardNumber = document.querySelector("#card-number");
let cardMonth = document.querySelector("#card-month");
let cardYear = document.querySelector("#card-year");
let cardSecurityCode = document.querySelector("#card-security-code");

// paymentCheckbox = false;
paymentCheckbox.addEventListener("click", function(e) {
   if (e.target.checked) {
       console.log("checked");
       cardNumber.value = "8888 8888 8888 8888";
       cardMonth.value = "01"
       cardYear.value = "24"
       cardSecurityCode.value = "123"
   } else {
       console.log("unchecked");
       cardNumber.value = "";
       cardMonth.value = "";
       cardYear.value = "";
       cardSecurityCode.value = "";
       state.value = "Select Your State";
   }
})



// let cartArray = JSON.parse(localStorage.getItem("shoe"))

// console.log(cartArray);
