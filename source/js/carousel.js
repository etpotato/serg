import { fadeOut, fadeIn } from './animation.js';
import { isEsc } from './util.js';

const result = document.querySelector('.result');
const resultList = result.querySelector('.result__list');
const resultItems = resultList.childNodes;
const prevButton = result.querySelector('.result__swipe--prev');
const nextButton = result.querySelector('.result__swipe--next');
const resultGalerries = Array.from(resultList.querySelectorAll('.result__gallery'));
const currentPaginationList = resultList.querySelector('.result__item--current .result__pagination-list');
const currentGalleryList = resultList.querySelector('.result__item--current .result__gallery-list');

let currentGalleryItems = Array.from(resultList.querySelectorAll('.result__item--current .result__gallery-item'));
let currentPaginationItems = Array.from(resultList.querySelectorAll('.result__item--current .result__pagination-item'));

const paintButtons = (galleries) => {
  galleries.forEach(gallery => {
    const galleryImages = Array.from(gallery.querySelectorAll('.result__gallery-image'));
    const paginationButtons = Array.from(gallery.querySelectorAll('.result__pagination-button'));

    galleryImages.forEach((image, index) => {
      paginationButtons[index].style.backgroundImage = `url("${image.src}")`;
    });
  });
};

const closeGalleryPopup = () => {
  const underlay = result.querySelector('.result__underlay');
  result.classList.remove('result--popup-open');
  fadeOut(underlay)
    .then(() => {
      underlay.remove();
      result.style.height = 'auto';
      currentGalleryList.addEventListener('click', onGalleryLinkClick);
    });

  document.body.classList.remove('no-scroll');
  underlay.removeEventListener('click', closeGalleryPopup);
  document.removeEventListener('keydown', onPopupEsc);
};

const onPopupEsc = (evt) => {
  evt.preventDefault();
  if (!isEsc(evt)) {
    return;
  }
  closeGalleryPopup();
};

const onGalleryLinkClick = (evt) => {
  evt.preventDefault();
  if (!evt.target.className === 'result__gallery-link') {
    return;
  }

  const underlay = document.createElement('div');
  underlay.classList.add('result__underlay');
  result.prepend(underlay);
  fadeIn(underlay)
    .then(() => {
      underlay.addEventListener('click', closeGalleryPopup);
      document.addEventListener('keydown', onPopupEsc);
    });

  const resultHeight = result.getBoundingClientRect().height;
  result.style.height = `${resultHeight}px`;
  result.classList.add('result--popup-open');
  document.body.classList.add('no-scroll');
  currentGalleryList.removeEventListener('click', onGalleryLinkClick);
};

const onThumbnailClick = (evt) => {
  evt.preventDefault();
  if (
    evt.target.className !== 'result__pagination-button' ||
    evt.target.closest('.result__pagination-item--current')
  ) {
    return;
  }

  const currentPaginationList = evt.currentTarget;
  currentPaginationList.removeEventListener('click', onThumbnailClick);

  const prevPaginationItem = currentPaginationItems.find(item => item.matches('.result__pagination-item--current'));
  const prevPaginationItemUnderline = prevPaginationItem.querySelector('.result__pagination-item-underline--current');
  const prevPaginationItemX = prevPaginationItem.getBoundingClientRect().x;
  const prevGalleryItem = currentGalleryItems.find(item => item.matches('.result__gallery-item--current'));
  const nextPaginationItem = evt.target.closest('.result__pagination-item');
  const nextPaginationItemUnderline = nextPaginationItem.querySelector('.result__pagination-item-underline');
  const nextPaginationItemX = nextPaginationItem.getBoundingClientRect().x;
  const itemIndex = currentPaginationItems.indexOf(nextPaginationItem);
  const nextGalleryItem = currentGalleryItems[itemIndex];
  prevPaginationItem.classList.remove('result__pagination-item--current');
  nextPaginationItem.classList.add('result__pagination-item--current');

  let transitionsDoneCount = 0;

  const activateThumbnails = () => {
    transitionsDoneCount += 1;
    if (transitionsDoneCount === 2) {
      currentPaginationList.addEventListener('click', onThumbnailClick);
    }
  };

  fadeOut(prevGalleryItem)
    .then(() => {
      prevGalleryItem.classList.remove('result__gallery-item--current');
      nextGalleryItem.classList.add('result__gallery-item--current');
      return fadeIn(nextGalleryItem);
    })
    .then(() => {
      activateThumbnails();
    });

  prevPaginationItemUnderline.addEventListener('transitionend', () => {
    nextPaginationItemUnderline.classList.add('result__pagination-item-underline--current');
    prevPaginationItemUnderline.classList.remove('result__pagination-item-underline--current');
    prevPaginationItemUnderline.style.transform = 'none';
    activateThumbnails();
  }, {
    once: true,
  });

  prevPaginationItemUnderline.style.transform = `translateX(${nextPaginationItemX - prevPaginationItemX}px)`;
};

const onNextClick = (evt) => {
  evt.preventDefault();

  nextButton.removeEventListener('click', onNextClick);
  prevButton.removeEventListener('click', onPrevClick);

  const prevItem = resultList.querySelector('.result__item--current');
  const prevGalleryList = prevItem.querySelector('.result__gallery-list');
  const prevPaginationList = prevItem.querySelector('.result__pagination-list');
  const nextItem = prevItem.nextSibling ? prevItem.nextSibling : resultItems[0];
  const nextGalleryList = nextItem.querySelector('.result__gallery-list');
  const nextPaginationList = nextItem.querySelector('.result__pagination-list');
  currentGalleryItems = Array.from(nextGalleryList.childNodes);
  currentPaginationItems = Array.from(nextPaginationList.childNodes);

  fadeOut(prevItem)
    .then(() => {
      prevItem.classList.remove('result__item--current');
      nextItem.classList.add('result__item--current');
      return fadeIn(nextItem);
    })
    .then(() => {
      nextButton.addEventListener('click', onNextClick);
      prevButton.addEventListener('click', onPrevClick);
    });

  prevGalleryList.removeEventListener('click', onGalleryLinkClick);
  prevPaginationList.removeEventListener('click', onThumbnailClick);
  nextGalleryList.addEventListener('click', onGalleryLinkClick);
  nextPaginationList.addEventListener('click', onThumbnailClick);
};

const onPrevClick = (evt) => {
  evt.preventDefault();

  nextButton.removeEventListener('click', onNextClick);
  prevButton.removeEventListener('click', onPrevClick);

  const prevItem = resultList.querySelector('.result__item--current');
  const prevGalleryList = prevItem.querySelector('.result__gallery-list');
  const prevPaginationList = prevItem.querySelector('.result__pagination-list');
  const nextItem = prevItem.previousSibling ? prevItem.previousSibling : resultItems[resultItems.length - 1];
  const nextGalleryList = nextItem.querySelector('.result__gallery-list');
  const nextPaginationList = nextItem.querySelector('.result__pagination-list');
  currentGalleryItems = Array.from(nextGalleryList.childNodes);
  currentPaginationItems = Array.from(nextPaginationList.childNodes);

  fadeOut(prevItem)
    .then(() => {
      prevItem.classList.remove('result__item--current');
      nextItem.classList.add('result__item--current');
      return fadeIn(nextItem);
    })
    .then(() => {
      nextButton.addEventListener('click', onNextClick);
      prevButton.addEventListener('click', onPrevClick);
    });

  prevGalleryList.removeEventListener('click', onGalleryLinkClick);
  prevPaginationList.removeEventListener('click', onThumbnailClick);
  nextGalleryList.addEventListener('click', onGalleryLinkClick);
  nextPaginationList.addEventListener('click', onThumbnailClick);
};

result.classList.remove('result--no-js');
paintButtons(resultGalerries);
nextButton.addEventListener('click', onNextClick);
prevButton.addEventListener('click', onPrevClick);
currentGalleryList.addEventListener('click', onGalleryLinkClick);
currentPaginationList.addEventListener('click', onThumbnailClick);
