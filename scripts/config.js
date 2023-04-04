function openPlayerConfig(){
    playerOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event){
    event.preventDefault();
    const playerName = new FormData(event.target).get('player-name');
    console.log(playerName);
}