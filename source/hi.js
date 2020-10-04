import hello_word from "./hello.js"
import world_word from "./world.js"
import css from "./style.css"

const body = document.querySelector(".js_hi");
body.innerHTML = `${world_word} , ${hello_word}`;
console.log(css);