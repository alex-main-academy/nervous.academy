// Устанавливаем целевую дату
const dateFromHTML = document.querySelector(".js-final-date").textContent;
const dateArray = dateFromHTML.split(".");
const yearFromHTML = `20${dateArray[2]}`;
const monthFromHTML = dateArray[1];
const dayFromHTML = dateArray[0];
const trueDateArray = [yearFromHTML, monthFromHTML, dayFromHTML];
const trueFullDate = trueDateArray.join("-");

var targetDate = new Date(trueFullDate);

// Функция для добавления ведущего нуля к числу, если оно меньше 10
function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

// Функция для обновления таймера
function updateTimer() {
  var currentDate = new Date();
  var timeDifference = targetDate.getTime() - currentDate.getTime();

  // Проверяем, достигли ли целевой даты
  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    return;
  }

  // Рассчитываем оставшееся время в днях, часах, минутах и секундах
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  var minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  var seconds = Math.floor((timeDifference / 1000) % 60);

  // Обновляем значения элементов на странице с добавлением ведущего нуля
  document.querySelector(".timer__time").textContent = addLeadingZero(days);
  document.querySelectorAll(".timer__time")[1].textContent =
    addLeadingZero(hours);
  document.querySelectorAll(".timer__time")[2].textContent =
    addLeadingZero(minutes);
  document.querySelectorAll(".timer__time")[3].textContent =
    addLeadingZero(seconds);
}

// Обновляем таймер каждую секунду
var timerInterval = setInterval(updateTimer, 1000);
