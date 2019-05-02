var modal = document.getElementById('loginwindow');
var btn = document.getElementById('show_mdl');
var span = document.getElementById('close_mdl');

btn.onclick = function () {
  modal.style.display = 'block';
}
span.onclick = function () {
  modal.style.display = 'none';
}

var modal1 = document.getElementById('submitwindow');
var btn1 = document.getElementById('show_sub_mdl');
var span1 = document.getElementById('close_sub_mdl');

btn1.onclick = function () {
  modal1.style.display = 'block';
}
span1.onclick = function () {
  modal1.style.display = 'none';
  modal.style.display = 'none';
}
window.onclick = function (event) {
  if (event.target == modal1){
      modal1.style.display = 'none';
      modal.style.display = 'none';
  }
  else if (event.target == modal){
      modal.style.display = 'none';
  }
}
