function openPlayerConfig(event){
    playerId = event.target.dataset.playerid;
    playerOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formPlayer.firstElementChild.classList.remove('warning');
    errorPlayer.textContent = '';
    formPlayer.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const playerName = new FormData(event.target).get('player-name').trim();
    if(!playerName){
        event.target.firstElementChild.classList.add('warning');
        errorPlayer.textContent = 'Please enter a valid username';
        return;
    }

    const articleElement = document.getElementById('player-'+playerId+'-data');
    articleElement.children[1].textContent = playerName;

    players[playerId-1].name=playerName;
    closePlayerConfig();
}