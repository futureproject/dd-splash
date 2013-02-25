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
