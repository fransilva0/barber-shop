/* MENU */

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navbar = document.getElementById('navbar');

    menuButton.addEventListener('click', function() {
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
            menuButton.classList.remove('material-symbols--close');
            menuButton.classList.add('material-symbols--menu');
        } else {
            navbar.style.display = 'block';
            menuButton.classList.remove('material-symbols--menu');
            menuButton.classList.add('material-symbols--close');
        }
    });
});

/* scroll to top button */

window.onscroll = function() {
    var button = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
    
  function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' });}