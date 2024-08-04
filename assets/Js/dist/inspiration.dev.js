"use strict";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var buttonHeartBors = $$('.js-inspi-heart-bor');
var buttonHeartSolids = $$('.js-inspi-heart-solid');
var numberLikes = $$('.js-inspi-like');
buttonHeartBors.forEach(function (btn, index) {
  btn.onclick = function (event) {
    event.stopPropagation();
    btn.style.display = 'none';
    buttonHeartSolids[index].style.display = 'block';
    numberLikes[index].style.display = 'block';
  };
});
buttonHeartSolids.forEach(function (btn, index) {
  btn.onclick = function (event) {
    event.stopPropagation();
    btn.style.display = 'none';
    buttonHeartBors[index].style.display = 'block';
    numberLikes[index].style.display = 'none';
  };
}); // Nút menu ở header

var closeMenu = document.querySelector('.js-btn-close-menu ');
var overLaymenu = document.querySelector('.js-overlay-menu');
var openMenus = document.querySelectorAll('.js-open-menu');
var modalMenu = document.querySelector('.js-modal-menu');
openMenus.forEach(function (openMenu) {
  openMenu.addEventListener('click', function () {
    if (overLaymenu.style.display === 'none' || overLaymenu.style.display === '') {
      overLaymenu.style.display = 'flex';
    }
  });
});
closeMenu.addEventListener('click', function () {
  overLaymenu.style.display = 'none';
});
overLaymenu.addEventListener('click', function () {
  overLaymenu.style.display = 'none';
});
modalMenu.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
}); // Nút cuộn lên đầu trang

var arrow = document.querySelector('.button-arrow');
window.addEventListener('scroll', function () {
  if (window.scrollY > 1000) {
    arrow.style.display = 'block';
  } else {
    arrow.style.display = 'none';
  }
});
document.querySelector('.button-arrow').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}); // dark or line

var iconLights = document.querySelectorAll('.js-icon-light');
var iconDarks = document.querySelectorAll('.js-icon-dark');
var headerTwoo = document.querySelector('.js-header-two');
var logoTwo = document.querySelector('.js-logo-two');
var navbarTwoLinks = document.querySelectorAll('.js-navbartwo-link');
var navbartwoSearch = document.querySelector('.js-navbar-two-search');
var navbartwomenu = document.querySelector('.js-navbartwo-menu');
var changeColors = document.querySelectorAll('.js-change-color');
var changeBackgrounds = document.querySelectorAll('.js-change-background');
var changeBackgroundPrs = document.querySelectorAll('.js-change-background-pr');

function switchToDarkMode() {
  iconLights.forEach(function (iconLight) {
    iconLight.style.display = 'none';
  });
  iconDarks.forEach(function (iconDark) {
    iconDark.style.display = 'block';
    iconDark.style.left = '55%';
  });
  headerTwoo.style.backgroundColor = '#252423';
  logoTwo.style.backgroundImage = "url('../imgsAll/Logo/logowhite.png')";
  navbarTwoLinks.forEach(function (navbarTwoLink) {
    navbarTwoLink.style.color = 'white';
  });
  navbartwoSearch.style.color = 'white';
  navbartwomenu.style.color = 'white';
  changeColors.forEach(function (changeColor) {
    changeColor.style.color = "white";
  });
  changeBackgrounds.forEach(function (changeBackground) {
    changeBackground.style.backgroundColor = "#252423";
  });
  changeBackgroundPrs.forEach(function (changeBackgroundPr) {
    changeBackgroundPr.style.backgroundColor = "#252423";
  });
}

function switchToLightMode() {
  iconLights.forEach(function (iconLight) {
    iconLight.style.display = 'block';
    iconLight.style.left = '1%';
  });
  iconDarks.forEach(function (iconDark) {
    iconDark.style.display = 'none';
  });
  headerTwoo.style.backgroundColor = '#FAF9F6';
  logoTwo.style.backgroundImage = "url('../imgsAll/Logo/logoprimary.png')";
  navbarTwoLinks.forEach(function (navbarTwoLink) {
    navbarTwoLink.style.color = '#776B5D';
  });
  navbartwoSearch.style.color = '#776B5D';
  navbartwomenu.style.color = '#776B5D';
  changeColors.forEach(function (changeColor) {
    changeColor.style.color = "#776B5D";
  });
  changeBackgrounds.forEach(function (changeBackground) {
    changeBackground.style.backgroundColor = "white";
  });
  changeBackgroundPrs.forEach(function (changeBackgroundPr) {
    changeBackgroundPr.style.backgroundColor = "#F3EEEA";
  });
}

iconLights.forEach(function (iconLight) {
  iconLight.addEventListener('click', switchToDarkMode);
});
iconDarks.forEach(function (iconDark) {
  iconDark.addEventListener('click', switchToLightMode);
}); // description

var btnMore = $('.js-btn-more-description');
var shapeDescription = $('.js-shape-description');
var description = $('.js-description');
var listComment = $('.js-list-comment');

btnMore.onclick = function () {
  shapeDescription.style.height = 'auto';
  description.style.display = 'block';
  listComment.style.height = '120px';
};

var btnHiddenItem = $('.js-btn-hidden-item');
var overlayItem = $('.overlay-item');
var itemInspiration = $$('.place-item');

btnHiddenItem.onclick = function () {
  overlayItem.style.display = 'none';
};

itemInspiration.forEach(function (btn, index) {
  btn.onclick = function () {
    overlayItem.style.display = "block";
  };
});
//# sourceMappingURL=inspiration.dev.js.map
