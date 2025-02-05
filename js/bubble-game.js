let timer = 60;
let score = 0;
let rn = 0;

function makeBubble(){
    let clutter = " ";
for (let i = 0; i <= 113; i++) {
    let rn = parseInt(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`; 
}

document.querySelector('#panel-bottom').innerHTML = clutter;
}

function runTimer(){
   let time = setInterval(function(){
        if (timer > 0) {
            timer--;
            document.querySelector('#timerValue').textContent = timer;      
        }else{
            clearInterval(time);
            document.querySelector('#panel-bottom').innerHTML = `<h1>Game Over </h1`;
        }
    }, 1000)
}

function newHit(){
    rn = parseInt(Math.random() * 10);
    document.querySelector('#hitVal').textContent = rn;
}

function scoreIncrease(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

document.querySelector('#panel-bottom').addEventListener('click', function(details){
    let clickNum = Number(details.target.textContent);
    // console.log(clickNum);
    if (clickNum === rn) {
        scoreIncrease()
        makeBubble()
        newHit()
    }
})

runTimer();

makeBubble();

newHit();

// scoreIncrease();
