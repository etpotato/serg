import { fadeOut, fadeIn } from './animation.js';

const result = document.querySelector('.result');
const resultList = result.querySelector('.result__list');
const resultItems = resultList.childNodes;
const prevButton = result.querySelector('.result__swipe--prev');
const nextButton = result.querySelector('.result__swipe--next');
const resultGalerries = Array.from(resultList.querySelectorAll('.result__gallery'));

const paintButtons = (gallery) => {
  const galleryImages = Array.from(gallery.querySelectorAll('.result__gallery-image'));
  const paginationButtons = Array.from(gallery.querySelectorAll('.result__pagination-button'));

  galleryImages.forEach((image, index) => {
    paginationButtons[index].style.backgroundImage = `url("${image.src}")`;
  });
};

const onNextClick = (evt) => {
  evt.preventDefault();
  const currentItem = resultList.querySelector('.result__item--current');
  const nextItem = currentItem.nextSibling ? currentItem.nextSibling : resultItems[0];

  fadeOut(currentItem, () => {
    currentItem.classList.remove('result__item--current');
    fadeIn(nextItem);
    nextItem.classList.add('result__item--current');
  });
};

const onPrevClick = (evt) => {
  evt.preventDefault();

  const currentItem = resultList.querySelector('.result__item--current');
  const nextItem = currentItem.previousSibling ? currentItem.previousSibling : resultItems[resultItems.length - 1];

  fadeOut(currentItem, () => {
    currentItem.classList.remove('result__item--current');
    fadeIn(nextItem);
    nextItem.classList.add('result__item--current');
  });
};

result.classList.remove('result--no-js');
resultGalerries.forEach(list => paintButtons(list));
nextButton.addEventListener('click', onNextClick);
prevButton.addEventListener('click', onPrevClick);
