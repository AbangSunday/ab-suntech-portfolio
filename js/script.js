
// A-B SUNTECH MOBILE NAVIGATION

const menuToggle = document.querySelector('.menu-toggle');

const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', function () {

    navigation.classList.toggle('active');

    const isOpen = navigation.classList.contains('active');

    menuToggle.setAttribute('aria-expanded', isOpen);

    menuToggle.textContent = isOpen ? '✕' : '☰';

});
      
