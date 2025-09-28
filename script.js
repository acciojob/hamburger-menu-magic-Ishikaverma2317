const hamburger = document.getElementById('hamburger');
const navSub = document.querySelector('.nav-sub');

hamburger.addEventListener('click', () => {
  if (navSub.style.display === 'flex') {
    navSub.style.display = 'none';
  } else {
    navSub.style.display = 'flex';
  }
});
