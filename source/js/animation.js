const FADE_STEP = 0.1;

const fadeOut = (el, afterFade) => {
  return new Promise((resolve) => {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= FADE_STEP) <= 0) {
        return resolve();
      }
      requestAnimationFrame(fade);
    })();
  }).then(afterFade);
};

const fadeIn = (el) => {
  el.style.opacity = 0;
  (function fade () {
    let val = parseFloat(el.style.opacity);
    if ((val += FADE_STEP) > 1) {
      return;
    }
    el.style.opacity = val;
    requestAnimationFrame(fade);
  })();
};

export { fadeOut, fadeIn };
