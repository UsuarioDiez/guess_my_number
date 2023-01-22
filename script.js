'use strict'

window.onload=()=>{n=GenerateNumber()};

let n;
let messageElement=document.querySelector('.message');;
let inputNumber;
let attemptsCounter=0;
let checkButton=document.querySelector('.check');
let score=document.querySelector('.score');
let highscore=document.querySelector('.highscore')

const GenerateNumber=()=>{
    return Math.ceil(Math.random()*20);
}

const NumberGuessed=(n,attemptsCounter,finalScore)=>{
    document.querySelector('.number').innerHTML=n;
    messageElement.innerHTML='You guessed the number!'
    checkButton.disabled=true;
    if (highscore.innerHTML==0){
        highscore.innerHTML=finalScore;
    }else{
        highscore.innerHTML=highscore.innerHTML>finalScore?highscore.innerHTML:finalScore;
    }
}
const CompareNumber=()=>{
    inputNumber=document.querySelector('.guess').value;
    if (inputNumber>n){
        messageElement.innerHTML='Too high!';
        attemptsCounter++;
        score.innerHTML=20-attemptsCounter;
    }else if(inputNumber<n){
        messageElement.innerHTML='Too low!';
        attemptsCounter++;
        score.innerHTML=20-attemptsCounter;
    }else if(inputNumber==n){
        NumberGuessed(n,attemptsCounter,score.innerHTML)
    }else{
        messageElement.innerHTML='Something is wrong'
    };
}

const ResetGame=()=>{
    n=GenerateNumber();
    document.querySelector('.number').innerHTML='?';
    score.innerHTML=20;
    checkButton.disabled=false;
    messageElement.innerHTML='Start guessing...'
    attemptsCounter=0;
}



checkButton.addEventListener('click',CompareNumber);
document.querySelector('.again').addEventListener('click',ResetGame)