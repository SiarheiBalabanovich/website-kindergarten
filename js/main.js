'use strict'

var myswiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    dynamicBullets: true,
  },
    navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
});



const swiper = new Swiper('.information__slider', {
   slidesPerView: 'auto',
   spaceBetween: 10,
   speed: 1000,
   effect: 'fade',
   loop: true,

   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true,
   },

   navigation: {
     nextEl: '.swiper-button-next-1',
     prevEl: '.swiper-button-prev-1',
   },
   
 });









 document.addEventListener("DOMContentLoaded", function () {
  const burgerCheckbox = document.getElementById("burger");
  const menuItems = document.querySelectorAll(".menu__link");
  const recruitmentButton = document.querySelector(".button__menu");
  const logoImage = document.getElementById("logo");
  let logoChanged = false; // Флаг для отслеживания изменения логотипа

  // Добавляем обработчик для каждого пункта меню
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Закрываем бургер-меню
      burgerCheckbox.checked = false;

      // Если логотип был изменен, возвращаем его к основному
      if (logoChanged) {
        logoImage.src = "images/UI/Homepage/Logo/Menu/logo.svg"; // Путь к основному логотипу
        logoChanged = false;
      }
    });
  });

  // Обработчик для кнопки "Rekrutacja"
  recruitmentButton.addEventListener("click", function () {
    const targetElement = document.getElementById("recrutation");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    // Закрываем бургер-меню
    burgerCheckbox.checked = false;

    // Если логотип был изменен, возвращаем его к основному
    if (logoChanged) {
      logoImage.src = "images/UI/Homepage/Logo/Menu/logo.svg"; // Путь к основному логотипу
      logoChanged = false;
    }
  });

  // Обработчик изменения состояния бургер-меню
  burgerCheckbox.addEventListener("change", function () {
    if (burgerCheckbox.checked) {
      // При активации бургер-меню меняем логотип
      logoImage.src = "images/Logo-2.svg"; // Путь к новому логотипу
      logoChanged = true; // Устанавливаем флаг изменения логотипа
    } else if (!logoChanged) {
      // При деактивации бургер-меню и если логотип не был изменен, возвращаем основной логотип
      logoImage.src = "images/UI/Homepage/Logo/Menu/logo.svg"; // Путь к основному логотипу
    }
  });
});






 const swiperButtonPrev = document.querySelector('.swiper-button-prev-2');
const swiperButtonNext = document.querySelector('.swiper-button-next-2');

// Функция для установки цвета фона кнопки
function setBackgroundColor(button, color) {
  button.style.backgroundColor = color;
}

swiperButtonPrev.addEventListener('mouseover', function() {
  setBackgroundColor(this, '#547E32');
});

swiperButtonPrev.addEventListener('mouseout', function() {
  setBackgroundColor(this, 'rgba(84, 126, 50, 0.5)');
});

swiperButtonPrev.addEventListener('click', function() {
  // Обработчик события click для кнопки "Назад"
  // Вы можете добавить код для выполнения дополнительных действий при клике на кнопку "Назад" здесь
});

swiperButtonNext.addEventListener('mouseover', function() {
  setBackgroundColor(this, '#547E32');
});

swiperButtonNext.addEventListener('mouseout', function() {
  setBackgroundColor(this, 'rgba(84, 126, 50, 0.5)');
});

swiperButtonNext.addEventListener('click', function() {
  // Обработчик события click для кнопки "Вперед"
  // Вы можете добавить код для выполнения дополнительных действий при клике на кнопку "Вперед" здесь
});






document.addEventListener('DOMContentLoaded', function () {
  // Получите кнопку "Zobacz więcej" по ее селектору или ID
  const seeMoreButton = document.getElementById('seeMoreButton');

  // Получите все карточки
  const allTeamCards = document.querySelectorAll('[class^="team-card-"]');

  // Скройте все карточки, кроме первых 3
  allTeamCards.forEach(function (card, index) {
    if (index >= 9) {
      card.style.display = 'none';
    }
  });


  // Добавьте обработчик события на кнопку "Zobacz więcej"
  seeMoreButton.addEventListener('click', function () {
    // Покажите остальные карточки
    allTeamCards.forEach(function (card, index) {
      if (index >= 3) {
        card.style.display = 'block';
      }
    });

    // Скрыть кнопку "Zobacz więcej" после показа всех карточек
    seeMoreButton.style.display = 'none';
  });
});



















// Для больших экранов
function toggleItem(index) {
  const contentContainers = document.querySelectorAll('.content__offers');
  const items = document.querySelectorAll('.item');
  const arrows = document.querySelectorAll('.arrow');
  const mainImage = document.getElementById('mainImage');

  for (let i = 0; i < contentContainers.length; i++) {
    const content = contentContainers[i];
    const item = items[i];
    const arrow = arrows[i];

    if ((i + 1) === index) {
      const isOpen = content.classList.contains('active');
      if (isOpen) {
        content.style.maxHeight = '0';
        content.classList.remove('active');
        item.classList.remove('active');
        arrow.classList.remove('active');
        arrow.classList.remove('collapsed');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('active');
        item.classList.add('active');
        arrow.classList.add('active');
        arrow.classList.add('collapsed');
      }
    } else {
      content.style.maxHeight = '0';
      content.classList.remove('active');
      item.classList.remove('active');
      arrow.classList.remove('active');
      arrow.classList.remove('collapsed');
    }
  }

  switch (index) {
    case 1:
      mainImage.src = 'images/Offers section/Offers section - photo-1.jpg';
      break;
    case 2:
      mainImage.src = 'images/Offers section/Offers section - photo-2.jpg';
      break;
    case 3:
      mainImage.src = 'images/Offers section/Offers section - photo-3.jpg';
      break;
    case 4:
      mainImage.src = 'images/Offers section/Offers section - photo-4.jpg';
      break;
    case 5:
      mainImage.src = 'images/Offers section/Offers section - photo-5.jpg';
      break;
  }
}













let tab = document.querySelector(".tab-form"); // Для формы на больших экранах
let tabMobile = document.querySelector(".tab-form-mobile"); // Для формы на маленьких экранах

let tabHeaderElements = document.querySelectorAll(".tab-header > div");
let tabBodyElements = document.querySelectorAll(".tab-body > div");
let tabHeaderElementsMobile = document.querySelectorAll(".tab-header-mobile > div");
let tabBodyElementsMobile = document.querySelectorAll(".tab-body-mobile > div");

// Функция для переключения между формами и блоками на больших экранах
function toggleForms(isMobile, isBlock2) {
  if (isMobile) {
    tab.style.display = "none";
    tabMobile.style.display = "block";

    // Если isBlock2 равен true, показываем блок 2, иначе блок 1 в мобильной форме
    if (isBlock2) {
      tabBodyElementsMobile[1].style.display = "block";
      tabBodyElementsMobile[0].style.display = "none";
    } else {
      tabBodyElementsMobile[0].style.display = "block";
      tabBodyElementsMobile[1].style.display = "none";
    }

    // Убираем активный класс у заголовков мобильной формы и добавляем его к текущему заголовку
    tabHeaderElementsMobile[0].classList.remove("active");
    tabHeaderElementsMobile[1].classList.remove("active");
    tabHeaderElementsMobile[isBlock2 ? 1 : 0].classList.add("active");
  } else {
    tab.style.display = "block";
    tabMobile.style.display = "none";
  }
}

// Функция для переключения между блоками на больших экранах
function toggleBlocks(isBlock2) {
  tabBodyElements[1].classList.toggle("active", isBlock2);
  tabBodyElements[0].classList.toggle("active", !isBlock2);

  // Убираем активный класс у заголовков большой формы и добавляем его к текущему заголовку
  tabHeaderElements[0].classList.remove("active");
  tabHeaderElements[1].classList.remove("active");
  tabHeaderElements[isBlock2 ? 1 : 0].classList.add("active");
}

// Функция для переключения между блоками на мобильных экранах
function toggleMobileBlocks(isBlock2) {
  tabBodyElementsMobile[1].classList.toggle("active", isBlock2);
  tabBodyElementsMobile[0].classList.toggle("active", !isBlock2);
}

// Вызов функций с учетом текущего экрана и начального состояния
toggleForms(window.innerWidth <= 768, true); // Пороговое значение может быть другим
toggleBlocks(true); // Показать блок 2 в большой форме по умолчанию
toggleMobileBlocks(true); // Показать блок 2 в мобильной форме по умолчанию

// Добавьте слушатель события изменения размера окна браузера для большой формы
window.addEventListener("resize", function () {
  toggleForms(window.innerWidth <= 768, true); // Пороговое значение может быть другим
  toggleBlocks(true); // Показать блок 2 в большой форме после изменения размера экрана
});

// Добавьте слушатель события изменения размера окна браузера для мобильной формы
window.addEventListener("resize", function () {
  toggleForms(window.innerWidth <= 768, true); // Пороговое значение может быть другим
  toggleMobileBlocks(true); // Показать блок 2 в мобильной форме после изменения размера экрана
});

// Добавьте слушатель события клика на кнопки переключения для мобильной формы и ее блоков
tabHeaderElementsMobile[0].addEventListener("click", function () {
  toggleForms(true, false); // Переключить на мобильную форму и показать блок 1
  toggleMobileBlocks(false); // Показать блок 1 в мобильной
});

tabHeaderElementsMobile[1].addEventListener("click", function () {
  toggleForms(true, true); // Переключить на мобильную форму и показать блок 2
  toggleMobileBlocks(true); // Показать блок 2 в мобильной форме
});

// Добавьте слушатель события клика на кнопки переключения для большой формы
tabHeaderElements[0].addEventListener("click", function () {
  toggleBlocks(false); // Показать блок 1 в большой форме
});

tabHeaderElements[1].addEventListener("click", function () {
  toggleBlocks(true); // Показать блок 2 в большой форме
});

// Для кнопки на больших экранах
document.getElementById('largeScreenButton').addEventListener('click', function() {
  const targetElement = document.getElementById('recrutationLarge'); // Замените на id элемента на больших экранах
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('secondSectionButton').addEventListener('click', function() {
  const targetElement = document.getElementById('secondSection'); // Используем id второй секции
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});
document.getElementById('thirdSectionButton').addEventListener('click', function() {
  const targetElement = document.getElementById('thirdSection'); // Используем id второй секции
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

// Для кнопки на маленьких экранах
document.querySelector('.button__menu[onclick="window.location.href=\'#recrutationSmall\'"]').addEventListener('click', function() {
  const targetElement = document.getElementById('recrutationSmall'); // Используйте существующий id элемента на маленьких экранах
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

flatpickr(".datepicker", {
  dateFormat: "Y-m-d",
  locale: "pl",
});

document.getElementById("file-upload-field").addEventListener("change", function () {
  var fileName = this.value.split("\\").pop();
  var button = document.getElementById("file-upload-button");
  button.textContent = fileName ? fileName : "Wybierz plik";
});













const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}


// Функция для прокрутки страницы вверх
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Добавляем обработчик клика для больших экранов
const scrollToTopButtonLG = document.getElementById("scroll-to-top-lg");
if (scrollToTopButtonLG) { // Проверяем, существует ли кнопка для больших экранов
  scrollToTopButtonLG.addEventListener("click", scrollToTop);
}

// Добавляем обработчик клика для маленьких экранов
const scrollToTopButtonSM = document.getElementById("scroll-to-top-sm");
if (scrollToTopButtonSM) { // Проверяем, существует ли кнопка для маленьких экранов
  scrollToTopButtonSM.addEventListener("click", scrollToTop);
}







jQuery(document).ready(function () {

  $(".phone").mask("+48 (99) 999-99-99"); 

jQuery('.send-form').click( function() {
  var form = jQuery(this).closest('form');
  
  if ( form.valid() ) {
    form.css('opacity','.5');
    var actUrl = form.attr('action');

    jQuery.ajax({
      url: actUrl,
      type: 'post',
      dataType: 'html',
      data: form.serialize(),
      success: function(data) {
        form.html(data);
        form.css('opacity','1');
                 //form.find('.status').html('Dziękujemy, formularz został wysłany!');
                 //$('#myModal').modal('show') // для бутстрапа
      },
      error:	 function() {
            form.find('.status').html('Błąd serwera');
      }
    });
  }
});
});













