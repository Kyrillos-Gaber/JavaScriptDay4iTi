let sld;
let src = 1;

function setSrc(nx = true) {
  if (src >= 3 || src < 1) src = 1;
  else if (nx) src++;
  else src++;
  document.querySelector('img').src = `./img/${src}.jpg`;
}

function strt() {
  sld = setInterval(function() {
    setSrc();
  }, 2000);
}

function stop() {
  clearInterval(sld);
}
