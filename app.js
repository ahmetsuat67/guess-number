let guessBox = document.getElementById("guessbox");
let check = document.getElementById("check");
let again = document.getElementById("again");
let note = document.getElementById("note");
let alarm = document.getElementById("alarm");
let num = document.getElementById("guessnumber");
let attempt = document.getElementById("attempt");
let changeImg = document.getElementById("img");
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let right = document.getElementById("right");

let counter = 0;
let counterValue = 10;
window.addEventListener("load", () => {
  let randomNumber = Math.round(Math.random() * 99); //Math.trunc yönteminde sayını küsuratını kesiyor
  again.style.display = "none";
  again.addEventListener("click", () => {
    location.reload();
  });

  let checkFunc = () => {
    if (guessBox.value != "") {
      if (guessBox.value >= 100) {
        alarm.innerText =
          "The number you entered must be between 1 and 100 please try again ";
        counter++;
        num.value += guessBox.value + ",";
        guessBox.value = "";
        num.value += guessBox.value;
        attempt.value = counter;
      } else if (guessBox.value == randomNumber) {
        // sayı tahmin alanımıza girilen numara ile tahmin tuttuğunda
        counter++;
        num.value += guessBox.value;
        attempt.value = counter; //deneme sayımız
        note.innerText = "CONGRATS";
        check.style.display = "none";
        again.style.display = "inline";
        alarm.innerText = "";
        changeImg.src = "./assets/congratulations-celebrate.gif";
      } else if (guessBox.value < randomNumber) {
        // sayı tahmin alanımıza girilen numara  tahmin numarasından küçük olduğunda
        counter++;
        num.value += guessBox.value + ",";
        guessBox.value = "";
        attempt.value = counter;
        note.innerText = "Enter a higher number";
        alarm.innerText = "";
      } else if (guessBox.value > randomNumber) {
        // sayı tahmin alanımıza girilen numara  tahmin numarasından büyük olduğunda
        counter++;
        num.value += guessBox.value + ",";
        guessBox.value = "";
        attempt.value = counter;
        note.innerText = "Enter  a lower number";
        alarm.innerText = "";
      }
      if (counter == difficultyFunc()) {
        note.innerText = "Game OVER";
        check.style.display = "none";
        again.style.display = "inline";
        alarm.innerText = `The Number is ${randomNumber}`;
        changeImg.src = "./assets/robocop-says-game-over.gif"; //yakaladığımız img tagını srcsini değiştiriyoruz
        alarm.style.color = "red";//sonuca göre gif değiştir
      }
    }
  };

  let difficultyFunc = () => {
    let difficulty = document.getElementsByName("difficulty");
    difficulty.forEach((element) => {
      element.addEventListener("change", () => {
        switch (element.value) {
          case "easy":
            right.innerText = 10;
            counterValue = 10;
            attempt.value="";
            num.value="";
            counter=0;
            break;

          case "medium":
            right.innerText = 6;
            counterValue = 6;
            attempt.value="";
            num.value="";
            counter=0;
            break;

          case "hard":
            right.innerText = 3;
            counterValue = 3;
            attempt.value="";
            num.value="";
            counter=0;
            break;

          default:
            break;
        }
      });
    });

    return counterValue;
  };
  difficultyFunc();
  check.addEventListener("click", () => {
    checkFunc();
  });

  guessBox.addEventListener("keypress", (e) => {
    // enter bastığımızda çalışması için

    if (e.key == "Enter") {
      check.click();
    }
  });
});
