// Fade In Animation
let element = document.getElementById('jumbo-tron');
let opacity = 0;
function fade() {
  if (opacity >= 1) {
    return;
  }
  opacity += 0.01;
  element.style.opacity = opacity;
  requestAnimationFrame(fade);
}
requestAnimationFrame(fade);

// Scroll Trigger
const scrollOffset = 100;
const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// New
const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 720) {
    nav.classList.add('navbar-scrolled');
  } else if (window.scrollY < 720) {
    nav.classList.remove('navbar-scrolled');
  }
});
