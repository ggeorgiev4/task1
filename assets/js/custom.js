$(document).ready(function() {

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        var test = pattern.test(emailAddress);
        if (emailAddress.length && test) {
            return true;
        } else {
            $('#warning_email').show();
        }
    };

    function isValidPassword(password) {
        var pattern = new RegExp(/(?=.*?[a-z]+)(?=.*?[A-Z]+)(?=.*?\d|[!@#\$%\^&\*\(\)_\+\-=])/);
        var test = pattern.test(password);
        if (password.length && test) {
            return true;
        } else {
            $('#warning_password').show();
        }
    };

    function isValidUsername(username) {
        if (username.length > 3 && username.length < 13) {
            return true;
        } else {
            $('#warning_username').show();
        }
    }

    function isValidTerms() {
        var test = $('.form-check-input').is(':checked');
        if (test) {
            return true;
        } else {
            $('#warning_terms').show();
        }
    }

    function validateForm1() {
        var email = isValidEmailAddress($('#email').val());
        var password = isValidPassword($('#password').val());
        var username = isValidUsername($('#username').val());
        var terms = isValidTerms();
        if (email && password && username && terms) {
            return true;
        } else {
            return false;
        }
    }

    function goToStepTwo() {
        if (validateForm1()) {
            $('#form_step1').slideUp(400);
            $('#step2').slideDown(400);
        }
    }

    function goToStepThree() {
        $('#step2').slideUp(400);
        $('#form_step3').slideDown(400);
    }

    function goToStepFour() {
        $('#form_step3').slideUp(400);
        $('#step4').slideDown(400);
    }
    $('#gotostep2').click(function() {
        goToStepTwo();
    });
    $('#gotostep3').click(function() {
        goToStepThree();
    });
    $('label[for="promocode"]').click(function() {
        $('#promocode').show();
    });
    $('#gotostep4').click(function() {
        goToStepFour();
    });
});