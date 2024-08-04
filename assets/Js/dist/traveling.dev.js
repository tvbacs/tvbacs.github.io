"use strict";

var header = document.querySelector('.js-header');
var headerTwo = document.querySelector('.js-header-two');
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.style.top = '-80px';
    headerTwo.style.top = '0';
  } else {
    header.style.top = '0';
    headerTwo.style.top = '-80px';
  }
});
var btncontentSs = document.querySelectorAll('.js-navbar-search');
var contentSearch = document.querySelector('.js-content'); // var opencontentS = document.querySelector('')

var cancelBtn = document.querySelector('.js-cancel');
btncontentSs.forEach(function (btncontentS) {
  btncontentS.addEventListener('click', function () {
    if (contentSearch.style.display == 'none') {
      contentSearch.style.display = 'block';
    } else {
      contentSearch.style.display = 'none';
    }

    contentSearch.addEventListener('click', function (event) {
      event.stopImmediatePropagation();
    });
  });
});
cancelBtn.addEventListener('click', function () {
  contentSearch.style.display = 'none';
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
}); // festival

var listFestival = document.querySelector('.js-list-festival');
var btnArrowLeftFestival = document.querySelector('.js-arrow-left-festival');
var btnArrowRightFestival = document.querySelector('.js-arrow-right-festival');
var dotFestivals = document.querySelectorAll('.js-dot-festival');

btnArrowLeftFestival.onclick = function () {
  listFestival.scrollLeft -= listFestival.clientWidth;
  dotFestivals[0].classList.add('active');
  dotFestivals[1].classList.remove('active');
};

btnArrowRightFestival.onclick = function () {
  listFestival.scrollLeft += listFestival.clientWidth;
  dotFestivals[1].classList.add('active');
  dotFestivals[0].classList.remove('active');
}; // tickets


var listTickets = document.querySelectorAll('.js-list-tickets');
var btnArrowLeftTickets = document.querySelector('.js-arrow-left-tickets');
var btnArrowRightTickets = document.querySelector('.js-arrow-right-tickets');
var btnShowListTickets = document.querySelectorAll('.body-tickets-category-item');
btnShowListTickets.forEach(function (btn, index) {
  btn.onclick = function () {
    listTickets.forEach(function (listTicket) {
      listTicket.style.display = "none";
    });
    btnShowListTickets.forEach(function (btn) {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
    listTickets[index].style.display = "flex";
  };
});

btnArrowLeftTickets.onclick = function () {
  listTickets.forEach(function (listTicket) {
    listTicket.scrollLeft -= listTicket.clientWidth;
  });
};

btnArrowRightTickets.onclick = function () {
  listTickets.forEach(function (listTicket) {
    listTicket.scrollLeft += listTicket.clientWidth;
  });
}; // discount
// tickets


var listDiscounts = document.querySelectorAll('.js-list-discounts');
var btnArrowLeftDiscounts = document.querySelector('.js-arrow-left-discounts');
var btnArrowRightDiscounts = document.querySelector('.js-arrow-right-discounts');
var btnShowListDiscounts = document.querySelectorAll('.body-discounts-category-item');
btnShowListDiscounts.forEach(function (btn, index) {
  btn.onclick = function () {
    listDiscounts.forEach(function (listDiscount) {
      listDiscount.style.display = "none";
    });
    btnShowListDiscounts.forEach(function (btn) {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
    listDiscounts[index].style.display = "flex";
  };
});

btnArrowLeftDiscounts.onclick = function () {
  listDiscounts.forEach(function (listDiscount) {
    listDiscount.scrollLeft -= listDiscount.clientWidth;
  });
};

btnArrowRightDiscounts.onclick = function () {
  listDiscounts.forEach(function (listDiscount) {
    listDiscount.scrollLeft += listDiscount.clientWidth;
  });
};
//# sourceMappingURL=traveling.dev.js.map
