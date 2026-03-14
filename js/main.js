'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const items = document.querySelectorAll('.item img');
  const list = document.querySelector('.list-close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  })

   list.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  })

$(function(){
  $('.slick-area').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    autoplay: true,

    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
          centerPadding:"50px"
        }
      }
    ]
  });
});

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

items.forEach(item=>{
  observer.observe(item);
});

});