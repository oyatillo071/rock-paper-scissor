let counter = 0;

function innerCounter() {
  document.getElementById("counter").innerHTML = counter;
}
innerCounter();

let gameLevel = 3;

document
  .getElementById("refresh--count")
  .addEventListener("click", function () {
    counter = 0;
    innerCounter();
  });

//

//

let advanceButtons = [
  document.getElementById("spock"),
  document.getElementById("lizard"),
  document.getElementById("adv--text"),
  document.getElementById("adv--text2"),
  document.getElementById("triangle-img"),
  document.getElementById("polygon--img"),
  document.getElementById("rules--img"),
  document.getElementById("advance--rules"),
];

let botAnsButton = [
  document.getElementById("bot--spock"),
  document.getElementById("bot--lizard"),
  document.getElementById("bot--paper"),
  document.getElementById("bot--rock"),
  document.getElementById("bot--scissor"),
];

["paper", "scissor", "rock", "spock", "lizard"].forEach(function (choice) {
  document.getElementById(choice).addEventListener("click", function () {
    clickBtn(choice);
  });
});

function changeStyleDisplay(element) {
  element.style.display = element.style.display === "none" ? "block" : "none";
}

document
  .getElementById("advance--chang")
  .addEventListener("click", function () {
    gameLevel = gameLevel == 3 ? 5 : 3;

    advanceButtons.forEach(function (value) {
      changeStyleDisplay(value);
    });
  });
//
//

function randBot() {
  let variantsForChoice = ["paper", "scissor", "rock", "spock", "lizard"];

  let randNum = Math.trunc(Math.random() * gameLevel);

  return variantsForChoice[randNum];
}

function innerRes(ansVal) {
  document.getElementById("result").innerHTML = ansVal;
  let ansWrapper = document.getElementById("res");
  ansWrapper.classList.add("d-flex");
}

function hideElements(userChoiceId) {
  let elements = document.querySelectorAll(".btn--wrapper span");
  elements.forEach((element) => {
    if (element.id != userChoiceId) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
      element.classList.add("user--pos");
    }
  });

  document.getElementById("res").classList.replace("hidden", "vis--btn");
}

function botAnsHid() {
  botAnsButton.forEach(function (value) {
    value.classList.replace("vis--btn", "hidden");
    value.style.display = "none";
  });
}

function showElementOnRestart(userChoiceId, botChoose) {
  userChoiceId.classList.remove("user--pos");

  let elements = document.querySelectorAll(".choose--btn--wrapper span");

  elements.forEach(function (spanElement) {
    spanElement.style.display = "block";
  });

  if (gameLevel == 3) {
    advanceButtons.forEach(function (value) {
      value.style.display = "none";
    });

    document.getElementById("triangle-img").style.display = "block";
    document.getElementById("rules--img").style.display = "block";
  }

  let botElements = document.querySelectorAll(".bot--btn--wrapper span");

  botElements.forEach(function (spanElement) {
    spanElement.style.display = "none";
  });
}

function botAnsShow(botChoose) {
  let botChooseElement = document.getElementById(`bot--${botChoose}`);
  botChooseElement.classList.replace("hidden", "vis--btn");
  botChooseElement.style.display = "block";
}

let clickBtn = (playerChoice) => {
  let botChoose = randBot();

  let result;

  if (
    (playerChoice === "paper" &&
      (botChoose === "rock" || botChoose === "spock")) ||
    (playerChoice === "scissor" &&
      (botChoose === "paper" || botChoose === "lizard")) ||
    (playerChoice === "rock" &&
      (botChoose === "scissor" || botChoose === "lizard")) ||
    (playerChoice === "spock" &&
      (botChoose === "rock" || botChoose === "scissor")) ||
    (playerChoice === "lizard" &&
      (botChoose === "paper" || botChoose === "spock"))
  ) {
    counter++;
    result = "You win!";
  } else if (
    (playerChoice === "paper" &&
      (botChoose === "scissor" || botChoose === "lizard")) ||
    (playerChoice === "scissor" &&
      (botChoose === "rock" || botChoose === "spock")) ||
    (playerChoice === "rock" &&
      (botChoose === "paper" || botChoose === "spock")) ||
    (playerChoice === "spock" &&
      (botChoose === "paper" || botChoose === "lizard")) ||
    (playerChoice === "lizard" &&
      (botChoose === "scissor" || botChoose === "rock"))
  ) {
    result = "You lose!";
  } else {
    result = "You tied";
  }

  innerRes(result);
  hideElements(playerChoice);
  innerCounter();
  botAnsShow(botChoose);

  document.getElementById("restart").onclick = function () {
    document.getElementById("res").classList.replace("d-flex", "hidden");

    showElementOnRestart(document.getElementById(playerChoice, botChoose));

    botAnsHid();
  };
};

document.getElementById("rules--btn").addEventListener("click", function () {
  changeStyleDisplay(document.getElementsByClassName("rules")[0]);
});

document.getElementById("rules--close").addEventListener("click", function () {
  changeStyleDisplay(document.getElementsByClassName("rules")[0]);
});
