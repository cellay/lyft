$(document).ready(function () {
  $('#number').keyup(function () {
    var number = $('#number').val();

    var codeNumber = Math.floor(Math.random() * (999 - 100) + 100);

    if (number.length === 9) {
      alert('Your code is LAB-' + codeNumber);
      $('#next').click(function () {
        window.location.href = '../views/verify.html';
      });
    };
  });




});
