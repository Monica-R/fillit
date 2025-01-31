import { Game } from "./logic-code.js";

document.addEventListener("DOMContentLoaded", () => {
    const buttonPlay = document.querySelector('.button-play');
    let gameInstance;

    buttonPlay.onclick = () => {
        gameInstance = new Game();
        gameInstance.start();
    };
});







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



