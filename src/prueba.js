import { words, alphabet } from "./words.js";
export function game() {
    console.log('hola desde prueba!')
    const mainScreenMenu = document.querySelector('.principal-container');
    const mainScreenGame = document.querySelector('.game-container');
    const containerCompletion = document.querySelector('.completion');
    mainScreenMenu.style.display = 'none';
    mainScreenGame.style.display = 'flex';
    printGame('casa', containerCompletion);
    printControls(containerCompletion);
    containerCompletion.innerHTML += '<div class="input"></div>'
    const inputGame = document.createElement('input');
    inputGame.setAttribute('id', 'word-entry');
    const divInput = document.querySelector('.input');
    divInput.appendChild(inputGame);
}

function printGame(word, element) {
    console.log('holaa desde printgame')
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
        buttonChar.textContent = alphabet[i];
        containerControls.appendChild(buttonChar);
    }
    container.appendChild(containerControls);
}