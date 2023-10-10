var timer=60;
var score=0;
var HitNum=0;

function makeBubble(){
    var clutter="";
    for(var i=1;i<=150;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`
    }
    
    document.querySelector('#pbtm').innerHTML=clutter;
}

function runTimer(){
    var timerInt=setInterval(function(){
     if(timer>0){
        timer--;
        document.querySelector('#timeInt').textContent=timer;
     }
     else{
        clearInterval(timer);
        document.querySelector('#pbtm').innerHTML=`<h1>Game Over!</h1>`;
     }
    },1000);
}

function getHit(){
   HitNum= Math.floor(Math.random()*10);
   document.querySelector('#hitInt').textContent=HitNum;
}

function increaseScore(){
    score+=10;
    document.querySelector('#scoreVal').textContent=score;
}

document.querySelector('#pbtm')
.addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    if(clickedNum===HitNum){
        increaseScore();
        makeBubble();
        getHit();
    }
    else{
        alert("Invalid Number");
    }
});





makeBubble();
runTimer();
getHit();