// get the menu mobile button
const mobileBtn = document.querySelector('#mobile-menu-link');

// get the ul.main-menu li.menu-items for adding the class .show to.
const liArray = document.querySelectorAll('ul.main-menu > li.menu-item');

mobileBtn.addEventListener('mousedown', () => {
  liArray.forEach((item) => {
    item.classList.toggle('show');
  });
});