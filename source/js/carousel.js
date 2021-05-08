import { fadeOut, fadeIn } from './animation.js';
import { isEsc } from './util.js';

const THUMBNAIL_TRANSITIONS_COUNT = 2;

const result = document.querySelector('.result');
const resultList = result.querySelector('.result__list');
const resultItems = resultList.childNodes;
const prevButton = result.querySelector('.result__swipe--prev');
const nextButton = result.querySelector('.result__swipe--next');

let currentItem = resultList.querySelector('.result__item--current');
let currentGallery = currentItem.querySelector('.result__gallery');
let currentGalleryList = currentGallery.querySelector('.result__gallery-list');
let currentGalleryItems = Array.from(currentGalleryList.childNodes);
let currentGalleryItem = currentGalleryList.querySelector('.result__gallery-item--current');
let currentPaginationList = currentGallery.querySelector('.result__pagination-list');
let currentPaginationItems = Array.from(currentPaginationList.childNodes);
let currentPaginationItem = currentPaginationList.querySelector('.result__pagination-item--current');
let currentPaginationItemUnderline = currentPaginationItem.querySelector('.result__pagination-item-underline--current');

const rewriteCurrentItem = (nextItem) => {
  currentGallery = nextItem.querySelector('.result__gallery');
  currentGalleryList = currentGallery.querySelector('.result__gallery-list');
  currentGalleryItems = Array.from(currentGalleryList.childNodes);
  currentGalleryItem = currentGalleryList.querySelector('.result__gallery-item--current');
  currentPaginationList = currentGallery.querySelector('.result__pagination-list');
  currentPaginationItems = Array.from(currentPaginationList.childNodes);
  currentPaginationItem = currentPaginationList.querySelector('.result__pagination-item--current');
  currentPaginationItemUnderline = currentPaginationItem.querySelector('.result__pagination-item-underline--current');
};

const initializeGallery = (gallery) => {
  const galleryImages = Array.from(gallery.querySelectorAll('.result__gallery-image img'));
  const paginationButtons = Array.from(gallery.querySelectorAll('.result__pagination-button'));

  galleryImages[0].removeAttribute('loading');

  galleryImages.forEach((image, index) => {
    const backgroundSrc = image.srcset.slice(0, image.srcset.indexOf(' 200w'));
    paginationButtons[index].style.backgroundImage = `url("${backgroundSrc}")`;
  });

  currentGalleryList.addEventListener('click', onGalleryLinkClick);
  currentPaginationList.addEventListener('click', onThumbnailClick);
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
  if (isEsc(evt)) {
    closeGalleryPopup();
  }
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

  currentPaginationList.removeEventListener('click', onThumbnailClick);
  nextButton.removeEventListener('click', onNextClick);
  prevButton.removeEventListener('click', onPrevClick);

  const currentPaginationItemX = currentPaginationItem.getBoundingClientRect().x;
  const nextPaginationItem = evt.target.closest('.result__pagination-item');
  const nextPaginationItemUnderline = nextPaginationItem.querySelector('.result__pagination-item-underline');
  const nextPaginationItemX = nextPaginationItem.getBoundingClientRect().x;
  const nextItemIndex = currentPaginationItems.indexOf(nextPaginationItem);
  const nextGalleryItem = currentGalleryItems[nextItemIndex];
  currentPaginationItem.classList.remove('result__pagination-item--current');
  nextPaginationItem.classList.add('result__pagination-item--current');
  currentPaginationItem = nextPaginationItem;
  nextGalleryItem.querySelector('img').removeAttribute('loading');

  let transitionsDoneCount = 0;

  const activateThumbnails = () => {
    transitionsDoneCount += 1;
    if (transitionsDoneCount === THUMBNAIL_TRANSITIONS_COUNT) {
      currentPaginationList.addEventListener('click', onThumbnailClick);
      nextButton.addEventListener('click', onNextClick);
      prevButton.addEventListener('click', onPrevClick);
    }
  };

  fadeOut(currentGalleryItem)
    .then(() => {
      currentGalleryItem.classList.remove('result__gallery-item--current');
      nextGalleryItem.classList.add('result__gallery-item--current');
      currentGalleryItem = nextGalleryItem;
      return fadeIn(nextGalleryItem);
    })
    .then(() => {
      activateThumbnails();
    });

  currentPaginationItemUnderline.addEventListener('transitionend', () => {
    nextPaginationItemUnderline.classList.add('result__pagination-item-underline--current');
    currentPaginationItemUnderline.classList.remove('result__pagination-item-underline--current');
    currentPaginationItemUnderline.style.transform = 'none';
    currentPaginationItemUnderline = nextPaginationItemUnderline;
    activateThumbnails();
  }, {
    once: true,
  });

  currentPaginationItemUnderline.style.transform = `translateX(${nextPaginationItemX - currentPaginationItemX}px)`;
};

const onNextClick = (evt) => {
  evt.preventDefault();

  nextButton.removeEventListener('click', onNextClick);
  prevButton.removeEventListener('click', onPrevClick);

  const nextItem = currentItem.nextSibling ? currentItem.nextSibling : resultItems[0];

  fadeOut(currentItem)
    .then(() => {
      currentItem.classList.remove('result__item--current');
      nextItem.classList.add('result__item--current');
      currentItem = nextItem;
      return fadeIn(nextItem);
    })
    .then(() => {
      nextButton.addEventListener('click', onNextClick);
      prevButton.addEventListener('click', onPrevClick);
    });


  currentGalleryList.removeEventListener('click', onGalleryLinkClick);
  currentPaginationList.removeEventListener('click', onThumbnailClick);

  rewriteCurrentItem(nextItem);

  initializeGallery(currentGallery);
};

const onPrevClick = (evt) => {
  evt.preventDefault();

  nextButton.removeEventListener('click', onNextClick);
  prevButton.removeEventListener('click', onPrevClick);

  const nextItem = currentItem.previousSibling ? currentItem.previousSibling : resultItems[resultItems.length - 1];
  const nextGalleryList = nextItem.querySelector('.result__gallery-list');
  const nextPaginationList = nextItem.querySelector('.result__pagination-list');
  currentGallery = nextItem.querySelector('.result__gallery');
  currentGalleryItems = Array.from(nextGalleryList.childNodes);
  currentPaginationItems = Array.from(nextPaginationList.childNodes);


  fadeOut(currentItem)
    .then(() => {
      currentItem.classList.remove('result__item--current');
      nextItem.classList.add('result__item--current');
      currentItem = nextItem;
      return fadeIn(nextItem);
    })
    .then(() => {
      nextButton.addEventListener('click', onNextClick);
      prevButton.addEventListener('click', onPrevClick);
    });

  currentGalleryList.removeEventListener('click', onGalleryLinkClick);
  currentPaginationList.removeEventListener('click', onThumbnailClick);

  rewriteCurrentItem(nextItem);

  initializeGallery(currentGallery);
};

result.classList.remove('result--no-js');
initializeGallery(currentGallery);
nextButton.addEventListener('click', onNextClick);
prevButton.addEventListener('click', onPrevClick);
