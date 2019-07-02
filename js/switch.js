function invertColors() {
    var theButton = document.getElementById("invertedmode");
    if (theButton.innerHTML == "More light please !") {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = "black";
        theButton.innerHTML = "Go dark now !"
    } else {
        document.body.style.backgroundColor = '#2e2222';
        document.body.style.color = "#acacac";
        theButton.innerHTML = "More light please !"
    }
}