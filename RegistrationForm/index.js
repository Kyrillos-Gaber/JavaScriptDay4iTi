let fullName = document.getElementById("name");
function enter(x) {
  x.style.outline = "3px solid blue";
  
}

function leaving(x) {
  fullName.style.outline = "none";
  if (x.value.length < 3) 
  {
    x.select();
    document.getElementById('nEr').style.display = "inline";
  }
  else
    document.getElementById('nEr').style.display = "none";
}

function leavePass(x) {
  let er = document.getElementById("passErr");
  let pass = document.getElementById("pass");
  if (pass.value !== x.value || pass.value.length < 4){
    er.style.display = "inline";
  }
  else 
    er.style.display = "none";

}

function weakPass(x) {
  leavePass(x);
}