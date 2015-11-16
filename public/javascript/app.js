var score = 0, index = 0, attempts = 0, qq, ansA, ansB, ansC, ansD, correctA, picks, answer;
var random = [];
var randAnswers = [];

var questions = [
  ["Who created JavaScript?", "Guido van Rossum", "Yukihiro Matsumoto", "Brendan Eich", "Dennis Ritchie", "C"],
  ["Which planet has the highest surface temperature?", "Mercury", "Venus", "Earth", "Jupiter", "B"],
  ["Which one of the following US presidents was assassinated?", "Andrew Jackson", "James Monroe", "James A. Garfield", "Chester A. Arthur", "C"],
  ["Who currently plays guitar for Blink-182?", "Mark Hoppus", "Tom Delonge", "Scott Raynor", "Matt Skiba", "D"],
  ["How many bytes are in a gigabyte?", "1,000,000,000", "1,073,741,824", "1,092,834,824", "1,000,000,000,000", "B"]
];

function randomize() {
  for (var i = 0; i < questions.length; i++) {
    random.splice(Math.floor(Math.random() * 4), 0, questions[i]);
  }
}
randomize();

function run() {
  document.getElementById('intro').innerHTML = "";

  if (index >= questions.length) {
    attempts += 1;
    document.getElementById('quiz').innerHTML = '<h4>You completed the quiz!</h4>'
    + '<p>You correctly answered ' +score+ ' out of ' +questions.length+ ' questions.</p>';
    if ((score/questions.length) == 1) {
      document.getElementById('comment').innerHTML = "Wow! Perfect score, way to go!<br><br>"
      + '<button id="button" onclick="retry()">Retry</button>';
    }
      else if ((score/questions.length) >= .8) {
        document.getElementById('comment').innerHTML = "Not too shabby...<br><br>"
        + '<button id="button" onclick="retry()">Retry</button>';
      }
        else if ((score/questions.length) >= .6) {
          document.getElementById('comment').innerHTML = "You're getting there! Might want to hit the books a tad bit more...<br><br>"
          + '<button id="button" onclick="retry()">Retry</button>';
        }
          else if ((score/questions.length) > 0) {
            document.getElementById('comment').innerHTML = "You're dumb, get better...<br><br>"
            + '<button id="button" onclick="retry()">Retry</button>';
          }
            else {
              document.getElementById('comment').innerHTML = "You didn't get a single question right?! Even a chimpanzee mashing buttons could score higher than you...<br><br>"
              + '<button id="button" onclick="retry()">Retry</button>';
            }
    if (attempts >= 2) {
      document.getElementById('showAnswers').innerHTML = '<button id="button" onclick=showAnswers()>Show Answers</button>'
    }

    if (attempts >= 2 && (score/questions.length) < 1) {
      if (confirm("Would you like to see the answers?") == true) {
        $('#myModal').modal('show');
      }
    }
      return false
  }

  qq = random[index][0];
  ansA = random[index][1];
  ansB = random[index][2];
  ansC = random[index][3];
  ansD = random[index][4];

  document.getElementById('quiz').innerHTML = '<h4>Question #' +(index+1) + ': ' +qq+ '</h4><br>'
    + '<input type="radio" name="picks" value="A">' + '<p>' + ansA + '</p><br>'
    + '<input type="radio" name="picks" value="B">' + '<p>' + ansB + '</p><br>'
    + '<input type="radio" name="picks" value="C">' + '<p>' + ansC + '</p><br>'
    + '<input type="radio" name="picks" value="D">' + '<p>' + ansD + '</p><br>'
    + '<button type="submit" onclick="check()" id="button">Submit Answer</button>'
}


function check() {
  // if (== null)
  picks = document.getElementsByName('picks');
  for (var i = 0; i < picks.length; i++) {
    if (picks[i].checked) {
      answer = picks[i].value;
    }
  }
 if (answer == random[index][5]) {
   score += 1;
  }
  index += 1;
  run ();
}

function retry() {
  score = 0;
  index = 0;
  random = [];
  randomize();
  document.getElementById('comment').innerHTML = "";
  document.getElementById('showAnswers').innerHTML = "";
  run();
}

function showAnswers() {
  $('#myModal').modal('show');
}
