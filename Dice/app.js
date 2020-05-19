var scores,roundscore,activePlayer,gamePlaying,count,input;

init();

//document.getElementById('current-0').textContent = '0';
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    
 document.querySelector('.btn-roll').addEventListener('click',function(){

    if(gamePlaying){

        //1.Display random number
        //if 6 comes two times then the entire score will be lost 
        { 
        var dice1 = Math.floor(Math.random()* 6 ) + 1 ;
        var dice2 = Math.floor(Math.random()* 6 ) + 1 ;
        
        if( dice1 === 6 || dice1 === 6)
            count = 1;
        
        else
            count=0;

        }

        //2.Display the result
        document.getElementById('dice-1').style.display='block';
        document.getElementById('dice-2').style.display='block';
        document.getElementById('dice-1').src = "dice-"+ dice1 + ".png ";
        document.getElementById('dice-2').src = "dice-"+ dice2 + ".png "
    
        //3.Update the round score IF the rolled number was NOT number
        if(dice1!=1 || dice2!=1 || count!=1){
            //Add Score
            roundscore+= dice1 + dice2;
            document.getElementById('current-' + activePlayer).textContent = roundscore; 
        }
        else if(count>=2){
            nextPlayer();
        }
        else{
            //next Player
            nextPlayer();
        }
    }
    
 })

 document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gamePlaying){

        //taking input from textField
        var inputNumber
        input = document.getElementById("number").value;
        
        if(input){
            inputNumber = input
        }
        else
        {
            inputNumber = 100
        }
        //add current score to global score
        scores[activePlayer] += roundscore;
        
        //update the gui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
        //check if player won the game
        if (scores[activePlayer] >= inputNumber){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner'
            hideButton();
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
        }
    
    else{
        //nextPlayer
        nextPlayer();
    }
    }  
 })

 function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundscore=0; 
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    
    hideButton();
 }

 
 document.querySelector('.btn-new').addEventListener('click',init)

 function init(){  
    count=0;
    gamePlaying=true; 
    scores=[0,0];
    roundscore=0;
    activePlayer=0;
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 0';
    document.getElementById('name-1').textContent = 'Player 1';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 }

 function hideButton(){
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
 }