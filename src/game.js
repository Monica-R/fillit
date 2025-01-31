// import { game, printAttempt, wordGame, findTheChar, removeAccents } from "./prueba.js";

// document.addEventListener("DOMContentLoaded", () => {

//     const buttonPlay = document.querySelector('.button-play');
//     let myAttempts = 3;
//     buttonPlay.onclick = () => {
//         console.log('holaaaa!')
//         game();
//         console.log(wordGame);
//         printAttempt(myAttempts);
//         startGame();
//         const controlsButtons = document.querySelectorAll('.button-char');
//         const charsList = document.querySelectorAll('.char-item');
//         const attemptsList = document.querySelectorAll('.attempt');
               
//         controlsButtons.forEach(button => {
//             button.addEventListener('click', (event) => {
//                 const cleanButtonValue = removeAccents(event.target.dataset.value).toUpperCase();
//                 const cleanWordGame = removeAccents(wordGame).toUpperCase();
//                 if (cleanWordGame.includes(cleanButtonValue)) { 
//                     let foundedIndexesChar = findTheChar(wordGame, event.target.dataset["value"]); //This is a indexes array
//                     showChars(charsList, foundedIndexesChar);
//                 } else {
//                     myAttempts--;
//                     console.log(attemptsList)
//                     attemptsList.forEach(element => element.remove());
//                     document.querySelector('.item-attempts').remove();
//                     printAttempt(myAttempts);
                    
//                     // Obtener la NUEVA lista de intentos
//                     const updatedAttempts = document.querySelectorAll('.attempt');
//                     if (updatedAttempts.length === 0) {
//                         alert("GAME OVER");
//                         document.querySelector('.game-container').style.display = 'none';
//                         document.querySelector('.principal-container').style.display = 'flex';
//                     }
//                 }
//             });
//         });
//     }

//     function startGame() {
//         const charsList = document.querySelectorAll('.char-item');
//         hideWord(charsList);
//     }

//     function hideWord(chars) {
//         return chars.forEach(element => {
//             element.style.visibility = 'hidden';
//         });
//     }

//     function showChars(chars, arrayIndexes) {
//         return arrayIndexes.forEach(element => {
//             chars[element].style.visibility = 'visible';
//         });
//     }
// });

// main.js

import { game, printAttempt, getWordGame, findTheChar, removeAccents } from "./prueba.js";

document.addEventListener("DOMContentLoaded", () => {

    const buttonPlay = document.querySelector('.button-play');
    let myAttempts;

    buttonPlay.onclick = () => {
        startNewGame();
    };

    function startNewGame() {
        myAttempts = 3; // Reiniciamos los intentos
        game();
        printAttempt(myAttempts);
        initializeGame();

        const controlsButtons = document.querySelectorAll('.button-char');
        controlsButtons.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });
    }

    function initializeGame() {
        const charsList = document.querySelectorAll('.char-item');
        hideWord(charsList);
    }

    function hideWord(chars) {
        chars.forEach(element => {
            element.style.visibility = 'hidden';
        });
    }

    function handleButtonClick(event) {
        const charsList = document.querySelectorAll('.char-item');
        const attemptsList = document.querySelectorAll('.attempt');
        const cleanButtonValue = removeAccents(event.target.dataset.value).toUpperCase();
        const wordGame = getWordGame();
        const cleanWordGame = removeAccents(wordGame).toUpperCase();

        if (cleanWordGame.includes(cleanButtonValue)) {
            let foundedIndexesChar = findTheChar(wordGame, event.target.dataset["value"]);
            showChars(charsList, foundedIndexesChar);
        } else {
            myAttempts--;
            attemptsList.forEach(element => element.remove());
            const itemAttempts = document.querySelector('.item-attempts');
            if (itemAttempts) {
                itemAttempts.remove();
            }
            printAttempt(myAttempts);

            const updatedAttempts = document.querySelectorAll('.attempt');
            if (updatedAttempts.length === 0) {
                alert("GAME OVER");
                resetGame();
            }
        }
        event.target.setAttribute('disabled', true);
    }

    function showChars(chars, arrayIndexes) {
        arrayIndexes.forEach(index => {
            chars[index].style.visibility = 'visible';
        });
    }

    function resetGame() {
        // Removemos los event listeners de los controles
        const controlsButtons = document.querySelectorAll('.button-char');
        controlsButtons.forEach(button => {
            button.removeEventListener('click', handleButtonClick);
        });

        // Limpiamos los elementos del juego
        const containerCompletion = document.querySelector('.completion');
        containerCompletion.innerHTML = '';

        // Ocultamos la pantalla de juego y mostramos el menú principal
        document.querySelector('.game-container').style.display = 'none';
        document.querySelector('.principal-container').style.display = 'flex';

        // Opcional: reiniciar los intentos
        myAttempts = 3;
    }
});

