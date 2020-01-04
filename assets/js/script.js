$(document).ready(function(){
    $('.carousel').carousel();
    autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
  });