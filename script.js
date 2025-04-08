// import form of the Registration form
const form = document.getElementById("form");
const registrationForm = document.getElementById("registrationForm");
// put DiceGame here
// const diceGame = document.getElementById("civ");

// import all of the variables except of the RadioOptions
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const teamSize = document.getElementById("teamSize");

// import all of the errors
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const teamSizeError = document.getElementById("teamSizeError");
const technologiesError = document.getElementById("technologiesError");

// import submit buttons
const submitBtn = document.getElementById("submitBtn");
form.addEventListener("submit", (event) => {
	event.preventDefault();

    let isValid = true

    if(!checkFirstName()) isValid = false
    if(!checkLastName()) isValid = false
    if(!checkEmail()) isValid = false
    if(!checkPassword()) isValid = false
    if(!checkTeamSize()) isValid = false
    if(!checkServices()) isValid = false

	
    if(isValid){
        console.log("Passed :/");
    }
    else{
        console.log("go kill yourself :)");
    }
});

// function to check validity of the firstName
function checkFirstName() {
	// set Error if needed
	if (!firstName.value) {
		setError(firstName, firstNameError, "First Name is required.");
		return false;
	} else {
		clearError(firstName, firstNameError);
		return true;
	}
}

// function to check validity of the lastName
function checkLastName() {
	// set Error if needed
	if (!lastName.value) {
		setError(lastName, lastNameError, "Last Name is required.");
		return false;
	} else {
		clearError(lastName, lastNameError);
		return true;
	}
}

// function to check validity of the courseLevel
function checkEmail() {
	// set Error if needed
	if (!email.value) {
		setError(email, emailError, "Email is required.");
		return false;
	} else {
		clearError(email, emailError);
		return true;
	}
}

// function to check validity of the fullName
function checkPassword() {
	// set Error if needed
	if (!firstName.value) {
		setError(password, passwordError, "Password is required.");
		return false;
	} else {
		clearError(password, passwordError);
		return true;
	}
}

// function to check validity of the fullName
function checkTeamSize() {
	// set Error if needed
	if (!teamSize.value) {
		setError(teamSize, teamSizeError, "Please select team size.");
		return false;
	} else {
		clearError(teamSize, teamSizeError);
		return true;
	}
}

// function to check validity of the agreement
function checkServices() {
	// set Error if needed
    const servicesOptions = document.getElementById("tech-Group")
    const services = servicesOptions.querySelectorAll("input")

    let isChecked = false
    let findservices = []
    let o = 3
    findservices = [...services].filter((service) => service.checked)
    if(findservices.length >=3) {
        isChecked = true
    }
    
	if (!isChecked) {
        let image = document.getElementById("image")
        let message = document.getElementById("text")
        image.src = "./a71b6f2de7c33aac0f7b5825639e860d.png"
        message.textContent = "Choose at least 3 service."
		return false;
	} else {
		technologiesError.textContent = "";
		return true;
	}
}

// this is used to set Errors
function setError(element, elementError, message) {
	// this is used to set Error message
	elementError.textContent = message;

	// this is used to add correct style to input box by changing class
	element.classList.add("invalid");
	element.classList.remove("normal");
}

// this is to set valid inputs
function clearError(element, elementError) {
	// this is used to set Error message
	elementError.textContent = "";

	// this is used to add correct style to input box by changing class
	element.classList.add("normal");
	element.classList.remove("invalid");
}
