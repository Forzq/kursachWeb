import Swiper from "swiper/bundle";

const certificatesSwiper = new Swiper(".certificates__swiper", {
  navigation: {
    nextEl: ".certificates__swiper-button-next",
    prevEl: ".certificates__swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },
  slidesPerView: 3,
  breakpoints: {
    0: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
    575.98: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    991.98: {
      spaceBetween: 33,
    },
  },
});

export default certificatesSwiper;
