///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

let btnScrollTo = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(){
  let s1coord = section1.getBoundingClientRect();
  console.log(s1coord);

  //old medthod to smooth scroll

  // window.scrollTo({ left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageXOffset,
  //   behavior: 'smooth',
  // });
 // window.scrollTo(s1coord.left, s1coord.right)

 // new method to medthod to smooth scroll in single line.

  section1.scrollIntoView({behavior: 'smooth'});
});

// link scroll 

document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click', function(e){
    e.preventDefault()
    let id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  });
});

let tabs = document.querySelectorAll('.operations__tab');
let tabsContainer = document.querySelector('.operations__tab-container');
let tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  let clicked = e.target.closest('.operations__tab');


//guard clause

if(!clicked) return

//remove active class

tabs.forEach(t => t.classList.remove('operations__tab--active'));
tabsContent.forEach(c => c.classList.remove('operations__content--active'));

// activate tab 

clicked.classList.add('operations__tab--active');

// activate content area 

document.querySelector(`.operations__content--${clicked.dataset.tab}`)
.classList.add('operations__content--active');

});

// reveal section

let allSection = document.querySelectorAll('.section');

let revealSection = function(entries, observer){
  let [entry] = entries;
  console.log(entries);

  if(!entry.isIntersecting) return 
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

let sectionObserver = new IntersectionObserver(revealSection ,{
  root : null,
  threshold: 0.15,
});

allSection.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading 

let imgTargets = document.querySelectorAll('img[data-src]');

let loadImg = function(entries, observer){
  let [entry] = entries;

  if(!entry.isIntersecting) return; 

  // replace src with data-src 

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });
}

  let imgObserver = new IntersectionObserver(loadImg ,{
    root : null,
    threshold: .5,
    
  });

  imgTargets.forEach(img => imgObserver.observe(img));


