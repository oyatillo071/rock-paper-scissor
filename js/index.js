let counter = localStorage.getItem("counter")
  ? parseInt(localStorage.getItem("counter"))
  : 0;

function innerCounter() {
  document.getElementById("counter").innerHTML = counter;
  localStorage.setItem("counter", counter);
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
//
function changeStyleDisplay(element) {
  element.style.display = element.style.display === "none" ? "block" : "none";
}

document
  .getElementById("advance--chang")
  .addEventListener("click", function () {
    gameLevel = gameLevel == 3 ? 5 : 3;

    let changeDisplay = function (element) {
      element.style.display =
        element.style.display === "none" ? "block" : "none";
    };

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

    advanceButtons.forEach(changeDisplay);
  });

//
//

function randBot(variant) {
  let rand = Math.trunc(Math.random() * variant);
  if (variant == 5) {
    switch (rand) {
      case 0:
        return "paper";
      case 1:
        return "scissor";
      case 2:
        return "rock";
      case 3:
        return "spock";
      case 4:
        return "lizard";

      default:
        alert("error");
    }
  } else {
    switch (rand) {
      case 0:
        return "paper";
      case 1:
        return "scissor";
      case 2:
        return "rock";
      default:
        alert("error");
        break;
    }
  }
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

function botAnsShow(botChoose) {
  let botChooseElement = document.getElementById(`bot--${botChoose}`);
  botChooseElement.classList.replace("hidden", "vis--btn");
  botChooseElement.style.display = "block";
}

let clickBtn = (playerChoice) => {
  let botChoose = randBot(gameLevel);

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
};

["paper", "scissor", "rock", "spock", "lizard"].forEach(function (choice) {
  document.getElementById(choice).addEventListener("click", function () {
    clickBtn(choice);
  });
});

document.getElementById("rules--btn").addEventListener("click", function () {
  changeStyleDisplay(document.getElementsByClassName("rules")[0]);
});

document.getElementById("rules--close").addEventListener("click", function () {
  changeStyleDisplay(document.getElementsByClassName("rules")[0]);
});

document.getElementById("restart").addEventListener("click", function () {
  localStorage.setItem("counter", counter);
  localStorage.setItem("gameLevel", gameLevel);
  location.reload();
});
