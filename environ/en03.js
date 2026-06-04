let environmentTitle = "Chelsea the Creator";

let environmentElements = ["curtain", "dust", "warm floor", "half-open door"];

let mainEntity = {
    name: "Flower Girl",
    type: "soft border",
    mood: "unique",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

function changeMood(mood) {

    if (mood == "happy") {
        $("body").css("background-color", "pink");
        $("#environment-output").html("Flower Girl feels happy.");
    } else {
        $("body").css("background-color", "lightblue");
        $("#environment-output").html("Flower Girl feels calm.");
    }

}

$("#env-button").click(function () {
    let userInput = prompt("Type happy or calm");
    changeMood(userInput);
});