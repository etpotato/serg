const backLink = document.querySelector('.blank__link');

const onBackClick = (evt) => {
  evt.preventDefault();
  window.history.back();
};

backLink.addEventListener('click', onBackClick);
