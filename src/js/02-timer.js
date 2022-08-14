
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}


flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      checkDate(selectedDates[0])
      countdownTimer.init()
    },
    onChange() {
        countdownTimer.stop();
    }       
  })

function checkDate (date) {
    date < Date.now() 
    ? checkDateError()
    : refs.startBtn.disabled = false;
}
function checkDateError() {
    Report.failure('Warning', 'Please choose a date in the future', 'Okay',)
    refs.startBtn.disabled = true;
    resetClockFace()
}

function resetClockFace(){
    timerDisplay.forEach(elem => {
        elem.textContent = "00"
})}

const countdownTimer = {
    intervalId: null,
    isActive: false,
    init() {
       if (!refs.startBtn.disabled) calculateDisplayTime ();
    },
    start() {
        if (this.isActive) return;
        this.isActive = true;
        refs.startBtn.textContent = "Stop"
        this.intervalId = setInterval(() => calculateDisplayTime(), 1000)
    },
    stop() {
        this.isActive = false;
        refs.startBtn.textContent = "Start"
        clearInterval(this.intervalId)
    }
}

function calculateDisplayTime () {
    const finalTime = refs.fp.selectedDates[0].getTime();
    let currentTime = Date.now();
    let currentDisplayTime = convertMs(finalTime - currentTime);
    checkEndDate(finalTime, currentTime)
    updateClockFace(addLeadingZero(currentDisplayTime));
}

function updateClockFace(timeKit) {
    timerDisplay.forEach((elem,index)=> {
        elem.textContent = Object.values(timeKit)[index]
    })}

function addLeadingZero(Obj) {
    for(let key in Obj) {
        Obj[key].length > 1 ? String(Obj[key]) : Obj[key] = String(Obj[key]).padStart(2, 0)
    }
    return Obj;
}
    
function checkEndDate(end, begin){
    if ((end - begin) <= 998 && countdownTimer.isActive) {
    countdownTimer.stop();
    refs.startBtn.disabled = true;
    Report.info('Timer END', 'Please choose the next date', 'Okay');
}}

const refs = {
    fp: document.querySelector("#datetime-picker")._flatpickr,
    startBtn: document.querySelector("[data-start]"),
}
    
const timerDisplay = document.querySelectorAll(".value");

refs.startBtn.disabled = true;

refs.startBtn.addEventListener("click", onClickBtn)

function onClickBtn () {
    countdownTimer.isActive ? countdownTimer.stop() : countdownTimer.start()
}



 









