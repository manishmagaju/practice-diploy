//conditional operators

// if condition
let age = 30
if (age > 18) {
    console.log("you are adult")
}

// if esle condition
let umer = 17
if (umer > 18) {
    console.log("you are adult")
}
else {
    console.log("you are too young")
}

//if esleif condition
let marks = 90

if (marks > 80) {
    console.log("you score too good")
}
else if (marks > 50) {
    console.log("you are average")
}
else {
    console.log("you arw too gwachhh")
}

// switch conditions

let day = "saturday";

switch (day) {
    case "sunday":
        console.log("its not holiday")
        break;

    case "saturday":
        console.log("its holiday dude")
        break;

    default:
        console.log("its working day today")
        break;
}


let sallery = 20000;

switch (sallery) {
    case (sallery = 20000):
        console.log("you have average sallery");
        break;

    default:
        console.log("you have too less sallary");
        break;
}

