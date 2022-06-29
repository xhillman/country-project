let userCountry = prompt("Iceland or Indonesia?");

if (userCountry.toLowerCase() == "iceland") {
    document.write("<<< You chose Iceland!");
}   else if (userCountry.toLowerCase() == "indonesia") {
    document.write("You chose Indonesia >>>");
}   else {
    document.write("Where are you headed?");
}