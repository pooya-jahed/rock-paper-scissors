let score = 0;
let highScore = 0;
let number = document.querySelector(".number");
let image = document.querySelector(".img-icon");
let repeat = document.querySelector(".again");
let scoreElement = document.querySelector(".score");
let highScoreElement = document.querySelector(".highscore");

function getUserInput() {
  userInput = document.querySelectorAll(".check");
  userInput.forEach((item) =>
    item.addEventListener("click", function () {
      const random = Math.round(Math.random() * 2);
      // console.log(random);
      const pc = ["سنگ", "قیچی", "کاغذ"];
      let pcChoice = pc[random];
      // console.log(item.innerText);
      number.style = "width:30rem;  transition: 1s ease-in;text-align: right";
      number.textContent = pcChoice;
      if (item.innerText == "سنگ" && pcChoice == "کاغذ") {
        document.querySelector(
          ".message"
        ).textContent = `💥شما سنگ  رو انتخاب کردین 
        💥سیستم کاغذ = شما باختید`;
        document.getElementById("img-icon").src = "/img/paper.jpg";
        document.querySelector(".message").style = "color:red";

        // ______________________
      } else if (item.innerText == "سنگ" && pcChoice == "قیچی") {
        console.log(`<you ${item.innerText}> pc ${pcChoice} you win`);
        document.querySelector(
          ".message"
        ).textContent = `🎉 شما سنگ  رو انتخاب کردین 
        🎉 سیستم قیچی = شما برنده شدین`;
        document.querySelector(".message").style = "color:rgb(97,254,1)";
        document.getElementById("img-icon").src = "/img/secciors.jpg";

        // ______________________
      } else if (item.innerText == "کاغذ" && pcChoice == "سنگ") {
        document.querySelector(
          ".message"
        ).textContent = `🎉 شما کاغذ  رو انتخاب کردین 
        🎉 سیستم سنگ = شما برنده شدین`;
        document.querySelector(".message").style = "color:rgb(97,254,1)";
        document.getElementById("img-icon").src = "/img/rock-pixel.jpg";

        // ______________________
      } else if (item.innerText == "کاغذ" && pcChoice == "قیچی") {
        document.querySelector(
          ".message"
        ).textContent = `💥شما کاغذ رو انتخاب کردین 
        💥سیستم قیچی = شما باختید`;
        document.querySelector(".message").style = "color:red";
        document.getElementById("img-icon").src = "/img/secciors.jpg";

        // ______________________
      } else if (item.innerText == "قیچی" && pcChoice == "سنگ") {
        document.querySelector(
          ".message"
        ).textContent = `💥شما قیچی رو انتخاب کردین 
        💥سیستم سنگ = شما باختید`;
        document.querySelector(".message").style = "color:red";
        document.getElementById("img-icon").src = "/img/rock-pixel.jpg";

        // ______________________
      } else if (item.innerText == "قیچی" && pcChoice == "کاغذ") {
        document.querySelector(
          ".message"
        ).textContent = `🎉 شما قیچی  رو انتخاب کردین 
        🎉 سیستم کاغذ = شما برنده شدین`;
        document.querySelector(".message").style = "color:rgb(97,254,1)";
        document.getElementById("img-icon").src = "/img/paper.jpg";

        // ______________________
      } else if (item.innerText == pcChoice) {
        console.log(`equal both ${pcChoice}`);
        document.querySelector(
          ".message"
        ).textContent = `شما ${item.innerText} رو انتخاب کردین سیستم ${pcChoice} برابر شدین`;
        document.querySelector(".message").style = "color:orange";
        number.style = "color:orange;text-align:center";
        document.getElementById("img-icon").src = "";

        // ______________________
      } else {
        console.log("wrong choice");
        console.log("chose سنگ or کاغذ or قیچی");
      }
    })
  );
}
getUserInput();
repeat.addEventListener("click", function () {
  scoreElement.textContent = "00";
  highScoreElement.textContent = "00";
  number.textContent = "?";
  document.getElementById("img-icon").src = "";
  document.querySelector(".message").style = "color:white";
  document.querySelector(".message").textContent = "سنگ ... کاغذ... قیچی؟";
  number.style = "color:black;text-align:center";
});

//   //   // When player wins
//   // } else if (guess === secretNumber) {
//   //   // document.querySelector('.message').textContent = '🎉 Correct Number!';
//   //   displayMessage('🎉 Correct Number!');
//   //   document.querySelector('.number').textContent = secretNumber;

//   //   document.querySelector('body').style.backgroundColor = '#60b347';
//   //   document.querySelector('.number').style.width = '30rem';

//   //   if (score > highscore) {
//   //     highscore = score;
//   //     document.querySelector('.highscore').textContent = highscore;
//   //   }

//   //   // When guess is wrong
//   // } else if (guess !== secretNumber) {

//   //   if (score > 1) {
//   //     // document.querySelector('.message').textContent =
//   //     // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//   //     displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     // document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     displayMessage('💥 You lost the game!');
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // }
//   document.querySelector(".message").textContent = "📈 Too high!";
//   //     document.querySelector('.score').textContent = 0;
// });

// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage("Start guessing...");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";

//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

// /* -------------------------------------------------------------------------- */
// /*       _______________________________________________________________      */
// /* -------------------------------------------------------------------------- */
// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };
// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);
// });

// // When there is no input

// const userChoice = prompt("chose rock_paper_seccior");
// console.log("you chose", choice);
