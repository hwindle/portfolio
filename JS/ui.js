// get the menu mobile button
const mobileBtn = document.querySelector('#mobile-menu-link');
// the element with the arrow chevron in it
const arrowSpan = document.querySelector('li.phone-menu-btn > span');
// get the ul.main-menu li.menu-items for adding the class .show to.
const liArray = document.querySelectorAll('ul.main-menu > li.menu-item');

mobileBtn.addEventListener('mousedown', () => {
  liArray.forEach((item) => {
    item.classList.toggle('show');
    if (item.classList.contains('show')) {
      arrowSpan.classList.remove('fa-chevron-down');
      arrowSpan.classList.add('fa-chevron-up');
    } else {
      arrowSpan.classList.remove('fa-chevron-up');
      arrowSpan.classList.add('fa-chevron-down');
    }
  });
});

/***
 * Contact form - clear form button
 */
const clearFormBtn = document.querySelector('input#clear');
// inputs to clear
const emailInput = document.querySelector('input#email');
const subjectInput = document.querySelector('input#subject');
const messageTextarea = document.querySelector('textarea#message');

clearFormBtn.addEventListener('click', () => {
  emailInput.value = '';
  subjectInput.value = '';
  messageTextarea.value = '';
});