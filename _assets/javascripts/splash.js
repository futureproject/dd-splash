if (!document.querySelector) {
  window.location.href = "http://thefutureproject.org/index.html"
}
window.tfp = {}
tfp.body = document.querySelector('body')
tfp.canvas = document.getElementById('canvas')
tfp.canvas.style.visibility = "hidden"
tfp.spinner = new Spinner().spin(tfp.body)
window.onload = function(){
  tfp.spinner.stop();
  tfp.canvas.style.visibility = "visible"
  tfp.sprites = document.querySelectorAll(".anim")
  i = tfp.sprites.length;
  while (i--) {
    tfp.sprites[i].className += " animated"
  }
}
