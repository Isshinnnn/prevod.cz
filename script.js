function convertMetersToYards() {
    let meters = parseFloat(document.getElementById("meters").value);
    if (!isNaN(meters)) {
        document.getElementById("yards").value = (meters * 1.09361).toFixed(2);
    }
}

function convertYardsToMeters() {
    let yards = parseFloat(document.getElementById("yards").value);
    if (!isNaN(yards)) {
        document.getElementById("meters").value = (yards / 1.09361).toFixed(2);
    }
}

function convertMetersToFeet() {
    let meters = parseFloat(document.getElementById("meters2").value);
    if (!isNaN(meters)) {
        document.getElementById("feet").value = (meters * 3.28084).toFixed(2);
    }
}

function convertFeetToMeters() {
    let feet = parseFloat(document.getElementById("feet").value);
    if (!isNaN(feet)) {
        document.getElementById("meters2").value = (feet / 3.28084).toFixed(2);
    }
}

function convertCentimetersToInches() {
    let centimeters = parseFloat(document.getElementById("centimeters").value);
    if (!isNaN(centimeters)) {
        document.getElementById("inches").value = (centimeters * 0.393701).toFixed(2);
    }
}

function convertInchesToCentimeters() {
    let inches = parseFloat(document.getElementById("inches").value);
    if (!isNaN(inches)) {
        document.getElementById("centimeters").value = (inches / 0.393701).toFixed(2);
    }
}

function convertKilometersToMiles() {
    let kilometers = parseFloat(document.getElementById("kilometers").value);
    if (!isNaN(kilometers)) {
        document.getElementById("miles").value = (kilometers * 0.621371).toFixed(2);
    }
}

function convertMilesToKilometers() {
    let miles = parseFloat(document.getElementById("miles").value);
    if (!isNaN(miles)) {
        document.getElementById("kilometers").value = (miles / 0.621371).toFixed(2);
    }
}

document.getElementById("meters").addEventListener("input", convertMetersToYards);
document.getElementById("yards").addEventListener("input", convertYardsToMeters);
document.getElementById("meters2").addEventListener("input", convertMetersToFeet);
document.getElementById("feet").addEventListener("input", convertFeetToMeters);
document.getElementById("centimeters").addEventListener("input", convertCentimetersToInches);
document.getElementById("inches").addEventListener("input", convertInchesToCentimeters);
document.getElementById("kilometers").addEventListener("input", convertKilometersToMiles);
document.getElementById("miles").addEventListener("input", convertMilesToKilometers);
