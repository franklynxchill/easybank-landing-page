const menuNav = document.getElementById('menu-nav');
const closeBtn = document.getElementById('close-btn');
const hamburgerBtn = document.getElementById('hamburger-btn');

 hamburgerBtn.addEventListener('click', ()=> {
  menuNav.classList.remove('hidden');
  hamburgerBtn.classList.add('hidden');
  closeBtn.classList.remove('hidden');
 })

 closeBtn.addEventListener('click', ()=> {
  menuNav.classList.add('hidden');
  closeBtn.classList.add('hidden');
  hamburgerBtn.classList.remove('hidden');
 })