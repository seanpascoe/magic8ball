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
    question: "add_answer",
    response: "No Dude!"
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

// prints the response parameter to the dom
function printResponse(response) {
  var responseEl = document.getElementById('answer');
  responseEl.innerHTML = response;
};

// clears the input field
function clearInput() {
  var inputEl = document.getElementById('question');
  inputEl.value = "";
};

function clearLog() {
  logEl = document.getElementById('log');
  logEl.innerHTML = "";
}

function clearResponse() {
  var responseEl = document.getElementById('answer');
  responseEl.innerHTML = "";
}

// retrieve and return the input question from DOM input
function getQuestion() {
  var inputEl = document.getElementById('question');
  var question = inputEl.value;
  return question;
};

// print both question and response to the log DOM element
function printToLog(question, response) {
  logEl = document.getElementById('log');
  li = document.createElement('li');
  li.className = "valign-wrapper";
  li.innerHTML = "<i class='material-icons'>send</i><small>&nbsp;&nbsp;User asks:&nbsp;</small> " + question + "?&nbsp;&nbsp;<small>8 Ball Says:&nbsp</small>" + response;

  logEl.appendChild(li);
};

// check to see whether input is easter egg, print response and to log and return true
// if it is, if not return false
function easterEggCheck() {
  var inputEl = document.getElementById('question');
  var inputQuestion = inputEl.value;
  console.log(inputQuestion);

  if (!inputQuestion) {
    return true;
  }

  if (inputQuestion === "clear_history") {
    clearInput();
    clearLog();
    clearResponse();
    return true;
  }

  for (var i = 0; i < easterEggs.length; i++) {
    var easterQuestion = easterEggs[i].question;
    if (inputQuestion.toLowerCase() === easterQuestion.toLowerCase()) {
      var easterEggResponse = easterEggs[i].response;
      printResponse(easterEggResponse);
      printToLog(inputQuestion, easterEggResponse);
      clearInput();
      return true;
    }
  }
  return false;
}

// top-level function fired when submit button is clicked
// checks for easter egg and triggers normal procedure
function submitHandler() {
  if(!easterEggCheck()) {
    getResponse();
  }
};

function keyFunc(event) {
  if (event.keyCode === 13) {
    submitHandler();
  }
  if (event.keyCode === 27) {
    clearInput();
  }
}


document.addEventListener("keydown", keyFunc);
