let translate = 'en';
var themeButton = document.getElementById("themeButton");
  var body = document.body;
  var Accountmenu=document.getElementById("Account_name");
function toggleTheme() {
  localStorage.setItem('body-theme','light')
body.classList.toggle("dark");
if (body.classList.contains("dark")) {
    console.log('1');
  localStorage.setItem('body-theme','dark')
} else {
    console.log('0');
  localStorage.setItem('body-theme','light')
}

}
if (localStorage.getItem('body-theme') === 'dark')
    {
      body.classList.toggle("dark");
    }
    else{
      body.classList.remove("dark");
    }
  // translation
// Объект с текущими переводами
var translations = {};

// Загрузка JSON файла с переводами
function loadTranslations() {
  return fetch('jsonfiles/translation.json')
    .then(response => response.json())
    .then(data => {
      translations = data;
    })
    .catch(error => console.error('Error loading translations:', error));
}

// Функция для переключения языка
function toggleLanguage() {
  var currentLanguage = document.documentElement.lang || 'en';
  localStorage.setItem('language','en');
  if (currentLanguage === 'en') {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('langbutton').textContent = 'рус';
    localStorage.setItem('language','ru');
  } else {
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('langbutton').textContent = 'en';
    localStorage.setItem('language','en');
  }
}

// Применение переводов на странице
function applyTranslations(lang) {
  var translation = translations[lang];

  // Изменение текста элементов по их data-translation-key
  var elements = document.querySelectorAll('[id]');
  elements.forEach(function(element) {
    var translationKey = element.getAttribute('id');
    if (translationKey && translation[translationKey]) {
      element.innerHTML = translation[translationKey];
    }
  });
}

// Загрузка переводов при загрузке страницы
loadTranslations().then(() => {
  var userLanguage = navigator.language.substr(0, 2); // Определяем язык пользователя из настроек браузера
  if (localStorage.getItem('language')==='en') {
    applyTranslations('en');
    document.documentElement.lang = 'en';
    document.getElementById('langbutton').textContent = 'en';
    
  } else {
    applyTranslations('ru');
    document.documentElement.lang = 'ru';
    document.getElementById('langbutton').textContent = 'ru';
  }
});
//slider

let arrowleft = document.getElementById("arrow-left");
let arrowright = document.getElementById("arrow-right");
let slider = document.querySelector(".our-works__swiper-wrapper");
slider.classList.add('slide-transition');
let slideWidth = 5;
let i = 0;
let m = 0;

// Функция для получения ширины одного слайда
function getSlideWidth() {
  const slideItem = document.querySelector(".our-works__swiper-slide");
  return slideItem.offsetWidth;
}

// Функция для обновления ширины слайдера при изменении размера окна
function updateSliderWidth() {
  const slideWidth = getSlideWidth();
  slider.style.transform = `translateX(-${i * slideWidth}px)`;
}

// Обновляем ширину слайдера при загрузке страницы

updateSliderWidth();

// Обновляем ширину слайдера при изменении размера окна
window.addEventListener("resize", updateSliderWidth);

arrowright.addEventListener('click', function () {
  if (i < slideWidth - 1) {
    i++;
  } else {
    i = 0;
  }
  updateSliderWidth();
});

arrowleft.addEventListener('click', function () {
  if (i > 0) {
    i--;
  } else {
    i = slideWidth - 1;
  }
  updateSliderWidth();
});
//pagination
const pagination_cont = document.querySelector('.certificates__swiper-wrapper');
const pagination = pagination_cont.querySelector('.certificates__slide-img-wrapper');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const currentSlide = document.getElementById('current-slide');
const totalSlides = document.getElementById('total-slide');


let slidesData; 
let currentIndex1 = 0;

fetch('jsonfiles/slides.json')
  .then(response => response.json())
  .then(data => {
    slidesData = data.slides;
    totalSlides.textContent = slidesData.length;

    prevButton.addEventListener('click', () => {
      changeSlide(currentIndex1 - 1);
    });

    nextButton.addEventListener('click', () => {
      changeSlide(currentIndex1 + 1);
    });

    function changeSlide(index) {
      if (index < 0) {
        index = slidesData.length - 1;
      } else if (index >= slidesData.length) {
        index = 0; 
      }

      currentIndex1 = index;
      showSlide(currentIndex1);
      updatePagination();
    }

    function showSlide(index) { 
        const slide = slidesData[index];
        pagination.innerHTML = `
        <img src="${slide.imgpath}" alt="сертификат" class="certificates__slide-img">
        `;
    }

    function updatePagination() {
      currentSlide.textContent = currentIndex1 + 1;
    }
    showSlide(currentIndex1);
    updatePagination();
  });
  //logs
    //modale window
    var transparent=document.getElementById("transparent");
var Main_1_button=document.getElementById("header__button button");
Main_1_button.addEventListener("click", function() {
  transparent.classList.add("open");
  Accountmenu.classList.add("open");
});

var closebutton=document.getElementById("close")
closebutton.addEventListener("click", function() {
  transparent.classList.remove("open");
  Accountmenu.classList.remove("open");
});
var usernameDisplay = document.getElementById("account");
const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
var butText=document.getElementById('header__button button');
var butText1=document.getElementById('header__button1 button');
var woman_img=document.getElementById('intro__img-bg');
var sticker_div_1=document.getElementById('intro__sticker');
var calculator=document.getElementById('calculator');
var leave_request=document.getElementById('leave-request');
var our_inventory=document.getElementById('our-inventory');
var show_users=document.getElementById('show_users');
var fourth_cleaning_free=document.getElementById('fourth-cleaning-free');
var gifts__container=document.getElementById('gifts__container');
var intro__buttons=document.getElementById('intro__buttons');
var questions_but=document.getElementById("questions");
var privacy_li=document.getElementById("privacy_li");
var extra_services__container =document.getElementById('extra-services__container');
var order_cleaning__container=document.getElementById('order-cleaning__wrapper');
var instant_calculation__container=document.getElementById('instant-calculation__container');
var aboutUs=document.getElementById('aboutUs');
document.addEventListener("DOMContentLoaded", function(){
  if(loggedInUser){
    usernameDisplay.textContent = loggedInUser.nickname;
    butText.classList.add("log");
    butText1.classList.add("log");
  }
  if(loggedInUser&&loggedInUser.role==="admin"){
    woman_img.classList.add('admin');
    sticker_div_1.classList.add('admin');
    calculator.classList.add('admin');
    leave_request.classList.add('admin');
    instant_calculation__container.classList.add('admin');
    our_inventory.classList.add('admin');
    order_cleaning__container.classList.add('admin');
    show_users.classList.add('admin');
  }
  else{
    woman_img.classList.remove('admin');
    sticker_div_1.classList.remove('admin');
    calculator.classList.remove('admin');
    leave_request.classList.remove('admin');
    instant_calculation__container.classList.remove('admin');
    our_inventory.classList.remove('admin');
    order_cleaning__container.classList.remove('admin');
    show_users.classList.remove('admin');
  }
  if(!loggedInUser){
    extra_services__container.classList.add('nolog');
    fourth_cleaning_free.classList.add('nolog');
    gifts__container.classList.add('nolog');
    intro__buttons.classList.add('nolog');
    questions_but.innerHTML=`
       <a href="regauto.html" class="footer__link" id="requisites">
          Вопросы
        </a>
        `;
    privacy_li.innerHTML=`
       <a href="regauto.html" class="footer__link" id="privacy">
          Политика конфиденциальности
        </a>
        `;
  }
  else{
    extra_services__container.classList.remove('nolog');
    fourth_cleaning_free.classList.remove('nolog');
    gifts__container.classList.remove('nolog');
    intro__buttons.classList.remove('nolog');
  }
  if(loggedInUser&&loggedInUser.role==='user'){
    aboutUs.classList.add('loggedUser')
  }else{
    aboutUs.classList.remove('loggedUser');
  }
});
butText1.addEventListener("click", function() {
  usernameDisplay.textContent = "";
  sessionStorage.removeItem("loggedInUser");
  sessionStorage.removeItem("Acc_Name");
  butText.classList.remove("log");
    butText1.classList.remove("log");
    woman_img.classList.remove('admin');
    sticker_div_1.classList.remove('admin');
    calculator.classList.remove('admin');
    leave_request.classList.remove('admin');
    instant_calculation__container.classList.remove('admin');
    our_inventory.classList.remove('admin');
    order_cleaning__container.classList.remove('admin');
    show_users.classList.remove('admin');
    extra_services__container.classList.add('nolog');
    fourth_cleaning_free.classList.add('nolog');
    gifts__container.classList.add('nolog');
    intro__buttons.classList.add('nolog');
    questions_but.innerHTML=`
       <a href="regauto.html" class="footer__link" id="requisites">
          Вопросы
        </a>
        `;
    privacy_li.innerHTML=`
       <a href="regauto.html" class="footer__link" id="privacy">
          Политика конфиденциальности
        </a>
        `;
        aboutUs.classList.remove('loggedUser');
});
var resetbut=document.getElementById('reset');
resetbut.addEventListener("click",function(){
  localStorage.removeItem("body-theme");
  localStorage.removeItem("language");
  location. reload() 
});

