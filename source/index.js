import hello_word from "./hello.js"
import world_word from "./world.js"
import css from "./style.css"
import _ from "lodash"

const words = _.join([hello_word,world_word],' ');
const body = document.querySelector(".js_index");
body.innerHTML = words;  
console.log(css);