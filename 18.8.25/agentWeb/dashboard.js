const body = document.getElementById("body");
const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.add("darkMode");
});

