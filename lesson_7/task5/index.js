let button = document.querySelector('.btn');

button.addEventListener("click", function () {
    document.getElementById("click").innerHTML += 'I was pressed!<br/>';
});

button.addEventListener("mouseover", function () {
    document.getElementById("mouseover").innerHTML += 'Mouse on me!<br/>';
});

button.addEventListener("mouseout", function () {
    document.getElementById("mouseout").innerHTML += 'Mouse is not on me!<br/>';
});