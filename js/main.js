'use strict';
// body要素のスクロール量を取得、0が返ってくる
const windowTop = document.body.scrollTop;
// #page-topを取得し、変数に代入
const pageTop   = document.getElementById('page-top');
// pageTopをクリックした時の動作
pageTop.addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({
    top: windowTop,
    behavior: 'smooth'
  });
});