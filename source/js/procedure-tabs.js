const navList = document.querySelector('.procedure__nav-list');
const price = document.querySelector('.procedure__price');

const onTabClick = (evt) => {
  evt.preventDefault();
  if (
    !evt.target.matches('.procedure__nav-link') ||
    evt.target.matches('.procedure__nav-link--current')
  ) {
    return;
  }

  const prevLink = navList.querySelector('.procedure__nav-link--current');
  const nextLink = evt.target;
  prevLink.classList.remove('procedure__nav-link--current');
  nextLink.classList.add('procedure__nav-link--current');

  const id = evt.target.href.slice(evt.target.href.indexOf('#'));
  const prevSection = price.querySelector('.procedure__section--current');
  const nextSection = price.querySelector(`${id}`);
  prevSection.classList.remove('procedure__section--current');
  nextSection.classList.add('procedure__section--current');
};

navList.addEventListener('click', onTabClick);
