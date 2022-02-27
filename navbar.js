const toggler = document.querySelector('.navbar > .toggler'),
  navListContainer = document.querySelector('.navbar > .nav-list-container');
toggler.addEventListener(
  "click",
  () => {
    toggler.classList.toggle('cross');
    navListContainer.classList.toggle('nav-active');
  },
  true
);

