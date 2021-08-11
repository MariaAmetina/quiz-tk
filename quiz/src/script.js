"use strict";

const quiz = {
  q1: {
    id: 1,
    title: "1. Что вы делаете, когда у вас плохое настроение?",
    answers: [
      "Иду в тренажерный зал или бегаю в парке",
      "Люблю пообщаться с людьми, пофлиртовать",
      "Уборка и наведение порядка вокруг",
      "Пойду побить грушу в зал или разобью кого-нибудь в компьютерной игре",
      "У меня не бывает плохого настроения, я всегда спокоен",
    ],
  },

  q2: {
    id: 2,
    title: "2.	Какой отдых вы предпочитаете?",
    answers: [
      "Активный отдых, горный туризм, игры на свежем воздухе",
      "Горящая путевка в жаркую страну, пляж, коктейли, девушки!",
      "Поеду в санаторий, отдохну и заодно поправлю здоровье",
      "Несколько дней в самом лучшем и самом дорогом спа-отеле, я этого достоин",
      "Люблю ходить по музеям, хотя часто знаю больше, чем экскурсовод",
    ],
  },

  q3: {
    id: 3,
    title: "3.	У вашего лучшего друга день рождения. Что вы ему подарите?",
    answers: [
      "Организую ему поездку на природу, пусть отдохнут всей семьей, а еще там можно найти красочные виды для фотосессии",
      "Подготовлю сюрприз, в котором будут участвовать все его родственники и друзья",
      "Спрошу у него, что ему нужно, и подарю (например, сертификат на уборку в его квартире)",
      "Подарю дорогой статусный подарок, например, часы или предмет интерьера",
      "Билеты в театр или на концерт",
    ],
  },

  q4: {
    id: 4,
    title: "4.	Какое из этих качеств развито у вас больше всего?",
    answers: [
      "Сила воли",
      "Коммуникабельность",
      "Порядочность",
      "Я беспощаден к своим врагам!",
      "Стрессоустойчивость",
    ],
  },

  q5: {
    id: 5,
    title: "5.	Где бы вы хотели жить?",
    answers: [
      "Идеально – жить рядом с работой",
      "Хочу жить в теплой стране и работать удаленно, сидя на берегу океана под пальмой",
      "Мне больше всего подходит жизнь в пригороде, подальше от городской суеты",
      "Хочу жить в центре Москвы в ЖК премиум-класса",
      "В культурной столице России",
    ],
  },
};

const startBtn = document.querySelector(".btn--start");
const starterPage = document.querySelector(".start");
const quizContainer = document.querySelector(".container");
let btnForward, btnForwardNum;

const generateMarkup = function (quizObj) {
  //quiz.q1, например
  const quizMarkup = `
        <div>
            <h1 class="info__section--header">
            Тест: “Какое ты навесное оборудование?”
            </h1>
            <ul class="pagination__container">
                <li class="pagination__element pagination__element--active">1</li>
                <li class="pagination__element">2</li>
                <li class="pagination__element">3</li>
                <li class="pagination__element">4</li>
                <li class="pagination__element">5</li>
            </ul>

            <div class="quiz__section">
                <div class="quiz__section--container">
                    <img
                    src="src/img/question--${quizObj.id}.png"
                    alt="People"
                    class="quiz__section--img"/>

                    <h2 class="quiz__section--question">
                    ${quizObj.title}
                    </h2>

                    <ul class="quiz__section--answers">
                        <li class="quiz__section--answer">
                            <input type="radio" />
                            <span>${quizObj.answers[0]}</span>
                        </li>
                        <li class="quiz__section--answer">
                            <input type="radio" />
                            <span>${quizObj.answers[1]}</span>
                        </li>
                        <li class="quiz__section--answer">
                            <input type="radio" />
                            <span>${quizObj.answers[2]}</span>
                        </li>
                        <li class="quiz__section--answer">
                            <input type="radio" />
                            <span>${quizObj.answers[3]}</span>
                        </li>
                        <li class="quiz__section--answer">
                            <input type="radio" />
                            <span>${quizObj.answers[4]}</span>
                        </li>
                    </ul>

                    <div class="quiz__section--buttons">
                        <a href="#" class="btn btn--forward" data-btn-forward='${
                          quizObj.id + 1
                        }'">Дальше</a>
                        <a href="#" class="btn btn--back" data-btn-back='${
                          quizObj.id - 1
                        }'">Назад</a> 
                    </div>
                </div>
            </div>
        </div>
    `;

  quizContainer.insertAdjacentHTML("afterbegin", quizMarkup);
  btnForward = document.querySelector(".btn--forward");
  btnForwardNum = btnForward.dataset.btnForward;

  btnForward.addEventListener("click", function () {
    generateNextPage(btnForwardNum);
  });
};

startBtn.addEventListener("click", function () {
  starterPage.remove();
  generateMarkup(quiz.q1);
});

const generateNextPage = function (pageNum) {
  generateMarkup(quiz["q" + pageNum]);
};
