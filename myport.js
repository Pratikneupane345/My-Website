document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileNav = document.getElementById('mobile-nav');

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});