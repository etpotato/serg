import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const START_OFFSET = 4150;
const OFFSET_POINTS = [2400, 1200, 600]

const about = document.querySelector('.about');
const aboutWrappers = Array.from(about.querySelectorAll('.about__wrapper'));
const svg = document.querySelector('.page__svg');
const path = svg.querySelector('.page__svg-path');
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = START_OFFSET;
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: about,
    start: 'top+=200px bottom',
    end: 'bottom-=400px center',
    scrub: 1,
    once: true,
    markers: true,
    snap: {
      snapTo: 'labelsDirectional',
      duration: {min: 0.1, max: 0.5},
      delay: 0.1,
      ease: 'power1.out',
      inertia: false,
    },
  },
});

tl
.fromTo(aboutWrappers[0], { autoAlpha: 0} , {autoAlpha: 1, duration: 1, ease: 'power3.out'}, 0.5)
  .to(path, {
    strokeDashoffset: OFFSET_POINTS[0],
    duration: 1, ease: 'power3.inOut' }, 0.5)
  .addLabel('slide1', 1.5)
  .fromTo(aboutWrappers[1], { autoAlpha: 0} , {autoAlpha: 1, duration: 1, ease: 'power3.out' }, 'slide1')
  .to(path, {
    strokeDashoffset: OFFSET_POINTS[1],
    duration: 1, ease: 'power3.inOut' }, 'slide1')
  .addLabel('slide2', 2.5)
  .to(path, {
    strokeDashoffset: OFFSET_POINTS[2],
    duration: 1, ease: 'power3.inOut' }, 'slide2')
  .fromTo(aboutWrappers[2], { autoAlpha: 0} , {autoAlpha: 1, duration: 1, ease: 'power3.out'}, 'slide2')
  .addLabel('slide3', 3.5)
  .to(path, {
    strokeDashoffset: 0,
    duration: 0.5, ease: 'power3.inOut' }, 'slide3')
  .addLabel('end', 4);




