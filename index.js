/* swiper */

var swiper = new Swiper('.swiper', {
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  allowTouchMove: true,
  loop: true,
});

/* tabs */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach(function (e) {
      e.addEventListener('click', function (e) {
          const tab = e.currentTarget.dataset.path;
          document.querySelectorAll('.work__content').forEach(function (e) {
              e.classList.remove('work__content__active')
              document.querySelector(`[data-target='${tab}']`).classList.add('work__content__active');
          });
      });

      e.addEventListener('click', function (e) {
          const tabDefault = e.currentTarget.dataset.default;
          document.querySelectorAll('.work__btn').forEach(function (e) {
              e.classList.remove('work__btn__default')
              document.querySelector(`[data-path='${tabDefault}']`).classList.add('work__btn__default');
          })
      })
  });
});

/* accordion */

$( function() {
  $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
  });
} );

/* burger */

const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});

/* search */

const searchBtn = document.querySelector('.search');
const searchClose = document.querySelector('.search-close');
const menuSearch = document.querySelector('.search-menu');
const searchInput = document.querySelector('.search__input');

searchBtn.addEventListener('click', () => {
  menuSearch.classList.add('search-active');
});

searchClose.addEventListener('click', () => {
  menuSearch.classList.remove('search-active');
});
