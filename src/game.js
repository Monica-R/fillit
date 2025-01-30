import { game } from "./prueba.js";

document.addEventListener("DOMContentLoaded", () => {

    const buttonPlay = document.querySelector('.button-play');
    buttonPlay.onclick = () => {
        console.log('holaaaa!')
        game();
    }
});