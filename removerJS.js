
window.onload = function(){
  window.focus();
  window.moveTo(0,0);
  window.resizeTo(614,640);
  document.getElementById("remove").onclick=remover;
  document.getElementById("copy").onclick=copy;
  document.getElementById("reset").onclick=reset;
}

function remover() {
  var input = document.getElementById('input');
  var texts = input.value.split("\n");
  var result = "";

  for (var i = 0 ; i < texts.length ; i++){
    if (i !== texts.length - 1) result += (texts[i] + " ");
    else result += texts[i];
  }

  var output = document.getElementById('output');
  output.value = result;
}

function reset() {
  window.location.reload();
}

function onMouseColor(){
  var remove = document.getElementById('remove');
  var reset = document.getElementById('reset');
}

function copy(){
  var clip = document.createElement('input');
  clip.setAttribute("value", document.getElementById('output').value);
  document.body.appendChild(clip);
  clip.select();
  document.execCommand("copy");
  document.body.removeChild(clip);
  swal("복사되었습니다.","","success");
}
