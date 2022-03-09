'use strict'

//text reveal
// const options4 = {
//     id: 'text-center'
//     , auto: false
//     , trigger: 'on-visible'
// };
// $('.box4').initReveal(options4);
//



$(function () {
    $(window).scroll(function (){
        if($(window).scrollTop() <= 40) {
            $('.navbar').removeClass('scroll_navbar')
        } else{
            $('.navbar').addClass('scroll_navbar')
        }
    })
})



//Get the button
let myButton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        myButton.style.display = 'block'
    }else {
        myButton.style.display = 'none'
    }
}

myButton.addEventListener('click', backToTop);
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//Reveal sections
const allSection = document.querySelectorAll('.text-center')

const revealSections = function (entries, observer) {
const [entry] = entries;
// console.log(entry);

entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)
}

const sectionObservers = new IntersectionObserver
(revealSections, {
    root: null,
    threshold: 0.15,
})
allSection.forEach(function (section){
    sectionObservers.observe(section);
    section.classList.add('section--hidden')
})


//main homepage photos scroll down by using Jquery
// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
//
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function(){
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
// });


//BMI calculating
//1.you find the way to hide Nan.
//2.You find the way to hid text and show later.

function bmi() {
    // e.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const textShow = document.getElementById('result');
    const formInputHeight = document.querySelector('.form-input-height');
    const formInputWeight = document.querySelector('.form-input-weight');


    const cal = weight / (height / 100 * height / 100);
    let con = parseFloat(cal.toFixed(2));
    if (isNaN(con)) {
        con = ' ';
    }
    if (con > 0) {
        textShow.style.opacity = 100;
    }
    if (con <= 18.5) {
        // textShow.style.opacity = 100;
        // document.getElementById('result').innerHTML = `Stay Healthy and fit`;
        document.getElementById('result').innerHTML = `* You are underweight. You BMI is ${con}. You should eat more healthy food and Juice.`;
    } else if (con >= 18 && con <= 24.9) {
        // textShow.style.opacity = 100;
        document.getElementById('result').innerHTML = `You are Healthy. You BMI is ${con}`;
    } else if (con >= 25.0 && con <= 29.9) {
        // textShow.style.opacity = 100;
        document.getElementById('result').innerHTML = `* You are Overweight. You BMI is ${con}. Will you consider to lose weight?`;
    } else if (con >= 30) {
        // textShow.style.opacity = 100;
        document.getElementById('result').innerHTML = `* You are Obese. You BMI is ${con}. Sorry, but it's true. You are fat`;
    } else {
        document.getElementById('result').innerHTML = `Please fill in number`;
    }
    // console.log(con);
    formInputHeight.value = formInputWeight.value = '';
}

bmi();

// slide
let move = 1;
const text = document.querySelector('.showcase-content');
const text1 = document.querySelector('.showcase-content1');
const text2 = document.querySelector('.showcase-content2');
const animeBox = document.querySelector('.transition');
const transformBox = document.querySelector('.trans-box');

setInterval(function () {
    document.getElementById('radio' + move).checked = true;
    move++
    transformBox.style.opacity = 0.6;
    text1.style.opacity = 100;
    text.style.opacity = 0;
    text2.style.opacity = 0;
    if (move > 3) {
        text1.style.opacity = 100;
        text2.style.opacity = 100;
        text1.style.opacity = 0;
        animeBox.style.opacity = 0;
        move = 1;
        text1.style.opacity = 0;
        text2.style.opacity = 100;
        text2.style.opacity = 0;
        text.style.opacity = 100;
    }
}, 1000)


// const nav = document.querySelector('.navbar')

const btnScrollDown = document.querySelector('.btn--scroll');
const section1 = document.querySelector('#work-a');
//
// const obsCallback = function (entries, observer) {
// entries.forEach(entry => {
//     console.log(entry);
// })
// }
//
// const obsOptions = {
//     root: null,
//     threshold: [0, 0.2],
// }
//
// const obeserver = new IntersectionObserver
// (obsCallback, obsOptions);
// obeserver.observe(section1)
//
// const header = document.querySelector('.header');
//
// const stickyNav = function (entries) {
//     const [entry] = entries[0];
//     console.log(entry)
//
//     if (!entry.isIntersecting) nav.classList.add('sticky');
//     else nav.classList.remove('sticky');
// }
//
// const headerObserver = new IntersectionObserver(
//     stickyNav, {
//         root:null,
//         threshold: 0
//     }
// );
// headerObserver.observe(header)
//
//
//



// const section2 = document.querySelector('.section-title')
//sticky  navigations

const initialCoors = section1.getBoundingClientRect();
// console.log(initialCoors);

window.addEventListener('scroll', function (e) {
    // console.log(window.scrollY);

    if (window.scrollY > initialCoors.top) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
})


//scroll smoothly on about


btnScrollDown.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    // console.log(e.target.getBoundingClientReact());
    // console.log('Current score X and Y', window.pageXOffset, pageYOffset);

    //scrolling
    //
    // window.scrollTo(s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset)

    // window.scrollTo({
    //     left: s1coords.left + window.pageYOffset,
    //     top: s1coords.top + window.pageXOffset,
    //     behavior: 'smooth',
    // })
    section1.scrollIntoView({behavior: 'smooth'})
});


//Page Navigations

document.querySelectorAll('.nav__link').forEach((el) => {
    el.addEventListener('click', function (e) {
        e.preventDefault()
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})

    })
})

//Page navigation using delegations
// 1. Add event listenner to common parent element
//2. determind what element origanated the event
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     e.preventDefault();
//
//     //matching stategy
//     if (e.target.classList.contains('nav__link')) {
//         const id = e.target.getAttribute('href');
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//     }
// })

//Passing Argument to event handler / fade in and out animation text //195
const navbar = document.querySelector('.navbar');

navbar.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('current')) {
        const link = e.target;
        const sibling = link.closest('.current').querySelectorAll('.current');
        const logo = link.closest('.current').querySelector('.text-logo');

        sibling.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;
        });
        logo.style.opacity = 1;
    }
})

navbar.addEventListener('mouseout', function (e) {

})



//..........................................................



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
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

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    console.log(
        'height/width viewport',
        document.documentElement.clientHeight,
        document.documentElement.clientWidth
    );

    // Scrolling
    // window.scrollTo(
    //   s1coords.left + window.pageXOffset,
    //   s1coords.top + window.pageYOffset
    // );

    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

///////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // Activate tab
    clicked.classList.add('operations__tab--active');

    // Activate content area
    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

///////////////////////////////////////
// Menu fade animation
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

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
// Reveal sections


// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Slider
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
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

    const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    // Next slide
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();

