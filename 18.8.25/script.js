// document.getElementById("n1").innerHTML = "dodo"


// const tag = document.createElement("li");
// const node = document.createTextNode("This is new.");
// tag.appendChild(node);
const element = document.getElementById("ol");


// if (document.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "red";
// })) {
// }

const btn1 = document.getElementById("b1");
btn1.addEventListener("click", () => {
    console.log("hi");
    element.classList.add("button1")
})

const btn2 = document.getElementById("b2");
btn2.addEventListener("click", () => {
    element.classList.add("button2")
    const conteiner = document.getElementById("ol");
    const tag = document.createElement("li")
    const node = document.createTextNode("new h1.");
    tag.appendChild(node);
    conteiner.appendChild(tag)
})

const btn3 = document.getElementById("b3");
btn3.addEventListener("click", () => {
    element.classList.add("button3")
    element.classList.remove("button1", "button2")
})

const input = document.getElementById("input");
input.addEventListener("click", () => {
    const h = document.getElementById("h1")
    h.addEventListener("click", () => {
        h.textContent = input.value
    })
})

const body = document.getElementById("body");
const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.add("darkMode");
});





