$(document).ready(function () {

  $('#back').click(function () {
    window.location.href = '../views/verify.html';
  });

  $('select').material_select();

  var validEmail;
  var validFirstName;
  var validLastName;
  var validTerms;

  function validateBtn() {
    if (validEmail && validFirstName && validLastName && validTerms) {
      $('#next').removeAttr("disabled");
    }
  }

  function defaultBtn() {
    $('#next').attr('disabled', 'disabled');
  }


  $('#email').on('input', function (event) {
    var constant = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (constant.test($(this).val())) {
      validEmail = true;
      validateBtn();
    } else {
      defaultBtn();
    }
  });
  $('#firstName').on('input', function (event) {
    var constant = /[A-zÀ-ú]/;
    if (constant.test($(this).val()) && $(this).val() !== '') {
      validFirstName = true;
      validateBtn();
    } else {
      defaultBtn();
    }
  });

  $('#lastName').on('input', function (event) {
    var constant = /[A-zÀ-ú]/;
    if (constant.test($(this).val()) && $(this).val() !== '') {
      validLastName = true;
      validateBtn();
    } else {
      defaultBtn();
    }
  });

  $('#filled-in-box').click(function () {
    $('#filled-in-box').attr('checked', 'checked');
    validTerms = true;
    validateBtn();
  })

  $('#next').click(function () {
    localStorage.setItem('name', $('#firstName').val());
    window.location.href = '../views/final.html';
  });
});