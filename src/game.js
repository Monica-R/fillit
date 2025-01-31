import { game, wordGame, findTheChar, removeAccents } from "./prueba.js";

document.addEventListener("DOMContentLoaded", () => {

    const buttonPlay = document.querySelector('.button-play');
    buttonPlay.onclick = () => {
        console.log('holaaaa!')
        game();
        console.log(wordGame);
        startGame();
        const controlsButtons = document.querySelectorAll('.button-char');
        const charsList = document.querySelectorAll('.char-item');
        controlsButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const cleanButtonValue = removeAccents(event.target.dataset.value).toUpperCase();
                const cleanWordGame = removeAccents(wordGame).toUpperCase();
                if (cleanWordGame.includes(cleanButtonValue)) { 
                    let foundedIndexesChar = findTheChar(wordGame, event.target.dataset["value"]); //This is a indexes array
                    showChars(charsList, foundedIndexesChar);
                };
            });
        });
    }

    function startGame() {
        const charsList = document.querySelectorAll('.char-item');
        hideWord(charsList);
    }

    function hideWord(chars) {
        return chars.forEach(element => {
            element.style.visibility = 'hidden';
        });
    }

    function showChars(chars, arrayIndexes) {
        return arrayIndexes.forEach(element => {
            chars[element].style.visibility = 'visible';
        });
    }
});