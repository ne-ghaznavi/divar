// show mobile navbar
$('.hamburger-btn').click(function () {
    $('.navbar').toggleClass('show-navbar');
});

// show|hide login-modal-container
$(".login-btn").click(function () {
    $('.login-modal-container').addClass('show-login-modal-container');
    $(this).parents('.navbar').removeClass('show-navbar');
});

$('.exit-login-modal').click(function () {
    $('.login-modal-container').removeClass('show-login-modal-container');
    $('.login-modal-code').css('left', '110%');
    $('.login-input').val('');
});

// validation login form
$('.login-input-form').submit(function (event) {
    event.preventDefault();
    let inputVal = $('.login-input').val();

    if (inputVal.charAt(0) == 0 && inputVal.charAt(1) == 9 && inputVal.length == 11) {
        // $(this).off('submit').submit();
        $('.login-modal-code').css('left', 0)
    } else if (inputVal.charAt(0) == 9 && inputVal.length == 10) {
        // $(this).off('submit').submit();
    } else {
        $('.msg-error').css('display', 'block');
        $('.login-input-form').css('border', '1px solid red');
    }
});


$('.login-input').keyup(function () {
    let inputVal = $('.login-input').val();
    if (inputVal.length == 0) {
        $('.msg-error').css('display', 'none');
        $('.login-input-form').css('border', '1px solid rgba(0,0,0,.24)');
    }
});

// change phone number
$('.replace-phone-btn').click(function() {
    $('.login-modal-code').css('left', '110%');
});

// validation code form
$('.code-input-form').submit(function(event) {
    event.preventDefault();
    let inputVal = $('.code-input').val();

    if (inputVal == '' || inputVal.length < 6) {
        $('.msg-CodeError').css('display', 'block');
        $('.code-input-form').css('border', '1px solid red');
    } else {
        $(this).off('submit').submit();
    }
});