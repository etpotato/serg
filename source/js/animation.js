const FADE_STEP = 0.1;

const fadeOut = (el) => {
  return new Promise((resolve) => {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= FADE_STEP) <= 0) {
        return resolve();
      }
      requestAnimationFrame(fade);
    })();
  });
};

const fadeIn = (el) => {
  return new Promise((resolve) => {
    el.style.opacity = 0;
    (function fade () {
      let val = parseFloat(el.style.opacity);
      if ((val += FADE_STEP) >= 1 + FADE_STEP) {
        return resolve();
      }
      el.style.opacity = val;
      requestAnimationFrame(fade);
    })();
  });
};

export { fadeOut, fadeIn };
