$(document).ready(function () {
  
  $('#back').click(function () {
    window.location.href = '../views/signup.html';
  });

  var codeNum = localStorage.getItem('codeNum');

  $('#resend').click(function () {
    alert('Your code is LAB-' + codeNum);
  });

  $('#verify').keyup(function () {
    var code = $('#verify').val();

    if (code === codeNum) {
      $('#next').removeAttr("disabled");

      $('#next').click(function () {
        window.location.href = '../views/form.html';
      });
    };
  });
});