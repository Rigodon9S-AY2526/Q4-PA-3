function identifySection() {
    var section = document.getElementById("section").value;

    switch (section) {
        case "F":
            window.alert("You are in the Fiction Section.");
            break;
        case "NF":
            window.alert("You are in the Non-Fiction Section.");
            break;
        case "R":
            window.alert("You are in the Reference Section.");
            break;
        default:
            window.alert("Invalid Section Entry.");
    }
}