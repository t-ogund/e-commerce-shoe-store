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
let formPackageSection = document.querySelector(".form-package-section");
let state = document.querySelector("#inputState-package");
let displayPackageNarrative = document.querySelector(".checkout-display-narrative-package");




saveAndContinuePackage.addEventListener("click", function(e) {
    e.preventDefault();
    packageToggle.style.display = "none";

    let packageDisplay = document.createElement("div");
    packageDisplay.classList.add("package-display");
    let contactNamePackage = document.createElement("p");
    firstNamePackage.textContent = firstNamePackage.value;
    lastNamePackage.textContent = lastNamePackage.value;
    contactNamePackage.textContent = `${firstNamePackage.textContent} ${lastNamePackage.textContent}`;
    contactNamePackage.style.fontWeight = "700";
    packageDisplay.appendChild(contactNamePackage);
    formPackageSection.appendChild(packageDisplay);
    let streetAddress = document.createElement("p");
    streetAddress.classList.add("street-address");
    streetAddress.textContent = addressOne.value;
    packageDisplay.appendChild(streetAddress);
    let cityStateZip = document.createElement("p");
    cityStateZip.classList.add("city-state-zip");
    cityStateZip.textContent = `${city.value}, ${state.options[state.selectedIndex].text} ${zipCode.value}`;
    // console.log(cityStateZip)
    packageDisplay.appendChild(cityStateZip);
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




    }
    






    editButtonPackage.addEventListener("click", function(e) {
        e.preventDefault();
        editButtonPackage.style.display = "none";
        packageDisplay.style.display = "none";
        packageToggle.style.display = "block";
    })


    
})


// let cartArray = JSON.parse(localStorage.getItem("shoe"))

// console.log(cartArray);
