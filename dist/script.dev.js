"use strict";

var accordions = document.querySelectorAll('.accordion__container');

function handleClick() {
  var isActive = this.classList.contains('active');
  accordions.forEach(function (acc) {
    return acc.classList.remove('active');
  });
  document.querySelectorAll('.box').forEach(function (box) {
    return box.classList.remove('show');
  });

  if (!isActive) {
    this.classList.add('active');
    this.nextElementSibling.classList.add('show');
  }
}

accordions.forEach(function (accordion) {
  accordion.addEventListener('click', handleClick);
});