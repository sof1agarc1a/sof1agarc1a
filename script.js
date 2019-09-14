'use strict';

let portfolioSection = document.querySelector("#portfolio");
let aboutMeSection = document.querySelector("#about-me");
let contactSection = document.querySelector("#contact");

let portfolioLink = document.querySelector(".portfolioLink");
let aboutMeLink = document.querySelector(".aboutMeLink");
let contactLink = document.querySelector(".contactLink");

window.addEventListener('scroll', () => {
  // decide from where to detect new section
  let windowCount = window.innerHeight / 1.5;

  // portfolio section height
  let portfolioHeight = portfolioSection.getBoundingClientRect().height;
  // about me section height
  let aboutMeHeight = aboutMeSection.getBoundingClientRect().height;
  // contact height
  let contactHeight = contactSection.getBoundingClientRect().height;

  // count if the section is on the screen with the page Y offset & add/remove class
  if(portfolioHeight - windowCount > window.pageYOffset){
    portfolioLink.classList.add('active');
  } else {
    portfolioLink.classList.remove('active');
  }

  if(portfolioHeight - windowCount < window.pageYOffset && portfolioHeight + aboutMeHeight - windowCount > window.pageYOffset ){
    aboutMeLink.classList.add('active');
  } else {
    aboutMeLink.classList.remove('active');
  }

  if(portfolioHeight + aboutMeHeight - windowCount < window.pageYOffset){
    contactLink.classList.add('active');
  } else {
    contactLink.classList.remove('active');
  }
});


const heightOutput = document.querySelector('.hero');
const heroHeight = heightOutput.clientHeight;

heightOutput.style.height = heroHeight + "px";
