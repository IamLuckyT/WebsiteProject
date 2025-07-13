new Swiper('.swiper', {
  loop: true,

  // Pagination Bullets
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// JavaScript used for toggle menu
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight == "200px"
        }
        else {
                MenuItems.style.maxHeight = "0px"
             }
}