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
}); // map

var btnShowMap = document.querySelector('.body_country-right-btn');
var btnShowLocation = document.querySelector('.body_country-left-overlay-list-btn');
var overlayLocation = document.querySelector('.body_country-left-overlay');
var Locations = document.querySelectorAll('.body_country-left-overlay-location');

btnShowMap.onclick = function () {
  overlayLocation.style.display = 'block';
};

btnShowLocation.onclick = function () {
  Locations.forEach(function (Location) {
    Location.style.display = 'block';
  });
}; // discover


var listDis = document.querySelector('.js-list-dis');
var leftDis = document.querySelector('.js-left-dis');
var rightDis = document.querySelector('.js-right-dis');

leftDis.onclick = function () {
  listDis.scrollLeft -= listDis.clientWidth;
};

rightDis.onclick = function () {
  listDis.scrollLeft += listDis.clientWidth;
}; // sapa


document.getElementById('vrButton').addEventListener('click', function () {
  var scene = document.querySelector('.scene');
  scene.enterVR();
});
var btnShowOverlaySp = document.querySelector('.js-btn-show-blur-sapa');
var btnHiddenOverlaySp = document.querySelector('.js-btn-hidden-blur-sapa');
var blurSapa = document.querySelector('.body-sapa-list-content-blur');
var btnTourSapa = document.querySelector('.body-sapa-list-content-button');
var hiddenBtns = document.querySelectorAll('.js-hidden-content-sapa');

btnShowOverlaySp.onclick = function () {
  blurSapa.style.display = "block";
  btnTourSapa.style.display = "block";
  hiddenBtns.forEach(function (hiddenBtn) {
    hiddenBtn.style.display = "none";
  });
  btnShowOverlaySp.style.backgroundColor = "white";
  btnHiddenOverlaySp.style.backgroundColor = "transparent";
  btnShowOverlaySp.style.color = "#65594B";
  btnHiddenOverlaySp.style.color = "white";
};

btnHiddenOverlaySp.onclick = function () {
  blurSapa.style.display = "none";
  btnTourSapa.style.display = "none";
  hiddenBtns.forEach(function (hiddenBtn) {
    hiddenBtn.style.display = "flex";
  });
  btnHiddenOverlaySp.style.backgroundColor = "white";
  btnShowOverlaySp.style.backgroundColor = "transparent";
  btnHiddenOverlaySp.style.color = "#65594B";
  btnShowOverlaySp.style.color = "white";
};

var imgsSapa = document.querySelectorAll(".img-place-sapa");
var linkVr = document.querySelector('.linkVr');
var imgSapaone = document.querySelector('.img-place-sapa-one');
var imgSapatwo = document.querySelector('.img-place-sapa-two');
var h2BluSapa = document.querySelector('.js-h2-blur-sapa');
var imgSapathree = document.querySelector('.img-place-sapa-three');
var listVrSapa = ["../html/htmlsVr/fansipang.html", "../html/htmlsVr/thactinhyeu.html", "../html/htmlsVr/catcat.html"];
var listVrMocchau = ["../html/htmlsVr/doichetraitim.html", "../html/htmlsVr/dinhpaphach.html", "../html/htmlsVr/thacgiaiyem.html"];
var namePlaceSapa = ['Thac Tinh Yeu', 'Ban cat cat', 'Fansipan'];
var namePlaceMocChau = ['Dinh Pa Phach', 'Thac Giai Yem', 'Doi che trai tim'];
var numberClick = 0;
var isMocChau = false;
imgsSapa.forEach(function (imgSapa) {
  imgSapa.onclick = function () {
    ++numberClick;

    if (isMocChau) {
      if (numberClick === 1) {
        imgSapaone.style.zIndex = 2;
        imgSapaone.style.transform = "rotate(-10deg)";
        imgSapatwo.style.zIndex = 3;
        imgSapatwo.style.transform = "rotate(0deg)";
        imgSapathree.style.zIndex = 1;
        imgSapathree.style.transform = "rotate(-20deg)";
        linkVr.href = listVrMocchau[1];
        h2BluSapa.innerText = namePlaceMocChau[0];
      } else if (numberClick === 2) {
        imgSapaone.style.zIndex = 1;
        imgSapaone.style.transform = "rotate(-20deg)";
        imgSapatwo.style.zIndex = 2;
        imgSapatwo.style.transform = "rotate(-10deg)";
        imgSapathree.style.zIndex = 3;
        imgSapathree.style.transform = "rotate(0deg)";
        linkVr.href = listVrMocchau[2];
        h2BluSapa.innerText = namePlaceMocChau[1];
      } else if (numberClick >= 3) {
        numberClick = 0;
        imgSapaone.style.zIndex = 3;
        imgSapaone.style.transform = "rotate(0deg)";
        imgSapatwo.style.zIndex = 2;
        imgSapatwo.style.transform = "rotate(-10deg)";
        imgSapathree.style.zIndex = 1;
        imgSapathree.style.transform = "rotate(-20deg)";
        linkVr.href = listVrMocchau[0];
        h2BluSapa.innerText = namePlaceMocChau[2];
      }
    } else {
      if (numberClick === 1) {
        imgSapaone.style.zIndex = 2;
        imgSapaone.style.transform = "rotate(-10deg)";
        imgSapatwo.style.zIndex = 3;
        imgSapatwo.style.transform = "rotate(0deg)";
        imgSapathree.style.zIndex = 1;
        imgSapathree.style.transform = "rotate(-20deg)";
        linkVr.href = listVrSapa[1];
        h2BluSapa.innerText = namePlaceSapa[0];
      } else if (numberClick === 2) {
        imgSapaone.style.zIndex = 1;
        imgSapaone.style.transform = "rotate(-20deg)";
        imgSapatwo.style.zIndex = 2;
        imgSapatwo.style.transform = "rotate(-10deg)";
        imgSapathree.style.zIndex = 3;
        imgSapathree.style.transform = "rotate(0deg)";
        linkVr.href = listVrSapa[2];
        h2BluSapa.innerText = namePlaceSapa[1];
      } else if (numberClick >= 3) {
        numberClick = 0;
        imgSapaone.style.zIndex = 3;
        imgSapaone.style.transform = "rotate(0deg)";
        imgSapatwo.style.zIndex = 2;
        imgSapatwo.style.transform = "rotate(-10deg)";
        imgSapathree.style.zIndex = 1;
        imgSapathree.style.transform = "rotate(-20deg)";
        linkVr.href = listVrSapa[0];
        h2BluSapa.innerText = namePlaceSapa[2];
      }
    }
  };
});
var btnChangeMocChau = document.querySelector('.js-change-mocchau');
var btnChangeSaPa = document.querySelector('.body-sapa-list-content-arrow-left');
var h11Sapa = document.querySelector('.h1-1-sapa');
var h21Sapa = document.querySelector('.h2-1-sapa');
var h12Sapa = document.querySelector('.h1-2-sapa');
var h22Sapa = document.querySelector('.h2-2-sapa');
var descriptionSapa = document.querySelector('.js-description');
var spanPlaceSapa = document.querySelector('.span-place-sapa');
var btnTourSapa = document.querySelector('.btn-tour-sapa');
var Asky = document.querySelector('.asky');
var h2BlurSapa = document.querySelector('.js-h2-blur-sapa');
var imgMochauone = document.querySelector('.img-place-mochau-one');
var imgMochautwo = document.querySelector('.img-place-mochau-two');
var imgMochauthree = document.querySelector('.img-place-mochau-three');
var originalValues = {
  AskySrc: Asky.getAttribute('src'),
  btnChangeSaPaDisplay: btnChangeSaPa.style.display,
  h11SapaText: h11Sapa.innerText,
  h21SapaText: h21Sapa.innerText,
  h12SapaText: h12Sapa.innerText,
  h22SapaText: h22Sapa.innerText,
  descriptionSapaText: descriptionSapa.innerText,
  spanPlaceSapaText: spanPlaceSapa.innerText,
  btnTourSapaText: btnTourSapa.innerText,
  h2BlurSapaText: h2BlurSapa.innerText,
  imgMochauoneSrc: imgMochauone.src,
  imgMochautwoSrc: imgMochautwo.src,
  imgMochauthreeSrc: imgMochauthree.src
};

btnChangeMocChau.onclick = function () {
  Asky.setAttribute('src', '../imgsAll/imgsVr/mochauvr.jpg');
  btnChangeSaPa.style.display = "block";
  h11Sapa.innerText = "MOC";
  h12Sapa.innerText = "MOC";
  h22Sapa.innerText = "CHAU";
  h21Sapa.innerText = "CHAU";
  descriptionSapa.innerText = "Moc Chau, nestled in the northwest region of Vietnam, is renowned for its serene landscapes and cool climate. This highland area is dotted with lush green tea plantations, rolling hills, and vibrant flower fields, offering a tranquil escape from bustling city life. Moc Chau is also home to diverse ethnic communities, adding cultural richness to its natural beauty.";
  spanPlaceSapa.innerText = "Top place in Moc Chau";
  btnTourSapa.innerText = "Book a tour in Moc Chau now!";
  h2BlurSapa.innerText = "Doi che trai tim";
  imgMochauone.src = "https://github.com/tvbacs/BaiTap_Java/blob/master/imgsAll/imgsVietJ/doichetraitim.png?raw=true";
  imgMochautwo.src = "https://github.com/tvbacs/BaiTap_Java/blob/master/imgsAll/imgsVietJ/dinhpaphach.jpg?raw=true";
  imgMochauthree.src = "https://github.com/tvbacs/BaiTap_Java/blob/master/imgsAll/imgsVietJ/thacgiaiyemm.png?raw=true";
  isMocChau = true;
};

btnChangeSaPa.onclick = function () {
  Asky.setAttribute('src', originalValues.AskySrc);
  btnChangeSaPa.style.display = originalValues.btnChangeSaPaDisplay;
  h11Sapa.innerText = originalValues.h11SapaText;
  h21Sapa.innerText = originalValues.h21SapaText;
  h12Sapa.innerText = originalValues.h12SapaText;
  h22Sapa.innerText = originalValues.h22SapaText;
  descriptionSapa.innerText = originalValues.descriptionSapaText;
  spanPlaceSapa.innerText = originalValues.spanPlaceSapaText;
  btnTourSapa.innerText = originalValues.btnTourSapaText;
  h2BlurSapa.innerText = originalValues.h2BlurSapaText;
  imgMochauone.src = originalValues.imgMochauoneSrc;
  imgMochautwo.src = originalValues.imgMochautwoSrc;
  imgMochauthree.src = originalValues.imgMochauthreeSrc;
  isMocChau = false;
}; // hanoi 


var btnPlay = document.querySelector('.js-btn-play');
var btnPause = document.querySelector('.js-btn-pause');
var audio = document.querySelector('.audio');
var progress = document.querySelector('.progress');
var imgSong = document.querySelector('.imgSong');
var btnPre = document.querySelector('.js-btn-pre');
var btnNext = document.querySelector('.js-btn-next');
var author = document.querySelector('.author');
var nameSong = document.querySelector('.nameSong');
var timeStart = document.querySelector('.timeStart');
var timeEnd = document.querySelector('.timeEnd');
var imgSongs = ["https://github.com/tvbacs/BaiTap_Java/blob/master/imgsAll/imgsVietJ/Hanoi%20in%20autumn%201.png?raw=true", "https://github.com/tvbacs/BaiTap_Java/blob/master/imgsAll/imgsVietJ/duanhauditron.jpg?raw=true"];
var audioSongs = ["../videos/y2mate.com - Cứ Chill Thôi  Chillies Official Music Video ft Suni Hạ Linh  Rhymastic.mp3", "../videos/đưa nhau đi trốn.mp3"];
var authorSongs = ["Sai đẹp chiêu", "Đen"];
var nameSongs = ["Có phải em là mùa thu hà nội", "Đưa nhau đi trốn"];
var indexSong = 0;

btnPlay.onclick = function () {
  btnPlay.style.display = 'none';
  btnPause.style.display = 'block';
  audio.play();
};

btnPause.onclick = function () {
  btnPause.style.display = 'none';
  btnPlay.style.display = 'block';
  audio.pause();
};

audio.ontimeupdate = function () {
  if (audio.duration) {
    var progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
    progress.value = progressPercent;
    timeStart.innerText = formatTime(audio.currentTime);
    timeEnd.innerText = formatTime(audio.duration);
  }
};

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var secondsRemaining = Math.floor(seconds % 60);
  return "".concat(minutes, ":").concat(secondsRemaining < 10 ? '0' : '').concat(secondsRemaining);
}

function updateSong() {
  audio.src = audioSongs[indexSong];
  imgSong.src = imgSongs[indexSong];
  author.innerText = authorSongs[indexSong];
  nameSong.innerText = nameSongs[indexSong];
  audio.load(); // Load the new audio source

  audio.onloadedmetadata = function () {
    timeEnd.innerText = formatTime(audio.duration);
  };
}

btnNext.onclick = function () {
  indexSong = (indexSong + 1) % imgSongs.length;
  updateSong();
};

btnPre.onclick = function () {
  indexSong = (indexSong - 1 + imgSongs.length) % imgSongs.length;
  updateSong();
};

updateSong(); // ha long

var btnSee = document.querySelector('.js-btn-see-halong');
var descriptionHl = document.querySelector('.body-halong-background-content-description');
var contentDescription = document.querySelector('.js-content-description');
var overLayHalong = document.querySelector('.body-halong-background-overlay');
var btnHiddenOverLayHaLong = document.querySelector('.js-hidden-overlayHalong');
var clickCount = 0;

btnSee.onclick = function () {
  clickCount++;
  contentDescription.innerText = "The first recognition was in 1994, when Ha Long Bay was acknowledged for its outstanding aesthetic value. UNESCO recognized the bay's exceptional natural beauty, characterized by its limestone islands and cave systems.";
  descriptionHl.style.width = 309 + "px";
  descriptionHl.style.height = 180 + "px";

  if (clickCount >= 2) {
    overLayHalong.style.display = 'block';
  }
};

btnHiddenOverLayHaLong.onclick = function () {
  overLayHalong.style.display = 'none';
};

var listAnimal = document.querySelector('.body-halong-background-overlay-list');
var btnAnimalArrowLeft = document.querySelector('.js-btn-halong-left');
var btnAnimalArrowRight = document.querySelector('.js-btn-halong-right');

btnAnimalArrowLeft.onclick = function () {
  listAnimal.scrollLeft -= listAnimal.clientWidth;
  btnAnimalArrowRight.classList.remove('active');
  btnAnimalArrowLeft.classList.add('active');
};

btnAnimalArrowRight.onclick = function () {
  listAnimal.scrollLeft += listAnimal.clientWidth;
  btnAnimalArrowLeft.classList.remove('active');
  btnAnimalArrowRight.classList.add('active');
};

function scrollListHalongLeft() {
  listAnimal.scrollLeft -= listAnimal.clientWidth;
  btnAnimalArrowRight.classList.remove('active');
  btnAnimalArrowLeft.classList.add('active');
  setTimeout(function () {
    scrollListHalongRight();
  }, 5000);
}

function scrollListHalongRight() {
  listAnimal.scrollLeft += listAnimal.clientWidth;
  btnAnimalArrowLeft.classList.remove('active');
  btnAnimalArrowRight.classList.add('active');
  setTimeout(function () {
    scrollListHalongLeft();
  }, 5000);
}

scrollListHalongRight(); // ninh binh

var btnShowOverLayNinhbinh = document.querySelector('.btn-showoverlay-ninhbinh');
var btnCloseOverLayNinhbinh = document.querySelector('.btn-close-ninhbinh');
var overlayNinhBinh = document.querySelector('.body-ninhbinh-overlay');
var btnContentNinhBinhs = document.querySelectorAll('.body-ninhbinh-overlay-item-list-btn');
var imgOverlayNinhBinh = document.querySelector('.item-img-ninhbinh');
var titlePlace = document.querySelector('.title-place');
var overlayItemImg = document.querySelector('.overlay-item-img');
var btnShowOverlayItem = document.querySelector('.btn-show-overlay-item');
var btnHiddenOverlayItem = document.querySelector('.btn-hidden-overlay-img');
var titleOverlayItem = document.querySelector('.title-overlay-item');
var headingOverlayItem = document.querySelector('.heading-overlay-item');
var headingTwoOverlayItem = document.querySelector('.heading-two-overlay-item');
var headingThreeOverlayItem = document.querySelector('.heading-three-overlay-item');
var contentOverlayItem = document.querySelector('.content-overlay-item');
var contentTwoOverlayItem = document.querySelector('.content-two-overlay-item');
var contentThreeOverlayItem = document.querySelector('.content-three-overlay-item');
var imgContentNinhBinhs = ["../imgsAll/imgsVietJ/imgninhbinh1.png", "../imgsAll/imgsVietJ/imgninhbinh2.png", "../imgsAll/imgsVietJ/imgninhbinh3.png", "../imgsAll/imgsVietJ/imgninhbinh4.png", "../imgsAll/imgsVietJ/imgninhbinh5.png"];
var titlePlaces = ["chua", "Hang Mua", "Bai Dinh Pagoda", "Thung Nham Bird Garden", "Hoa Lu Capital"];
btnContentNinhBinhs.forEach(function (btnContentNinhBinh, index) {
  btnContentNinhBinh.onclick = function () {
    btnContentNinhBinhs.forEach(function (btnContents) {
      btnContents.style.backgroundColor = "transparent";
    });
    changeImgOverlayNinhBinh(index);
    changeTitleOverlayNinhBinh(index);
    btnContentNinhBinh.style.backgroundColor = "white";
  };
});

function changeTitleOverlayNinhBinh(index) {
  switch (index) {
    case 0:
      titlePlace.innerText = "Trang An";
      titleOverlayItem.innerText = "Trang An";
      contentOverlayItem.innerText = "Trang An is a stunning natural reserve recognized for its scenic beauty and geological significance.";
      contentTwoOverlayItem.innerText = "Visitors can embark on boat tours through a network of caves and temples surrounded by towering limestone cliffs and emerald green waters.";
      contentThreeOverlayItem.innerText = "The area is also rich in archaeological sites, offering insights into the region’s ancient human activities.";
      break;

    case 1:
      titlePlace.innerText = "Hang Mua";
      titleOverlayItem.innerText = "Hang Mua";
      headingOverlayItem.innerText = "Spectacular Viewpoints:";
      headingTwoOverlayItem.innerText = "Scenic Landscape:";
      headingThreeOverlayItem.innerText = "";
      contentOverlayItem.innerText = "Hang Mua is known for its breathtaking viewpoints. Visitors can climb nearly 500 steps to reach the summit, where they are rewarded with panoramic views of the Tam Cốc valley and its surrounding rice fields and limestone mountains.";
      contentTwoOverlayItem.innerText = "The journey up the mountain is adorned with statues and carvings, making it a picturesque spot for photography and a must-visit for those seeking natural beauty. ";
      contentThreeOverlayItem.innerText = "";
      break;

    case 2:
      titlePlace.innerText = "Bai Dinh Pagoda";
      titleOverlayItem.innerText = "Bai Dinh Pagoda";
      headingOverlayItem.innerText = "Largest Temple Complex:";
      headingTwoOverlayItem.innerText = "Spiritual Experience:";
      headingThreeOverlayItem.innerText = "";
      contentOverlayItem.innerText = "Bai Dinh Pagoda is the largest Buddhist temple complex in Vietnam. It boasts magnificent architecture, including giant statues and a towering stupa. ";
      contentTwoOverlayItem.innerText = "The pagoda is an important spiritual destination, attracting pilgrims and tourists alike. It offers a serene environment for reflection and exploration of Vietnam’s Buddhist heritage. ";
      contentThreeOverlayItem.innerText = "";
      break;

    case 3:
      titlePlace.innerText = "Thung Nham Bird Garden";
      titleOverlayItem.innerText = "Thung Nham Bird Garden";
      headingOverlayItem.innerText = "Biodiverse Sanctuary:";
      headingTwoOverlayItem.innerText = "Natural Beauty: ";
      headingThreeOverlayItem.innerText = "";
      contentOverlayItem.innerText = "Thung Nham Bird Park is a haven for bird enthusiasts. It is home to numerous bird species, making it an ideal spot for bird watching and nature photography. ";
      contentTwoOverlayItem.innerText = "The park features lush vegetation, limestone mountains, and tranquil waters. Visitors can take boat tours to observe birds in their natural habitat and enjoy the serene landscape. ";
      contentThreeOverlayItem.innerText = "";
      break;

    case 4:
      titlePlace.innerText = "Hoa Lu Capital";
      titleOverlayItem.innerText = "Hoa Lu Capital";
      headingOverlayItem.innerText = "Historical Significance:";
      headingTwoOverlayItem.innerText = "Architectural Heritage: ";
      headingThreeOverlayItem.innerText = "";
      contentOverlayItem.innerText = "Hoa Lu was the ancient capital of Vietnam in the 10th and 11th centuries. It is a significant historical site that offers a glimpse into Vietnam’s early dynastic history. ";
      contentTwoOverlayItem.innerText = "The site includes well-preserved temples and pagodas dedicated to past emperors. The surrounding scenery of limestone mountains adds to the allure of this historical landmark. ";
      contentThreeOverlayItem.innerText = "";
      break;
  }
}

function changeImgOverlayNinhBinh(index) {
  imgOverlayNinhBinh.src = imgContentNinhBinhs[index];
}

btnShowOverlayItem.onclick = function () {
  overlayItemImg.style.display = 'block';
};

btnHiddenOverlayItem.onclick = function () {
  overlayItemImg.style.display = 'none';
};

btnShowOverLayNinhbinh.onclick = function () {
  overlayNinhBinh.style.display = 'block';
};

btnCloseOverLayNinhbinh.onclick = function () {
  overlayNinhBinh.style.display = 'none';
}; // quang binh


var btnItemQuangBinhs = document.querySelectorAll('.btn-item-quangbinh');
var imgItemQuangBinh = document.querySelector('.img-item-quangbinh');
var titleItemQuangBinh = document.querySelector('.title-item-quangbinh');
var contentItemQuangBinh = document.querySelector('.content-item-quangbinh');
var linkItemQuangBinh = document.querySelector('.link-item-quangbinh');
var listImgItemQuangBinh = ["../imgsAll/imgsVietJ/imgquangbinh1.png", "../imgsAll/imgsVietJ/imgquangbinh2.png", "../imgsAll/imgsVietJ/imgquangbinh3.png", "../imgsAll/imgsVietJ/imgquangbinh4.png"];
var linkItemQuangBinhs = ["", "../html/htmlsVr/thienduongisland.html", "", ""];
btnItemQuangBinhs.forEach(function (btnItemQuangBinh, index) {
  btnItemQuangBinh.onclick = function () {
    btnItemQuangBinhs.forEach(function (btnItemQuangBinh) {
      btnItemQuangBinh.style.backgroundColor = "transparent";
    });
    changeImgItemQuangBinh(index);
    changeContentItemQuangBinh(index);
    btnItemQuangBinh.style.backgroundColor = "#56514b";
  };
});

function changeImgItemQuangBinh(index) {
  imgItemQuangBinh.src = listImgItemQuangBinh[index];
}

function changeContentItemQuangBinh(index) {
  switch (index) {
    case 0:
      titleItemQuangBinh.innerText = "Phong Nha Ke Bang Caves.";
      contentItemQuangBinh.innerText = "Phong Nha-Ke Bang is a UNESCO World Heritage Site known for its stunning limestone karst landscapes and extensive cave systems. It is home to some of the world's largest and most magnificent caves, including the famous Son Doong Cave.";
      break;

    case 1:
      titleItemQuangBinh.innerText = "Thien Duong cave.";
      contentItemQuangBinh.innerText = "Known as one of the most beautiful and longest dry caves in Asia, featuring stunning stalactites and stalagmites.";
      break;

    case 2:
      titleItemQuangBinh.innerText = "En cave.";
      contentItemQuangBinh.innerText = "Hang En Cave in Quang Binh, Vietnam, is renowned for its massive chambers and stunning geological formations. It offers adventurous caving expeditions and scenic boat rides along its serene underground river, making it a must-visit for nature enthusiasts and adventure seekers alike.";
      break;

    case 3:
      titleItemQuangBinh.innerText = "Con cat Quang Phu";
      contentItemQuangBinh.innerText = "Con Cat is a beautiful island located in Quang Phu Commune, Quang Trach District, Quang Binh Province, Vietnam. It is known for its pristine sandy beaches, crystal-clear waters, and tranquil atmosphere, making it an ideal destination for relaxation and beach activities.";
      break;
  }
} // phu quoc


var imgOnePhuQuoc = document.querySelector('.img-phuquoc-right-one');
var imgTwoPhuQuoc = document.querySelector('.img-phuquoc-right-two');
var imgThreePhuQuoc = document.querySelector('.img-phuquoc-right-three');
var titleOverlayPq = document.querySelector('.title-overlay-phuquoc');
var contentOverlayPq = document.querySelector('.content-overlay-phuquoc');

imgOnePhuQuoc.onclick = function () {
  imgOnePhuQuoc.style.left = "0px";
  imgOnePhuQuoc.style.width = "350px";
  imgOnePhuQuoc.style.zIndex = "3";
  imgOnePhuQuoc.style.top = "0px";
  imgTwoPhuQuoc.style.left = "100px";
  imgTwoPhuQuoc.style.width = "300px";
  imgTwoPhuQuoc.style.zIndex = "2";
  imgTwoPhuQuoc.style.top = "50px";
  imgThreePhuQuoc.style.left = "200px";
  imgThreePhuQuoc.style.width = "250px";
  imgThreePhuQuoc.style.zIndex = "1";
  imgThreePhuQuoc.style.top = "100px";
  titleOverlayPq.innerText = "VIN WORLD";
  contentOverlayPq.innerText = "Vin World Phu Quoc is a vibrant entertainment complex featuring theme parks, luxury resorts, and cultural experiences, offering an unforgettable destination for travelers in Vietnam.";
};

imgTwoPhuQuoc.onclick = function () {
  imgOnePhuQuoc.style.left = "100px";
  imgOnePhuQuoc.style.width = "300px";
  imgOnePhuQuoc.style.zIndex = "2";
  imgOnePhuQuoc.style.top = "50px";
  imgTwoPhuQuoc.style.left = "0px";
  imgTwoPhuQuoc.style.width = "350px";
  imgTwoPhuQuoc.style.zIndex = "3";
  imgTwoPhuQuoc.style.top = "0px";
  imgThreePhuQuoc.style.left = "200px";
  imgThreePhuQuoc.style.width = "250px";
  imgThreePhuQuoc.style.zIndex = "1";
  imgThreePhuQuoc.style.top = "100px";
  titleOverlayPq.innerText = "Bai Sao";
  contentOverlayPq.innerText = "Bai Sao in Phu Quoc is a stunning beach known for its powdery white sand, clear turquoise waters, and tranquil ambiance, perfect for relaxation.";
};

imgThreePhuQuoc.onclick = function () {
  imgOnePhuQuoc.style.left = "200px";
  imgOnePhuQuoc.style.width = "250px";
  imgOnePhuQuoc.style.zIndex = "1";
  imgOnePhuQuoc.style.top = "100px";
  imgTwoPhuQuoc.style.left = "100px";
  imgTwoPhuQuoc.style.width = "300px";
  imgTwoPhuQuoc.style.zIndex = "2";
  imgTwoPhuQuoc.style.top = "50px";
  imgThreePhuQuoc.style.left = "0px";
  imgThreePhuQuoc.style.width = "350px";
  imgThreePhuQuoc.style.zIndex = "3";
  imgThreePhuQuoc.style.top = "0px";
  titleOverlayPq.innerText = "Grand World";
  contentOverlayPq.innerText = "Grand World Phu Quoc is a lively entertainment and shopping complex, featuring cultural shows, vibrant nightlife, and diverse dining options, offering a unique experience.";
};

var btnShowOverlayPhuQuoc = document.querySelector('.body-phuquoc-background-content-item-left-btn');
var btnHiddenOverlayPhuQuoc = document.querySelector('.body-phuquoc-background-overlay-close');
var overlayPhuQuoc = document.querySelector('.body-phuquoc-background-overlay');

btnShowOverlayPhuQuoc.onclick = function () {
  overlayPhuQuoc.style.display = 'flex';
};

btnHiddenOverlayPhuQuoc.onclick = function () {
  overlayPhuQuoc.style.display = 'none';
};

var listContentPhuQuocs = document.querySelectorAll('.body-phuquoc-background-overlay-content-list');
var btnChangeContentPhuQuocs = document.querySelectorAll('.body-phuquoc-background-overlay-heading-btn');
btnChangeContentPhuQuocs.forEach(function (btnChangeContentPhuQuoc, index) {
  btnChangeContentPhuQuoc.onclick = function () {
    listContentPhuQuocs.forEach(function (listContentPhuQuocs) {
      listContentPhuQuocs.style.display = 'none';
    });
    btnChangeContentPhuQuocs.forEach(function (btnChangeContentPhuQuoc) {
      btnChangeContentPhuQuoc.style.backgroundColor = "transparent";
    });
    listContentPhuQuocs[index].style.display = 'block';
    btnChangeContentPhuQuoc.style.backgroundColor = "white";
  };
});
//# sourceMappingURL=vietJ.dev.js.map
