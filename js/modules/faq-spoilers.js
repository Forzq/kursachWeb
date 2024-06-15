// Блок сайта "Часто задаваемые вопросы". Делаем плавные спойлеры: при клике по вопросу плавно будет появляться/исчезать ответ) и вращаться кружок со стрелочкой

function faq() {
  const faqItemAll = document.querySelectorAll(".faq__item");
  const faqAnswerAll = document.querySelectorAll(".faq__answer");

  // Вычисляем высоты блоков с ответами и записываем эти высоты в дата-атрибуты. Скрываем блоки с ответами, добавив класс _hidden. Блоки с ответами при загрузке сайта будут скрыты

  function setDataHeight() {
    faqAnswerAll.forEach((item) => {
      item.dataset.height = item.offsetHeight + "px";
      item.classList.add("_hidden");
    });
  }

  setDataHeight();

  // При клике по вопросам открываем и закрываем ответы, ставя и убирая класс _hidden, который при загрузке сайта стоит на всех блоках с ответами. Класс _hidden скрывает ответы, делая их высоты равными 0. Если класс _hidden убирается, то элементу делается высота, равная значению из data-height с помощью атрибута style.

  function showHideAnswer() {
    faqItemAll.forEach((item) => {
      item.addEventListener("click", showAnswer);
      function showAnswer() {
        const faqAnswer = this.querySelector(".faq__answer");
        faqAnswer.classList.toggle("_hidden");
        if (!faqAnswer.classList.contains("_hidden")) {
          faqAnswer.style.height = faqAnswer.dataset.height;
        } else {
          faqAnswer.removeAttribute("style");
        }
      }
    });
  }

  showHideAnswer();

  // При ресайзе окна браузера высоты блоков с ответами будут пересчитываться

  window.addEventListener("resize", () => {
    faqAnswerAll.forEach((item) => {
      item.classList.remove("_hidden");
      item.removeAttribute("style");
    });
    setDataHeight();
    faqAnswerAll.forEach((item) => {
      item.classList.add("_hidden");
    });
  });
}

export default faq;
