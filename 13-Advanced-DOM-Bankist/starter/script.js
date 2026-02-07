'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//button scrolling

buttonScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  //view port  = size of window
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //scrolling - better - old school
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// below is bad practice
// tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //below is a guard clause -good way
  if (!clicked) return;
  //old way is 'if (clicked){}'
  //remove big (selected from all tabs)
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //add big (selected)
  clicked.classList.add('operations__tab--active');
  //remove active classes for content
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  //below adds data content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fade animation

//////////

/////Page Navigation

//add eventlistener to common parent element
//determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  //matching strategies
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passing an 'argument' into a handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//intersection Observer aPI BETTER than above for performance

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const observerOptions = {
//   //root is start point. so null is right at the top
//   root: null,
//   // threshold below is the percentage viewed (.1)
//   // array moves out and enters the view (0,.2)
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, observerOptions);

// observer.observe(section1);

const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //box of 90 pixels where it comes in size of navigation
  rootmargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading of images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '+200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  //dots

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class= "dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const slide = Number(e.target.dataset.slide);
      currentSlide = Number(e.target.dataset.slide);
      goToSlide(currentSlide);
      activateDot(currentSlide);
    }
  });

  let currentSlide = 0;
  const NumOfSlides = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  document.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowRight') nextSlide();
    if (e.code === 'ArrowLeft') previousSlide();
  });

  const nextSlide = function () {
    if (currentSlide === NumOfSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) {
      currentSlide = NumOfSlides - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  // next slide
  btnRight.addEventListener('click', nextSlide);

  btnLeft.addEventListener('click', previousSlide);
};

slider();

//0,100,200,300,

/////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector(`.header`);
// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// //above doesnt update if a element is deleted

// console.log(allButtons);
// //above is an HTML collections which shows all elements that are live

// console.log(document.getElementsByClassName('button'));
// //gets live data

// //creating and inserting elements
// //insertadjacentHTML

// const message = document.createElement('div');
// //not yet in DOM

// message.classList.add('cookie-message');
// //message.textContent = 'We use cookies';
// message.innerHTML =
//   'We use cookies.<button class="btn btn--close-cookie">Got it!</button>';

// //below message can only be in one place at the same time
// //so first it adds to beginning then adds to end
// //so can use to move an element
// // header.prepend(message);
// // header.append(message);

// //adds two messages with second being copy
// // header.prepend(message);
// // header.append(message.cloneNode(true));

// header.append(message);

// // also .before and .after (before and after Header)

// //delete elements

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //old method
// //message.parentElement.removeChild(message);

// //Styles
// message.style.backgroundColor = '#37383d';

// message.style.width = '120%';

// //below doesnt work as we havent set the height

// //as below is inline style it works
// console.log(message.style.width);

// //below works for not inline as well
// console.log(getComputedStyle(message).color);

// //below doesnt work as its a string
// // message.style.height = getComputedStyle(message).height + 40 + 'px';

// // message.style.height = getComputedStyle(message).height + 40 + 'px';

// console.log(getComputedStyle(message).height);

// console.log(
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'
// );

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //attributes
// //src
// //alt etc

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// //javascript automatically creates alt and src on property
// //has to be a standard property on image
// console.log(logo.className);

// console.log(logo.getAttribute('designer'));

// logo.alt = 'Beautiful minimalist logo';
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //data attributes
// //start with data

// console.log(logo.dataset.versionNumber);

// //Classes - add and remove to existing classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c', 'j');
// logo.classList.contains('c');

// // dont use
// logo.className = 'jonas';

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: great you are reading the heading');
// };

// h1.addEventListener('mouseenter', alertH1);

//below is oldschool
// this includes onclick
//most new use add eventlistener
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: great you are reading the heading');
// };

//add multiple eventlisteners to same event if used old school. second onmouseenter would override the first one.
//more importantly can remove an evemtlistener if not needed anymore

//remove eventlistner after 3 seconds
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColour = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColour();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   //stop propogation
//   //e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColour();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColour();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   false
//   //true
//   //sets to capture phase of event handling
// );

// const h1 = document.querySelector('h1');

// //going down
// console.log(h1.querySelectorAll('.highlight'));
// //below anything can be a node
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'white';

// //goingup
// console.log(h1.parentNode);
// //h1.parentElement.style.color = 'red';

// //below used for element delegation
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //sideways selecting siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

document.addEventListener('DOMContentLoaded', function (e) {
  //waits for HTML and javascript to be loaded.
  console.log('HTML parsed and DOM tree built', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// Use below if user is filling out a form and closes down browser

// window.addEventListener('beforeunload', function (e) {
//   // Cancel the event
//   e.preventDefault();

//   console.log(e);
//   e.returnValue = '';
// });
