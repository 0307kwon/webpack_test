import hello_word from "./source/hello.js"
import world_word from "./source/world.js"


const words = `${hello_word} , ${world_word}`

const body = document.querySelector(".js-index");
body.appendChild(words);

