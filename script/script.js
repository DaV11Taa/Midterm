// import form of the Registration form
const form = document.getElementById("form");
const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");

// import all of the variables except of the RadioOptions
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const teamSize = document.getElementById("teamSize");

// setting up default values
const imagePath = "./images/a71b6f2de7c33aac0f7b5825639e860d.png";

// import all of the errors
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const teamSizeError = document.getElementById("teamSizeError");
const techImage = document.getElementById("tech-image");
const techText = document.getElementById("tech-text");

// to access the dice page elements
const rollButton = document.querySelector("#rollBtn");
const circles = Array.from(document.querySelectorAll(".dice .circle"));
const circles2 = Array.from(document.querySelectorAll(".dice2 .circle"));
const winnerAnnouncement = document.querySelector("#winner");
const reset = document.querySelector("#reset");

// removing middle dot of dice in the beggining

const gameHistory = document.querySelector("ul");

// this is to access the score board
const player1_score = document.getElementById("player1Score");
let player2_score = document.getElementById("player2Score");

// setting initial score to 0 and keeping track of them with score1 and score2 variables
player1_score.textContent = "0";
player2_score.textContent = "0";
let score1 = 0;
let score2 = 0;
let round = 0;

// import submit buttons
const submitBtn = document.getElementById("submitBtn");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  if (!checkFirstName()) isValid = false;
  if (!checkLastName()) isValid = false;
  if (!checkEmail()) isValid = false;
  if (!checkPassword()) isValid = false;
  if (!checkTeamSize()) isValid = false;
  if (!checkServices()) isValid = false;

  if (!isValid) {
    console.log("Error");
  } else {
    // hide registrationform

    task1.classList.add("hidden");
	
	const style = document.createElement('style');
	style.textContent = `
	* {
		margin: 0px;          /* Changed from 0 */
		padding: 0px;         /* Changed from 0 */
		box-sizing: border-box; /* Changed from border-box */
		font-family: Inter; /* Changed from Poppins */
		font-weight: 600;     /* Changed from 500 */
	}
	`;
	document.head.appendChild(style);

    // show dice game
    task2.classList.remove("hidden");
  }
});

rollButton.addEventListener("click", (event) => rolling(circles, circles2));
reset.addEventListener("click", (event) => {
  winnerAnnouncement.textContent = "Start the game";
  resetDice(circles);
  resetDice(circles2);
  gameHistory.replaceChildren();
  // reseting scores
  round = 0;
  score1 = 0;
  score2 = 0;
  player1_score.textContent = score1;
  player2_score.textContent = score2;
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

// function to check validity of the email
function checkEmail() {
  // set Error if needed
  if (!email.value) {
    setError(email, emailError, "Email is required.");
    return false;
  } else {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email.value)) {
      clearError(email, emailError);
      setError(email, emailError, "Wrong format.");
      return false;
    } else {
      clearError(email, emailError);
      return true;
    }
  }
}

// function to check validity of the password
function checkPassword() {
  // set Error if needed
  if (!password.value) {
    setError(password, passwordError, "Password is required.");
    return false;
  } else {
    if (!(password.value.length >= 8)) {
      clearError(password, passwordError);
      setError(
        password,
        passwordError,
        "Password must be at least 8 characters long."
      );
      return false;
    } else {
      clearError(password, passwordError);
      return true;
    }
  }
}
// function to check validity of the teamSize
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

// function to check validity of the technologies services
function checkServices() {
  // take all checked elements and check if they are 3 or more
  if (!(document.querySelectorAll("#tech-Group input:checked").length >= 3)) {
    // give image source and content
    techImage.src = imagePath;
    techText.textContent = "Choose at least 3 service.";
    return false;
  } else {
    // remove image source and content
    techImage.src = "";
    techText.textContent = "";
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

// this function rolls dice by
function algorithm(circles) {
  const point = Math.floor(Math.random() * 6) + 1;

  switch (point) {
    case 1:
      circles.forEach((c, i) => {
        if (i === 3) c.classList.add("black");
        else c.classList.remove("black");
      });
      break;

    case 2:
      circles.forEach((c, i) => {
        if (i === 0 || i === 6) c.classList.add("black");
        else c.classList.remove("black");
      });
      break;

    case 3:
      circles.forEach((c, i) => {
        if (i === 0 || i === 3 || i === 6) c.classList.add("black");
        else c.classList.remove("black");
      });
      break;

    case 4:
      circles.forEach((c, i) => {
        if (i !== 2 && i !== 3 && i !== 4) c.classList.add("black");
        else c.classList.remove("black");
      });
      break;

    case 5:
      circles.forEach((c, i) => {
        if (i !== 2 && i !== 4) c.classList.add("black");
        else c.classList.remove("black");
      });
      break;

    case 6:
      circles.forEach((c, i) => {
        if (i !== 3) c.classList.add("black");
        else c.classList.remove("black");
      });
      break;
  }
  return point;
}
// this function craetes history records
function historyRecord(message, winner) {
  let update = document.createElement("li");
  update.textContent = message;
  gameHistory.appendChild(update);
  winnerAnnouncement.textContent = winner;
}

// this function is run when roll button is pressed
function rolling(circles, circles2) {
  round++;
  // by rolling rounds amount is increasing
  // based on rolled amound returned from algorithm function appropriate message is displayed and score increased
  const rolled = algorithm(circles);
  const rolled2 = algorithm(circles2);
  console.log(rolled, rolled2);
  let message =
    "Round " +
    round +
    ": Player 1 rolled " +
    rolled +
    ", Player 2 rolled " +
    rolled2;
  if (rolled == rolled2) {
    historyRecord(message + "→🤝 It is a Draw!", "Draw");
    return;
  } else if (rolled > rolled2) {
    score1 += 1;
    player1_score.textContent = score1;
    historyRecord(message + "→ 🏆Player 1 Wins!", "Player 1 Won! 🎉");
  } else {
    score2 += 1;
    player2_score.textContent = score2;
    historyRecord(message + "→ 🏆Player 2 Wins!", "Player 2 Won! 🎉");
  }
  gameHistory.scrollTop = gameHistory.scrollHeight;
}

// ensures all circles except meddle one are black whet starting over
function resetDice(circles) {
  circles.forEach((circle, index) => {
    if (index === 3) {
      circle.classList.remove("black");
    } else {
      circle.classList.add("black");
    }
  });
}
