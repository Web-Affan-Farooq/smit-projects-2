function code_1() {
    var username;
}

function code_3() {
    var myName = "John Doe";
}

function code_3() {

    var message;

    message = "Hello World";

    alert(message);
}

function code_4() {
    var studentName = "John Doe";
    var studentAge = 20;
    var studentCourse = "Web Development";
    var studentID = "STU12345";
    var studentEmail = "john.doe@example.com";

    alert("Student Name: " + studentName);
    alert("Student Age: " + studentAge);
    alert("Student Course: " + studentCourse);
    alert("Student ID: " + studentID);
    alert("Student Email: " + studentEmail);
}
function code_5() {
    var alertText = "Pizza\nPizz\nPiz\nPi\nP";
    alert(alertText);
}
function code_6() {
    var email = "example@example.com";
    var message = "My email address is " + email;
    alert(message);
}
function code_7() {
    var book = "A smarter way to learn JavaScript";
    var message = "I am currently reading: " + book;
    alert(message);
}

function code_8() {
    document.write("Yah! I can write HTML content through JavaScript");
}
function code_9() {
    var displayText = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬\n";
    displayText += "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";

    alert(displayText);

    document.getElementById("output").innerHTML = displayText.replace(/\n/g, "<br>");
}