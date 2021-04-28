const navWrapper = document.querySelector('.header__nav-wrapper');
const currentLink = navWrapper.querySelector('.header__nav-link--current');
const navToggle = navWrapper.querySelector('.header__nav-toggle');

const toggleMenu = (evt) => {
  evt.preventDefault();
  navWrapper.classList.toggle('header__nav-wrapper--opened');
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
};

const closeMenu = (evt) => {
  evt.preventDefault();
  navWrapper.classList.remove('header__nav-wrapper--opened');
  navToggle.setAttribute('aria-expanded', 'false');
};

const renderUnderlay = () => {
  const navUnderlay = document.createElement('div');
  navUnderlay.classList.add('header__nav-underlay');
  navWrapper.prepend(navUnderlay);

  navUnderlay.addEventListener('click', closeMenu);
}

renderUnderlay();
navWrapper.classList.remove('header__nav-wrapper--no-js');
navToggle.addEventListener('click', toggleMenu);

if (currentLink) {
  currentLink.addEventListener('click', closeMenu);
}
