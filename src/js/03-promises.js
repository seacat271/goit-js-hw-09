import { Report } from 'notiflix/build/notiflix-report-aio';

function createPromise(position, delay) { 
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    let Obj = { position, delay };
  setTimeout(() => {
    if (shouldResolve) resolve(Obj)
    reject(Obj);
    }, delay)
  })
  return promise
  }

const refs = {
  inputForm: document.querySelector(".form"),
}

refs.inputForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  let { elements: {delay: startDelay, step, amount} } = event.target;
  console.log(startDelay.value, step.value, amount.value)

for (let i = 1; i <= +amount.value; i += 1){
    delay = +startDelay.value + step.value * (i - 1);
  createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  })
 
}
})




