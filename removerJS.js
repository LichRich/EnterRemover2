
window.onload = function(){
  window.focus();
  window.moveTo(0,0);
  window.resizeTo(614,640);
  document.getElementById("remove").onclick=remover;
  document.getElementById("copy").onclick=copy;
  document.getElementById("reset").onclick=reset;
  document.getElementById("trans").onclick=trans;
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

function copy(){

  var clip = document.createElement('input');
  var target = document.getElementById('output').value;

  if (target==="") {
    swal("입력된 내용이 없습니다.","","error");
  } else {
    clip.setAttribute("value", target);
    document.body.appendChild(clip);
    clip.select();
    document.execCommand("copy");
    document.body.removeChild(clip);
    swal("복사되었습니다.","","success");
  }

}

function trans() {
  const data = $("form").serialize();
  $.ajax({
    type:"POST",
    url:"./ajax_trans.php",
    data:data,
    success:function(args){
      $("#res_papago").html(args);
    },
    error:function(e){
      alert(e.responseText);
    }
  });
}
