function invertColors() {
    var theButton = document.getElementById("invertedmode");
    if (theButton.innerHTML == "More light please !") {
        document.documentElement.style.backgroundColor = 'white';
        document.body.style.color = "black";
        theButton.innerHTML = "Go dark now !"
    } else {
        document.documentElement.style.backgroundColor = '#2e2222';
        document.body.style.color = "#acacac";
        theButton.innerHTML = "More light please !"
    }
}