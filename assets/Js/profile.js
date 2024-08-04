
document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
// thêm ảnh timeline
document.getElementById('inputPhotoTimeLine').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('PhotoTimeLines').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
// thêm ảnh insp
document.getElementById('js-get-img-inspi').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = document.getElementById('js-set-img-inspi');
            imgElement.src = e.target.result;
            imgElement.style.opacity = '1';
        }
        reader.readAsDataURL(file);
    }
});


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// change content
var contents = $$('.content');
var navbarItems = $$('.navbar-list-item');
 navbarItems.forEach(function(navbarItem, index) {
    navbarItem.onclick = function(){
        contents.forEach(function(content){
            content.style.display="none";
        })
        contents[index - 1].style.display="block";
         // Remove 'active' class from all navbar items
         navbarItems.forEach(function(item) {
            item.classList.remove('active');
        });

        // Add 'active' class to the clicked navbar item
        navbarItem.classList.add('active');
    }
 })
 // timelines
 var timelineItems = $$('.timelines-item');
 var overlayTimeLineItems = $$('.timelines-item-overlay');
 var closeTimeLineItems = $$('.timelines-item-close');
 
 timelineItems.forEach(function(timelineItem, index){
     timelineItem.onclick = function(){
         overlayTimeLineItems[index].style.display = "flex";
     }
 });
 closeTimeLineItems.forEach(function(closeTimeLineItem,index){
    closeTimeLineItem.onclick = function(event){
        event.stopPropagation();
         overlayTimeLineItems[index].style.display = "none";
     }
 });

// cuộn list timeline
var listTimeLines = $$('.js-list-item-timelines');
var btnArrowLeftTimeLine = $('.js-arrow-timeline-left');
var btnArrowRightTimeLine = $('.js-arrow-timeline-right');

function toggleActiveClass(activeButton, inactiveButton) {
    activeButton.classList.add('active');
    inactiveButton.classList.remove('active');
}

btnArrowLeftTimeLine.onclick = function(){
    listTimeLines.forEach(function(listTimeLine){
        listTimeLine.scrollLeft -= listTimeLine.clientWidth;
    });
    toggleActiveClass(btnArrowLeftTimeLine, btnArrowRightTimeLine);
}

btnArrowRightTimeLine.onclick = function(){
    listTimeLines.forEach(function(listTimeLine){
        listTimeLine.scrollLeft += listTimeLine.clientWidth;
    });
    toggleActiveClass(btnArrowRightTimeLine, btnArrowLeftTimeLine);
}
// overlayTimeline
var overlayTimeline = $('.overlay-timelines');
var btnShowOverlayTimeLines = $('.js-show-overlay-timelines');
var btnHiddenOverlayTimeLines = $('.js-close-new-dia');
btnShowOverlayTimeLines.onclick= function(){
    overlayTimeline.style.display="flex";
}
btnHiddenOverlayTimeLines.onclick= function(){
    overlayTimeline.style.display="none";
}
//// overlay inspi
var overlayInspi = $('.overlay-inspiration');
var btnShowOverlayInspi = $('.js-show-overlay-inspiration');
var btnHiddenOverlayInspi = $('.js-close-new-inspi');
btnShowOverlayInspi.onclick= function(){
    overlayInspi.style.display="flex";
}
btnHiddenOverlayInspi.onclick= function(){
    overlayInspi.style.display="none";
}
// inspi
var listImgInspi = $('.js-list-img-inspi');
var btnLeftImgInspi = $('.js-arrow-left-inspi');
var btnRightImgInspi = $('.js-arrow-right-inspi');
btnLeftImgInspi.onclick= function(){
    listImgInspi.scrollLeft -= listImgInspi.clientWidth;
}
btnRightImgInspi.onclick= function(){
    listImgInspi.scrollLeft += listImgInspi.clientWidth;
}
var buttonPostInspis = document.querySelectorAll('.content-inspiration-body-item-menu-post-button');
var buttonCreateInspi = $('.content-inspiration-body-item-menu-create');
buttonPostInspis.forEach(function(buttonPostInspi,index) {
    buttonPostInspi.addEventListener('click', function() {
        if (index ===2){
            buttonCreateInspi.style.display="flex";
        }
        else{
            buttonCreateInspi.style.display="none";
        }
        buttonPostInspis.forEach(function(btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});
// dark
// dark or line
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
    iconLights.forEach(function(iconLight){
        iconLight.style.display = 'none'; 
    }) 
    iconDarks.forEach(function(iconDark){
        iconDark.style.display = 'block';
        iconDark.style.left = '45%';
    })
    headerTwoo.style.backgroundColor = '#252423';
    logoTwo.style.backgroundImage = "url('../imgsAll/Logo/logowhite.png')";
    navbarTwoLinks.forEach(function(navbarTwoLink) {
        navbarTwoLink.style.color = 'white';
    });
    navbartwoSearch.style.color = 'white';
    navbartwomenu.style.color = 'white';
    changeColors.forEach(function(changeColor){
        changeColor.style.color="white";
    });
    changeBackgrounds.forEach(function(changeBackground){
        changeBackground.style.backgroundColor="#252423";
    });
}

function switchToLightMode() {
    iconLights.forEach(function(iconLight){
        iconLight.style.display = 'block';
        iconLight.style.left = '0%';
    }) 
    iconDarks.forEach(function(iconDark){
        iconDark.style.display = 'none';
    })
    headerTwoo.style.backgroundColor = '#FAF9F6';
    logoTwo.style.backgroundImage = "url('../imgsAll/Logo/logoprimary.png')";
    navbarTwoLinks.forEach(function(navbarTwoLink) {
        navbarTwoLink.style.color = '#776B5D';
    });
    navbartwoSearch.style.color = '#776B5D';
    navbartwomenu.style.color = '#776B5D';
    changeColors.forEach(function(changeColor){
        changeColor.style.color="#776B5D";
    });
    changeBackgrounds.forEach(function(changeBackground){
        changeBackground.style.backgroundColor="white";
    });
}

iconLights.forEach(function(iconLight){
    iconLight.addEventListener('click', switchToDarkMode);
});

iconDarks.forEach(function(iconDark){
    iconDark.addEventListener('click', switchToLightMode);
});
