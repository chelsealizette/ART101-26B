function askNumber(whatNumber) {
    let userNumber = parseInt(prompt("Guess a number from 1-10:"), 10);

    if (userNumber === whatNumber) {
        $("#output").html("You got it!");
    } else {
        $("#output").html("Noooooope");
    }
}

$(document).ready(function () {
    $("#good-button").click(function () {
        askNumber(5);
    });
});