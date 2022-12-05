let moving;
let pos = 0;
let arr = document.querySelectorAll("img");

function strt(){
  moving = setInterval(function() {
    if (pos < arr.length) 
    {
      arr[pos++].src = "./img/marble3.jpg";
      arr[pos-2].src = "./img/marble1.jpg";
    }
      
    else {
      arr[pos-1].src = "./img/marble1.jpg";
      pos = 0;
    }
  }, 1000);
}

strt();

function mouseIn() {
  clearInterval(moving);
}

function mouseOut(){
  strt();
}