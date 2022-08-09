
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
const resultWin = document.getElementsByClassName("win")

let count = 15;
let timerId = 0;

playAlarm(sound);
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
            clearInterval(timerId);
            animationCircle()
            return countingStop ()
        }
        ss.style.strokeDashoffset = 440 - (440 * count) / 30
    },1000)
    

})

function countingStop () {
    clearInterval(timerId);
    timerId = 0;
    count = 30;
    second.innerText = count;
    stopAlarm(clockAlarm);
    countDown.style.display = "none"
}

//stop-btn+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const stopBtn = document.querySelector(".stop-btn");
stopBtn.addEventListener("click", function () {
    clearBetting()
    return countingStop()
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
        gameContainer.totalAmount = 600
        coin.innerHTML = gameContainer.totalAmount;
        gameContainer.totalBet = 0
    }
 }



 function  animationCircle () {
    let gameIntervel = 0
    let i=0;
    let number = numberRandom(30,90)
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
                winOrLose(i-1)
            },5000) 

            setTimeout(() => {
                playAlarm(sound)
            },7000)
        }
    }, 100);
 }

// animationCircle()

function numberRandom (min, max ) {
    return Math.floor(Math.random()*(max-min)) + min
}

function winOrLose (x) {
    let win = 0
    let totalWin = 0;
    for(let i=0; i<gameContainer.animal.length; i++){

        if( gameContainer.animal[i].name === array[x]) {
            console.log(array[x])
            console.log(gameContainer.animal)
            win = gameContainer.animal[i].amount * 3;
            console.log(win);
            console.log(gameContainer.totalBet);
            totalWin = win - gameContainer.totalBet;
            console.log(totalWin)
        }

        if(totalWin > 0) {
            totalWin.innerText = totalWin;
            console.log("you win")
        }else if(totalWin === 0) {
            console.log("draw")
        }else {
            console.log("you lose")
        }
    }
    clearBetting();
}