// Program 5: Password validation
function validatePassword() {
    // a. Store correct password
    const correctPassword = "mySecretPassword123";

    // b. Ask user to enter password
    let userPassword = prompt("Please enter your password:");

    // c. Validate passwords
    if (userPassword === null || userPassword === "") {
        // i. Check if password is empty
        console.log("Please enter your password");
    } else if (userPassword === correctPassword) {
        // ii. Check if passwords match
        console.log("Correct! The password you entered matches the original password");
    } else {
        console.log("Incorrect password");
    }
}

validatePassword();