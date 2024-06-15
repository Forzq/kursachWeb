import Swiper from "swiper/bundle";

const ourWorksSwiper = new Swiper(".our-works__swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".our-works__swiper-button-next",
    prevEl: ".our-works__swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  simulateTouch: false,
  spaceBetween: 30,
});

export default ourWorksSwiper;
