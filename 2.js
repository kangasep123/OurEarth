$(document).ready(function () {
  $('#togglePassword').click(function () {
    var passwordField = $('#floatingPassword');

    if (passwordField.attr('type') === 'password') {
      passwordField.attr('type', 'text');
      $(this).removeClass('fa-eye-slash');
      $(this).addClass('fa-eye');
    } else {
      passwordField.attr('type', 'password');
      $(this).removeClass('fa-eye');
      $(this).addClass('fa-eye-slash');
    }
  });
});

const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 60) {
    nav.classList.add('navbar-scrolled');
  } else if (window.scrollY < 60) {
    nav.classList.remove('navbar-scrolled');
  }
});
