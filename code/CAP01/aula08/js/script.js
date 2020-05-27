window.addEventListener('load', start);

function start () {
  console.log('Pagina totalmente carregada!!!');

  var input = document.querySelector('#nameInput');
  input.addEventListener('keyup', countName);
}

function countName(event) {
  console.log(event);

  var count = event.target.value;

  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
}