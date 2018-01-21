$(document).ready(function () {
  splash();
  $('#signup').click(function () {
    window.location.href = 'views/signup.html';
  });
});


function splash() {
  setTimeout(function () {
    $('#splash-effect').fadeOut(500);
  }, 2000);
}