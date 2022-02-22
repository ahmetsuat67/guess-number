let guessBox = document.getElementById("guessbox");
let check = document.getElementById("check");
let again = document.getElementById("again")
let note = document.getElementById("note")
let alarm = document.getElementById("alarm")
let num = document.getElementById("guessnumber")
let attempt = document.getElementById("attempt")
let changeImg = document.getElementById("img")
let easy = document.getElementById("easy")
let medium = document.getElementById("medium")
let hard = document.getElementById("hard")
let right = document.getElementById("right")

window.addEventListener("load", ()=> { 
    let randomNumber = Math.round(Math.random() * 99 ); //Math.trunc yönteminde sayını küsuratını kesiyor
    let counter = 0;
    console.log(randomNumber);
    again.style.display = "none"
    again.addEventListener("click", ()=>{
        location.reload()
    })


    check.addEventListener("click", ()=>{
        if (guessBox.value >= 100){
            alarm.innerText = "The number you entered must be between 1 and 100 please try again "
            counter++;
            num.value += guessBox.value + ",";
            guessBox.value = "";
            num.value += guessBox.value;
            attempt.value = counter;
        }else if (guessBox.value == randomNumber) { // sayı tahmin alanımıza girilen numara ile tahmin tuttuğunda 
            counter++;
            num.value += guessBox.value;
            attempt.value = counter; //deneme sayımız
            note.innerText = "CONGRATS"
            check.style.display = "none"
            again.style.display = "inline"
            alarm.innerText =""
            changeImg.src= "./assets/congratulations-celebrate.gif"
        } else if (guessBox.value < randomNumber){ // sayı tahmin alanımıza girilen numara  tahmin numarasından küçük olduğunda 
            counter++;
            num.value += guessBox.value + ",";
            guessBox.value = "";
            attempt.value = counter;
            note.innerText ="Enter a higher number" ;
            alarm.innerText =""
        } else if (guessBox.value > randomNumber){ // sayı tahmin alanımıza girilen numara  tahmin numarasından büyük olduğunda 
            counter++;
            num.value += guessBox.value + ",";
            guessBox.value = "";
            attempt.value = counter;
            note.innerText ="Enter  a lower number" ;
            alarm.innerText =""
        }
        if (counter == 10){
                note.innerText= "Game OVER"
                check.style.display = "none"
                again.style.display = "inline"
                alarm.innerText= `The Number is ${randomNumber}`
                changeImg.src= "./assets/robocop-says-game-over.gif" //yakaladığımız img tagını srcsini değiştiriyoruz
                alarm.style.color = "red"
            }
           
      
        // else if(hard.value == "hard"){
        //     if (counter == 3){
        //         note.innerText= "Game OVER"
        //         check.style.display = "none"
        //         again.style.display = "inline"
        //         alarm.innerText= `The Number is ${randomNumber}`
        //         changeImg.src= "./assets/robocop-says-game-over.gif" //yakaladığımız img tagını srcsini değiştiriyoruz
        //         alarm.style.color = "red"
        //         right.innerText = `Your Right to Try : 3`
        //     }
        // }
      

    });

    guessBox.addEventListener("keypress", (e) => { // enter bastığımızda çalışması için
 
        if (e.key == "Enter") {
            check.click();
        }
    });
});

//sonuca göre gif değiştir

