import { fadeOut, fadeIn } from './animation.js';

const regionList = document.querySelector('.header__region-list');
const procedure = document.querySelector('.procedure');

const DEFAULT_ID = '#head';

const currentUnit = {
  navList: null,
  price: null,
};

const getRegionId = () => {
  const id = sessionStorage.getItem('regionId');
  sessionStorage.removeItem('regionId');
  return id ? id : DEFAULT_ID;
};


const getTabId = url => url.slice(url.indexOf('#'));

const initializePage = () => {
  const id = getRegionId();
  const activeLink = regionList.querySelector(`.header__region-link[href="${id}"]`);
  const activeUnit = procedure.querySelector(`${id}`);

  activeLink.classList.add('header__region-link--current');
  activeUnit.classList.add('procedure__unit--current');

  currentUnit.navList = activeUnit.querySelector('.procedure__nav-list');
  currentUnit.price = activeUnit.querySelector('.procedure__price');

  procedure.classList.remove('procedure--no-js');
  currentUnit.navList.addEventListener('click', onTabClick);
};

const onTabClick = (evt) => {
  evt.preventDefault();
  if (evt.target.className !== 'procedure__nav-link') {
    return;
  }

  const prevLink = currentUnit.navList.querySelector('.procedure__nav-link--current');
  const nextLink = evt.target;
  prevLink.classList.remove('procedure__nav-link--current');
  nextLink.classList.add('procedure__nav-link--current');

  const id = getTabId(evt.target.href);
  const prevSection = currentUnit.price.querySelector('.procedure__section--current');
  const nextSection = currentUnit.price.querySelector(`${id}`);

  fadeOut(prevSection, () => {
    prevSection.classList.remove('procedure__section--current');
    fadeIn(nextSection);
    nextSection.classList.add('procedure__section--current');
  });
};

const onRegionClick = (evt) => {
  evt.preventDefault();
  if (
    !evt.target.matches('.header__region-link') ||
    evt.target.matches('.header__region-link--current')
  ) {
    return;
  }

  const prevLink = regionList.querySelector('.header__region-link--current');
  const nextLink = evt.target;
  prevLink.classList.remove('header__region-link--current');
  nextLink.classList.add('header__region-link--current');

  const id = evt.target.href.slice(evt.target.href.indexOf('#'));
  const prevUnit = procedure.querySelector('.procedure__unit--current');
  const prevNavList = prevUnit.querySelector('.procedure__nav-list');
  const nextUnit = procedure.querySelector(`${id}`);
  const nextNavList = nextUnit.querySelector('.procedure__nav-list');

  fadeOut(prevUnit, () => {
    prevUnit.classList.remove('procedure__unit--current');
    fadeIn(nextUnit);
    nextUnit.classList.add('procedure__unit--current');
  });

  currentUnit.navList = nextNavList;
  currentUnit.price = nextUnit.querySelector('.procedure__price');

  prevNavList.removeEventListener('click', onTabClick);
  nextNavList.addEventListener('click', onTabClick);
}

initializePage();
regionList.addEventListener('click', onRegionClick);
