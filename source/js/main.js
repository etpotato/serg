'use strict';

const navWrapper = document.querySelector('.header__nav-wrapper');
const navToggle = navWrapper.querySelector('.header__nav-toggle');
const navUnderlay = navWrapper.querySelector('.header__nav-underlay');

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

navWrapper.classList.remove('header__nav-wrapper--no-js');

navToggle.addEventListener('click', toggleMenu);
navUnderlay.addEventListener('click', closeMenu);
