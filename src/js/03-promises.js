function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay})
      } else {
      reject({ position, delay })
      }
  }, 1000)
  })}


const refs = {
  inputForm: document.querySelector(".form"),
}

refs.inputForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  createPromise()
})



createPromise(2, 1500)
  .then(({position, delay}) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });