const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const close = document.querySelector('.close');

hamburgerIcon.addEventListener('click', () => {
  console.log('button works')
  const menuDisplay = window.getComputedStyle(hamburgerMenu).display;

  if (menuDisplay === 'none') {
    hamburgerMenu.style.display = 'block';
  }
})

close.addEventListener('click', () => {
  const menuDisplay = window.getComputedStyle(hamburgerMenu).display;

  if (menuDisplay === 'block') {
    hamburgerMenu.style.display = 'none';
  }
})


