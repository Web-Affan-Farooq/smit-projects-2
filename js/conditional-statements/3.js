// Program 3: Check number sign
function checkNumberSign() {
    let number = parseFloat(prompt("Enter a number:"));

    if (isNaN(number)) {
        console.log("Please enter a valid number");
        return;
    }

    if (number > 0) {
        console.log(`${number} is positive`);
    } else if (number < 0) {
        console.log(`${number} is negative`);
    } else {
        console.log("The number is zero");
    }
}

checkNumberSign();