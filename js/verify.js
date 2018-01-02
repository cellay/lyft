$(document).ready(function () {

    $('#verify').keyup(function () {
      var code = $('#verify').val();

      if (code.length === 3) {
        $('#next').click(function () {
          window.location.href = '../views/final.html';
        });
      };
    });

    $('#resend').click(function() {
        var codeNumber = Math.floor(Math.random() * (999 - 100) + 100);
        alert('Your code is LAB-' + codeNumber);
    });
  
  });