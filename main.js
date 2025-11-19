const contactButton = document.getElementById("contact-btn");
const emailDisplay = document.getElementById("email-display");

var emailDisplayed = false;

// 2. LISTEN for an event
contactButton.addEventListener("click", function() {
    
    // 3. RUN this function when the click happens
    emailDisplayed = !emailDisplayed;
    emailDisplay.classList.toggle("hidden");
    if (emailDisplayed) {
        //emailDisplay.textContent = "your.email@university.edu"; // Change this!
        contactButton.textContent = "Hide My Email";
    }
    else {
        //emailDisplay.textContent = "";
        contactButton.textContent = "Show My Email";
    }
});

const toggleButton = document.getElementById("toggle-btn");
const interestsList = document.getElementById("interests-list");

// 2. LISTEN for an event
toggleButton.addEventListener("click", function() {

    // 3. RUN this function
    // This time, we "toggle" the .hidden class on the list
    interestsList.classList.toggle("hidden");
});