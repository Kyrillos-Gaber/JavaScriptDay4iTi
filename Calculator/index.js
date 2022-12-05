let myInput = document.getElementById("dis");

function eqClick() {
  myInput.innerText = eval(myInput.innerText);
}



function inputClick(val) {
  if (val !== 'c')
    myInput.innerText += val;
  else
    myInput.innerText = "";
}