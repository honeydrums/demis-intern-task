"use strict";

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.

var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    width: '640',
    height: '360',
    videoId: 'tXkxR25D2TU'
  });
}

; // glide slider configurations

var config = {
  type: 'carousel',
  perView: 4
}; // creator's scripts

var mainPopup = document.querySelector('.popup-hidden');
var mainPopupVid = document.querySelector('.popup-active__video');
var mainPopupImgPrev = document.querySelector('.popup-active__image');
var mainPopupImg = document.querySelector('.popup-active__image img');
document.querySelector('body').addEventListener('click', function (event) {
  if (event.target.matches('.video-preview__window')) {
    mainPopup.classList.toggle('popup-hidden');
    mainPopup.classList.toggle('popup-active');
    mainPopupImgPrev.style.display = 'none';
    mainPopupVid.style.display = 'block';
    return;
  } else if (event.target.classList.contains('popup-active') || event.target.classList.contains('close-icon')) {
    mainPopup.classList.toggle('popup-hidden');
    mainPopup.classList.toggle('popup-active');
    mainPopupImgPrev.style.display = 'block';
    mainPopupVid.style.display = 'block';
    player.stopVideo();
    return;
  } else if (event.target.matches('.showcase-gallery__element img')) {
    mainPopup.classList.toggle('popup-hidden');
    mainPopup.classList.toggle('popup-active');
    mainPopupImgPrev.style.display = 'block';
    mainPopupVid.style.display = 'none';
    var imgSrc = event.target.getAttribute('src');
    mainPopupImg.src = imgSrc; // mainPopupImg.setAttribute('src', imgSrc);
    // console.log(event.target.getAttribute('src'));
    // alert('клик');

    return;
  }
});