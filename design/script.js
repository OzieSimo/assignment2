//------------------RECOMMENDATION FUNCTION------------------//

var selectedRestaurant = ""; // Creating a variable called selectedRestaurant, which starts as an empty string which will later store the recommended restaurant

function recommendRestaurant() { // the following function (which is reusable code) will run when the user clicks the recommend button
    var diet = document.getElementById("diet1").value; // finds the HTML element with ID "diet1" and retrieves the value given by user storing it inside variable "diet"
    var price = document.getElementById("PriceRange").value; // finds the HTML element with ID "PriceRange" and retrieves the value given by user storing it inside variable "price"
    var purpose = document.getElementById("purpose").value; // finds the HTML element with ID "purpose" and retrieves the value given by user storing it inside variable "purpose"


    var restaurantName = ""; // empty variable created for the restaurant name which will be filled out after if statements check the user choice
    var reason = ""; // empty variable created for reason that will display the reason of choice after user input

    //If Vegan + $20-$40 range is sellected
    
    if (diet === "Vegan" && price === "$20-$40" && purpose === "Date"){ //the triple equals validates that the string is strictly true, likewise the double & also keeps both conditions strictly true
        restaurantName = "Ippudo" //if the string is true, the string "Ippudo" will link to the variable of restaurantName and display it accordingly
        reason = "This restaurant accomodates to your preferences"
    }

    //If Vegetarian + $20-$40 range is selected

    else if (diet === "Vegetarian" && price === "$20-$40" && purpose === "Family"){ // the validation moves down when the if statement is false and checks the "else if". if all are false the "else" condition resolves
        restaurantName = "Hakoya Izakaya"
        reason = "This restaurant accomodates to your preferences"
    }
    
    //If Gluten Free + $40-$60 range + friend is selected

    else if (diet === "Gluten Free" && price === "$40-$60" && purpose === "Friends") {
        restaurantName = "Pepe's Italian & Liquor";
        reason = "This restaurant accomodates to your preferences";
    }

    //If None + $40-$60 range + Date is selected

    else if (diet === "None" && price === "$40-$60" && purpose === "Date") {
        restaurantName = "Pepe's Italian & Liquor";
        reason = "This restaurant accomodates to your preferences";
    }

    //If Family is selected

    else if (purpose === "Family") {
        restaurantName = "Pochana";
        reason = "This restaurant accomodates to your preferences";
    }

    //If Friends is selected

    else if (purpose === "Friends") { 
        restaurantName = "Operator Diner";
        reason = "This restaurant accomodates to your preferences";
    }

    //If nothing is selected

    else { // If none of the rules match, the defualt resturant is used
        restaurantName = "MCKINLY Eatery";
        reason = "This is a flexible option for anything.";
    }

    //Save Restaurant

    selectedRestaurant = restaurantName; // saves the restaurantName to the selectedRestaurant so that it can be used later

   // Display Result

    document.getElementById("restaurantName").textContent = restaurantName; //finds the element with ID "restaurantName" and changes text via .textcontent to the recommended restaurant
    document.getElementById("restaurantReason").textContent = reason;
}

//Reservation Page Routing

function selectRestaurant() { // function created for slection of restaurant and routed to reservation.html

    window.location.href = "reservation.html?restaurant=" + encodeURIComponent(selectedRestaurant); // takes the user to the reservation page via identifying the curent browser window, webpage address and href url, then retaining the restaurant info through the query string 
    
    //ecodeURIComponent makes the text safe to put inside a URL, this is to address "Pepe's Italian & Liquor" and the sepcial character "&" which would normally cause conflicts
}

 //Button Listener:

    var recommendBtn = document.getElementById("recommendBtn"); // variable created for the recommend button via ID "recommendBtn"

    if (recommendBtn) { // checking if the recommend button exists, then executes the event listener when clicked
            recommendBtn.addEventListener("click",recommendRestaurant); // when the recommended button is clicked, it'll run the function "recommendRestaurant"
    }

    var selectBtn = document.getElementById("selectRestaurantBtn"); // variable created for the select Restaurant button via ID "selectBtn"
        
        if (selectBtn) { // checking if the select button exists, then executes the event listener when clicked
            selectBtn.addEventListener("click",selectRestaurant); // when the select button is clicked, it'll run the function "recommendRestaurant"
        }

//------------------REGISTRATION FUNCTION------------------//

function validateRegister() { // function for validating registration
    var username = document.getElementById("username").value; // creates variable for username based on the html "username" ID inputed by the user via the value
    var email = document.getElementById("email").value; // creates variable for email based on the html "email" ID inputed by the user via the value
    var phone = document.getElementById("phone").value; // creates variable for phone based on the html "phone" ID inputed by the user via the value
    var password = document.getElementById("pwd1").value; // creates variable for pwd1 based on the html "pwd1" ID inputed by the user via the value
    var confirmPassword = document.getElementById("pwd2").value; // creates variable for confirmPassword based on the html "pwd2" ID inputed by the user via the value
    var gender = document.querySelector('input[name="Gender"]:checked'); // creates variable for gender based on gender radio button selection, fetches the result via queryselector 

    var errorMessage = ""; // variable created with empty string created to store all error messages
    var result = true; // variable result asssumes true in the beginning, however goes through validation first and changes result based on answer

    var usernamePattern = /^[A-Za-z0-9_]+$/; //The username is validated so that it only contains uppercase letters, numbers, and underscores. 
    // /../ indicates a regular expression, ^ indicates the check at the beginning of the text, [] allows any one charcter from the list, "_" allows the use of the _ in the username. $ indicates the end of text.
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // [^] indicates "except", "\s" indicates no whitespace characters such as a space, tab or new line. "\." indicates the requirement of a full stop. 
    var phonePattern = /^[0-9]{8,15}$/;
    // {8,15} indicates repeat of previous line a minimum of 8 times and max of 15
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/; // Checks password has, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 number, at least 1 special character, at least 10 characters total
    // (?=.*) indicates the "lookahead" and checks for the according rule anywhere along the input via (.*). \d indicates any digit 
    
    //USERNAME
    if (username === "") { // check if username field is empty
        errorMessage += "Username cannot be empty.\n"; // adds error message via "+="
        // \n indicates new line
        result = false;
    } else if (username.length < 5) { //checks if username is less than 5 characters
        errorMessage += "Username must be at least 5 characters.\n";
        result = false;
    } else if (!username.match(usernamePattern)) { //check for not allowed pattern in username
        // "!" indicates "not"
        errorMessage += "Username can only contain letters, numbers, and underscores.\n";
        result = false;
    }

    //EMAIL
     if (email === "") { //checks if email feild is empty
        errorMessage += "Email address cannot be empty.\n";
        result = false;
    } else if (!email.match(emailPattern)) {
        errorMessage += "Please enter a valid email address.\n";
        result = false;
    }

    //PHONE
     if (phone === "") { //checks if phone feild is empty
        errorMessage += "Phone number cannot be empty.\n";
        result = false;
    } else if (!phone.match(phonePattern)) {
        errorMessage += "Phone number must contain digits only and be 8 to 15 digits long.\n";
        result = false;
    }

    //PASSWORD
    if (password === "") { //checks if password feild is empty
        errorMessage += "Password cannot be empty.\n";
        result = false;
    } else if (!password.match(passwordPattern)) {
        errorMessage += "Password must be at least 10 characters and include uppercase, lowercase, number, and special character.\n";
        result = false;
    }

    //PASSWORD CONFIRMATION
     if (confirmPassword === "") { //checks if confirmation password feild is empty
        errorMessage += "Confirm password cannot be empty.\n";
        result = false;
    } else if (confirmPassword !== password) { // checks if the confirmation password does not equal to orginal password
        errorMessage += "Confirm password must match password.\n";
        result = false;
    }

    //GENDER
    if (!gender) { // checks if gender hasn't been selected
        errorMessage += "Gender must be selected.\n";
        result = false;
    }

    //VALIDATION
     if (result === true) { // checks if the result remains true 
        document.getElementById("accountMessage").textContent = "Account created successfully!"; // displays successful account creation
    } else {
        alert(errorMessage); //if the result remains false display all error messages that were triggered
    }

     return result; //returns the result as either true or false, i.e. valid or invalid
}

//------------------RESERVATION FUNCTION------------------//

var restaurantDeposits = { //variable created to store restaurants and their deposit amounts, all resturants are connected to the according values
    "Pepe's Italian & Liquor": "60",
    "Ippudo Ramen": "40",
    "Pochana": "20",
    "Operator Diner": "40",
    "MCKINLY Eatery": "20",
    "Hakoya Izakaya": "40"
};

function setupReservationPage() { //function for preparation of reservation page
    var restaurantSelect = document.getElementById("RestaurantSelection");
    var depositSelect = document.getElementById("Deposit");
    var depositMethod = document.getElementById("DepositMethod");
    var voucherCode = document.getElementById("VoucherCode");
    var creditCard = document.getElementById("CreditCard");
    var sameEmail = document.getElementById("SameEmail");
    var reservationForm = document.getElementById("reservationForm");

    if (!restaurantSelect) { //this checks for the restaurant dropdown, if the page doesn't contain the dropdown, the function stops. This is to prevent conflicts with the register page
        return;
    }

    //RESTAURANT FROM RECOMMENDATION IMPLEMINTATION

    var params = new URLSearchParams(window.location.search); // creates variable that passes the recommendation resturant values via parameters.
    //window.location.search retun ?restaurant="whichever restuarant inputed" after html URL. 
    var restaurantFromURL = params.get("restaurant"); //creates variable that gets the restaurant value from the URL

    if (restaurantFromURL) { //sets the restaurant drop down value to the restaurant selected
        restaurantSelect.value = restaurantFromURL;
    }

    updateDeposit(); //updates the deposit based on the selected restaurant by running the adherent function
    updatePaymentFields(); // based on payment method selction it'll either display or hid the voucher/credit card fields by running the adherent function

    restaurantSelect.addEventListener("change", updateDeposit); // when restaurant selection occurs, deposit changes proactively
    depositMethod.addEventListener("change", updatePaymentFields); // payment fields change based on deposit method selection

    if (sameEmail) {
        sameEmail.addEventListener("change", copyBillingEmail); // when the checkbox changes, the billing email will eithjer copy or clear
    }

    if (reservationForm) {
    reservationForm.addEventListener("submit", validateReservation); // when form is submitted, validateReservation function will run
    }
}

function updateDeposit() { // function that updates deposit amount
    var restaurantSelect = document.getElementById("RestaurantSelection"); // Find the restaurant dropdown
    var depositSelect = document.getElementById("Deposit"); // Find the deposit dropdown
    var selectedRestaurant = restaurantSelect.value; // get the currently selected restaurant
    var depositAmount = restaurantDeposits[selectedRestaurant]; // Look up the deposit amount for that restaurant

    if (depositAmount) { //validates if deposit amount was found
        depositSelect.value = depositAmount; //sets the depost dropdown to correct value
    }
}

function updatePaymentFields() { // function that updates payment fields
    var depositMethod = document.getElementById("DepositMethod"); // Find the deposit method dropdown
    var voucherCode = document.getElementById("VoucherCode");  // Find the voucher code textbox
    var creditCard = document.getElementById("CreditCard"); // Find the credit card textbox

    if (depositMethod.value === "Voucher") {  // Check if Voucher is selected
        voucherCode.parentElement.style.display = "block"; // Show the voucher code field's parent paragraph
        creditCard.parentElement.style.display = "none";  // Hide the credit card field's parent paragraph
        creditCard.value = "";  // Clear the credit card field because it is not needed for voucher
    } else { // If Voucher is not selected, Online Payment must be selected
        voucherCode.parentElement.style.display = "none"; 
        creditCard.parentElement.style.display = "block";
        voucherCode.value = "";
    }
}

function copyBillingEmail() { // Function that copies email into billing email
    var email = document.getElementById("email");  // Find the main email textbox
    var billingEmail = document.getElementById("BillingEmail");  // Find the billing email textbox
    var sameEmail = document.getElementById("SameEmail"); // Find the same-as-email checkbox

    if (sameEmail.checked) { // Check if the checkbox is ticked
        billingEmail.value = email.value; // Copy the main email value into billing email
    } else {  // If the checkbox is not ticked
        billingEmail.value = ""; // Clear the billing email textbox
    }
}

function validateReservation(event) { //function that validates the reservation form. Event is the form submission event, and prevents form being submitted regardless of true or false result. event.preventDefault(); prevents this on line 353
    var fullName = document.getElementById("FullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var restaurant = document.getElementById("RestaurantSelection").value;
    var date = document.getElementById("Date").value;
    var time = document.getElementById("Time").value;
    var people = document.getElementById("PeopleAttending").value;
    var depositMethod = document.getElementById("DepositMethod").value;
    var voucherCode = document.getElementById("VoucherCode").value;
    var creditCard = document.getElementById("CreditCard").value;
    var billingEmail = document.getElementById("BillingEmail").value;
    var password = document.getElementById("pwd1").value;
    var confirmPassword = document.getElementById("pwd2").value;

    var errorMessage = ""; // empty error message string
    var result = true; // assumes result is true unless if statement results in false

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{10,}$/;
    var cardPattern = /^[0-9]{15,16}$/;

    if (fullName === "") { // Check if full name is empty
        errorMessage += "Full name cannot be empty.\n";
        result = false;
    }

    if (email === "" || !email.match(emailPattern)) { // Check if email is empty or invalid
        errorMessage += "Please enter a valid email address.\n";
        result = false;
    }

    if (phone === "" || !phone.match(phonePattern)) { // Check if phone is empty or invalid
        errorMessage += "Phone number must contain at least 10 digits.\n";
        result = false;
    }

    if (restaurant === "") {  // Check if restaurant is empty
        errorMessage += "Please select a restaurant.\n";
        result = false;
    }

    if (date === "" || time === "") { // Check if date or time is empty
        errorMessage += "Reservation date and time cannot be empty.\n";
        result = false;
    } else {  // If both date and time are filled in
        var selectedDateTime = new Date(date + "T" + time); // "T" helps javascript interpit date and time data together
        var currentDateTime = new Date();  // Get the current date and time

        if (selectedDateTime < currentDateTime) { // Check if selected reservation time is before now
            errorMessage += "Reservation date and time must not be in the past.\n";
            result = false;
        }
    }

    if (billingEmail === "" || !billingEmail.match(emailPattern)) {
        errorMessage += "Please enter a valid billing email address.\n";
        result = false;
    }

   
    if (password === "") {
        errorMessage += "Password cannot be empty.\n";
        result = false;
    }

    
    if (confirmPassword === "") {
        errorMessage += "Confirm Password cannot be empty.\n";
        result = false;
    }

    
    if (password !== "" && confirmPassword !== "" && password !== confirmPassword) {
        errorMessage += "Passwords do not match.\n";
        result = false;
    }

    if (depositMethod === "Voucher") {
        if (voucherCode === "") {
            errorMessage += "Voucher code cannot be empty.\n";
            result = false;
        }
    }

    if (depositMethod === "Online Payment") {
        if (creditCard === "" || !creditCard.match(cardPattern)) {
            errorMessage += "Credit card must be digits only and either 15 or 16 digits long.\n";
            result = false;
        }
    }

    if (result === true) {
        document.getElementById("accountMessage").textContent =
            "Reservation created successfully!";
    } else {
    event.preventDefault(); //stops defualt behaviour
    alert(errorMessage);
    }

    return result;
}

// Registration page listener
if (document.getElementById("username")) {
    var submitBtn = document.getElementById("submitBtn");

    if (submitBtn) {
        submitBtn.addEventListener("click", validateRegister);
    }
}

// Reservation page setup
setupReservationPage();
