"use strict";var tag=document.createElement("script");tag.src="https://www.youtube.com/player_api";var player,firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubePlayerAPIReady(){player=new YT.Player("ytplayer",{width:"640",height:"360",videoId:"tXkxR25D2TU"})}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var config={type:"carousel",perView:4,breakpoints:{1200:{perView:3},860:{perView:2},680:{perView:1}}},mainPopup=document.querySelector(".popup-hidden"),mainPopupVid=document.querySelector(".popup-active__video"),mainPopupImgPrev=document.querySelector(".popup-active__image"),mainPopupImg=document.querySelector(".popup-active__image img");document.querySelector("body").addEventListener("click",function(e){if(e.target.matches(".video-preview__window"))return mainPopup.classList.toggle("popup-hidden"),mainPopup.classList.toggle("popup-active"),mainPopupImgPrev.style.display="none",void(mainPopupVid.style.display="block");if(e.target.matches(".showcase-gallery__element img")){mainPopup.classList.toggle("popup-hidden"),mainPopup.classList.toggle("popup-active"),mainPopupImgPrev.style.display="block",mainPopupVid.style.display="none";var t=e.target.getAttribute("src");mainPopupImg.src=t}else{if(e.target.classList.contains("popup-active")||e.target.classList.contains("close-icon"))return mainPopup.classList.toggle("popup-hidden"),mainPopup.classList.toggle("popup-active"),mainPopupImgPrev.style.display="block",mainPopupVid.style.display="block",void player.stopVideo();var i,a;(e.target.classList.contains("hamburger")||e.target.classList.contains("hamburger-box")||e.target.classList.contains("hamburger-inner"))&&(i=document.querySelector(".hamburger"),a=document.querySelector(".main-header-nav"),i.classList.toggle("hamburger--spin-r"),i.classList.toggle("is-active"),a.classList.toggle("open-menu"))}});