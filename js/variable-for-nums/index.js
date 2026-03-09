function code_1() {
    var age = 25;
    alert("I am " + age + " years old");
}


function code_2() {
    var visitCount = 15;
    var message = "You have visited this site " + visitCount + " times";
    alert(message);
}


function code_3() {
    var birthYear = 1998; // Replace with your actual birth year

    alert("My birth year is " + birthYear);
    document.writeln(
        "My birth year is " + birthYear + "<br>" +
        "Data type of my declared variable is " + typeof birthYear)
}


function code_4() {
    var visitorName = "John Doe";
    var productTitle = "T-shirt";
    var quantity = 5;

    var message = visitorName + " ordered " + quantity +
        " " + productTitle + "(s) on XYZ Clothing store";

    document.writeln(message);
}