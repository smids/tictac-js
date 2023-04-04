function openPlayerConfig(){
    playerOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig(){
    playerOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formPlayer.firstElementChild.classList.remove('warning');
    errorPlayer.textContent = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const playerName = new FormData(event.target).get('player-name').trim();
    if(!playerName){
        event.target.firstElementChild.classList.add('warning');
        errorPlayer.textContent = 'Please enter a valid username';
        return;
    }
}