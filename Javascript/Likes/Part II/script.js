console.log("page loading...");

var likes = [9, 12, 9];
var spans = [
  document.querySelector(".Neil"),
  document.querySelector(".Nichole"),
  document.querySelector(".Jim"),
];

function increase(id) {
  likes[id]++;
  spans[id].innerHTML = likes[id] + " like(s)";
}
