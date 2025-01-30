export function game() {
    console.log('hola desde prueba!')
    const mainScreenMenu = document.querySelector('.principal-container');
    const mainScreenGame = document.querySelector('.game-container');
    mainScreenMenu.style.display = 'none';
    mainScreenGame.style.display = 'block';

}