const regionList = document.querySelector('.header__region-list');

const PROCEDURE_URL = 'procedure.html';

const onRegionLinkClick = (evt) => {
  evt.preventDefault();

  if (!evt.target.matches('.header__region-link')) {
    return;
  }

  const id = evt.target.href.slice(evt.target.href.indexOf('#'));

  sessionStorage.setItem('regionId', id);

  window.location.href = PROCEDURE_URL;
}

regionList.addEventListener('click', onRegionLinkClick);
