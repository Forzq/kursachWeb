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
  return fetch('/jsonfiles/translation.json')
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
    document.getElementById('langbutton').textContent = 'ru';
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