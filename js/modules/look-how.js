// Блок look-how. При клике на кнопку делаем ей стиль активной кнопки. С той кнопки, что до этого была активной, убираем стиль активной кнопки. Переключаемся между фотографиями комнат со стикерами.

function switchBetweenRooms() {
  const lookHowButtonAll = Array.from(
    document.querySelectorAll(".look-how__button")
  );
  const lookHowImgRoom = Array.from(
    document.querySelectorAll(".look-how__img-room")
  );

  lookHowButtonAll.forEach((item) => {
    item.addEventListener("click", changeRoom);
  });

  function changeRoom(event) {
    changeButtonsStyle(event);
    changeRoomImg(event);
  }

  function changeButtonsStyle(event) {
    lookHowButtonAll.forEach((item) => {
      item.classList.remove("look-how__button_active");
      event.currentTarget.classList.add("look-how__button_active");
    });
  }

  function changeRoomImg(event) {
    lookHowImgRoom.forEach((item) => {
      item.classList.remove("look-how__img-room_active");
      if (
        lookHowImgRoom.indexOf(item) ==
        lookHowButtonAll.indexOf(event.currentTarget)
      ) {
        item.classList.add("look-how__img-room_active");
      }
    });
  }
}

export default switchBetweenRooms;
