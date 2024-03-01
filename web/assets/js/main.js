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
var links = document.querySelectorAll('.link');
var secondaryContainer = document.querySelector('.secondary-container');

links.forEach(function (link) {
  link.addEventListener('click', function (event) {
      links.forEach(function (otherLink) {
          if (otherLink !== link) {
              var otherSecondaryLinks = otherLink.querySelector('.secondary-links');
              if (otherSecondaryLinks) {
                  otherSecondaryLinks.classList.remove('visible');
              }
          }
      });

      var secondaryLinks = link.querySelector('.secondary-links');
      if (secondaryLinks) {
          secondaryLinks.classList.toggle('visible');

          // Toggle visibility of secondary-container if at least one secondary-link is visible
          if (secondaryContainer) {
              var isVisible = Array.from(links).some(function (otherLink) {
                  var otherSecondaryLinks = otherLink.querySelector('.secondary-links');
                  return otherSecondaryLinks && otherSecondaryLinks.classList.contains('visible');
              });

              secondaryContainer.classList.toggle('visible', isVisible);
          }
      }
  });
});

function onMainScroll() {
  links.forEach(function (link) {
      var secondaryLinks = link.querySelector('.secondary-links');
      if (secondaryLinks) {
          secondaryLinks.classList.remove('visible');
      }
  });
  if (secondaryContainer) {
      secondaryContainer.classList.remove('visible');
  }
}

let raf;
window.onscroll = function (event) {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(onMainScroll);
};

// call for cases when page loads mid-scroll:
onMainScroll();


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