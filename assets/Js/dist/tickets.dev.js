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
}

iconLights.forEach(function (iconLight) {
  iconLight.addEventListener('click', switchToDarkMode);
});
iconDarks.forEach(function (iconDark) {
  iconDark.addEventListener('click', switchToLightMode);
}); // hiện list trong menu

var btnShowList = document.querySelector('.js-show-list-navbar');
var listNavbar = document.querySelector('.js-show-navbar');
btnShowList.addEventListener('click', function () {
  if (listNavbar.style.display == 'none') {
    listNavbar.style.display = 'flex';
  } else {
    listNavbar.style.display = 'none';
  }
}); // tickets

var btnViews = document.querySelectorAll('.js-btn-view');
var contentTicketOnes = document.querySelectorAll('.js-content--one');
var contentTicketTwos = document.querySelectorAll('.js-content--two');
btnViews.forEach(function (btnView, index) {
  btnView.onclick = function () {
    contentTicketOnes[index].style.display = 'none';
    contentTicketTwos[index].style.display = 'block';
  };
}); // list ticket

var arrowLeftTicket = document.querySelector('.js-arrow-left');
var arrowRightTicket = document.querySelector('.js-arrow-right');
var listTickets = document.querySelectorAll('.js-list-tickets');

arrowLeftTicket.onclick = function () {
  listTickets.forEach(function (listTicket) {
    listTicket.scrollLeft -= listTicket.clientWidth;
  });
};

arrowRightTicket.onclick = function () {
  listTickets.forEach(function (listTicket) {
    listTicket.scrollLeft += listTicket.clientWidth;
  });
}; // changes country list tickets


var btnListTickets = document.querySelectorAll('.js-btn-primary');
btnListTickets.forEach(function (btnListTicket, index) {
  btnListTicket.onclick = function () {
    var listTickets = document.querySelectorAll('.js-list-tickets');
    listTickets.forEach(function (btnListTicket) {
      btnListTicket.style.display = 'none';
    });
    btnListTickets.forEach(function (btnListTicket) {
      btnListTicket.style.color = '#776B5D';
      btnListTicket.style.backgroundColor = '#EBE3D5';
    });
    listTickets[index].style.display = 'flex';
    btnListTicket.style.backgroundColor = '#B0A695';
    btnListTicket.style.color = 'white';
  };
}); // changes cooking list tickets

var btnListCookings = document.querySelectorAll('.js-btn-primary-cooking');
btnListCookings.forEach(function (btnListCooking, index) {
  btnListCooking.onclick = function () {
    var listCookings = document.querySelectorAll('.js-list-cooking');
    listCookings.forEach(function (listCooking) {
      listCooking.style.display = 'none';
    });
    btnListCookings.forEach(function (btnListCooking) {
      btnListCooking.style.color = '#776B5D';
      btnListCooking.style.backgroundColor = '#EBE3D5';
    });
    listCookings[index].style.display = 'flex';
    btnListCooking.style.backgroundColor = '#B0A695';
    btnListCooking.style.color = 'white';
  };
}); // list ticket

var arrowLeftCooking = document.querySelector('.js-arrow-left-cooking');
var arrowRightCooking = document.querySelector('.js-arrow-right-cooking');
var listCookings = document.querySelectorAll('.js-list-cooking');

arrowLeftCooking.onclick = function () {
  listCookings.forEach(function (listCooking) {
    listCooking.scrollLeft -= listCooking.clientWidth;
  });
};

arrowRightCooking.onclick = function () {
  listCookings.forEach(function (listCooking) {
    listCooking.scrollLeft += listCooking.clientWidth;
  });
}; // list discout


var arrowLeftDiscount = document.querySelector('.js-arrow-left-discount');
var arrowRightDiscount = document.querySelector('.js-arrow-right-discount');
var listDiscount = document.querySelector('.js-list-discount');

arrowLeftDiscount.onclick = function () {
  listDiscount.scrollLeft -= listDiscount.clientWidth;
};

arrowRightDiscount.onclick = function () {
  listDiscount.scrollLeft += listDiscount.clientWidth;
}; // book


var btnBookNows = document.querySelectorAll('.js-book-now');
var overlayBook = document.querySelector('.js-overlay-book');
var btnCancelBook = document.querySelector('.js-cancel-book');
var modalBook = document.querySelector('.js-modal-book');
var btnbook = document.querySelector('.js-book');
btnBookNows.forEach(function (btnBookNow) {
  btnBookNow.onclick = function () {
    overlayBook.style.display = 'block';
  };
});

btnCancelBook.onclick = function () {
  overlayBook.style.display = 'none';
};

btnbook.onclick = function () {
  overlayBook.style.display = 'none';
};

overlayBook.onclick = function () {
  overlayBook.style.display = 'none';
};

modalBook.onclick = function (event) {
  event.stopPropagation();
};
//# sourceMappingURL=tickets.dev.js.map
