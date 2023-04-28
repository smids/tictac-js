function startNewGame(){
    if(players[0].name === '' | players[1].name === ''){
        alert('Please enter valid name');
        return;
    }
    gameAreaElement.style.display = ' block';
}