function code_1() {
    var variable1 = 10, variable2 = "Hello", variable3 = true;

    var output = "Three variables declared in one statement:<br>";
    output += "variable1 = " + variable1 + " (number)<br>";
    output += "variable2 = " + variable2 + " (string)<br>";
    output += "variable3 = " + variable3 + " (boolean)";

    document.writeln(output)
}

function code_2() {
    var firstName = "John";
    var _privateVar = "secret";
    var $dollarVar = 100;
    var user123 = "user123";
    var my_name = "John Doe";

    var legalOutput = "✅ 5 Legal Variable Names:<br>";
    legalOutput += "1. firstName = " + firstName + "<br>";
    legalOutput += "2. _privateVar = " + _privateVar + "<br>";
    legalOutput += "3. $dollarVar = " + $dollarVar + "<br>";
    legalOutput += "4. user123 = " + user123 + "<br>";
    legalOutput += "5. my_name = " + my_name + "<br><br>";

    legalOutput += "❌ 5 Illegal Variable Names:<br>";
    legalOutput += "1. 123user (Cannot start with a number)<br>";
    legalOutput += "2. my-name (Hyphen - is not allowed)<br>";
    legalOutput += "3. var (Reserved keyword)<br>";
    legalOutput += "4. my name (Space is not allowed)<br>";
    legalOutput += "5. @special (Special character @ not allowed)";

    document.writeln(legalOutput);
}

function code_3() {
    var output = "<h2>Rules for naming JS variables</h2>";

    output += "<p><strong>Variable names can only contain:</strong> ";
    output += "letters, numbers, <strong>$</strong> (dollar sign) and <strong>_</strong> (underscore).<br>";
    output += "For example: <code>my_1stVariable</code> or <code>$name123</code></p>";

    output += "<p><strong>Variables must begin with:</strong> ";
    output += "a <strong>letter</strong>, <strong>$</strong> (dollar sign) or <strong>_</strong> (underscore).<br>";
    output += "For example: <code>name</code>, <code>$name</code> or <code>_name</code></p>";

    output += "<p><strong>Variable names are case <span style='color:red'>sensitive</span></strong><br>";
    output += "For example: <code>myName</code> and <code>MyName</code> are different variables.</p>";

    output += "<p><strong>Variable names should not be JS <span style='color:red'>keywords</span></strong><br>";
    output += "For example: Don't use: <code>var</code>, <code>if</code>, <code>for</code>, <code>while</code>, etc.</p>";

    document.writeln(output)
}

function checkVariableName() {
    var variableName = document.getElementById("varInput").value;
    var resultDiv = document.getElementById("checkResult");

    if (variableName.trim() === "") {
        resultDiv.innerHTML = "Please enter a variable name";
        resultDiv.style.color = "orange";
        return;
    }

    var isValid = true;
    var errors = [];

    if (variableName.length === 0) {
        isValid = false;
        errors.push("Variable name cannot be empty");
    }

    var firstChar = variableName.charAt(0);
    if (!(firstChar.match(/[a-zA-Z_$]/))) {
        isValid = false;
        errors.push("First character must be a letter, $, or _");
    }

    for (var i = 1; i < variableName.length; i++) {
        var char = variableName.charAt(i);
        if (!(char.match(/[a-zA-Z0-9_$]/))) {
            isValid = false;
            errors.push("Character '" + char + "' at position " + (i + 1) + " is not allowed");
            break;
        }
    }

    var keywords = ["abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch",
        "char", "class", "const", "continue", "debugger", "default", "delete", "do",
        "double", "else", "enum", "eval", "export", "extends", "false", "final",
        "finally", "float", "for", "function", "goto", "if", "implements", "import",
        "in", "instanceof", "int", "interface", "let", "long", "native", "new", "null",
        "package", "private", "protected", "public", "return", "short", "static",
        "super", "switch", "synchronized", "this", "throw", "throws", "transient",
        "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"];

    if (keywords.includes(variableName)) {
        isValid = false;
        errors.push("'" + variableName + "' is a reserved keyword");
    }

    if (isValid) {
        resultDiv.innerHTML = "✅ '" + variableName + "' is a VALID variable name";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = "❌ '" + variableName + "' is NOT valid:<br>" + errors.join("<br>");
        resultDiv.style.color = "red";
    }
}
