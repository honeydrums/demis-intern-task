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

var videoPopup = document.querySelector('.video');
document.querySelector('body').addEventListener('click', function (event) {
  if (event.target.className === 'video-preview__window') {
    videoPopup.classList.toggle('video');
    videoPopup.classList.toggle('video-active');
  } else if (event.target.className === 'video-active') {
    videoPopup.classList.toggle('video');
    videoPopup.classList.toggle('video-active');
    player.stopVideo();
  }
});