var likes = 3;
var likesElement = document.querySelector(".addLikes");

function increase() {
    likes++;
    likesElement.innerText = likes + " like(s)";
}