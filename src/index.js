/* MENU */
(() => {
  const openBtn = document.querySelector('.menu__btn'),
    closeBtn = document.querySelector('.menu__close'),
    menu = document.querySelector('.menu__container');

  openBtn.addEventListener('click', (e) => menu.classList.add('active'));

  document.addEventListener(
    'click',
    (e) => e.target.matches('.menu__item') && menu.classList.remove('active')
  );

  closeBtn.addEventListener('click', (e) => menu.classList.remove('active'));
})();
