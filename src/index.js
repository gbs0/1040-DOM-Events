console.log("Hello from src/index.js!");

// players = document.querySelector("#players");
let players = document.getElementById("players")
let element = players.querySelector(".red")
console.log(element.innerText);


players.insertAdjacentHTML('beforeend', "<li>Ronaldo</li>");
players.insertAdjacentHTML('beforeend', "<li>Ronaldinho</li>");

let paragraph = document.querySelector(".paragraph");
// paragraph.style.display = "none"
// paragraph.style.color = "#E97777";

paragraph.addEventListener("click", (event) => {
    console.log(event);
    paragraph.classList.toggle("paragraph");
    paragraph.style.color = "#E97777";
})


// let player = document.querySelector("ul > .active");
// console.log(player)

let player2 = document.querySelector("ul .active");
console.log(player2.innerText);

let link = document.querySelector('ul#players > .active a.btn');
console.log(link);
const countries = document.querySelector("#fifa-wins");
countries.insertAdjacentHTML('beforeend', "<li>France (2 wins)</li>")

let winners = document.querySelectorAll("#fifa-wins li");
console.log(winners);
// winners.forEach((country) => {
//     console.log(country.innerText);
// })

const emailInput = document.getElementById("email");
debugger
// console.dir(emailInput);
console.log(emailInput.value);
emailInput.value = "john@gmail.com";
console.log(emailInput.value);


let link2 = document.getElementById("home");
console.log(link2.innerText);
console.log(link2.innerHTML);
console.log(link2.attributes.href.value);
link2.innerHTML = "Le Wagon <strong>rocks</strong>!";

let boris = document.getElementById('user');
// console.log(boris.dataset);
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname);


const romain = document.getElementById("romain");
romain.addEventListener(('click'), (event) => {
    console.log(event);
    console.log(event.currentTarget);
})

const images = document.querySelectorAll(".avatar");
images.forEach((avatar) => {
    avatar.addEventListener('click', (event) => {
        avatar.classList.toggle("img-circle");
    })
})