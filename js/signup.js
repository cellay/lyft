$(document).ready(function () {

  $('select').material_select();

  function selectMovie(num) {
    sessionStorage.setItem('num', num);
  }

  $('#back').click(function () {
    window.location.href = '../index.html';
  });

  $('#number').keyup(function () {
    var number = $('#number').val();

    var codeNumber = Math.floor(Math.random() * (999 - 100) + 100);

    if (number.length === 10) {
      $('#next').removeAttr("disabled");

      alert('Your code is LAB-' + codeNumber);

      $('#next').click(function () {
        localStorage.setItem('codeNum', codeNumber);

        window.location.href = '../views/verify.html';
      });

    };
  });




});
