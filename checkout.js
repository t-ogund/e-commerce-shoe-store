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

saveAndContinueContact.addEventListener("click", function(e) {
    e.preventDefault();
    contactToggle.style.display = "none";
    alreadyAccount.style.display = "none";
    let contactDisplay = document.createElement("div");
    contactDisplay.classList.add("contact-display");
    let contactName = document.createElement("p");
    firstName.textContent = firstName.value;
    lastName.textContent = lastName.value;
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
        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        phone.value = "";
        // console.log("cancel")
    })
    
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




saveAndContinuePackage.addEventListener("click", function(e) {
    e.preventDefault();
    packageToggle.style.display = "none";
})


// let cartArray = JSON.parse(localStorage.getItem("shoe"))

// console.log(cartArray);
