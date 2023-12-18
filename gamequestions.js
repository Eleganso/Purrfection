const questions = [
  {
    question: 'Как се нарича професията на дизайнера на мода?',
    optionA: 'Модел',
    optionB: 'Шивач',
    optionC: 'Фотограф',
    optionD: 'Моден дизайнер',
    correctOption: 'optionD',
  },

  {
    question: 'Коя е столицата на България?',
    optionA: 'София',
    optionB: 'Варна',
    optionC: 'Пловдив',
    optionD: 'Бургас',
    correctOption: 'optionA',
  },

  {
    question: "Какво представлява 'бански костюм'?",
    optionA: 'Обувки',
    optionB: 'Плажен костюм',
    optionC: 'Шапка',
    optionD: 'Зимен палтото',
    correctOption: 'optionB',
  },

  {
    question: 'Кой е традиционният български мъжки носител?',
    optionA: 'Килт',
    optionB: 'Чалга',
    optionC: 'Чаршаф',
    optionD: 'Шевица',
    correctOption: 'optionD',
  },

  {
    question: 'Как се казва традиционният български носител за жени?',
    optionA: 'Сука',
    optionB: 'Рокля',
    optionC: 'Пача',
    optionD: 'Бележник',
    correctOption: 'optionA',
  },

  {
    question: 'Кой е известен български моден дизайнер?',
    optionA: 'Иван Атанасов',
    optionB: 'Джон Иванов',
    optionC: 'Ивана Янева',
    optionD: 'Весела Тодорова',
    correctOption: 'optionC',
  },

  {
    question: 'Кой е национален празник на България?',
    optionA: 'Ден на единението',
    optionB: 'Ден на труда',
    optionC: 'Ден на българската азбука',
    optionD: 'Ден на знанието',
    correctOption: 'optionA',
  },

  {
    question:
      'Как се нарича традиционната българска носия от розово на сватба?',
    optionA: 'Сватбена рокля',
    optionB: 'Панделка',
    optionC: 'Цветарник',
    optionD: 'Розов парад',
    correctOption: 'optionB',
  },

  {
    question: 'Кой е символът на мъжественост в българската фолклорна носия?',
    optionA: 'Бродирана риза',
    optionB: 'Шамия',
    optionC: 'Червен колан',
    optionD: 'Черен баскя',
    correctOption: 'optionC',
  },

  {
    question: 'Как се нарича традиционният български белег на мома?',
    optionA: 'Марица',
    optionB: 'Маргарита',
    optionC: 'Мартеница',
    optionD: 'Момина сълза',
    correctOption: 'optionD',
  },

  {
    question: 'Как се нарича професията на дизайнера на мода?',
    optionA: 'Модел',
    optionB: 'Шивач',
    optionC: 'Фотограф',
    optionD: 'Моден дизайнер',
    correctOption: 'optionD',
  },

  {
    question: 'Коя е столицата на България?',
    optionA: 'София',
    optionB: 'Варна',
    optionC: 'Пловдив',
    optionD: 'Бургас',
    correctOption: 'optionA',
  },

  {
    question: "Какво представлява 'бански костюм'?",
    optionA: 'Обувки',
    optionB: 'Плажен костюм',
    optionC: 'Шапка',
    optionD: 'Зимен палтото',
    correctOption: 'optionB',
  },

  {
    question: 'Кой е традиционният български мъжки носител?',
    optionA: 'Килт',
    optionB: 'Чалга',
    optionC: 'Чаршаф',
    optionD: 'Шевица',
    correctOption: 'optionD',
  },

  {
    question: 'Как се казва традиционният български носител за жени?',
    optionA: 'Сука',
    optionB: 'Рокля',
    optionC: 'Пача',
    optionD: 'Бележник',
    correctOption: 'optionA',
  },

  {
    question: 'Кой е известен български моден дизайнер?',
    optionA: 'Иван Атанасов',
    optionB: 'Джон Иванов',
    optionC: 'Ивана Янева',
    optionD: 'Весела Тодорова',
    correctOption: 'optionC',
  },

  {
    question: 'Кой е национален празник на България?',
    optionA: 'Ден на единението',
    optionB: 'Ден на труда',
    optionC: 'Ден на българската азбука',
    optionD: 'Ден на знанието',
    correctOption: 'optionA',
  },

  {
    question:
      'Как се нарича традиционната българска носия от розово на солова сватба?',
    optionA: 'Сватбена рокля',
    optionB: 'Панделка',
    optionC: 'Цветарник',
    optionD: 'Розов парад',
    correctOption: 'optionB',
  },

  {
    question: 'Кой е символът на мъжественост в българската фолклорна носия?',
    optionA: 'Бродирана риза',
    optionB: 'Шамия',
    optionC: 'Червен колан',
    optionD: 'Черен баскя',
    correctOption: 'optionC',
  },

  {
    question: 'Как се нарича традиционният български белег на мома?',
    optionA: 'Марица',
    optionB: 'Маргарита',
    optionC: 'Мартеница',
    optionD: 'Момина сълза',
    correctOption: 'optionD',
  },

  {
    question: 'Какво е тъмно плетиво, което се носи около шията?',
    optionA: 'Шал',
    optionB: 'Гривна',
    optionC: 'Колие',
    optionD: 'Ръкавици',
    correctOption: 'optionA',
  },

  {
    question:
      'Кое е предпочитано цвете за украса в българските фолклорни носии?',
    optionA: 'Роза',
    optionB: 'Лале',
    optionC: 'Хризантема',
    optionD: 'Лавандула',
    correctOption: 'optionB',
  },

  {
    question: 'Как се нарича дълга, обикновено ефирна рокля, носена на бала?',
    optionA: 'Коктейлна',
    optionB: 'Къса',
    optionC: 'Булчинска',
    optionD: 'Бална',
    correctOption: 'optionD',
  },

  {
    question: 'Кой е българският национален костюм?',
    optionA: 'Шопска',
    optionB: 'Родопска',
    optionC: 'Тракийска',
    optionD: 'Пиринска',
    correctOption: 'optionA',
  },

  {
    question:
      'Как се нарича дрехата, която се носи върху друга, за да я предпази?',
    optionA: 'Риза',
    optionB: 'Палто',
    optionC: 'Пуловер',
    optionD: 'Шал',
    correctOption: 'optionB',
  },

  {
    question: "Какъв вид обувки представлява 'ботуш'?",
    optionA: 'Обувки за балет',
    optionB: 'Боти',
    optionC: 'Ботуши',
    optionD: 'Мокасини',
    correctOption: 'optionC',
  },

  {
    question: 'Коя е най-голямата планина в България?',
    optionA: 'Рила',
    optionB: 'Пирин',
    optionC: 'Стара планина',
    optionD: 'Родопи',
    correctOption: 'optionC',
  },

  {
    question: 'Как се нарича традиционният български гащеризон?',
    optionA: 'Кюлоти',
    optionB: 'Потник',
    optionC: 'Чаршаф',
    optionD: 'Гатанки',
    correctOption: 'optionA',
  },

  {
    question: 'Кой е главният град на модата в света?',
    optionA: 'Париж',
    optionB: 'Милано',
    optionC: 'Лондон',
    optionD: 'Ню Йорк',
    correctOption: 'optionA',
  },

  {
    question: 'Как се нарича дрехата, която се носи защитно от дъжда?',
    optionA: 'Палто',
    optionB: 'Яке',
    optionC: 'Чадър',
    optionD: 'Дъждобран',
    correctOption: 'optionD',
  },
];

let shuffledQuestions = []; //empty array to hold shuffled selected questions

function handleQuestions() {
  //function to shuffle and push 10 questions to shuffledQuestions array
  while (shuffledQuestions.length <= 9) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

// function for displaying next question in the array to dom
function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById('question-number').innerHTML = questionNumber;
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('display-question').innerHTML =
    currentQuestion.question;
  document.getElementById('option-one-label').innerHTML =
    currentQuestion.optionA;
  document.getElementById('option-two-label').innerHTML =
    currentQuestion.optionB;
  document.getElementById('option-three-label').innerHTML =
    currentQuestion.optionC;
  document.getElementById('option-four-label').innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
  const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
  const options = document.getElementsByName('option'); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null;

  options.forEach(option => {
    if (option.value === currentQuestionAnswer) {
      //get's correct's radio input with correct answer
      correctOption = option.labels[0].id;
    }
  });

  //checking to make sure a radio input has been checked or an option being chosen
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById('option-modal').style.display = 'flex';
  }

  //checking if checked radio button is same as answer
  options.forEach(option => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = 'green';
      playerScore++;
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = 'red';
      document.getElementById(correctOption).style.backgroundColor = 'green';
      wrongAttempt++;
      indexNumber++;
      //set to delay question number till when next question loads
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}

//called when the next button is called
function handleNextQuestion() {
  checkForAnswer();
  unCheckRadioButtons();
  //delays next question displaying for a second
  setTimeout(() => {
    if (indexNumber <= 9) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame();
    }
    resetOptionBackground();
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName('option');
  options.forEach(option => {
    document.getElementById(option.labels[0].id).style.backgroundColor = '';
  });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName('option');
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null;
  let remarkColor = null;

  // condition check for player remark and remark color
  if (playerScore <= 3) {
    remark = 'Bad Grades, Keep Practicing.';
    remarkColor = 'red';
  } else if (playerScore >= 4 && playerScore < 7) {
    remark = 'Average Grades, You can do better.';
    remarkColor = 'orange';
  } else if (playerScore >= 7) {
    remark = 'Excellent, Keep the good work going.';
    remarkColor = 'green';
  }
  const playerGrade = (playerScore / 10) * 100;

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark;
  document.getElementById('remarks').style.color = remarkColor;
  document.getElementById('grade-percentage').innerHTML = playerGrade;
  document.getElementById('wrong-answers').innerHTML = wrongAttempt;
  document.getElementById('right-answers').innerHTML = playerScore;
  document.getElementById('score-modal').style.display = 'flex';
}

//closes score modal and resets game
function closeScoreModal() {
  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;
  shuffledQuestions = [];
  NextQuestion(indexNumber);
  document.getElementById('score-modal').style.display = 'none';
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = 'none';
}
