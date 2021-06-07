import gsap from 'gsap';

const START_OFFSET = 4150;
const OFFSET_POINTS = [2800, 1700, 1000];
const SCROLL_SHIFT = 100;
const TABLET_WIDTH = '(min-width: 900px)';

const about = document.querySelector('.about');
const aboutWrappers = Array.from(about.querySelectorAll('.about__wrapper'));
const svg = document.querySelector('.page__svg');
const path = svg.querySelector('.page__svg-path');
const pathLength = path.getTotalLength();

const mediaQuery = window.matchMedia(TABLET_WIDTH);

let viewportHeight = window.innerHeight;
let aboutStartPosition = about.getBoundingClientRect().bottom + window.pageYOffset - viewportHeight;
let currentScrollFraction = 0;

const onDocumentScroll = () => {
  let aboutScrollFraction = (window.pageYOffset + SCROLL_SHIFT) / aboutStartPosition;

  if (aboutScrollFraction < 0 || aboutScrollFraction < currentScrollFraction) {
    return;
  }

  currentScrollFraction = aboutScrollFraction;

  if (aboutScrollFraction > 1) {
    aboutScrollFraction = 1;
    document.removeEventListener('scroll', onDocumentScroll);
  }

  const currentDashoffset = START_OFFSET - (START_OFFSET * aboutScrollFraction);

  let i = 0;
  function showWrapperOnScroll () {
    if (currentDashoffset <= OFFSET_POINTS[i]) {
      // aboutWrappers[i].classList.add('about__wrapper--animate-visible');
      gsap.to(aboutWrappers[i], { opacity: 1, duration: 0.5, ease: 'power3.in' })
    }
    if (i >= OFFSET_POINTS.length - 1) {
      return;
    }
    i++;
    requestAnimationFrame(showWrapperOnScroll);
  }
  showWrapperOnScroll();

  gsap.to(path, { strokeDashoffset: currentDashoffset , duration: 1 });
  // path.style.strokeDashoffset = currentDashoffset;
};

const onWindowResize = () => {
  viewportHeight = window.innerHeight;
  aboutStartPosition = about.getBoundingClientRect().bottom + window.pageYOffset - viewportHeight;
  onDocumentScroll();
};

const onMediaMatches = () => {
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = START_OFFSET;
  path.getBoundingClientRect();
  aboutWrappers.forEach((wrapper) => wrapper.classList.add('about__wrapper--animate'));
  onDocumentScroll();

  document.addEventListener('scroll', onDocumentScroll);
  window.addEventListener('resize', onWindowResize);
};

const onMediaChange = (evt) => {
  if (evt.matches) {
    onMediaMatches();
    return;
  }
  aboutWrappers.forEach((wrapper) => wrapper.classList.remove(
    'about__wrapper--animate',
    // 'about__wrapper--animate-visible',
  ));
  document.removeEventListener('scroll', onDocumentScroll);
  window.removeEventListener('resize', onWindowResize);
};

if (mediaQuery.matches) {
  onMediaMatches();
}

mediaQuery.addEventListener('change', onMediaChange);
