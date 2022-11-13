import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btn: document.querySelector('button'),
};

refs.form.addEventListener('submit', onBtnSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    position = setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onBtnSubmit(evt) {
  evt.preventDefault();
  for (
    let i = 1, step = 0;
    i <= refs.amount.value;
    i += 1, step += Number(refs.step.value)
  ) {
    let delayRange = Number(refs.delay.value) + step;
    createPromise(i, delayRange)
      .then(result => Notify.success(result))
      .catch(error => Notify.failure(error));
  }
}
