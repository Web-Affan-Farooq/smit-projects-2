function checkCharacterType() {
    let input = prompt("Enter a character or number:");

    if (input === null || input === "") {
        console.log("No input provided");
        return;
    }

    let char = input.charAt(0);
    let asciiCode = char.charCodeAt(0);

    if (!isNaN(parseFloat(char)) && isFinite(char)) {
        console.log(`${char} is a number`);
    } else if (asciiCode >= 65 && asciiCode <= 90) {
        console.log(`${char} is an uppercase letter`);
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        console.log(`${char} is a lowercase letter`);
    } else {
        console.log(`${char} is neither a number nor a letter`);
    }
}

checkCharacterType();