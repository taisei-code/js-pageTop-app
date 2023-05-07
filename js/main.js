'use strict';

const windowTop = document.body.scrollTop;

const pageTop   = document.getElementById('page-top');

pageTop.addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({
    top: windowTop,
    behavior: 'smooth'
  });
});