import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputForm: document.querySelector(".form"),
}

refs.inputForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  let { delay: startDelay, step, amount } = event.target.elements;

  generatePromises(startDelay, step, amount);
  resetInputForm(startDelay, step, amount);

})

function generatePromises (a, b, c) {
  for (let i = 1; i <= c.value; i += 1){
  let delay = +a.value + b.value * (i - 1);
  createPromise(i, delay)
  .then(({ position, delay }) => {Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)})
  .catch(({ position, delay }) => {Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)})
}}

function createPromise(position, delay) { 
    return new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;
   setTimeout(() => {
     if (shouldResolve) resolve({ position, delay });
     reject({ position, delay });
     }, delay)
   })}


function resetInputForm(startDelay, step, amount) {
  [...arguments].forEach(elem => elem.value = "")
}