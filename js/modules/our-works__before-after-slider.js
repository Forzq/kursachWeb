function beforeAfterSlider() {
  const sliderBeforeAfterAll = document.querySelectorAll(
    ".slider-before-after"
  );

  const sliderBeforeAfterBeforeAll = document.querySelectorAll(
    ".slider-before-after__before"
  );

  const sliderBeforeAfterBeforeImgAll = document.querySelectorAll(
    ".slider-before-after__before-img"
  );

  let isActive = false;

  document.addEventListener("DOMContentLoaded", setBeforeImageWidth);

  // При уменьшениии ширины слайдера нужно пересчитать ширину картинки before

  window.addEventListener("resize", setBeforeImageWidth);

  function setBeforeImageWidth() {
    let width = sliderBeforeAfterAll[0].offsetWidth;
    sliderBeforeAfterBeforeImgAll.forEach((item) => {
      item.style.width = `${width}px`;
    });
  }

  sliderBeforeAfterAll.forEach((item) => {
    item.addEventListener("mousedown", () => {
      isActive = true;
    });
    item.addEventListener("mouseup", () => {
      isActive = false;
    });
    item.addEventListener("mouseleave", () => {
      isActive = false;
    });
    item.addEventListener("mousemove", (e) => {
      if (!isActive) {
        return;
      }

      let x = e.pageX;

      x -= e.currentTarget.getBoundingClientRect().left;

      let shift = Math.max(0, Math.min(x, sliderBeforeAfterAll[0].offsetWidth));

      const sliderBeforeAfterBefore = e.currentTarget.querySelector(
        ".slider-before-after__before"
      );

      const sliderBeforeAfterChangeLine = e.currentTarget.querySelector(
        ".slider-before-after__change-line"
      );

      sliderBeforeAfterBefore.style.width = `${shift}px`;
      sliderBeforeAfterChangeLine.style.left = `${shift}px`;

      e.stopPropagation();
      e.preventDefault();
      return false;
    });

    // Для мобильных

    item.addEventListener("touchstart", () => {
      isActive = true;
    });

    item.addEventListener("touchend", () => {
      isActive = false;
    });

    item.addEventListener("touchcancel", () => {
      isActive = false;
    });

    item.addEventListener("touchmove", (e) => {
      if (!isActive) {
        return;
      }

      let x = e.changedTouches[0].pageX;

      x -= e.currentTarget.getBoundingClientRect().left;

      let shift = Math.max(0, Math.min(x, sliderBeforeAfterAll[0].offsetWidth));

      const sliderBeforeAfterBefore = e.currentTarget.querySelector(
        ".slider-before-after__before"
      );

      const sliderBeforeAfterChangeLine = e.currentTarget.querySelector(
        ".slider-before-after__change-line"
      );

      sliderBeforeAfterBefore.style.width = `${shift}px`;
      sliderBeforeAfterChangeLine.style.left = `${shift}px`;

      e.stopPropagation();
      return false;
    });
  });
}

export default beforeAfterSlider;
