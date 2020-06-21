window.addEventListener('load', () => {
  const timer = document.querySelector('#timer');
  let count = 0;

  const intervalo = setInterval(() => {
    timer.textContent = ++count;
    if (count === 20) {
      this.clearInterval(intervalo);
      return; //POG
    }
    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + ',5';
      }, 500);
    }
  }, 1000);
})