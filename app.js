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

// function makeSuggestion() {
//     let text = "Which do your prefer?\nPress OK for Hiking or Cancel for Snorkeling"
//     if (confirm(text) == true) {
//         document.write("Next time you're in Iceland, try to find the trolls!");
//     } else {
//         document.write("Indonesia has a bunch of temples too! Check them out!");
//     }
// };

function chooseCountry() {
    userCountry = prompt("Iceland or Indonesia?");
    if (userCountry.toLowerCase() == "iceland") {
        document.write("Iceland gets");
    }   else if (userCountry.toLowerCase() == "indonesia") {
        document.write("Indonesia gets")
    }   else {
        tryAnother();
    }
};

function tryAnother() {
    confirm("That's not one of the options! Let's try this again.")
    chooseCountry();
}

function rateCountry() {
    userRating = prompt("How would you rate it from 1 - 5?");
    if (userRating > 5 || userRating < 1) {
        notAnOption();
    } else {
        for (let i = 0; i < userRating; i++) {
            document.write("<img src='img/clipart1753277.png' style='width:50px'>");
        };
    document.write("out of 5!");
    };
};

function notAnOption() {
    confirm("Maybe you didn't understand the question. Give me a real answer!");
    rateCountry();
}