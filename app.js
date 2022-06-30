function askYears() {
    let userYears = prompt("When was the last time you took a trip? How many years?");
    if (userYears >= 3) {
        document.write("Sounds like you could use a break!");
    } else if (userYears > 3) {
        document.write("Let's plan your next one!");
    } else {
        tryAgain(); 
    };
};

function tryAgain() {
    confirm("I was looking for a number! Let's try that again.");
    askYears();
};

function makeSuggestion() {
    let text = "Which do your prefer?\nPress OK for Hiking or Cancel for Snorkeling"
    if (confirm(text) == true) {
        document.write("Next time you're in Iceland, try to find the trolls!");
    } else {
        document.write("Indonesia has a bunch of temples too! Check them out!");
    }
};

function chooseCountry() {
    let userCountry = prompt("Iceland or Indonesia?");
    if (userCountry.toLowerCase() == "iceland") {
        document.write("<<< You chose Iceland!");
    }   else if (userCountry.toLowerCase() == "indonesia") {
        document.write("You chose Indonesia >>>");
    }   else {
        document.write("Where are you headed?");
    }
};
