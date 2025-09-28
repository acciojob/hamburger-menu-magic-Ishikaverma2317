const hamburger = document.getElementById('hamburger');
const navSub = document.querySelector('.nav-sub');

hamburger.addEventListener('click', () => {
  navSub.classList.toggle('active');
});
