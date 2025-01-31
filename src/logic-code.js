// import { words, alphabet } from "./words.js";
// export let wordGame = randomWord(words);
// export function game() {
//     console.log('hola desde prueba!')
//     const mainScreenMenu = document.querySelector('.principal-container');
//     const mainScreenGame = document.querySelector('.game-container');
//     const containerCompletion = document.querySelector('.completion');
//     mainScreenMenu.style.display = 'none';
//     mainScreenGame.style.display = 'flex';
//     printGame(wordGame, containerCompletion);
//     printControls(containerCompletion);
//     containerCompletion.innerHTML += '<div class="input"></div>'
//     const inputGame = document.createElement('input');
//     inputGame.setAttribute('id', 'word-entry');
//     const divInput = document.querySelector('.input');
//     divInput.appendChild(inputGame);
// }

// function printGame(word, element) {
//     console.log('holaa desde printgame')
//     const wordItem = document.createElement('div');
//     wordItem.classList.add('word-item');
//     for (let i = 0; i < word.length; i++) {
//         const charItem = document.createElement('span');
//         charItem.classList.add('char-item');
//         charItem.textContent = word[i];
//         wordItem.appendChild(charItem);
//     }
//     element.appendChild(wordItem);
// }

// function printControls(container) {
//     const containerControls = document.createElement('div');
//     containerControls.classList.add('container-controls');
//     for (let i = 0; i < alphabet.length; i++) {
//         const buttonChar = document.createElement('button');
//         buttonChar.classList.add('button-char');
//         buttonChar.setAttribute('data-id', `data-id-${i}`);
//         buttonChar.setAttribute('data-value', `${alphabet[i]}`);
//         buttonChar.textContent = alphabet[i];
//         containerControls.appendChild(buttonChar);
//     }
//     container.appendChild(containerControls);
// }

// export function printAttempt(attemptLength) {
//     const containerLeft = document.querySelector('.img-left');
//     const itemAttempts = document.createElement('div');
//     itemAttempts.classList.add('item-attempts');
//     for (let i = 0; i < attemptLength; i++) {
//         const item = document.createElement('span');
//         item.classList.add('attempt');
//         item.setAttribute('id', `id-${i}`);
//         console.log(item);
//         itemAttempts.appendChild(item);
//     }
//     console.log(itemAttempts);
//     containerLeft.prepend(itemAttempts);
// }

// function randomWord(wordsArray) {
//     // Here your random word
//     const minLengthArray = Math.ceil(0);
//     const maxLengthArray = Math.floor(wordsArray.length);
//     const randomNumber = Math.floor(Math.random() * (maxLengthArray - minLengthArray + 1) + minLengthArray);
//     return wordsArray[randomNumber];
// }

// export function findTheChar(word, buttonChar) {
//     //let toLoweCaseWord = buttonChar.toLowerCase();

//     // Quita tildes y convierte a minúsculas
//     const cleanButtonChar = removeAccents(buttonChar).toLowerCase();
//     const cleanWord = removeAccents(word).toLowerCase();
//     const indexes = Array.from(cleanWord).reduce((acc, item, index) => {
//         if (cleanButtonChar.includes(item)) { // si lo encuentra, que me añada su índice
//             acc.push(index);
//         }
//         return acc;
//     }, []);
//     return indexes;
// }

// export function removeAccents(str) {
//     return str
//       .replace(/[áàäâ]/g, 'a')
//       .replace(/[éèëê]/g, 'e')
//       .replace(/[íìïî]/g, 'i')
//       .replace(/[óòöô]/g, 'o')
//       .replace(/[úùüû]/g, 'u')
//       .toLowerCase();
// }

// prueba.js

import { words, alphabet } from "./words.js";

let wordGame; // Declaramos wordGame sin inicializar

export function game() {
    console.log('¡Comenzando un nuevo juego!');
    wordGame = randomWord(words); // Inicializamos wordGame aquí
    const mainScreenMenu = document.querySelector('.principal-container');
    const mainScreenGame = document.querySelector('.game-container');
    const containerCompletion = document.querySelector('.completion');

    // Ocultamos el menú principal y mostramos la pantalla de juego
    mainScreenMenu.style.display = 'none';
    mainScreenGame.style.display = 'flex';

    // Limpiamos el contenido previo del juego
    containerCompletion.innerHTML = '';

    // Configuramos el juego
    printGame(wordGame, containerCompletion);
    printControls(containerCompletion);
}

export function getWordGame() {
    return wordGame;
}

function printGame(word, element) {
    console.log('Configurando la palabra a adivinar');
    const wordItem = document.createElement('div');
    wordItem.classList.add('word-item');
    for (let i = 0; i < word.length; i++) {
        const charItem = document.createElement('span');
        charItem.classList.add('char-item');
        charItem.textContent = word[i];
        wordItem.appendChild(charItem);
    }
    element.appendChild(wordItem);
}

function printControls(container) {
    const containerControls = document.createElement('div');
    containerControls.classList.add('container-controls');
    for (let i = 0; i < alphabet.length; i++) {
        const buttonChar = document.createElement('button');
        buttonChar.classList.add('button-char');
        buttonChar.setAttribute('data-id', `data-id-${i}`);
        buttonChar.setAttribute('data-value', `${alphabet[i]}`);
        buttonChar.textContent = alphabet[i];
        containerControls.appendChild(buttonChar);
    }
    container.appendChild(containerControls);
}

export function printAttempt(attemptLength) {
    const containerLeft = document.querySelector('.img-left');
    const itemAttempts = document.createElement('div');
    itemAttempts.classList.add('item-attempts');
    for (let i = 0; i < attemptLength; i++) {
        const item = document.createElement('span');
        item.classList.add('attempt');
        item.setAttribute('id', `id-${i}`);
        item.textContent = '❤';
        itemAttempts.appendChild(item);
    }
    containerLeft.prepend(itemAttempts);
}

function randomWord(wordsArray) {
    const minLengthArray = 0;
    const maxLengthArray = wordsArray.length - 1;
    const randomNumber = Math.floor(Math.random() * (maxLengthArray - minLengthArray + 1)) + minLengthArray;
    return wordsArray[randomNumber];
}

// Exportamos la función findTheChar
export function findTheChar(word, buttonChar) {
    const cleanButtonChar = removeAccents(buttonChar).toLowerCase();
    const cleanWord = removeAccents(word).toLowerCase();
    const indexes = Array.from(cleanWord).reduce((acc, item, index) => {
        if (cleanButtonChar === item) { // comparo directamente los caracteres
            acc.push(index);
        }
        return acc;
    }, []);
    return indexes;
}

// Exportamos la función removeAccents
export function removeAccents(str) {
    return str
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .toLowerCase();
}

// Las demás funciones permanecen igual
