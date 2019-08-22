function acnebot() {
    var message = window.prompt(
        "Que veux tu dire à l'ado chatbot!"
    );


}

function isAQuestion(message) {
    result = false;
    lastChar = message[message.length - 1];

    return lastChar === "?";
}


function isUpperCase(str) {
    return str === str.toUpperCase();
}