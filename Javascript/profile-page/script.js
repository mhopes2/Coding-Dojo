console.log("page loaded...");

var user = document.querySelector("#avatar");
var request = document.querySelector("#requests");
var yourConnections = document.querySelector("#connections");

function changeUser() {
    if (user.innerText == "Jane Doe") {
        user.innerText = "Sang Song";
    } 
    else {
        user.innerText = "Jane Doe";
    }
}

function acceptUser(id) {
    var users = document.querySelector(id);
    users.remove();
    request.innerText--;
    yourConnections.innerText++;
}

function removeUser(id) {
    var users = document.querySelector(id);
    users.remove();
    request.innerText--;
}