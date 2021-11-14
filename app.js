// const { min, max } = require("moment")

//game values 

let min = 1
let max = 10
let winningNum = Math.floor(Math.random()*10+1)
let guessesLeft = 3;


// UI elements
const game = document.querySelector('#game'),

            minNum = document.querySelector('.min-num'),

            maxNum = document.querySelector('.max-num'),

            guessBtn = document.querySelector('#guess-btn'),

            guessInput = document.querySelector('#guess-input'),

            message = document.querySelector('.message');

           

           

            
            


//assign min and max
minNum.textContent =min;
maxNum.textContent=max;





    //add event listener to the submit button



guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(winningNum)



    


//validate our input
    if(isNaN(guess) || guess<min || guess>max){

        alert(`Check your numbers. Guesses should be between ${min} and ${max}.`, 'red');
        

    }
    //if the guess is correct 
   if(guess === winningNum){
        guessInput.disabled=true;
        successMsg(`Woohoo ${winningNum} is correct! YOU WIN.`, 'green')
        guessInput.style.backgroundColor='green';
        guessBtn.disabled=true;
      
        
        winningGif();
        
    }
    else {
        guessesLeft -= 1
        
        if(guessesLeft===0){
            
            guessInput.style.borderColor ='red'
            gameOver(`It's all over JACKIE! You lost. The correct number was ${winningNum}!`, 'red');
            guessInput.disabled =true;
            guessBtn.disabled = true;
         
            guessInput.style.backgroundColor='red';
            gameOverImage();

            

            
            
        } else if(guessesLeft>0 && guessesLeft<3){
            // game continues
            message.textContent = `Wrong guess! you have ${guessesLeft} guesses left`, 'red';
            guessInput.style.borderColor ='red'
            message.style.color= 'red';
        }
        else{
            //game ends
            message.textContent = `Your guess is wrong, you have ${guessesLeft} guesses left`, 'red';
            guessInput.disabled = true;
            gameOverImage();

        }



    }



});






function gameOverImage(){
    image = document.querySelector('.game-over')
    image.style.display = 'block';
   
}

function winningGif(){
    image = document.querySelector('.you-win')
    image.style.display = 'block';
   

}

function errorMsg(msg, color){
    message.textContent = msg;
    message.style.color= color;
    guessInput.style.borderColor=color;
    


}

function gameOver(msg,color){
    message.textContent = msg;
    message.style.color= color;
    guessInput.style.borderColor=color;


}

function successMsg(successMsg, color){
    message.textContent = successMsg
    message.style.color= color;
    guessInput.style.borderColor=color;

}

function clearMsg(){
    message.remove()
    guessInput.style.borderColor ='grey';
}

















