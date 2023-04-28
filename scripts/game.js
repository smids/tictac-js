function startNewGame(){
    if(players[0].name === '' | players[1].name === ''){
        alert('Please enter valid name');
        return;
    }
    gameAreaElement.style.display = 'block';
    activePlayerName.textContent = players[activePlayer].name;
}

function switchPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event){
    if(event.target.tagName!='LI') return;

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if(gameData[selectedRow][selectedColumn] > 0) return;

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    const winnerId = checkForGameOver();
    currentRound++;
    switchPlayer();
}

function checkForGameOver(){
    
    // checking rows
    for(let i=0; i<3;i++){
        if(
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ){
            return gameData[i][0]
        }
    }

    // checking column
    for(let i=0; i<3;i++){
        if(
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ){
            return gameData[0][i]
        }
    }

    // checking diagonal: top left-bottom right
    if(
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ){
        return gameData[0][0];
    }

    // checking diagonal: top right-bottom left
    if(
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ){
        return gameData[2][0];
    }
    
    // checking if draw
    if(currentRound === 9) return -1;

    // default return
    return 0;
}