
//audio function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function playAlarm(a) {
    a.play()
}

function stopAlarm (a) {
    a.pause()
}

document.querySelector(".container").addEventListener ("click", function () {
    playAlarm(click);
})



const countDown = document.querySelector(".circle");
let second = document.getElementById("second");
let ss = document.getElementById("ss");

// audio ==============================================================
const sound = document.getElementById("audioTimer");
const clock = document.getElementById("clock");
const clockAlarm = document.getElementById("clockAlarm")
const click = document.getElementById("click");
const spanWheel = document.getElementById("spanWheel");
//audio ===============================================================

const animalCircle = document.querySelectorAll(".img-container");
const animalBtn = document.querySelectorAll(".image");
const price = document.querySelectorAll(".amount");
const reduceBtn = document.querySelectorAll (".reduceBtn");
const coin = document.querySelector(".totalCoin");
const resultWin = document.getElementsByClassName("win");

//welcome section======================================================
const welcome = document.querySelector(".game__welcome")
const welcomePlay = document.getElementById("welcomePlay");
const gameSection = document.querySelector(".game__container");
const welcomeLoading = document.querySelector(".loading__container")

welcomePlay.addEventListener("click", function () {
    playAlarm(sound);
    welcomeLoading.style.display = "block";
    setTimeout (()=>{
        welcome.style.display = "none";
        gameSection.style.display = "flex";
    },4000) 
})

// winOrLose section==================================================================================
const calculateWin = document.querySelector(".winOrLose");
const winOrLoseHeader = document.querySelector(".winOrLoseHeader");
const winOrLoseText = document.querySelector(".winOrLoseText");
const result = document.querySelector(".result");

let count = 10;
let timerId = 0;


//Start count +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const startBtn = document.querySelector(".start-btn")
startBtn.addEventListener("click", ()=> {
    stopAlarm(sound)
    playAlarm(clock);
    countDown.style.display = "block"
    if(timerId !== 0) {
        return
    }
    timerId = setInterval(function () {
        count--
        let s = count
        s = (s <10)? "0" + s : s;
        second.innerText = s
        betsite = "hi";
        if(count <9) {
            stopAlarm(clock);
            playAlarm(clockAlarm);
            second.style.color = "red"
            ss.style.stroke = "red"
        }
        if(count === 0) {
            second.innerText = "GO"            
        }
        if(count < 0) {
            second.style.color = "aliceblue"
            ss.style.stroke = "#04fc04"
            betsite = "hello"
            stopAlarm(clockAlarm);
            let random = numberRandom (32);
            gameIntervel = 0
            animationCircle(100,null);
                setTimeout(() => {
                    clearInterval(gameIntervel);
                    gameIntervel = 0;
                    animationCircle(200, null);
                },3000)
                setTimeout(() => {
                    clearInterval(gameIntervel);
                    gameIntervel = 0;
                    animationCircle(350, random);
                },5000)
            countingStop ()
        }
        ss.style.strokeDashoffset = 440 - (440 * count) / 30
    },1000)
    

})

function countingStop () {
    clearInterval(timerId);
    timerId = 0;
    count = 5;
    second.innerText = count;
    stopAlarm(clock);
    stopAlarm(clockAlarm);
    countDown.style.display = "none"
}

//stop-btn+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const stopBtn = document.querySelector(".stop-btn");
const refersh = document.querySelector(".rotate");


stopBtn.addEventListener("click", function () {
    if(gameIntervel) {
        return;
    }
    gameContainer.totalAmount += gameContainer.totalBet;
    if(gameContainer.totalBet > 0) {
        gameContainer.totalBet = 0
    }
    betsite = "hello"
    clearBetting();
    return countingStop();
})

refersh.addEventListener("click", function () {
    gameContainer.totalAmount += gameContainer.totalBet;
    if(gameContainer.totalBet > 0) {
        gameContainer.totalBet = 0
    }
    clearBetting();
})
// game container +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const gameContainer = {
    animal :[
        {
            name : "dog",
            amount : 0,
        },
        {
            name : "elephant",
            amount : 0,
        },
        {
            name : "sheep",
            amount : 0,
        },
        {
            name : "monkey",
            amount : 0,
        },
        {
            name : "jellyfish",
            amount : 0,
        },
        {
            name : "shark",
            amount : 0,
        },
        {
            name : "seahorse",
            amount: 0,
        },
        {
            name : "dolphin",
            amount : 0,
        },{
            name : "tortoise",
            amount : 0,
        },
        {
            name : "whale",
            amount : 0,
        },
        {
            name : "land",
            amount : 0,
        },
        {
            name : "sea",
            amount:0
        }
    ],
    totalAmount : 600,
    totalBet : 0,
}

const array = [
  
       "tortoise",
       "dog",
       "dog",
       "dog",
       "whale",
       "jellyfish",
       "jellyfish",
       "jellyfish",
       "tortoise",
       "shark",
        "shark",
        "shark",
        "whale",
        "seahorse",
        "seahorse",
        "seahorse",
        "tortoise",
        "dolphin",
        "dolphin",
        "dolphin",
        "whale",
        "elephant",
        "elephant",
        "elephant",
        "tortoise",
        "sheep",
        "sheep",
        "sheep",
        "whale",
        "monkey",
       "monkey",
        "monkey"

]

// const dogBtn = document.getElementById("dog");

// const elephantBtn = document.getElementById("elephant");

// const sheepBtn = document.getElementById("sheep");

// const monkeyBtn = document.getElementById("monkey");

// const jellyfishBtn = document.getElementById("jellyfish");

// const sharkBtn = document.getElementById("shark");

// const seahorseBtn = document.getElementById("seahork");

// const dolphinBtn = document.getElementById("dolphin");

// const tortoiseBtn = document.getElementById("tortoise");

// const whaleBtn = document.getElementById("whale");

// const landBtn = document.getElementById("land");

// const seaBtn = document.getElementById("sea");


let betsite = "hello"
for(let i=0; i<animalBtn.length; i++) {
    animalBtn[i].addEventListener ("click", function () {
        if(betsite === "hello") {
            return
        }else {
            if(animalBtn[i].id === gameContainer.animal[i].name && gameContainer.animal[i].amount < 50) {
                gameContainer.animal[i].amount += 1
                price[i].innerHTML = gameContainer.animal[i].amount;
                gameContainer.totalAmount -= 1;
                coin.innerHTML = gameContainer.totalAmount;
                gameContainer.totalBet += 1
            }
        }
    })

    // reduceBtn[i].addEventListener ("click", function () {
    //     if(betsite === "hello") {
    //         return
    //     }else {
    //         if(reduceBtn[i].id === gameContainer.animal[i].name && gameContainer.animal[i].amount > 0) {
    //             gameContainer.animal[i].amount -= 1
    //             price[i].innerHTML = gameContainer.animal[i].amount;
    //             gameContainer.totalAmount += 1;
    //             coin.innerHTML = gameContainer.totalAmount;
    //             gameContainer.totalBet -= 1
    //         }
    //     }
    // })
}

 function clearBetting () {
    for(let i=0; i<animalBtn.length; i++) {
        gameContainer.animal[i].amount = 0;
        price[i].innerHTML = gameContainer.animal[i].amount;
        coin.innerText = gameContainer.totalAmount;
    }
 }


 let gameIntervel = 0;
 let i=0;
 function  animationCircle (x,random) {
    let number = random
    if(gameIntervel !== 0) {
        return
    }
    gameIntervel =setInterval(() => {
        playAlarm(spanWheel)
        if(!animalCircle[i].className.includes("animal-circle")) {
            animalCircle[i].classList.add("animal-circle");

        }
        if(i>0) {
            animalCircle[i-1].classList.remove("animal-circle")
        }
        i++
        number--
        if(i>=32) {
        animalCircle[i-1].classList.remove("animal-circle")
        i=0
        }
        if(number == 0) {
            stopAlarm(spanWheel)
            clearInterval(gameIntervel)
            setTimeout (() => {
                winOrLose(i-1);
                gameContainer.totalBet = 0
                let gameId = setInterval (function () {
                    if(!animalCircle[i-1].className.includes("animal-circle")) {
                        animalCircle[i-1].classList.add("animal-circle");
                    }else {
                        animalCircle[i-1].classList.remove("animal-circle")
                    }
                },100)
                setTimeout(function () {
                    clearInterval(gameId)
                    animalCircle[i-1].classList.remove("animal-circle")
                },3000)
                clearBetting();
            },3000) 
            setTimeout(() => {
                playAlarm(sound)
                i=0
            },4000)
        }
    }, x);
 }


function numberRandom (ran) {
    return Math.floor(Math.random()* ran)
}

function winOrLose (x) {
    let win = 0
    let totalWin = 0;
    for(let i=0; i<gameContainer.animal.length; i++){

        if( gameContainer.animal[i].name === array[x]) {
            win += gameContainer.animal[i].amount * 5;
            console.log("winwin-"+ win)
        }else if(array[x] === gameContainer.animal[0] .name||
                array[x] === gameContainer.animal[1].name||
                array[x] === gameContainer.animal[2].name||
                array[x] === gameContainer.animal[3].name) {
                    win += gameContainer.animal[10].amount * 2;
                    console.log(win);
                    coin.innerText = gameContainer.totalAmount;
        }else if(array[x] === gameContainer.animal[4] .name||
                 array[x] === gameContainer.animal[5].name||
                 array[x] === gameContainer.animal[6].name||
                 array[x] === gameContainer.animal[7].name) {
                    win += gameContainer.animal[11].amount * 2;
                    console.log(win);
                    // totalWin = win - gameContainer.totalBet;
                    // gameContainer.totalAmount += win;
        }
    }
    console.log("win"+ win)
    totalWin = win - gameContainer.totalBet;
    console.log("total"+ totalWin)
    gameContainer.totalAmount += win;
    coin.innerText = gameContainer.totalAmount;
    console.log(win)
    console.log(gameContainer.totalAmount);
    
    if(totalWin > 0) {
        resultWin.innerText = totalWin;
        calculateWin.style.display = "flex";
        winOrLoseHeader.textContent = "Congratulation!";
        winOrLoseText.textContent = "you win";
        result.textContent = totalWin
        setTimeout(function () {
            calculateWin.style.display = "none"
        },3000)
    }else if(totalWin === 0) {
        calculateWin.style.display = "flex";
        winOrLoseHeader.textContent = "Ohh oh!";
        winOrLoseText.textContent = "draw";
        result.textContent = totalWin
        setTimeout(function () {
            calculateWin.style.display = "none"
        },3000)
    }else {
        calculateWin.style.display = "flex";
        winOrLoseHeader.textContent = "so sorry";
        winOrLoseText.textContent = "You Lose";
        result.textContent = totalWin;
        setTimeout(function () {
            calculateWin.style.display = "none"
        },3000)
    }
}