//magic 8 ball array//
var magicValues = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"
];


var easterEggs = [
  {
    question: "Is this an Easter Egg",
    response: "Yes this is an Easter Egg! Muahaha!"
  },
  {
    question: "Is this an Easter Egg1",
    response: "Yes this is an Easter Egg! Muahaha!1"
  },
  {
    question: "Is this an Easter Egg2",
    response: "Yes this is an Easter Egg! Muahaha!2"
  },
  {
    question: "Is this an Easter Egg3",
    response: "Yes this is an Easter Egg! Muahaha!3"
  },
];

//return random response//
function getResponse() {
  //randomly generate number 0 to 19//
  var randomNumber = Math.floor(Math.random()*20);
  //get response from array
  var response = magicValues[randomNumber];
  //print response
  printResponse(response);

  printToLog(getQuestion(), response);

  //clear input
  clearInput();

};

function printResponse(response) {
  //prints the response parameter to the dom
  var responseEl = document.getElementById('answer');
  responseEl.innerHTML = response;
};

function clearInput() {
  //clears the input field
  var inputEl = document.getElementById('question');
  inputEl.value = "";
};


function getQuestion() {
  var inputEl = document.getElementById('question');
  var question = inputEl.value;
  return question;
};

function printToLog(question, response) {
  logEl = document.getElementById('log');
  li = document.createElement('li');
  li.innerHTML = "<small>User asks:</small> " + question + "? <small>8 Ball Says: </small>" + response;

  logEl.appendChild(li);
};



function easterEggCheck() {
  var inputEl = document.getElementById('question');
  var inputQuestion = inputEl.value;
  console.log(inputQuestion);

  for (var i = 0; i < easterEggs.length; i++) {
    var easterQuestion = easterEggs[i].question;
    if (inputQuestion.toLowerCase() === easterQuestion.toLowerCase()) {
      var easterEggResponse = easterEggs[i].response;
      printResponse(easterEggResponse);
      printToLog(inputQuestion, easterEggResponse);
      return true;
    } else {
      return false;
    }
  }
}

function submitHandler() {
  if(!easterEggCheck()) {
    getResponse();
  }
};
