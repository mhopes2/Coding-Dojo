console.log("page loading...");

var neverMiss = document.querySelector(".bottom-box");
var scores = [314, 159];
var spans = [
    document.querySelector("#score1"),
    document.querySelector("#score2"),
];

function subscribed() {
    neverMiss.remove();
    setTimeout(function() {
        alert("The Ninjas have won!")
    }, 13000)
}

function increase(id) {
    scores[id]++;
    spans[id].innerHTML = scores[id];
}

