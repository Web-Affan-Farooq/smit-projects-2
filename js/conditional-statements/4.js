// Program 4: Check if character is vowel
function isVowel() {
    let input = prompt("Enter a single character:");

    if (input === null || input === "" || input.length > 1) {
        console.log("Please enter a single character");
        return false;
    }

    let char = input.charAt(0).toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = vowels.includes(char);

    console.log(`Is '${input}' a vowel? ${result}`);
    return result;
}

isVowel();