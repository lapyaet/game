//audio function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function playClick() {
  click.play();
}

function playWin() {
  winning.play();
}

function playLose() {
  loserSong.play();
}

function playAlarm(a) {
  a.play();
  a.loop = true;
}

function stopAlarm(a) {
  a.pause();
  a.currentTime = 0;
}

document.querySelector(".container").addEventListener("click", function () {
  playClick();
});

const countDown = document.querySelector(".circle");
let second = document.getElementById("second");
let ss = document.getElementById("ss");

// audio ==============================================================
const sound = document.getElementById("audioTimer");
const clock = document.getElementById("clock");
const clockAlarm = document.getElementById("clockAlarm");
const click = document.getElementById("click");
const spanWheel = document.getElementById("spanWheel");
const winning = document.getElementById("winning");
const loserSong = document.getElementById("loserSong");
const happy = document.getElementById("happy");
const volume = document.querySelector(".vloume");
const soundOnOff = document.querySelector(".fa-solid");

let vloumeControl = true;
volume.addEventListener("click", function () {
  if (settingChecked === false) {
    return;
  } else {
    if (vloumeControl === true) {
      localStorage.setItem("accept", "music");
      happy.src = "";
      sound.src = "";
      soundOnOff.classList.add("fa-volume-xmark");
      soundOnOff.classList.remove("fa-volume-high");
      switcher.checked = true;
      vloumeControl = false;
    } else {
      localStorage.removeItem("accept", "music");
      happy.src = "./assets/audios/happy.mp3";
      sound.src = "./assets/audios/Cartoon-Character-Aquarium.mp3";
      soundOnOff.classList.add("fa-volume-high");
      soundOnOff.classList.remove("fa-volume-xmark");
      switcher.checked = false;
      playAlarm(happy);
      // console.log(happy)
      // console.log(soundOnOff)
      vloumeControl = true;
    }
  }
});

//audio ===============================================================

const animalCircle = document.querySelectorAll(".img-container");
const animalBtn = document.querySelectorAll(".image");
const price = document.querySelectorAll(".amount");
const reduceBtn = document.querySelectorAll(".reduceBtn");
const coin = document.querySelector(".totalCoin");
const resultWin = document.querySelector(".win");
const betAmount = document.querySelector(".bet-amount");
const loseText = document.querySelector(".loseText");
const wellcomeTotal = document.querySelector(".wellcomeTotal");
const quitBtn = document.querySelector(".quit-btn");
const celebration = document.querySelector(".celebration");
const loserGif = document.querySelector(".loserGif");
const sureQuit = document.querySelector(".sure-quit");
const quitYes = document.querySelector(".quit-yes");
const quitNo = document.querySelector(".quit-no");
const gameContainerWinning = document.querySelector(".winning1");
const gameContainerWinning2 = document.querySelector(".winning2");
const gameContainerWinning3 = document.querySelector(".winning3");
const gameContainerWinning4 = document.querySelector(".winning4");
const switcher = document.querySelector("#switcher");
const quitSetting = document.querySelector(".quit-setting");
const settingContainer = document.querySelector(".setting__container");
const settingBtn = document.querySelector(".settingIn");
const quitAchievement = document.querySelector(".quit-achievement");
const achievement = document.querySelector(".achievement__container");
const achievementBtn = document.querySelector(".achievementBtn");
const profileTotalCoin = document.querySelector(".profileTotalCoin");
const gameBeforeStart = document.querySelector(".gameBeforeStart");
const beforeContainer = document.querySelector(".container");
const ring = document.querySelector(".ring");
const ringText = document.querySelector(".ring-text");
const winAnimal = document.querySelector(".win-animal");
const achievementAmount = document.querySelector(".achievementAmount");
const aboutBetting = document.querySelector(".text3");
const version = document.querySelector(".version");
const quitVersion = document.querySelector(".quit-version");
const resltAnimal = document.querySelector(".result-animal");
const antBet = document.querySelector(".anyBet");
const babyCry = document.querySelector(".babtCry");
const baby = document.querySelector(".babtCry1");

function getImage(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = function () {
      resolve(url);
    };
    img.onerror = function () {
      reject(url);
    };
    img.src = url;
  });
}

function gameContainerPreloader() {
  Promise.all([
    getImage("./assets/images/menu-board/victory.png"),
    getImage("./assets/images/menu-board/setting.png"),
    getImage("./assets/images/menu-board/person icon.png"),
    getImage("./assets/images/btn/coin1.png"),
    getImage("./assets/images/menu-board/play.png"),
    getImage("./assets/images/btn/coin1.png"),
    getImage("./assets/images/menu-board/person icon.png"),
    getImage("./assets/images/round-buttons/dog.png"),
    getImage("./assets/images/round-buttons/monkey.png"),
    getImage("./assets/images/round-buttons/sheep.png"),
    getImage("./assets/images/round-buttons/elephant.png"),
    getImage("./assets/images/round-buttons/seahorse.png"),
    getImage("./assets/images/round-buttons/jellyfish.png"),
    getImage("./assets/images/round-buttons/dolphin.png"),
    getImage("./assets/images/round-buttons/shark.png"),
    getImage(
      "./assets/images/square-buttons/1661398104010-removebg-preview.png"
    ),
    getImage("./assets/images/square-buttons/dog(top corner).png"),
    getImage("./assets/images/square-buttons/whale(top corner).png"),
    getImage("./assets/images/square-buttons/seahorse(right side).png"),
    getImage("./assets/images/square-buttons/jellyfish(top corner).png"),
    getImage("./assets/images/square-buttons/whale(right side).png"),
    getImage("./assets/images/square-buttons/dolphin(bottom).png"),
    getImage("./assets/images/square-buttons/shark(right side).png"),
    getImage("./assets/images/square-buttons/elephant(bottom).png"),
    getImage("./assets/images/square-buttons/sheep(left side).png"),
    getImage("./assets/images/square-buttons/monkey(left side).png"),
    getImage("./assets/images/menu-board/giphy.gif"),
    getImage("./assets/images/menu-board/a7e63493c33a7b364f81ed6d71526908.gif"),
    getImage(
      "./assets/images/round-buttons/1661398104150-removebg-preview.png"
    ),
    getImage("./assets/images/round-buttons/whale.png"),
    getImage("./assets/images/round-buttons/land.png"),
    getImage("./assets/images/round-buttons/sea.png"),
    getImage("./assets/images/btn/play.png"),
    getImage("./assets/images/btn/coin1.png"),
    getImage("./assets/images/menu-board/NR7Y.gif"),
    getImage("./assets/images/square-buttons/sea-bg.png"),
    getImage(
      "./assets/images/menu-board/processed-057daf40-fd87-4482-8246-f6a08de38dd7_9pNX3tMT.jpg"
    ),
  ]).then(() => {
    ring.style.display = "none";
    ringText.style.display = "none";
    gameBeforeStart.style.background =
      "linear-gradient(to bottom, #ffe600, #ff7b01)";
    beforeContainer.style.display = "flex";
    resltAnimal.style.display = "none";
    setTimeout(() => {
      playAlarm(happy);
    }, 1000);
  });
}

gameContainerPreloader();

quitBtn.addEventListener("click", function () {
  if (playPermission === false) {
    return;
  } else {
    playPermission = false;
    sureQuit.style.display = "block";
    refershPremission = false;
  }
});

quitYes.addEventListener("click", function () {
  settingChecked = true;
  sureQuit.style.display = "none";
  ringText.style.display = "none";
  welcome.style.display = "block";
  welcomeLoading.style.display = "none";
  gameSection.style.display = "none";
  resltAnimal.style.display = "none";
  playPermission = true;
  stopAlarm(sound);
  playAlarm(happy);
});

quitNo.addEventListener("click", function () {
  playPermission = true;
  refershPremission = true;
  sureQuit.style.display = "none";
});

// let checked = true;
let settingChecked = true;
switcher.addEventListener("input", function () {
  if (settingChecked === false) {
    return;
  } else {
    if (switcher.checked) {
      localStorage.setItem("accept", "music");
      happy.src = "";
      sound.src = "";
      soundOnOff.classList.add("fa-volume-xmark");
      soundOnOff.classList.remove("fa-volume-high");
      vloumeControl = false;
    } else {
      localStorage.removeItem("accept", "music");
      checked = true;
      happy.src = "./assets/audios/happy.mp3";
      sound.src = "./assets/audios/Cartoon-Character-Aquarium.mp3";
      soundOnOff.classList.add("fa-volume-high");
      soundOnOff.classList.remove("fa-volume-xmark");
      playAlarm(happy);
      vloumeControl = true;
    }
  }
});

window.addEventListener("load", function () {
  let countNumber = this.localStorage.getItem("count");
  const accpeted = this.localStorage.getItem("accept");
  let progressNumber = this.localStorage.getItem("progress");
  slider.value = progressNumber;
  progressBar.value = progressNumber;
  happy.volume = slider.value / 100;
  sound.volume = slider.value / 100;
  clock.volume = slider.value / 100;
  clockAlarm.volume = slider.value / 100;
  click.volume = slider.value / 100;
  spanWheel.volume = slider.value / 100;
  winning.volume = slider.value / 100;
  loserSong.volume = slider.value / 100;
  countTime = parseInt(countNumber);
  // console.log(typeof countTime);
  countText.innerText = countTime;
  count = countTime;
  if (accpeted === "music") {
    happy.src = "";
    sound.src = "";
    soundOnOff.classList.add("fa-volume-xmark");
    soundOnOff.classList.remove("fa-volume-high");
    switcher.checked = true;
    vloumeControl = false;
  }
});

settingBtn.addEventListener("click", function () {
  if (settingChecked === false) {
    return;
  } else {
    welcome.style.display = "none";
    settingContainer.style.display = "flex";
  }
});

quitSetting.addEventListener("click", function () {
  settingContainer.style.display = "none";
  welcome.style.display = "block";
});

achievementBtn.addEventListener("click", function () {
  if (settingChecked === false) {
    return;
  } else {
    welcome.style.display = "none";
    achievement.style.display = "flex";
  }
});

quitAchievement.addEventListener("click", function () {
  achievement.style.display = "none";
  welcome.style.display = "block";
});

const slider = document.querySelector(".slider input");
const progressBar = document.querySelector(".slider progress");
// console.log(progerssLocal);
window.onload = function () {
  slider.oninput = function () {
    let progerssLocal = slider.value;
    progressBar.value = slider.value;
    happy.volume = slider.value / 100;
    sound.volume = slider.value / 100;
    clock.volume = slider.value / 100;
    clockAlarm.volume = slider.value / 100;
    click.volume = slider.value / 100;
    spanWheel.volume = slider.value / 100;
    winning.volume = slider.value / 100;
    loserSong.volume = slider.value / 100;
    localStorage.setItem("progress", progerssLocal);
  };
};

aboutBetting.addEventListener("click", function () {
  settingContainer.style.display = "none";
  version.style.display = "flex";
});

quitVersion.addEventListener("click", function () {
  version.style.display = "none";
  settingContainer.style.display = "flex";
});
//welcome section======================================================
const welcome = document.querySelector(".game__welcome");
const welcomePlay = document.getElementById("welcomePlay");
const gameSection = document.querySelector(".game__container");
const welcomeLoading = document.querySelector(".loading__container");
const profileSettingBtn = document.querySelector(
  ".game__welcome-top-item2-name-left"
);
const profileSetting = document.querySelector(".profile__setting");
const quitProfile = document.querySelector(".quit-profile");

welcomePlay.addEventListener("click", function () {
  settingChecked = false;
  playAlarm(sound);
  stopAlarm(happy);
  welcomeLoading.style.display = "block";
  setTimeout(() => {
    welcome.style.display = "none";
    gameSection.style.display = "flex";
    refershPremission = true;
  }, 4000);
});

profileSettingBtn.addEventListener("click", function () {
  if (settingChecked === false) {
    return;
  } else {
    welcome.style.display = "none";
    profileSetting.style.display = "flex";
  }
});

quitProfile.addEventListener("click", function () {
  welcome.style.display = "block";
  profileSetting.style.display = "none";
});

// winOrLose section==================================================================================
const calculateWin = document.querySelector(".winOrLose");
// const winOrLoseHeader = document.querySelector(".winOrLoseHeader");
// const winOrLoseText = document.querySelector(".winOrLoseText");
// const result = document.querySelector(".result");
const countText = document.querySelector(".countText");
const countPlusBtn = document.querySelector(".countPlusBtn");
const countMinusBtn = document.querySelector(".countMinusBtn");

let countTime = 30;
let count = countTime;
let countString = countTime.toString();
// localStorage.setItem("count", countString);
countText.innerText = countTime;
function plusBtn() {
  if (countTime >= 60) {
    countPlusBtn.style.background = "#dad7cd";
    disabled = true;
  } else {
    countMinusBtn.style.background = "#ec381f";
    disabled = false;
    countTime++;
    count = countTime;
    countString = countTime.toString();
    // console.log(typeof countString);
    localStorage.setItem("count", countString);
    countText.innerText = countTime;
    countPlusBtn.style.background = "#70e000";
  }
}

function minusBtn() {
  if (countTime <= 10) {
    countMinusBtn.style.background = "#dad7cd";
    disabled = true;
  } else {
    countPlusBtn.style.background = "#70e000";
    disabled = false;
    countTime--;
    count = countTime;
    countString = countTime.toString();
    localStorage.setItem("count", countString);
    countText.innerText = countTime;
    countMinusBtn.style.background = "#ec381f";
  }
}

let timerId = 0;
let playPermission = true;

//Start count +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", () => {
  if (playPermission === false) {
    return;
  } else {
    playPermission = false;
    stopAlarm(sound);
    playAlarm(clock);
    countDown.style.display = "block";
    if (timerId !== 0) {
      return;
    }
    timerId = setInterval(function () {
      second.style.color = "aliceblue";
      ss.style.stroke = "#04fc04";
      count--;
      let s = count;
      s = s < 10 ? "0" + s : s;
      second.innerText = s;
      betsite = "hi";
      if (count < 9) {
        stopAlarm(clock);
        playAlarm(clockAlarm);
        second.style.color = "red";
        ss.style.stroke = "red";
      }
      if (count === 0) {
        second.innerText = "GO";
        stopAlarm(clockAlarm);
      }
      if (count < 0) {
        stopAlarm(clockAlarm);
        second.innerText = "";
        countingStop();
        betsite = "hello";
        if (gameContainer.totalBet === 0) {
          antBet.style.display = "block";
          refershPremission = false;
          setTimeout(() => {
            antBet.style.display = "none";
            playPermission = true;
            refershPremission = true;
            playAlarm(sound);
          }, 6000);
        } else {
          second.style.color = "aliceblue";
          ss.style.stroke = "#04fc04";
          betsite = "hello";
          countingStop();
          stopAlarm(clockAlarm);
          let random = numberRandom(32);
          refershPremission = false;
          gameIntervel = 0;
          animationCircle(100, null);
          setTimeout(() => {
            clearInterval(gameIntervel);
            gameIntervel = 0;
            animationCircle(200, null);
          }, 3000);
          setTimeout(() => {
            clearInterval(gameIntervel);
            gameIntervel = 0;
            animationCircle(350, random);
          }, 5000);
        }
      }
      ss.style.strokeDashoffset = 440 - (440 * count) / 60;
    }, 1000);
  }
});

function countingStop() {
  clearInterval(timerId);
  timerId = 0;
  count = countTime;
  second.innerText = count;
  stopAlarm(clock);
  stopAlarm(clockAlarm);
  countDown.style.display = "none";
  second.style.color = "aliceblue";
  ss.style.stroke = "#04fc04";
}

//stop-btn+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const stopBtn = document.querySelector(".stop-btn");
const refersh = document.querySelector(".rotate");

let refershPremission = true;
stopBtn.addEventListener("click", function () {
  if (refershPremission === false) {
    return;
  } else {
    gameContainer.totalAmount += gameContainer.totalBet;
    if (gameContainer.totalBet > 0) {
      gameContainer.totalBet = 0;
    }
    betAmount.innerText = gameContainer.totalBet;
    betsite = "hello";
    clearBetting();
    countingStop();
    playPermission = true;
  }
});

// let refershPremission = true;
// refersh.addEventListener("click", function () {
//     if (refershPremission === false) {
//         return
//     }else {
//         gameContainer.totalAmount += gameContainer.totalBet;
//         if(gameContainer.totalBet > 0) {
//             gameContainer.totalBet = 0
//         }
//         clearBetting();
//     }
// })
// game container +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const gameContainer = {
  animal: [
    {
      name: "dog",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/com-gif-maker-unscreen.gif",
      resultUrl: "./assets/images/square-buttons/dog(top corner).png",
    },
    {
      name: "monkey",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/monkey.gif",
      resultUrl: "./assets/images/square-buttons/monkey(left side).png",
    },
    {
      name: "sheep",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/sheep.gif",
      resultUrl: "./assets/images/square-buttons/sheep(left side).png",
    },
    {
      name: "elephant",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/elephant.gif",
      resultUrl: "./assets/images/square-buttons/elephant(bottom).png",
    },
    {
      name: "seahorse",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/output-onlinegiftools (2).gif",
      resultUrl: "./assets/images/square-buttons/seahorse(right side).png",
    },
    {
      name: "jellyfish",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/jellyfish.gif",
      resultUrl: "./assets/images/square-buttons/jellyfish(top corner).png",
    },
    {
      name: "dolphin",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/dolphin.gif",
      resultUrl: "./assets/images/square-buttons/dolphin(bottom).png",
    },
    {
      name: "shark",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/shark.gif",
      resultUrl: "./assets/images/square-buttons/shark(right side).png",
    },
    {
      name: "tortoise",
      amount: 0,
      betWin: 0,
      animalUrl:
        "./assets/images/round-buttons/1661398104150-removebg-preview.png",
      resultUrl:
        "./assets/images/square-buttons/1661398104010-removebg-preview.png",
    },
    {
      name: "whale",
      amount: 0,
      betWin: 0,
      animalUrl: "./assets/images/animal-gif/whale.gif",
      resultUrl: "./assets/images/square-buttons/whale(top corner).png",
    },
    {
      name: "land",
      amount: 0,
      betWin: 0,
    },
    {
      name: "sea",
      amount: 0,
      betWin: 0,
    },
  ],
  totalAmount: 600,
  totalBet: 0,
};

const array = [
  "tortoise",
  "dog",
  "dog",
  "dog",
  "whale",
  "seahorse",
  "seahorse",
  "seahorse",
  "tortoise",
  "jellyfish",
  "jellyfish",
  "jellyfish",
  "whale",
  "dolphin",
  "dolphin",
  "dolphin",
  "tortoise",
  "shark",
  "shark",
  "shark",
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
  "monkey",
];

profileTotalCoin.innerText = gameContainer.totalAmount;
wellcomeTotal.innerText = gameContainer.totalAmount;
achievementAmount.innerText = gameContainer.totalAmount;

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

let betsite = "hello";
for (let i = 0; i < animalBtn.length; i++) {
  animalBtn[i].addEventListener("click", function () {
    if (betsite === "hello") {
      return;
    } else {
      if (
        animalBtn[i].id === gameContainer.animal[i].name &&
        gameContainer.animal[i].amount < 50
      ) {
        gameContainer.animal[i].amount += 1;
        price[i].innerHTML = gameContainer.animal[i].amount;
        gameContainer.totalAmount -= 1;
        coin.innerHTML = gameContainer.totalAmount;
        gameContainer.totalBet += 1;
        betAmount.innerText = gameContainer.totalBet;
      }
    }
  });

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

function clearBetting() {
  for (let i = 0; i < animalBtn.length; i++) {
    gameContainer.animal[i].amount = 0;
    price[i].innerHTML = gameContainer.animal[i].amount;
    coin.innerText = gameContainer.totalAmount;
  }
}

let gameIntervel = 0;
let i = 0;
function animationCircle(x, random) {
  let number = random;
  if (gameIntervel !== 0) {
    return;
  }
  gameIntervel = setInterval(() => {
    playAlarm(spanWheel);
    if (!animalCircle[i].className.includes("animal-circle")) {
      animalCircle[i].classList.add("animal-circle");
    }
    if (i > 0) {
      animalCircle[i - 1].classList.remove("animal-circle");
    } else {
      animalCircle[31].classList.remove("animal-circle");
    }
    i++;
    number--;
    if (i == 32) {
      // animalCircle[i-1].classList.remove("animal-circle")
      i = 0;
    }
    if (number == 0) {
      // console.log("hello"+ i);
      if (i == 0) {
        i = 32;
      }
      stopAlarm(spanWheel);
      clearInterval(gameIntervel);
      setTimeout(() => {
        // console.log(i-1)
        winOrLose(i - 1);
        gameContainer.totalBet = 0;
        setTimeout(function () {
          animalCircle[i - 1].classList.remove("animal-circle");
        }, 100);
        setTimeout(function () {
          animalCircle[i - 1].classList.add("animal-circle");
        }, 200);
        setTimeout(function () {
          animalCircle[i - 1].classList.remove("animal-circle");
        }, 300);
        setTimeout(function () {
          animalCircle[i - 1].classList.add("animal-circle");
        }, 400);
        setTimeout(function () {
          animalCircle[i - 1].classList.remove("animal-circle");
        }, 500);
        setTimeout(function () {
          animalCircle[i - 1].classList.add("animal-circle");
        }, 600);
        setTimeout(function () {
          animalCircle[i - 1].classList.remove("animal-circle");
        }, 700);
        clearBetting();
      }, 3000);
      setTimeout(() => {
        playAlarm(sound);
        // i = 0;
      }, 4000);
    }
  }, x);
}

function numberRandom(ran) {
  return Math.floor(Math.random() * ran + 1);
}

let imageArray = [];

function resultList(list) {
  cleanList();
  for (let i = 0; i < list.length; i++) {
    const image = list[i];
    const imageList = renderImage(image);
    resltAnimal.append(imageList);
  }
}

function cleanList() {
  let resultAnimal = document.querySelector(".result-animal");
  while (resultAnimal.firstChild) {
    resltAnimal.removeChild(resultAnimal.firstChild);
  }
}

function renderImage(item) {
  const imageItem = document.createElement("img");
  imageItem.src = item.resultUrl;
  return imageItem;
}

function winOrLose(x) {
  let win = 0;
  let totalWin = 0;
  for (let i = 0; i < gameContainer.animal.length; i++) {
    if (array[x] === gameContainer.animal[0].name) {
      gameContainer.animal[0].betWin = gameContainer.animal[0].amount * 4;
      winAnimal.src = gameContainer.animal[0].animalUrl;
    }
    if (array[x] === gameContainer.animal[1].name) {
      gameContainer.animal[1].betWin = gameContainer.animal[1].amount * 6;
      winAnimal.src = gameContainer.animal[1].animalUrl;
    }

    if (array[x] === gameContainer.animal[2].name) {
      gameContainer.animal[2].betWin = gameContainer.animal[2].amount * 12;
      winAnimal.src = gameContainer.animal[2].animalUrl;
    }

    if (array[x] === gameContainer.animal[3].name) {
      gameContainer.animal[3].betWin = gameContainer.animal[3].amount * 24;
      winAnimal.src = gameContainer.animal[3].animalUrl;
    }

    if (array[x] === gameContainer.animal[4].name) {
      gameContainer.animal[4].betWin = gameContainer.animal[4].amount * 4;
      winAnimal.src = gameContainer.animal[4].animalUrl;
    }

    if (array[x] === gameContainer.animal[5].name) {
      gameContainer.animal[5].betWin = gameContainer.animal[5].amount * 6;
      winAnimal.src = gameContainer.animal[5].animalUrl;
    }

    if (array[x] === gameContainer.animal[6].name) {
      gameContainer.animal[6].betWin = gameContainer.animal[6].amount * 12;
      winAnimal.src = gameContainer.animal[6].animalUrl;
    }

    if (array[x] === gameContainer.animal[7].name) {
      gameContainer.animal[7].betWin = gameContainer.animal[7].amount * 24;
      winAnimal.src = gameContainer.animal[7].animalUrl;
    }

    if (array[x] === gameContainer.animal[8].name) {
      gameContainer.animal[8].betWin = gameContainer.animal[8].amount * 24;
      winAnimal.src = gameContainer.animal[8].animalUrl;
    }

    if (array[x] === gameContainer.animal[9].name) {
      gameContainer.animal[9].betWin = gameContainer.animal[9].amount * 48;
      winAnimal.src = gameContainer.animal[9].animalUrl;
    }

    // if( gameContainer.animal[i].name === array[x]) {
    //     win += gameContainer.animal[i].amount * 5;
    //     console.log("winwin-"+ win)
    // }
    if (
      array[x] === gameContainer.animal[0].name ||
      array[x] === gameContainer.animal[1].name ||
      array[x] === gameContainer.animal[2].name ||
      array[x] === gameContainer.animal[3].name
    ) {
      gameContainer.animal[10].betWin = gameContainer.animal[10].amount * 2;
      // coin.innerText = gameContainer.totalAmount;
    }
    if (
      array[x] === gameContainer.animal[4].name ||
      array[x] === gameContainer.animal[5].name ||
      array[x] === gameContainer.animal[6].name ||
      array[x] === gameContainer.animal[7].name
    ) {
      gameContainer.animal[11].betWin = gameContainer.animal[11].amount * 2;
      // totalWin = win - gameContainer.totalBet;
      // gameContainer.totalAmount += win;
    }
    win += gameContainer.animal[i].betWin;
  }

  for (let j = 0; j < gameContainer.animal.length; j++) {
    if (array[x] === gameContainer.animal[j].name) {
      const itemImage = { resultUrl: gameContainer.animal[j].resultUrl };
      imageArray.push(itemImage);
      if (imageArray.length > 5) {
        imageArray.shift();
      }
      resultList(imageArray);
    }
  }
  resltAnimal.style.display = "flex";
  totalWin = win - gameContainer.totalBet;
  gameContainer.totalAmount += win;
  coin.innerText = gameContainer.totalAmount;
  wellcomeTotal.innerText = gameContainer.totalAmount;
  profileTotalCoin.innerText = gameContainer.totalAmount;
  achievementAmount.innerText = gameContainer.totalAmount;

  if (totalWin >= 0) {
    resultWin.innerText = totalWin;
    resultWin.style.color = "#06d6a0";
    loseText.innerText = "Win";
    loseText.style.color = "#06d6a0";
    calculateWin.style.display = "flex";
    // winOrLoseHeader.textContent = "Congratulation!";
    // winOrLoseText.textContent = "you win";
    // result.textContent = totalWin;
    celebration.style.display = "block";
    gameContainerWinning.style.display = "block";
    gameContainerWinning2.style.display = "block";
    gameContainerWinning3.style.display = "block";
    gameContainerWinning4.style.display = "block";
    refershPremission = false;
    playPermission = false;
    playWin();
    setTimeout(function () {
      resultWin.textContent = 0;
      resultWin.style.color = "#ff7b01";
      calculateWin.style.display = "none";
      loseText.style.color = "#fff";
      betAmount.innerText = gameContainer.totalBet;
      celebration.style.display = "none";
      stopAlarm(winning);
      win = 0;
      totalWin = 0;
      gameContainerWinning.style.display = "none";
      gameContainerWinning2.style.display = "none";
      gameContainerWinning3.style.display = "none";
      gameContainerWinning4.style.display = "none";
      playPermission = true;
      refershPremission = true;
    }, 15000);
    // }else if(totalWin === 0) {
    //     calculateWin.style.display = "flex";
    //     // winOrLoseHeader.textContent = "Ohh oh!";
    //     winOrLoseText.textContent = "draw";
    //     result.textContent = totalWin
    //     playPermission = false
    //     setTimeout(function () {
    //         calculateWin.style.display = "none";
    //         betAmount.innerText = gameContainer.totalBet;
    //         win = 0
    //         totalWin = 0
    //         playPermission = true
    //     },30000)
  } else {
    loseText.innerText = "Lose";
    loseText.style.color = "#E93C24";
    resultWin.innerText = totalWin;
    resultWin.style.color = "#E93C24";
    calculateWin.style.display = "flex";
    // winOrLoseHeader.textContent = "so sorry";
    // winOrLoseText.textContent = "You Lose";
    // result.textContent = totalWin;
    playPermission = false;
    refershPremission = false;
    loserGif.style.display = "block";
    babyCry.style.display = "block";
    baby.style.display = "block";
    playLose();
    setTimeout(function () {
      resultWin.innerText = 0;
      calculateWin.style.display = "none";
      loseText.innerText = "Win";
      loseText.style.color = "#fff";
      resultWin.style.color = "#ff7b01";
      betAmount.innerText = gameContainer.totalBet;
      loserGif.style.display = "none";
      babyCry.style.display = "none";
      baby.style.display = "none";
      stopAlarm(loserSong);
      win = 0;
      totalWin = 0;
      playPermission = true;
      refershPremission = true;
    }, 15000);
  }
  setTimeout(function () {
    for (let j = 0; j < gameContainer.animal.length; j++) {
      gameContainer.animal[j].betWin = 0;
    }
  }, 18000);
}
