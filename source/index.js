import hello_word from "./hello.js"
import world_word from "./world.js"
import css from "./style.css"

const words = `${hello_word} , ${world_word}`
const body = document.querySelector(".js-index")
body.innerHTML = words;  
console.log(css);