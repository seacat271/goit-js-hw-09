const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
    body: document.querySelector("body")
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() { 
    let randomColor =  getRandomHexColor() 
    refs.body.style.backgroundColor = randomColor
}

function BtnDisabler () {
    let arr = document.querySelectorAll("button");
    [...arr].map(item => item.disabled = !item.disabled)
}

const TIME_DELAY = 1000;
let colorTimerId = null;
refs.stopBtn.disabled = true; 


function onClickStartBtn() {
    changeColor()
    colorTimerId = setInterval(() => {
        changeColor()}, TIME_DELAY);
    BtnDisabler () 
}

function onClickStopBtn() {
    clearInterval(colorTimerId);
    BtnDisabler ()   
}




refs.startBtn.addEventListener("click", onClickStartBtn)

refs.stopBtn.addEventListener("click", onClickStopBtn)