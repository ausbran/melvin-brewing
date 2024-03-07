// TABLE OF CONTENTS FOR MAIN.JS
// SEARCH FOR FILE NAMES BELOW TO SEE CORRESPONDING SCRIPTS
// 0. universal
// 1. navigation.twig 
// 2. home.twig 
// 3. entrySlider.twig
// 4. cardSlider.twig

// universal 
// serve transparent can videos based on browser.
function supportsHEVCAlpha() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase()
  const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
  const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))
  return isSafari && hasMediaCapabilities
}

// navigation.twig
document.addEventListener('DOMContentLoaded', function() {
var links = document.querySelectorAll('.link');
var secondaryContainer = document.querySelector('.secondary-container');
var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('nav');
var primaryLinks = document.querySelector('.primary-links');

// Function to open the menu for a specific link
function openMenu(link) {
  links.forEach(function (otherLink) {
    var otherSecondaryLinks = otherLink.querySelector('.secondary-links');
    if (otherSecondaryLinks) {
      otherSecondaryLinks.classList.remove('visible');
    }
  });

  var secondaryLinks = link.querySelector('.secondary-links');
  if (secondaryLinks) {
    secondaryLinks.classList.add('visible');
    secondaryContainer.classList.add('visible');
  }
}

// Function to close the menu
function closeMenu() {
  links.forEach(function (link) {
    var secondaryLinks = link.querySelector('.secondary-links');
    if (secondaryLinks) {
      secondaryLinks.classList.remove('visible');
    }
  });
  secondaryContainer.classList.remove('visible');
}

// Event listener for link clicks
links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    openMenu(link);
  });
});

// Event listener for hamburger click
hamburger.addEventListener('click', function() {
  nav.classList.toggle('menu-opened');
  primaryLinks.classList.toggle('menu-opened');
});

// Event listener for scroll to close
window.onscroll = function (event) {
  closeMenu();
};

document.body.addEventListener('click', function(event) {
    if (event.target.closest('.close')) {
        closeMenu();
    }
});

function handleScroll() {
  var scrolledClass = 'scrolled';
  if (window.scrollY > 100) {
    nav.classList.add(scrolledClass);
  } else {
    nav.classList.remove(scrolledClass);
  }

  // Request the next animation frame
  requestAnimationFrame(handleScroll);
}

// Initial call to start RAF loop
handleScroll();

});



document.addEventListener('DOMContentLoaded', function () {
  function adjustFontSize() {
    var wordContainer = document.querySelector('.title');
    if (wordContainer) {
      var word = wordContainer.textContent.trim();
      var viewportWidth = window.innerWidth;
      var desiredWidth = 0.75 * viewportWidth;

      var fontSize = (desiredWidth / word.length) * 1.5;

      wordContainer.style.fontSize = fontSize + 'px';
    }
  }

  adjustFontSize();
  window.addEventListener('resize', adjustFontSize);
});


// entrySlider.twig 


// cardSlider.twig
// univeral slider with arrow functionality
var instances = document.querySelectorAll(".slider");

instances.forEach(function (instance) {
  var arrows = instance.querySelectorAll(".arrow"),
      prevArrow = instance.querySelector('.arrow-prev'),
      nextArrow = instance.querySelector('.arrow-next'),
      box = instance.querySelector(".slider-inner"),
      x = 0,
      mx = 0,
      maxScrollWidth = box.scrollWidth - (box.clientWidth / 2) - (box.offsetWidth / 2);

  arrows.forEach(function (arrow) {
      arrow.addEventListener('click', function () {
          if (this.classList.contains("arrow-next")) {
              x = ((box.offsetWidth / 1.5)) + box.scrollLeft - 10;
              box.scrollTo({
                  left: x,
                  behavior: 'smooth'
              });
              console.log('next')
          } else {
              x = ((box.offsetWidth / 1.5)) - box.scrollLeft - 10;
              box.scrollTo({
                  left: -x,
                  behavior: 'smooth'
              });
              console.log('prev')
          }
      });
  });

  box.addEventListener('mousemove', function (e) {
      var mx2 = e.pageX - this.offsetLeft;
      if (mx) this.scrollLeft = this.sx + mx - mx2;
  });

  box.addEventListener('mousedown', function (e) {
      this.sx = this.scrollLeft;
      mx = e.pageX - this.offsetLeft;
  });

  box.addEventListener('scroll', function () {
      toggleArrows();
  });

  document.addEventListener("mouseup", function () {
      mx = 0;
  });

  function toggleArrows() {
      if (box.scrollLeft > maxScrollWidth - 10) {
          // disable next button when right end has reached 
          nextArrow.classList.add('disabled');
      } else if (box.scrollLeft < 10) {
          // disable prev button when left end has reached 
          prevArrow.classList.add('disabled');
      } else {
          // both are enabled
          nextArrow.classList.remove('disabled');
          prevArrow.classList.remove('disabled');
      }
  }
});