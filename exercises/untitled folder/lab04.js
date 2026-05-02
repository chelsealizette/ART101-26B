let count = 0;

let buttonCreature = {
name: "Curious Bubbles",
species: " Unicorn",
favoriteFood: "pancakes",
moods: ["outgoing", "adventureous", "funny", "silly", "goofy", "adventureous"]
};

$("#needy-button").click(function () {
count = count + 1;

let arrayPosition = (count - 1) % buttonCreature.moods.length;
let currentMood = buttonCreature.moods[arrayPosition];

let message = "<p>You pressed me " + count + " times.</p>";
message += "<p> I am feeling very " + currentMood + ".</p>";
message += "<p> I go by" + buttonCreature.name + ".</p>";
message += "<p>I idenify " + buttonCreature.species + ".</p>";
message += "<p>My fuel is  " + buttonCreature.favoriteFood + ".</p>";

$("#output").html(message);
});
 document.body.style.backgroundColor = "lightpurple";