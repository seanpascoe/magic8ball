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
"Very doubtful"]

//return random response//
function getResponse() {
  //randomly generate number 0 to 19//
  var randomNumber = Math.floor(Math.random()*20);
  //get response from array
  var response = magicValues[randomNumber];
  //print response
  printResponse(response);
  //clear input
  clearInput();

};

function printResponse(response) {
  var responseEl = document.getElementById('answer');
  responseEl.innerHTML = response;
};

function clearInput() {
  var inputEl = document.getElementById('question');
  inputEl.value = "";
};
