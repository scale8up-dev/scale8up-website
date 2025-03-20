jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function(event) {
    event.preventDefault();
    
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    
    if (ferror) return false;
    
    // If validation passed, send to Formspree
    var form = $(this)[0];
    var status = document.getElementById("my-form-status");
    var formData = new FormData(form);
    
    // Submit the form using Formspree
    $.ajax({
      url: form.action,
      method: form.method,
      data: formData,
      processData: false,
      contentType: false,
      headers: {
        'Accept': 'application/json'
      },
      success: function(data) {
        $("#sendmessage").addClass("show");
        $("#errormessage").removeClass("show");
        $('#my-form-status').html("Thanks for your submission!");
        form.reset();
      },
      error: function(err) {
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html("Oops! There was a problem submitting your form.");
        if (err.responseJSON && err.responseJSON.errors) {
          $('#my-form-status').html(err.responseJSON.errors.map(error => error.message).join(", "));
        } else {
          $('#my-form-status').html("Oops! There was a problem submitting your form.");
        }
      }
    });
  });

});
