let counter = 0;
function innerCounter() {
  document.getElementById("counter").innerHTML = counter;
}
innerCounter();

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
  } else if (variant == 3) {
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
  let ansWrapper=document.getElementById('res');

  ansWrapper.classList.add('d-flex');

}

function hideElements(userChoiceId) {
  let elements = document.querySelectorAll(".btn--wrapper span");
  elements.forEach((el) => {
    if (el.id !== userChoiceId) {
      el.classList.add("hidden");
    } else {
      el.classList.add("user--pos");
    }
  });
  document.getElementById("res").classList.replace("hidden", "vis--btn");
}

function botAnsShow(botChoose) {
  let botChooseElement = document.getElementById(`bot--${botChoose}`);
  botChooseElement.classList.replace("hidden", "vis--btn");
}


document.getElementById("paper").addEventListener("click", function () {
  let botChoose = randBot(3);

  if (botChoose === "rock" || botChoose === "spock") {
    counter++;
    innerRes("You win!");
  } else if (botChoose === "scissor" || botChoose === "lizard") {
    innerRes("You lose!");
  } else {
    innerRes("You tied");
  }

  hideElements("paper");
  innerCounter();

  botAnsShow(botChoose);
});

document.getElementById("scissor").addEventListener("click", function () {
  let botChoose = randBot(3);

  if (botChoose == "paper" || botChoose == "lizard") {
    counter++;
    innerRes("You win!");
  } else if (botChoose == "rock" || botChoose == "spock") {
    innerRes("You lose!");
  } else {
    innerRes("You lose!");
  }

  hideElements("scissor");
  innerCounter();

  botAnsShow(botChoose);
});

document.getElementById("rock").addEventListener("click", function () {
  let botChoose = randBot(3);

  if (botChoose == "scissor" || botChoose == "lizard") {
    counter++;
    innerRes("You win!");
  } else if (botChoose == "paper" || botChoose == "spock") {
    innerRes("You lose!");
  } else {
    innerRes("You lose!");
  }

  hideElements("scissor");
  innerCounter();

  botAnsShow(botChoose);
});

document.getElementById("spock").addEventListener("click", function () {
  let botChoose = randBot(5);

  if (botChoose == "rock" || botChoose == "scissor") {
    counter++;
    innerRes("You win!");
  } else if (botChoose == "paper" || botChoose == "lizard") {
    innerRes("You lose!");
  } else {
    innerRes("You lose!");
  }

  hideElements("scissor");
  innerCounter();

  botAnsShow(botChoose);
});

document.getElementById("lizard").addEventListener("click", function () {
  let botChoose = randBot(5);

  if (botChoose == "paper" || botChoose == "spock") {
    counter++;
    innerRes("You win!");
  } else if (botChoose == "scissor" || botChoose == "rock") {
    innerRes("You lose!");
  } else {
    innerRes("You lose!");
  }

  hideElements("scissor");
  innerCounter();

  botAnsShow(botChoose);
});


let btn = document.getElementById("rules--btn");
let el = document.getElementsByClassName("rules")[0];

btn.addEventListener("click", () => {
  el.style.display === "none"
    ? (el.style.display = "block")
    : (el.style.display = "none");
});

let close = document.getElementById("rules--close");
close.addEventListener("click", () => {
  el.style.display === "none"
    ? (el.style.display = "block")
    : (el.style.display = "none");
});

let advanceBtn = document.getElementById("advance--chang");
let adRul = document.getElementsByClassName("advance--rules");
let basRul = document.getElementById("rules--img");

advanceBtn.addEventListener("click", () => {
  adRul.style.display === "none"
    ? (adRul.style.display = "block")
    : (adRul.style.display = "none");
});
