let playerId = 0;

const players = [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    },
];

const playerOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formPlayer = document.querySelector('form');
const errorPlayer = document.getElementById('config-error');

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelPlayerBtn = document.getElementById('cancel-config-btn');

editPlayer1Btn.addEventListener('click',openPlayerConfig);
editPlayer2Btn.addEventListener('click',openPlayerConfig);
cancelPlayerBtn.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formPlayer.addEventListener('submit', savePlayerConfig);