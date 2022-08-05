
//audio function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function playAlarm() {
    alarm.play()
}

function stopAlarm () {
    alarm.pause()
}

const countDown = document.querySelector(".count-down")
const alarm = document.getElementById("audioTimer")

let count = 30;
let timerId = 0;

//Start count +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const startBtn = document.querySelector(".start-btn")
startBtn.addEventListener("click", ()=> {
    playAlarm()
    countDown.style.display = "block"
    if(timerId !== 0) {
        return
    }

    timerId = setInterval(function () {
        count--
        countDown.innerHTML = count
        if(count === 0) {
            countDown.innerHTML = "GO"
            
        }
        if(count < 0) {
            return countingStop()
        }
    },1000)

})

function countingStop () {
    clearInterval(timerId);
    timerId = 0;
    count = 30;
    countDown.innerHTML = count;
    stopAlarm()
    countDown.style.display = "none"
}

//stop-btn+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const stopBtn = document.querySelector(".stop-btn");
stopBtn.addEventListener("click", function () {
    console.log("hello")
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
    totalAmount : 600
}

// function renderAnimal (list) {
//     for(let i=0; i<list.length; i++){
//         let item = list[i];
//     }
// }

const animalBtn = document.querySelectorAll(".image");
const price = document.querySelectorAll(".amount");
const reduceBtn = document.querySelectorAll (".reduceBtn");
const coin = document.querySelector(".totalCoin")




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

for(let i=0; i<animalBtn.length; i++) {
    animalBtn[i].addEventListener ("click", function () {
        // renderAnimal(gameContainer.animal)
        if(animalBtn[i].id === gameContainer.animal[i].name && gameContainer.animal[i].amount <= 50) {
            gameContainer.animal[i].amount += 1
            price[i].innerHTML = gameContainer.animal[i].amount;
            gameContainer.totalAmount -= 1;
            coin.innerHTML = gameContainer.totalAmount;
        }
    })

    reduceBtn[i].addEventListener ("click", function () {
        // renderAnimal(gameContainer.animal)
        if(reduceBtn[i].id === gameContainer.animal[i].name && gameContainer.animal[i].amount > 0) {
            gameContainer.animal[i].amount -= 1
            price[i].innerHTML = gameContainer.animal[i].amount;
            gameContainer.totalAmount += 1;
            coin.innerHTML = gameContainer.totalAmount;
        }
    })
}


// animal circle animation start +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const animalCircle = document.querySelectorAll(".img-container");

let i=0
setInterval(() => {
        if(!animalCircle[i].className.includes("animal-circle")) {
                animalCircle[i].classList.add("animal-circle")
                // animalCircle[i].classList.remove("animal-circle")
            console.log(animalCircle[i])
        }
        if(i>0) {
            animalCircle[i-1].classList.remove("animal-circle")
        }
        i++
        if(i>=32) {
            animalCircle[i-1].classList.remove("animal-circle")
            i=0

        }
}, 100);
