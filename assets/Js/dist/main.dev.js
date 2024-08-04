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
});
var cuisineLists = document.querySelectorAll('.js-cuisine-list');
var arrowLefts = document.querySelectorAll('.js-arrow-left');
var arrowRights = document.querySelectorAll('.js-arrow-right');
arrowLefts.forEach(function (arrowLeft) {
  arrowLeft.addEventListener('click', function () {
    cuisineLists.forEach(function (cuisineList) {
      cuisineList.scrollLeft -= cuisineList.clientWidth;
    });
  });
});
arrowRights.forEach(function (arrowRight) {
  arrowRight.addEventListener('click', function () {
    cuisineLists.forEach(function (cuisineList) {
      cuisineList.scrollLeft += cuisineList.clientWidth;
    });
  });
});
var imgChoices = document.querySelectorAll('.js-choice-img');
var desChoice = document.querySelector('.js-choice-des');
imgChoices.forEach(function (item, index) {
  item.onclick = function () {
    //  showImage(index);
    changeContent(index);
  };
}); // function showImage(index) {
//   imgLeft.src = images[index];
// }

function changeContent(index) {
  switch (index) {
    case 0:
      desChoice.innerText = "Cheap airfare maximizes travel by saving money for longer stays and diverse experiences. It allows frequent trips, broadening cultural horizons affordably. Enjoy budget-friendly travel for multiple yearly adventures!";
      break;

    case 1:
      desChoice.innerText = "Exploring a new natural place for healing can be transformative. Nature's tranquility offers a perfect escape from daily stress, promoting reflection and rejuvenation. Activities like hiking or meditating boost physical health and spark creativity. These experiences create lasting memories and a deep appreciation for nature's beauty, enriching the mind, body, and spirit with peace and inspiration";
      break;

    case 2:
      desChoice.innerText = "JourneyLife offers maximum convenience for planning and experiencing travel. The user-friendly website allows for quick searches, bookings, and customized itineraries based on personal preferences. With a community of users sharing reviews and experiences, JourneyLife not only provides valuable information but also creates a network of travel enthusiasts, enriching your journey and making it easier.";
      break;
  }
} // dark or line


var iconLights = document.querySelectorAll('.js-icon-light');
var iconDarks = document.querySelectorAll('.js-icon-dark');
var body = document.querySelector('.js-body');
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
    iconDark.style.left = '50%';
  });
  body.style.backgroundColor = '#252423';
  body.style.color = 'white';
  headerTwoo.style.backgroundColor = '#252423';
  logoTwo.style.backgroundImage = "url('assets/imgsAll/Logo/logowhite.png')";
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
  body.style.backgroundColor = '#FAF9F6';
  body.style.color = '#776B5D';
  headerTwoo.style.backgroundColor = '#FAF9F6';
  logoTwo.style.backgroundImage = "url('assets/imgsAll/Logo/logoprimary.png')";
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
}); //  // body-caming
//  document.addEventListener('DOMContentLoaded', () => {
//     const bodyCamping = document.querySelector('.js-body-camping');
//     var gridCamping = document.querySelector('.js-delete-w');
//     window.addEventListener('scroll', () => {
//         const elementPosition = bodyCamping.getBoundingClientRect();
//         if (elementPosition.top <=0) {
//             gridCamping.classList.remove('wide');
//         } else {
//             gridCamping.classList.add('wide');
//         }
//     });
// });
// opinion

var listOpinion = document.querySelector('.js-list-opinion');

function scrollRight() {
  listOpinion.scrollLeft += listOpinion.clientWidth;

  if (listOpinion.scrollLeft + listOpinion.clientWidth >= listOpinion.scrollWidth) {
    listOpinion.scrollLeft = 0;
  }
}

setInterval(scrollRight, 5000); // document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('loading').style.display = 'block';
// });
// window.addEventListener('load', function() {
//   document.getElementById('loading').style.display = 'none';
// });
// // inspi
// var listInspi = document.querySelector('.js-list-inspi')
// var btnLeftInspi = document.querySelector('.js-inspi-arrow-left');
// var btnRightInspi = document.querySelector('.js-inspi-arrow-right');
// btnLeftInspi.addEventListener('click', function(){
//     listInspi.scrollLeft -= listInspi.clientWidth;
// })
// btnRightInspi.addEventListener('click', function(){
//     listInspi.scrollLeft += listInspi.clientWidth;
// })
//   // Vô hiệu hóa chuột phải
//   document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });
// // Vô hiệu hóa chọn văn bản
// document.addEventListener('selectstart', function(e) {
//     e.preventDefault();
// });
// // Vô hiệu hóa kéo và thả
// document.addEventListener('dragstart', function(e) {
//     e.preventDefault();
// });
// body ticjket

var bodyticketsItemContent = document.querySelector('.body_tickets-list-item-content--two');
var bodyticketslistItems = document.querySelectorAll('.body_tickets-list-item'); // Thêm sự kiện mouseenter để xóa class "hover"

bodyticketslistItems.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    bodyticketsItemContent.classList.remove('content-hoved');
  });
  item.addEventListener('mouseleave', function () {
    bodyticketsItemContent.classList.add('content-hoved');
  });
});
//# sourceMappingURL=main.dev.js.map
