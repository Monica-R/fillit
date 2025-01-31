import { words, alphabet } from "./words.js";

export class Game {
    constructor() {
        this.word = null;
        this.attempts = 3;
        this.ui = new UI(this);
    }

    start() {
        this.word = this.getRandomWord(words);
        this.ui.initialize();
        this.ui.displayAttempts(this.attempts);
        this.ui.displayWord(this.word);
        this.ui.createControls();
    }

    handleGuess(buttonValue) {
        const cleanButtonValue = Utils.removeAccents(buttonValue).toUpperCase();
        const cleanWord = Utils.removeAccents(this.word).toUpperCase();

        if (cleanWord.includes(cleanButtonValue)) {
            const indexes = Utils.findIndexes(this.word, buttonValue);
            this.ui.revealCharacters(indexes);
        } else {
            this.attempts--;
            this.ui.updateAttempts(this.attempts);
            if (this.attempts === 0) {
                alert("GAME OVER");
                this.attempts = 3;
                
                const attemptsDiv = document.querySelector('.item-attempts');
                if (attemptsDiv) {
                    attemptsDiv.remove(); // Limpia el contenedor junto con los corazones de la partida anterior
                }
                this.reset();
            }
        }
    }

    reset() {
        this.ui.cleanup();
        document.querySelector('.game-container').style.display = 'none';
        document.querySelector('.principal-container').style.display = 'flex';
    }

    getRandomWord(wordsArray) {
        const index = Math.floor(Math.random() * wordsArray.length);
        return wordsArray[index];
    }
}

export class UI {
    constructor(game) {
        this.game = game;
    }

    initialize() {
        document.querySelector('.principal-container').style.display = 'none';
        document.querySelector('.game-container').style.display = 'flex';
        document.querySelector('.completion').innerHTML = '';
    }

    displayWord(word) {
        const container = document.querySelector('.completion');
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('word-item');
        Array.from(word).forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.classList.add('char-item');
            charSpan.textContent = char;
            charSpan.style.visibility = 'hidden';
            wordDiv.appendChild(charSpan);
        });
        container.appendChild(wordDiv);
    }

    createControls() {
        const container = document.querySelector('.completion');
        const controlsDiv = document.createElement('div');
        controlsDiv.classList.add('container-controls');

        alphabet.forEach((char, i) => {
            const button = document.createElement('button');
            button.classList.add('button-char');
            button.setAttribute('data-id', `data-id-${i}`);
            button.setAttribute('data-value', char);
            button.textContent = char;
            button.onclick = (e) => {
                button.disabled = true;
                this.game.handleGuess(e.target.dataset.value);
            };
            controlsDiv.appendChild(button);
        });

        container.appendChild(controlsDiv);
    }

    displayAttempts(attempts) {
        const container = document.querySelector('.img-left');
        const attemptsDiv = document.createElement('div');
        attemptsDiv.classList.add('item-attempts');

        for (let i = 0; i < attempts; i++) {
            const heart = document.createElement('span');
            heart.classList.add('attempt');
            heart.textContent = '❤';
            attemptsDiv.appendChild(heart);
        }

        container.prepend(attemptsDiv);
    }

    updateAttempts(attempts) {
        const attemptsDiv = document.querySelector('.item-attempts');
        attemptsDiv.innerHTML = ''; // Limpiamos el contenido existente
    
        for (let i = 0; i < attempts; i++) {
            const heart = document.createElement('span');
            heart.classList.add('attempt');
            heart.textContent = '❤';
            attemptsDiv.appendChild(heart);
        }
    }    

    revealCharacters(indexes) {
        const charElements = document.querySelectorAll('.char-item');
        indexes.forEach(index => {
            charElements[index].style.visibility = 'visible';
        });
    
        // Comprobar si el jugador ha ganado
        const allRevealed = Array.from(charElements).every(
            char => char.style.visibility === 'visible'
        );
    
        if (allRevealed) {
            alert("You win!");
    
            // Reiniciamos el número de intentos
            this.attempts = 3;
    
            // Limpiamos el div de las vidas
            const attemptsDiv = document.querySelector('.item-attempts');
            if (attemptsDiv) {
                attemptsDiv.remove(); // Limpia el contenedor junto con los corazones de la partida anterior
            }
    
            this.game.reset(); // Reiniciamos el juego
        }
    }
    

    cleanup() {
        document.querySelector('.completion').innerHTML = '';
        const buttons = document.querySelectorAll('.button-char');
        buttons.forEach(button => button.disabled = false);
    }
}

export class Utils {
    static removeAccents(str) {
        return str
            .replace(/[áàäâ]/g, 'a')
            .replace(/[éèëê]/g, 'e')
            .replace(/[íìïî]/g, 'i')
            .replace(/[óòöô]/g, 'o')
            .replace(/[úùüû]/g, 'u')
            .toLowerCase();
    }

    static findIndexes(word, char) {
        const cleanChar = Utils.removeAccents(char).toLowerCase();
        const cleanWord = Utils.removeAccents(word).toLowerCase();
        return Array.from(cleanWord).reduce((indexes, currentChar, index) => {
            if (currentChar === cleanChar) indexes.push(index);
            return indexes;
        }, []);
    }
}









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


